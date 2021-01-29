/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

throw new Error("Module build failed: Error: Cannot find module 'babel-preset-es2015' from '/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app'\n    at Function.resolveSync [as sync] (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/resolve/lib/sync.js:90:15)\n    at resolveStandardizedName (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/files/plugins.js:101:31)\n    at resolvePreset (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/files/plugins.js:58:10)\n    at loadPreset (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/files/plugins.js:77:20)\n    at createDescriptor (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-descriptors.js:154:9)\n    at /Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-descriptors.js:109:50\n    at Array.map (<anonymous>)\n    at createDescriptors (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-descriptors.js:109:29)\n    at createPresetDescriptors (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-descriptors.js:101:10)\n    at /Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-descriptors.js:58:104\n    at cachedFunction (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/caching.js:62:27)\n    at cachedFunction.next (<anonymous>)\n    at evaluateSync (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/gensync/index.js:251:28)\n    at sync (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/gensync/index.js:89:14)\n    at presets (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-descriptors.js:29:84)\n    at mergeChainOpts (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-chain.js:416:26)\n    at /Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-chain.js:374:7\n    at Generator.next (<anonymous>)\n    at buildRootChain (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/config-chain.js:73:36)\n    at buildRootChain.next (<anonymous>)\n    at loadPrivatePartialConfig (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/partial.js:101:62)\n    at loadPrivatePartialConfig.next (<anonymous>)\n    at Function.<anonymous> (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/partial.js:140:25)\n    at Generator.next (<anonymous>)\n    at evaluateSync (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/gensync/index.js:251:28)\n    at Function.sync (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/gensync/index.js:89:14)\n    at Object.<anonymous> (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/@babel/core/lib/config/index.js:43:61)\n    at Object.<anonymous> (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/babel-loader/lib/index.js:151:26)\n    at Generator.next (<anonymous>)\n    at asyncGeneratorStep (/Users/bobby2/Desktop/HarvardOnline/sideprojects/NewReactProjects/diabetestaketwo/diabete-app/node_modules/babel-loader/lib/index.js:3:103)");

/***/ }
/******/ ]);