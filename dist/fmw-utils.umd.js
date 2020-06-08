(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('uuid/v1')) :
  typeof define === 'function' && define.amd ? define(['exports', 'uuid/v1'], factory) :
  (global = global || self, factory(global.fmwUtils = {}, global.uuidv1));
}(this, (function (exports, uuidv1) { 'use strict';

  uuidv1 = uuidv1 && Object.prototype.hasOwnProperty.call(uuidv1, 'default') ? uuidv1['default'] : uuidv1;

  var errors = {
    "1": "User canceled action",
    "2": "Memory error",
    "3": "Command is unavailable (for example, wrong operating system or mode)",
    "4": "Command is unknown",
    "5":
      "Command is invalid (for example, a Set Field script step does not have a calculation specified)",
    "6": "File is read-only",
    "7": "Running out of memory",
    "8": "Empty result",
    "9": "Insufficient privileges",
    "10": "Requested data is missing",
    "11": "Name is not valid",
    "12": "Name already exists",
    "13": "File or object is in use",
    "14": "Out of range",
    "15": "Can't divide by zero",
    "16": "Operation failed; request retry (for example, a user query)",
    "17": "Attempt to convert foreign character set to UTF-16 failed",
    "18": "Client must provide account information to proceed",
    "19": "String contains characters other than A-Z, a-z, 0-9 (ASCII)",
    "20": "Command/operation canceled by triggered script",
    "21":
      "Request not supported (for example, when creating a hard link on a file system that does not support hard links)",
    "100": "File is missing",
    "101": "Record is missing",
    "102": "Field is missing",
    "103": "Relationship is missing",
    "104": "Script is missing",
    "105": "Layout is missing",
    "106": "Table is missing",
    "107": "Index is missing",
    "108": "Value list is missing",
    "109": "Privilege set is missing",
    "110": "Related tables are missing",
    "111": "Field repetition is invalid",
    "112": "Window is missing",
    "113": "Function is missing",
    "114": "File reference is missing",
    "115": "Menu set is missing",
    "116": "Layout object is missing",
    "117": "Data source is missing",
    "118": "Theme is missing",
    "130": "Files are damaged or missing and must be reinstalled",
    "131": "Language pack files are missing",
    "200": "Record access is denied",
    "201": "Field cannot be modified",
    "202": "Field access is denied",
    "203": "No records in file to print, or password doesn't allow print access",
    "204": "No access to field(s) in sort order",
    "205":
      "User does not have access privileges to create new records; import will overwrite existing data",
    "206":
      "User does not have password change privileges, or file is not modifiable",
    "207":
      "User does not have privileges to change database schema, or file is not modifiable",
    "208": "Password does not contain enough characters",
    "209": "New password must be different from existing one",
    "210": "User account is inactive",
    "211": "Password has expired",
    "212": "Invalid user account or password",
    "214": "Too many login attempts",
    "215": "Administrator privileges cannot be duplicated",
    "216": "Guest account cannot be duplicated",
    "217":
      "User does not have sufficient privileges to modify administrator account",
    "218": "Password and verify password do not match",
    "219": "Cannot open file; must be licensed user; contact team manager",
    "300": "File is locked or in use",
    "301": "Record is in use by another user",
    "302": "Table is in use by another user",
    "303": "Database schema is in use by another user",
    "304": "Layout is in use by another user",
    "306": "Record modification ID does not match",
    "307":
      "Transaction could not be locked because of a communication error with the host",
    "308": "Theme is locked and in use by another user",
    "400": "Find criteria are empty",
    "401": "No records match the request",
    "402": "Selected field is not a match field for a lookup",
    "404": "Sort order is invalid",
    "405":
      "Number of records specified exceeds number of records that can be omitted",
    "406": "Replace/reserialize criteria are invalid",
    "407": "One or both match fields are missing (invalid relationship)",
    "408": "Specified field has inappropriate data type for this operation",
    "409": "Import order is invalid",
    "410": "Export order is invalid",
    "412": "Wrong version of FileMaker Pro Advanced used to recover file",
    "413": "Specified field has inappropriate field type",
    "414": "Layout cannot display the result",
    "415": "One or more required related records are not available",
    "416": "A primary key is required from the data source table",
    "417": "File is not a supported data source",
    "418": "Internal failure in INSERT operation into a field",
    "500": "Date value does not meet validation entry options",
    "501": "Time value does not meet validation entry options",
    "502": "Number value does not meet validation entry options",
    "503":
      "Value in field is not within the range specified in validation entry options",
    "504":
      "Value in field is not unique, as required in validation entry options",
    "505":
      "Value in field is not an existing value in the file, as required in validation entry options",
    "506":
      "Value in field is not listed in the value list specified in validation entry option",
    "507": "Value in field failed calculation test of validation entry option",
    "508": "Invalid value entered in Find mode",
    "509": "Field requires a valid value",
    "510": "Related value is empty or unavailable",
    "511": "Value in field exceeds maximum field size",
    "512": "Record was already modified by another user",
    "513": "No validation was specified but data cannot fit into the field",
    "600": "Print error has occurred",
    "601": "Combined header and footer exceed one page",
    "602": "Body doesn't fit on a page for current column setup",
    "603": "Print connection lost",
    "700": "File is of the wrong file type for import",
    "706": "EPS file has no preview image",
    "707": "Graphic translator cannot be found",
    "708": "Can't import the file, or need color monitor support to import file",
    "711": "Import translator cannot be found",
    "714": "Password privileges do not allow the operation",
    "715": "Specified Excel worksheet or named range is missing",
    "716":
      "A SQL query using DELETE, INSERT, or UPDATE is not allowed for ODBC import",
    "717":
      "There is not enough XML/XSL information to proceed with the import or export",
    "718": "Error in parsing XML file (from Xerces)",
    "719": "Error in transforming XML using XSL (from Xalan)",
    "720":
      "Error when exporting; intended format does not support repeating fields",
    "721": "Unknown error occurred in the parser or the transformer",
    "722": "Cannot import data into a file that has no fields",
    "723":
      "You do not have permission to add records to or modify records in the target table",
    "724": "You do not have permission to add records to the target table",
    "725": "You do not have permission to modify records in the target table",
    "726":
      "Source file has more records than the target table; not all records were imported",
    "727":
      "Target table has more records than the source file; not all records were updated",
    "729": "Errors occurred during import; records could not be imported",
    "730":
      "Unsupported Excel version; convert file to the current Excel format and try again",
    "731": "File you are importing from contains no data",
    "732": "This file cannot be inserted because it contains other files",
    "733": "A table cannot be imported into itself",
    "734": "This file type cannot be displayed as a picture",
    "735":
      "This file type cannot be displayed as a picture; it will be inserted and displayed as a file",
    "736": "Too much data to export to this format; data will be truncated",
    "738": "The theme you are importing already exists",
    "800": "Unable to create file on disk",
    "801": "Unable to create temporary file on System disk",
    "802": "Unable to open file",
    "803": "File is single-user, or host cannot be found",
    "804": "File cannot be opened as read-only in its current state",
    "805": "File is damaged; use Recover command",
    "806": "File cannot be opened with this version of a FileMaker client",
    "807": "File is not a FileMaker Pro Advanced file or is severely damaged",
    "808": "Cannot open file because access privileges are damaged",
    "809": "Disk/volume is full",
    "810": "Disk/volume is locked",
    "811": "Temporary file cannot be opened as FileMaker Pro Advanced file",
    "812": "Exceeded host's capacity",
    "813": "Record synchronization error on network",
    "814": "File(s) cannot be opened because maximum number is open",
    "815": "Couldn't open lookup file",
    "816": "Unable to convert file",
    "817": "Unable to open file because it does not belong to this solution",
    "819": "Cannot save a local copy of a remote file",
    "820": "File is being closed",
    "821": "Host forced a disconnect",
    "822": "FileMaker Pro Advanced files not found; reinstall missing files",
    "823": "Cannot set file to single-user; guests are connected",
    "824": "File is damaged or not a FileMaker Pro Advanced file",
    "825": "File is not authorized to reference the protected file",
    "826": "File path specified is not a valid file path",
    "827":
      "File was not created because the source contained no data or is a reference",
    "850": "Path is not valid for the operating system",
    "851": "Cannot delete an external file from disk",
    "852": "Cannot write a file to the external storage",
    "853": "One or more containers failed to transfer",
    "870": "Cannot modify file because another user is modifying it",
    "900": "General spelling engine error",
    "901": "Main spelling dictionary not installed",
    "903": "Command cannot be used in a shared file",
    "905": "Command requires a field to be active",
    "906":
      "Current file is not shared; command can be used only if the file is shared",
    "920": "Cannot initialize the spelling engine",
    "921": "User dictionary cannot be loaded for editing",
    "922": "User dictionary cannot be found",
    "923": "User dictionary is read-only",
    "951": "An unexpected error occurred (*)",
    "952": "Invalid FileMaker Data API token (*)",
    "953":
      "Exceeded limit on data the FileMaker Data API and OData can transmit (*)",
    "954": "Unsupported XML grammar (*)",
    "955": "No database name (*)",
    "956": "Maximum number of database or Admin API sessions exceeded (*)",
    "957": "Conflicting commands (*)",
    "958": "Parameter missing (*)",
    "959": "Custom Web Publishing technology is disabled",
    "960": "Parameter is invalid",
    "1200": "Generic calculation error",
    "1201": "Too few parameters in the function",
    "1202": "Too many parameters in the function",
    "1203": "Unexpected end of calculation",
    "1204": 'Number, text constant, field name, or "(" expected',
    "1205": 'Comment is not terminated with "*/"',
    "1206": "Text constant must end with a quotation mark",
    "1207": "Unbalanced parenthesis",
    "1208": 'Operator missing, function not found, or "(" not expected',
    "1209": "Name (such as field name or layout name) is missing",
    "1210": "Plug-in function or script step has already been registered",
    "1211": "List usage is not allowed in this function",
    "1212": "An operator (for example, +, -, *) is expected here",
    "1213": "This variable has already been defined in the Let function",
    "1214":
      "A function parameter contains an expression where a field is required",
    "1215": "This parameter is an invalid Get function parameter",
    "1216": "Only summary fields are allowed as first argument in GetSummary",
    "1217": "Break field is invalid",
    "1218": "Cannot evaluate the number",
    "1219": "A field cannot be used in its own formula",
    "1220": "Field type must be normal or calculated",
    "1221": "Data type must be number, date, time, or timestamp",
    "1222": "Calculation cannot be stored",
    "1223": "Function referred to is not yet implemented",
    "1224": "Function referred to does not exist",
    "1225": "Function referred to is not supported in this context",
    "1300": "The specified name can't be used",
    "1301":
      "A parameter of the imported or pasted function has the same name as a function in the file",
    "1400":
      "ODBC client driver initialization failed; make sure ODBC client drivers are properly installed",
    "1401": "Failed to allocate environment (ODBC)",
    "1402": "Failed to free environment (ODBC)",
    "1403": "Failed to disconnect (ODBC)",
    "1404": "Failed to allocate connection (ODBC)",
    "1405": "Failed to free connection (ODBC)",
    "1406": "Failed check for SQL API (ODBC)",
    "1407": "Failed to allocate statement (ODBC)",
    "1408": "Extended error (ODBC)",
    "1409": "Error (ODBC)",
    "1413": "Failed communication link (ODBC)",
    "1414": "SQL statement is too long",
    "1450": "Action requires PHP privilege extension (*)",
    "1451": "Action requires that current file be remote",
    "1501": "SMTP authentication failed",
    "1502": "Connection refused by SMTP server",
    "1503": "Error with SSL",
    "1504": "SMTP server requires the connection to be encrypted",
    "1505": "Specified authentication is not supported by SMTP server",
    "1506": "Email message(s) could not be sent successfully",
    "1507": "Unable to log in to the SMTP server",
    "1550": "Cannot load the plug-in, or the plug-in is not a valid plug-in",
    "1551":
      "Cannot install the plug-in; cannot delete an existing plug-in or write to the folder or disk",
    "1626": "Protocol is not supported",
    "1627": "Authentication failed",
    "1628": "There was an error with SSL",
    "1629": "Connection timed out; the timeout value is 60 seconds",
    "1630": "URL format is incorrect",
    "1631": "Connection failed",
    "1632": "The certificate has expired",
    "1633": "The certificate is self-signed",
    "1634": "A certificate verification error occurred",
    "1635": "Connection is unencrypted",
    "1700": "Resource doesn't exist (*)",
    "1701": "Host is currently unable to receive requests (*)",
    "1702":
      "Authentication information wasn't provided in the correct format; verify the value of the Authorization header (*)",
    "1703": "Invalid username or password, or JSON Web Token (*)",
    "1704": "Resource doesn't support the specified HTTP verb (*)",
    "1705": "Required HTTP header wasn't specified (*)",
    "1706": "Parameter isn't supported (*)",
    "1707": "Required parameter wasn't specified in the request (*)",
    "1708": "Parameter value is invalid (*)",
    "1709": "Operation is invalid for the resource's current status (*)",
    "1710": "JSON input isn't syntactically valid (*)",
    "1711": "Host's license has expired (*)"
  };

  const fmErrors = errors;

  const CALLBACK = "Fmw_Callback";

  /**
   * Waits for FileMaker Object to load and then boots the application with the initialProps.
   * This allows the use of either a merge or function call from FM to kick of an application
   * @param {function} booter the function that will render the application.
   * @param {*} optionalDefaultProps
   * @param {boolean} webDirectRefresh
   */
  function init(
    booter,
    optionalDefaultProps = null,
    webDirectRefresh = "false"
  ) {
    window.__initialProps__ = "__PROPS__";

    //
    // if we pass in optional defaults use them
    if (optionalDefaultProps) return booter(optionalDefaultProps);

    //
    // if we have merged in initialProps use them to boot the widget
    if (window.__initialProps__ !== "__PROPS__") {
      try {
        window.__initialProps__ = JSON.parse(window.__initialProps__);
      } catch (error) {}
      window.__initialProps__.webDirectRefresh = webDirectRefresh;
      // we may need to wait for FileMaker
      let checkFMInterval = setInterval(() => {
        if (window.FileMaker) {
          clearInterval(checkFMInterval);
          booter(window.__initialProps__);
        }
      }, 100);
    } else {
      //
      //
      // we haven't merged so install loadInitialProps method for FM to use
      window.loadInitialProps = function (props) {
        try {
          props = JSON.parse(props);
        } catch (error) {}
        // boot the widget with those props
        props.webDirectRefresh = webDirectRefresh;
        window.__initialProps__ = props;
        booter(props);
      };
    }
  }

  /**
   * fetch result queue mapper thing
   * @private
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
  function fmFetch(script, data = {}, options = { timeOut: 30000 }) {
    const fetchId = uuidv1();
    __FETCH_RESULTS__[fetchId] = "started";

    const Config = getConfigs();
    const AddonUUID = getAddonUUID();

    const param = {
      Data: data,
      Meta: { Config, AddonUUID, FetchId: fetchId, Callback: CALLBACK }
    };
    if (options.eventType) {
      param.Meta.EventType = options.eventType;
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

  function fmCallScript(script, data = {}, options = {}) {
    const { Config, AddonUUID } = getInitialProps();
    const param = {
      Data: data,
      Meta: { Config, AddonUUID }
    };
    if (options.eventType) {
      param.Meta.EventType = options.eventType;
    }

    window.FileMaker.PerformScript(script, JSON.stringify(param));
  }

  /**
   * returns the entire initial Props object merged into the payload
   * or loaded via function call
   */
  function getInitialProps() {
    return window.__initialProps__;
  }

  /**
   * get the AddonUUID
   * @returns {string}
   */
  function getAddonUUID() {
    const props = getInitialProps();
    return props.AddonUUID;
  }

  /**
   * returns the Config part of the intialProps
   */
  const getConfigs = () => {
    const props = getInitialProps();
    return props.Config;
  };
  /**
   *
   * @param {string} key the ket of the Config to get
   * @returns {string}
   */
  function getConfig(key) {
    const config = getConfigs();
    if (config[key]) return config[key].value;
    throw new Error(`there is no config with the key: ${key}`);
  }

  /**
   * if the config key is a FM field get just it's name
   * @param {string} key
   * @returns {string}
   */
  function getFMFieldName(key) {
    const fieldValue = getConfig(key);
    if (!fieldValue) return null;
    if (!fieldValue.includes("::"))
      throw new Error(`the key "${key}" doesn't appear to refer to a FM Field`);
    const split = fieldValue.split("::");
    return split[1];
  }
  /**
   *
   * if the config key is a FM field get just it's table
   * @param {string} key
   * @returns {string}
   */
  function getFMTableName(key) {
    const fieldValue = getConfig(key);
    if (!fieldValue) return null;
    if (!fieldValue.includes("::"))
      throw new Error(`the key "${key}" doesn't appear to refer to a FM Field`);
    const split = fieldValue.split("::");
    return split[0];
  }

  exports.fmCallScript = fmCallScript;
  exports.fmErrors = fmErrors;
  exports.fmFetch = fmFetch;
  exports.getAddonUUID = getAddonUUID;
  exports.getConfig = getConfig;
  exports.getConfigs = getConfigs;
  exports.getFMFieldName = getFMFieldName;
  exports.getFMTableName = getFMTableName;
  exports.getInitialProps = getInitialProps;
  exports.init = init;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
