!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.SimpleSharedState=e():t.SimpleSharedState=e()}(Function("return this")(),(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}n.r(e);var i=new Number,s=Array.isArray,c=function t(e,n){return s(n)?n:e&&n&&"object"===o(e)?(Object.keys(n).forEach((function(r){s(n[r])?e[r]=n[r]:n[r]!==i?e[r]=t(e[r],n[r]):delete e[r]})),r(s(e)?[]:{},e)):n};function a(t){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function u(){return(u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=Array.isArray,p=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0;if(f(this,t),this.devtool,this.stateTree=u({},n),this.dispatching=!1,this.listeners=new Map,this.snapshots=new Map,this.dispatchListeners=new Set,this.actions={},o&&o.connect&&"function"==typeof o.connect&&(this.devtool=o.connect(),this.devtool.subscribe((function(t){"DISPATCH"===t.type&&"JUMP_TO_STATE"===t.payload.type&&e._applyBranch(JSON.parse(t.state))})),this.devtool.init(this.stateTree)),r&&"function"==typeof r){var i=r(this.getState.bind(this));Object.keys(i).forEach((function(t){var n=e.devtool?"".concat(t,"()"):"unknown";e.actions[t]=function(){for(var r=arguments.length,o=new Array(r),s=0;s<r;s++)o[s]=arguments[s];e.dispatchTyped(n,i[t].apply(null,o))}}))}}var e,n,r;return e=t,(n=[{key:"_applyBranch",value:function(t){var e=this;this.dispatching=!0,c(this.stateTree,t),this.listeners.forEach((function(n,r){var o,s=e.snapshots.get(r),a=function(t){e.snapshots.set(r,t),n(t)};try{switch(o=r(t)){case s:return;case i:return void(void 0!==s&&a(void 0));case void 0:return void(o=r(e.stateTree))}}catch(t){try{return void r(e.stateTree)}catch(t){}}o!==s&&(l(o)&&!o.isPartial?a(o):a(c(s,o)))})),this.dispatchListeners.forEach((function(t){return t()})),this.dispatching=!1}},{key:"watch",value:function(t,e){var n,r=this,o=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];if("function"!=typeof t||"function"!=typeof e)throw new Error("selector and handler must be functions");if(this.listeners.has(t))throw new Error("Cannot reuse selector");try{n=t(this.stateTree),o&&e(n)}catch(t){}return this.listeners.set(t,e),this.snapshots.set(t,n),function(){r.listeners.delete(t),r.snapshots.delete(t)}}},{key:"watchBatch",value:function(t,e){var n=this;if(!t||"function"!=typeof t.forEach)throw new Error("selectors must be a list of functions");if("function"!=typeof e)throw new Error("handler is not a function");var r=[],o=0,i=!1;t.forEach((function(e){if("function"!=typeof e)throw t.forEach((function(t){return n.listeners.delete(t)})),new Error("selector must be a function");var s=o++;try{r[s]=e(n.stateTree)}catch(t){r[s]=void 0}n.watch(e,(function(t){r[s]=t,i=!0}),!1)}));var s=function(){i&&(e(r.slice()),i=!1)};return this.dispatchListeners.add(s),e(r.slice()),function(){n.dispatchListeners.delete(s),t.forEach((function(t){return n.listeners.delete(t)}))}}},{key:"watchDispatch",value:function(t){var e=this;if("function"!=typeof t)throw new Error("handler must be a function");return this.dispatchListeners.add(t),function(){return e.dispatchListeners.delete(t)}}},{key:"getState",value:function(t){if(t&&"function"==typeof t){var e;try{e=(n=t(this.stateTree))&&"object"===a(n)?u(l(n)?[]:{},n):n}catch(t){}return e}var n;return u({},this.stateTree)}},{key:"dispatchTyped",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unknown",e=arguments.length>1?arguments[1]:void 0;if(this.dispatching)throw new Error("can't dispatch while dispatching");if(!e)throw new Error("can't dispatch invalid branch");if("function"==typeof e&&(e=e(this.getState())),"object"!==a(e))throw new Error("dispatch got invalid branch");this._applyBranch(e),this.devtool&&this.devtool.send(t,this.getState())}},{key:"dispatch",value:function(t){this.dispatchTyped("unknown",t)}}])&&h(e.prototype,n),r&&h(e,r),t}();n.d(e,"Store",(function(){return p})),n.d(e,"deleted",(function(){return i}))}])}));