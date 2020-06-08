## Functions

<dl>
<dt><a href="#init">init(booter, optionalDefaultProps, webDirectRefresh)</a></dt>
<dd><p>boot the application with the initialProps. This allows the use of either a merge
or function call from FM to kick of an application</p>
</dd>
<dt><a href="#fmFetch">fmFetch(script, data, options)</a> ⇒ <code>Promise</code></dt>
<dd><p>Run a script in FileMaker and return a promise for the result</p>
</dd>
<dt><a href="#fmCallScript">fmCallScript(script, data, options)</a></dt>
<dd><p>Run a script in FileMaker</p>
</dd>
<dt><a href="#getAddonUUID">getAddonUUID()</a> ⇒ <code>string</code></dt>
<dd><p>get the AddonUUID</p>
</dd>
<dt><a href="#getConfig">getConfig(key)</a> ⇒ <code>string</code></dt>
<dd></dd>
<dt><a href="#getFMFieldName">getFMFieldName(key)</a> ⇒ <code>string</code></dt>
<dd><p>if the config key is a FM field get just it&#39;s name</p>
</dd>
<dt><a href="#getFMTableName">getFMTableName(key)</a> ⇒ <code>string</code></dt>
<dd><p>if the config key is a FM field get just it&#39;s table</p>
</dd>
</dl>

<a name="init"></a>

## init(booter, optionalDefaultProps, webDirectRefresh)
boot the application with the initialProps. This allows the use of either a merge
or function call from FM to kick of an application

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| booter | <code>function</code> | the function that will render the application. |
| optionalDefaultProps | <code>\*</code> |  |
| webDirectRefresh | <code>boolean</code> |  |

<a name="fmFetch"></a>

## fmFetch(script, data, options) ⇒ <code>Promise</code>
Run a script in FileMaker and return a promise for the result

**Kind**: global function  
**Returns**: <code>Promise</code> - a promise  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| script | <code>string</code> |  | the name of the script to call |
| data | <code>Object</code> |  | the data to pass |
| options | <code>Object</code> |  |  |
| [options.timeOut] | <code>Number</code> | <code>30000</code> | timeout default is 30000 ms |
| [options.eventType] | <code>String</code> | <code></code> | an optional top level key to specific different types of events |

<a name="fmCallScript"></a>

## fmCallScript(script, data, options)
Run a script in FileMaker

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| script | <code>string</code> |  | the name of the script to call |
| data | <code>Object</code> |  | the data to pass |
| options | <code>Object</code> |  |  |
| [options.eventType] | <code>String</code> | <code></code> | an optional top level key to specific different types of events |

<a name="getAddonUUID"></a>

## getAddonUUID() ⇒ <code>string</code>
get the AddonUUID

**Kind**: global function  
<a name="getConfig"></a>

## getConfig(key) ⇒ <code>string</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| key | <code>string</code> | the ket of the Config to get |

<a name="getFMFieldName"></a>

## getFMFieldName(key) ⇒ <code>string</code>
if the config key is a FM field get just it's name

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

<a name="getFMTableName"></a>

## getFMTableName(key) ⇒ <code>string</code>
if the config key is a FM field get just it's table

**Kind**: global function  

| Param | Type |
| --- | --- |
| key | <code>string</code> | 

