_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[5],{0:function(e,t,n){n("GcxT"),e.exports=n("nOHt")},"1TCz":function(e,t,n){"use strict";n.r(t);var o=n("rePB"),r=n("nKUr"),i=n("q1tI"),a=n("9a8T"),c=n.n(a),u=(n("6Cl6"),n("uXJ4"),n("zPlV"),n("YFqc")),s=n.n(u),f=n("Ff2n"),l=n("nOHt");function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e){var t=e.className,n=e.children,o=e.href,i=e.activeRegExp,a=Object(f.a)(e,["className","children","href","activeRegExp"]),c=Object(l.useRouter)(),u="py-2 hover:text-gray-700 ".concat(t," ").concat((null===c||void 0===c?void 0:c.pathname.match(i))?"text-gray-700 border-b-2 border-blue-700 font-bold px-2":"text-gray-500");return Object(r.jsx)("a",p(p({href:o},a),{},{onClick:function(e){e.preventDefault(),c.push(o)},className:u,children:n}))}function m(){Object(l.useRouter)();return Object(r.jsx)("nav",{className:"mb-10 border-t-4 border-blue-700",children:Object(r.jsx)("div",{className:"max-w-5xl mx-auto px-5 md:px-8",children:Object(r.jsxs)("div",{className:"flex justify-between items-center",children:[Object(r.jsx)("div",{className:"py-2 mr-auto -mt-1",children:Object(r.jsx)(s.a,{as:"/",href:"/",children:Object(r.jsxs)("a",{children:[Object(r.jsx)("span",{className:"text-lg font-bold tracking-tight",children:"Abdullah Gira"}),Object(r.jsx)("span",{className:"text-4xl text-blue-700",children:"."})]})})}),Object(r.jsxs)("ul",{className:"flex text-sm",children:[Object(r.jsx)("li",{children:Object(r.jsx)(b,{href:"/",className:"mr-8",activeRegExp:new RegExp("/$"),children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b,{href:"/blog",activeRegExp:new RegExp("blog/*.*","gm"),children:"Blog"})})]})]})})})}function v(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?v(Object(n),!0).forEach((function(t){Object(o.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):v(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.default=function(e){var t=e.Component,n=e.pageProps;return Object(i.useEffect)((function(){c.a.init({duration:700})}),[]),Object(r.jsxs)(i.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(t,y({},n))]})}},"6Cl6":function(e,t,n){},"9a8T":function(e,t,n){e.exports=function(e){function t(o){if(n[o])return n[o].exports;var r=n[o]={exports:{},id:o,loaded:!1};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i=(o(n(1)),n(6)),a=o(i),c=o(n(7)),u=o(n(8)),s=o(n(9)),f=o(n(10)),l=o(n(11)),d=o(n(14)),p=[],b=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(b=!0),b)return p=(0,l.default)(p,m),(0,f.default)(p,m.once),p},y=function(){p=(0,d.default)(),v()},h=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},g=function(e){return!0===e||"mobile"===e&&s.default.mobile()||"phone"===e&&s.default.phone()||"tablet"===e&&s.default.tablet()||"function"==typeof e&&!0===e()},w=function(e){m=r(m,e),p=(0,d.default)();var t=document.all&&!window.atob;return g(m.disable)||t?h():(m.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){v(!0)})):document.addEventListener(m.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,c.default)(v,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,c.default)(v,m.debounceDelay,!0)),window.addEventListener("scroll",(0,a.default)((function(){(0,f.default)(p,m.once)}),m.throttleDelay)),m.disableMutationObserver||u.default.ready("[data-aos]",y),p)};e.exports={init:w,refresh:v,refreshHard:y}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=m,o=v;return m=v=void 0,k=t,h=e.apply(o,n)}function i(e){return k=e,g=setTimeout(f,t),E?o(e):h}function a(e){var n=t-(e-w);return _?j(n,y-(e-k)):n}function u(e){var n=e-w;return void 0===w||n>=t||n<0||_&&e-k>=y}function f(){var e=x();return u(e)?l(e):void(g=setTimeout(f,a(e)))}function l(e){return g=void 0,P&&m?o(e):(m=v=void 0,h)}function d(){void 0!==g&&clearTimeout(g),k=0,m=w=v=g=void 0}function p(){return void 0===g?h:l(x())}function b(){var e=x(),n=u(e);if(m=arguments,v=this,w=e,n){if(void 0===g)return i(w);if(_)return g=setTimeout(f,t),o(w)}return void 0===g&&(g=setTimeout(f,t)),h}var m,v,y,h,g,w,k=0,E=!1,_=!1,P=!0;if("function"!=typeof e)throw new TypeError(s);return t=c(t)||0,r(n)&&(E=!!n.leading,y=(_="maxWait"in n)?O(c(n.maxWait)||0,t):y,P="trailing"in n?!!n.trailing:P),b.cancel=d,b.flush=p,b}function o(e,t,o){var i=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return r(o)&&(i="leading"in o?!!o.leading:i,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:i,maxWait:t,trailing:a})}function r(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==l}function c(e){if("number"==typeof e)return e;if(a(e))return f;if(r(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=r(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=b.test(e);return n||m.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,b=/^0b[01]+$/i,m=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,h="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=y||h||Function("return this")(),w=Object.prototype.toString,O=Math.max,j=Math.min,x=function(){return g.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function r(t){var n=m,o=v;return m=v=void 0,k=t,h=e.apply(o,n)}function i(e){return k=e,g=setTimeout(f,t),E?r(e):h}function c(e){var n=t-(e-x);return _?O(n,y-(e-k)):n}function s(e){var n=e-x;return void 0===x||n>=t||n<0||_&&e-k>=y}function f(){var e=j();return s(e)?l(e):void(g=setTimeout(f,c(e)))}function l(e){return g=void 0,P&&m?r(e):(m=v=void 0,h)}function d(){void 0!==g&&clearTimeout(g),k=0,m=x=v=g=void 0}function p(){return void 0===g?h:l(j())}function b(){var e=j(),n=s(e);if(m=arguments,v=this,x=e,n){if(void 0===g)return i(x);if(_)return g=setTimeout(f,t),r(x)}return void 0===g&&(g=setTimeout(f,t)),h}var m,v,y,h,g,x,k=0,E=!1,_=!1,P=!0;if("function"!=typeof e)throw new TypeError(u);return t=a(t)||0,o(n)&&(E=!!n.leading,y=(_="maxWait"in n)?w(a(n.maxWait)||0,t):y,P="trailing"in n?!!n.trailing:P),b.cancel=d,b.flush=p,b}function o(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function i(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&g.call(e)==f}function a(e){if("number"==typeof e)return e;if(i(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=p.test(e);return n||b.test(e)?m(e.slice(2),n?2:8):d.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",s=NaN,f="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,m=parseInt,v="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=v||y||Function("return this")(),g=Object.prototype.toString,w=Math.max,O=Math.min,j=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0;for(t=0;t<e.length;t+=1){if((o=e[t]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function r(){return!!o()}function i(e,t){var n=window.document,r=new(o())(a);c=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(o)))return c()}))}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){};t.default={isSupported:r,ready:i}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,u=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return r(e,[{key:"phone",value:function(){var e=o();return!(!i.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!c.test(e)&&!u.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,r=window.innerHeight;e.forEach((function(e,i){n(e,r+o,t)}))};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(12)),i=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)})),e};t.default=i},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(13)),i=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},Ff2n:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}n.d(t,"a",(function(){return o}))},GcxT:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("1TCz")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var o=n("J4zp"),r=n("284h");t.__esModule=!0,t.default=void 0;var i=r(n("q1tI")),a=n("elyg"),c=n("nOHt"),u=n("vNVm"),s={};function f(e,t,n,o){if((0,a.isLocalURL)(t)){e.prefetch(t,n,o).catch((function(e){0}));var r=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[t+"%"+n+(r?"%"+r:"")]=!0}}var l=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),r=n&&n.pathname||"/",l=i.default.useMemo((function(){var t=(0,a.resolveHref)(r,e.href,!0),n=o(t,2),i=n[0],c=n[1];return{href:i,as:e.as?(0,a.resolveHref)(r,e.as):c||i}}),[r,e.href,e.as]),d=l.href,p=l.as,b=e.children,m=e.replace,v=e.shallow,y=e.scroll,h=e.locale;"string"===typeof b&&(b=i.default.createElement("a",null,b));var g=i.Children.only(b),w=g&&"object"===typeof g&&g.ref,O=(0,u.useIntersection)({rootMargin:"200px"}),j=o(O,2),x=j[0],k=j[1],E=i.default.useCallback((function(e){x(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,x]);(0,i.useEffect)((function(){var e=k&&t&&(0,a.isLocalURL)(d),o="undefined"!==typeof h?h:n&&n.locale,r=s[d+"%"+p+(o?"%"+o:"")];e&&!r&&f(n,d,p,{locale:o})}),[p,d,k,h,t,n]);var _={ref:E,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,o,r,i,c,u){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=o.indexOf("#")<0),t[r?"replace":"push"](n,o,{shallow:i,locale:u}).then((function(e){e&&c&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,m,v,y,h)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),f(n,d,p,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(_.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof h?h:n&&n.locale,n&&n.defaultLocale))),i.default.cloneElement(g,_)};t.default=l},rePB:function(e,t,n){"use strict";function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return o}))},uXJ4:function(e,t,n){},vNVm:function(e,t,n){"use strict";var o=n("J4zp"),r=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,r=(0,i.useRef)(),s=(0,i.useState)(!1),f=o(s,2),l=f[0],d=f[1],p=(0,i.useCallback)((function(e){r.current&&(r.current(),r.current=void 0),n||l||e&&e.tagName&&(r.current=function(e,t,n){var o=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var o=new Map,r=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:r,elements:o}),n}(n),r=o.id,i=o.observer,a=o.elements;return a.set(e,t),i.observe(e),function(){i.unobserve(e),0===a.size&&(i.disconnect(),u.delete(r))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,l]);return(0,i.useEffect)((function(){c||l||(0,a.default)((function(){return d(!0)}))}),[l]),[p,l]};var i=n("q1tI"),a=r(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var u=new Map},zPlV:function(e,t,n){}},[[0,0,1,2]]]);