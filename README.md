# fmw-utils

Some useful fuctions for building FileMaker Web Viewer Widgets

## Usage

You can load it directly from the unpkg cdn

```
//latest version
<script src="https://unpkg.com/fmw-utils" crossorigin></script>
```

or if you are using a bundler like webpack, you can install from npm

`npm install fmw-utils`

and then import

`import {fmFetch} from 'fm-utils`

## Highlights

fmFetch is a fetch replacement for calling a FileMaker script and gettint a promise back in return. This is probably why you are here.

## FileMaker Version Support

FileMaker 19 only
Windows will use IE 11 as the web viewer engine and therefor requiring polly filling fetch. Many app frameworks like create react app have ways to do this. You can try one like this if you don't

https://github.com/taylorhakes/promise-polyfill

## API

[Generated API Docs](/api.md)
