import uuidv1 from "uuid/v1";

const CALLBACK = "Fmw_Callback";

/**
 * boot the application with the initialProps. This allows the use of either a merge
 * or function call from FM to kick of an application
 * @param {function} booter the function that will render the application.
 * @param {*} optionalDefaultProps
 */
export function init(booter, optionalDefaultProps = null) {
  //deprecated
  if (window.fmw) {
    window.fmw = {};
  }
  window.fmw = {
    getInitialProps: function() {
      console.info(
        "deprecating fmw.getIniialProps. Export getInitialProps from 'fmw-utils'"
      );

      return window.__initialProps__;
    }
  };

  //
  // if we pass in optional defaults use them
  if (optionalDefaultProps) return booter(optionalDefaultProps);

  //
  // if we have merged in initialProps use them to boot the widget
  if (window.__initialProps__ !== "__PROPS__") {
    try {
      window.__initialProps__ = JSON.parse(window.__initialProps__);
    } catch (error) {}

    // we may need to wait for FileMaker
    let checkFMInterval = setInterval(() => {
      if (window.FileMaker) {
        clearInterval(checkFMInterval);
        booter(window.__initialProps__);
      }
    }, 100);

    // if it never loads then timeour
    setTimeout(() => {
      console.error("app boot failed due to timeout");
      clearInterval(checkFMInterval);
    }, 10000);
  } else {
    //
    //
    // we haven't merged so install loadInitialProps method for FM to use
    window.loadInitialProps = function(props) {
      try {
        props = JSON.parse(props);
      } catch (error) {}
      // boot the widget with those props
      window.__initialProps__ = props;
      booter(props);
    };
  }
}

/**
 * fetch result queue mapper thing
 */
const __FETCH_RESULTS__ = {};
window[CALLBACK] = (results, fetchId) => {
  let x = __FETCH_RESULTS__[fetchId];
  if (x === "started") {
    try {
      results = JSON.parse(results);
    } catch (e) {}
    __FETCH_RESULTS__[fetchId] = results;
  }
};

/**
 *
 * Run a script in FileMaker and return a promise for the result
 *
 * @param {string} script the name of the script to call
 * @param {Object} data the data to pass
 * @param {Object} options
 * @param {Number} [options.timeOut=30000] timeout default is 30000 ms
 * @param {String} [options.eventType=null] an optional top level key to specific different types of events
 * @returns {Promise} a promise
 */
export function fmFetch(script, data = {}, options = { timeOut: 30000 }) {
  const fetchId = uuidv1();
  __FETCH_RESULTS__[fetchId] = "started";

  const { Config, InstanceId } = window.fmw.getInitialProps();
  const param = {
    data,
    meta: { Config, InstanceId, FetchId: fetchId, Callback: CALLBACK }
  };
  if (options.eventType) {
    param.eventType = options.eventType;
  }

  window.FileMaker.PerformScript(script, JSON.stringify(param));

  return new Promise((resolve, reject) => {
    let result = __FETCH_RESULTS__[fetchId];

    let int = setInterval(() => {
      result = __FETCH_RESULTS__[fetchId];
      if (result !== "started") {
        clearInterval(int);
        delete __FETCH_RESULTS__[fetchId];
        resolve(result);
      }
      if (timeOut) {
        clearInterval(int);
        delete __FETCH_RESULTS__[fetchId];
        reject(new Error("timeout"));
      }
    }, 100);

    let timeOut = false;
    setTimeout(() => {
      timeOut = true;
    }, options.timeOut);
  });
}
/**
 *
 * Run a script in FileMaker
 *
 * @param {string} script the name of the script to call
 * @param {Object} data the data to pass
 * @param {Object} options
 * @param {String} [options.eventType=null] an optional top level key to specific different types of events
 */

export function fmCallScript(script, data = {}, options = {}) {
  const { Config, InstanceId } = window.fmw.getInitialProps();
  const param = {
    data,
    meta: { Config, InstanceId }
  };
  if (options.eventType) {
    param.eventType = options.eventType;
  }

  window.FileMaker.PerformScript(script, JSON.stringify(param));
}

export function getInitialProps() {
  return window.__initialProps__;
}
