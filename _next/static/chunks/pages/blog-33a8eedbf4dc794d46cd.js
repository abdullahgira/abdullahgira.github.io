_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/yi9":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSG",(function(){return d})),n.d(t,"default",(function(){return p}));var r=n("rePB"),c=n("nKUr"),o=n("8Kt/"),a=n.n(o),i=n("YFqc"),s=n.n(i),l=n("p9OW");function u(e){var t=e.title,n=e.date,r=e.slug,o=e.readTime;return Object(c.jsxs)("article",{className:"border-b border-gray-200 pb-5",children:[Object(c.jsx)("h4",{className:"text-2xl font-bold mb-2",children:Object(c.jsx)(s.a,{as:"/blog/".concat(r),href:"/blog/[slug]",children:Object(c.jsx)("a",{className:"hover:underline",children:t})})}),Object(c.jsxs)("div",{className:"flex gap-3 text-xs",children:[Object(c.jsx)("p",{className:"text-gray-500",children:Object(c.jsx)(l.a,{dateString:n})}),Object(c.jsx)("p",{children:"\u2022"}),Object(c.jsxs)("p",{className:"text-blue-700",children:[o," Min Read"]})]})]})}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=!0;function p(e){var t=e.allPosts;return Object(c.jsxs)("main",{className:"max-w-2xl mt-16 mb-10 mx-auto px-5",children:[Object(c.jsxs)(a.a,{children:[Object(c.jsx)("title",{children:"Blog | Abdullah Gira"},"title"),Object(c.jsx)("meta",{content:"All my blog posts live here",name:"description"})]}),Object(c.jsx)("section",{className:"flex flex-col items-center justify-center1",children:Object(c.jsx)("img",{src:"portfolio/me.webp",className:"w-20 bg-blue-700 rounded-full",alt:"my profile picture"})}),Object(c.jsx)("section",{className:"mt-20",children:t.length>0?t.map((function(e){return Object(c.jsx)(u,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e),e.date)})):null})]})}},JUhy:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n("/yi9")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("J4zp"),c=n("284h");t.__esModule=!0,t.default=void 0;var o=c(n("q1tI")),a=n("elyg"),i=n("nOHt"),s=n("vNVm"),l={};function u(e,t,n,r){if((0,a.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var c=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(c?"%"+c:"")]=!0}}var f=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),c=n&&n.pathname||"/",f=o.default.useMemo((function(){var t=(0,a.resolveHref)(c,e.href,!0),n=r(t,2),o=n[0],i=n[1];return{href:o,as:e.as?(0,a.resolveHref)(c,e.as):i||o}}),[c,e.href,e.as]),d=f.href,p=f.as,b=e.children,j=e.replace,h=e.shallow,v=e.scroll,O=e.locale;"string"===typeof b&&(b=o.default.createElement("a",null,b));var m=o.Children.only(b),y=m&&"object"===typeof m&&m.ref,g=(0,s.useIntersection)({rootMargin:"200px"}),x=r(g,2),w=x[0],N=x[1],_=o.default.useCallback((function(e){w(e),y&&("function"===typeof y?y(e):"object"===typeof y&&(y.current=e))}),[y,w]);(0,o.useEffect)((function(){var e=N&&t&&(0,a.isLocalURL)(d),r="undefined"!==typeof O?O:n&&n.locale,c=l[d+"%"+p+(r?"%"+r:"")];e&&!c&&u(n,d,p,{locale:r})}),[p,d,N,O,t,n]);var E={ref:_,onClick:function(e){m.props&&"function"===typeof m.props.onClick&&m.props.onClick(e),e.defaultPrevented||function(e,t,n,r,c,o,i,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=r.indexOf("#")<0),t[c?"replace":"push"](n,r,{shallow:o,locale:s}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,n,d,p,j,h,v,O)},onMouseEnter:function(e){(0,a.isLocalURL)(d)&&(m.props&&"function"===typeof m.props.onMouseEnter&&m.props.onMouseEnter(e),u(n,d,p,{priority:!0}))}};return(e.passHref||"a"===m.type&&!("href"in m.props))&&(E.href=(0,a.addBasePath)((0,a.addLocale)(p,"undefined"!==typeof O?O:n&&n.locale,n&&n.defaultLocale))),o.default.cloneElement(m,E)};t.default=f},rePB:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},vNVm:function(e,t,n){"use strict";var r=n("J4zp"),c=n("TqRt");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,c=(0,o.useRef)(),l=(0,o.useState)(!1),u=r(l,2),f=u[0],d=u[1],p=(0,o.useCallback)((function(e){c.current&&(c.current(),c.current=void 0),n||f||e&&e.tagName&&(c.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,c=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:c,elements:r}),n}(n),c=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){o.unobserve(e),0===a.size&&(o.disconnect(),s.delete(c))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){i||f||(0,a.default)((function(){return d(!0)}))}),[f]),[p,f]};var o=n("q1tI"),a=c(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var s=new Map}},[["JUhy",0,1,2,3]]]);