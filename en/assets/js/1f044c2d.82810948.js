"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7829],{7942:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(959);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,T=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(T,a(a({ref:t},s),{},{components:n})):r.createElement(T,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2390:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7579),o=(n(959),n(7942));const i={sidebar_position:5},a=void 0,p={unversionedId:"HTTP/HTTP\u5b89\u5168",id:"HTTP/HTTP\u5b89\u5168",title:"HTTP\u5b89\u5168",description:"\u5185\u5bb9\u5b89\u5168\u7b56\u7565 ( CSP )",source:"@site/docs/HTTP/HTTP\u5b89\u5168.md",sourceDirName:"HTTP",slug:"/HTTP/HTTP\u5b89\u5168",permalink:"/blog/en/docs/HTTP/HTTP\u5b89\u5168",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTTP/HTTP\u5b89\u5168.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"HTTP\u7684\u8fde\u63a5\u7ba1\u7406",permalink:"/blog/en/docs/HTTP/HTTP\u7684\u8fde\u63a5\u7ba1\u7406"},next:{title:"Promise",permalink:"/blog/en/docs/JavaScript/Promise/"}},l={},c=[{value:"\u5185\u5bb9\u5b89\u5168\u7b56\u7565 ( <code>CSP</code> )",id:"\u5185\u5bb9\u5b89\u5168\u7b56\u7565--csp-",level:2},{value:"HTTP Strict Transport Security",id:"http-strict-transport-security",level:2},{value:"X-Content-Type-Options",id:"x-content-type-options",level:2},{value:"X-Frame-Options",id:"x-frame-options",level:2},{value:"Cookie Security",id:"cookie-security",level:2}],s={toc:c};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5185\u5bb9\u5b89\u5168\u7b56\u7565--csp-"},"\u5185\u5bb9\u5b89\u5168\u7b56\u7565 ( ",(0,o.kt)("inlineCode",{parentName:"h2"},"CSP")," )"),(0,o.kt)("p",null,"\u5185\u5bb9\u5b89\u5168\u7b56\u7565 (CSP) \u662f\u4e00\u4e2a\u989d\u5916\u7684\u5b89\u5168\u5c42\uff0c\u7528\u4e8e\u68c0\u6d4b\u5e76\u524a\u5f31\u67d0\u4e9b\u7279\u5b9a\u7c7b\u578b\u7684\u653b\u51fb\uff0c\u5305\u62ec\u8de8\u7ad9\u811a\u672c (XSS) \u548c\u6570\u636e\u6ce8\u5165\u653b\u51fb\u7b49\u3002\u65e0\u8bba\u662f\u6570\u636e\u76d7\u53d6\u3001\u7f51\u7ad9\u5185\u5bb9\u6c61\u67d3\u8fd8\u662f\u6563\u53d1\u6076\u610f\u8f6f\u4ef6\uff0c\u8fd9\u4e9b\u653b\u51fb\u90fd\u662f\u4e3b\u8981\u7684\u624b\u6bb5\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CSP")," \u7684\u4e3b\u8981\u76ee\u6807\u662f\u51cf\u5c11\u548c\u62a5\u544a ",(0,o.kt)("inlineCode",{parentName:"p"},"XSS")," \u653b\u51fb\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"XSS")," \u653b\u51fb\u5229\u7528\u4e86\u6d4f\u89c8\u5668\u5bf9\u4e8e\u4ece\u670d\u52a1\u5668\u6240\u83b7\u53d6\u7684\u5185\u5bb9\u7684\u4fe1\u4efb\u3002\u6076\u610f\u811a\u672c\u5728\u53d7\u5bb3\u8005\u7684\u6d4f\u89c8\u5668\u4e2d\u5f97\u4ee5\u8fd0\u884c\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u4fe1\u4efb\u5176\u5185\u5bb9\u6765\u6e90\uff0c\u5373\u4f7f\u6709\u7684\u65f6\u5019\u8fd9\u4e9b\u811a\u672c\u5e76\u975e\u6765\u81ea\u4e8e\u5b83\u672c\u8be5\u6765\u7684\u5730\u65b9\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CSP")," \u901a\u8fc7\u6307\u5b9a",(0,o.kt)("strong",{parentName:"p"},"\u6709\u6548\u57df"),"\u2014\u2014\u5373\u6d4f\u89c8\u5668\u8ba4\u53ef\u7684\u53ef\u6267\u884c\u811a\u672c\u7684\u6709\u6548\u6765\u6e90\u2014\u2014\u4f7f\u670d\u52a1\u5668\u7ba1\u7406\u8005\u6709\u80fd\u529b\u51cf\u5c11\u6216\u6d88\u9664 ",(0,o.kt)("inlineCode",{parentName:"p"},"XSS")," \u653b\u51fb\u6240\u4f9d\u8d56\u7684\u8f7d\u4f53\u3002\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"CSP")," \u517c\u5bb9\u7684\u6d4f\u89c8\u5668\u5c06\u4f1a\u4ec5\u6267\u884c\u4ece\u767d\u540d\u5355\u57df\u83b7\u53d6\u5230\u7684\u811a\u672c\u6587\u4ef6\uff0c\u5ffd\u7565\u6240\u6709\u7684\u5176\u4ed6\u811a\u672c (\u5305\u62ec\u5185\u8054\u811a\u672c\u548c HTML \u7684\u4e8b\u4ef6\u5904\u7406\u5c5e\u6027)\u3002"),(0,o.kt)("h2",{id:"http-strict-transport-security"},"HTTP Strict Transport Security"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"HTTP-Strict-Transport-Security"),"\uff08\u901a\u5e38\u7b80\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"HSTS"),"\uff09\u54cd\u5e94\u6807\u5934\u7528\u6765\u901a\u77e5\u6d4f\u89c8\u5668\u5e94\u8be5\u53ea\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS")," \u8bbf\u95ee\u8be5\u7ad9\u70b9\uff0c\u5e76\u4e14\u4ee5\u540e\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP")," \u8bbf\u95ee\u8be5\u7ad9\u70b9\u7684\u6240\u6709\u5c1d\u8bd5\u90fd\u5e94\u81ea\u52a8\u8f6c\u6362\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS"),"\u3002"),(0,o.kt)("h2",{id:"x-content-type-options"},"X-Content-Type-Options"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"X-Content-Type-Options")," HTTP \u6d88\u606f\u5934\u76f8\u5f53\u4e8e\u4e00\u4e2a\u63d0\u793a\u6807\u5fd7\uff0c\u88ab\u670d\u52a1\u5668\u7528\u6765\u63d0\u793a\u5ba2\u6237\u7aef\u4e00\u5b9a\u8981\u9075\u5faa\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," \u9996\u90e8\u4e2d\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"MIME")," \u7c7b\u578b \u7684\u8bbe\u5b9a\uff0c\u800c\u4e0d\u80fd\u5bf9\u5176\u8fdb\u884c\u4fee\u6539\u3002\u8fd9\u5c31\u7981\u7528\u4e86\u5ba2\u6237\u7aef\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"MIME")," \u7c7b\u578b\u55c5\u63a2\u884c\u4e3a\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u4e5f\u5c31\u662f\u610f\u5473\u7740\u7f51\u7ad9\u7ba1\u7406\u5458\u786e\u5b9a\u81ea\u5df1\u7684\u8bbe\u7f6e\u6ca1\u6709\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"x-frame-options"},"X-Frame-Options"),(0,o.kt)("p",null,"X-Frame-Options HTTP \u54cd\u5e94\u5934\u662f\u7528\u6765\u7ed9\u6d4f\u89c8\u5668\u6307\u793a\u5141\u8bb8\u4e00\u4e2a\u9875\u9762\u53ef\u5426\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"<frame>"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"<iframe>"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"<embed>")," \u6216\u8005 ",(0,o.kt)("inlineCode",{parentName:"p"},"<object>")," \u4e2d\u5c55\u73b0\u7684\u6807\u8bb0\u3002\u7ad9\u70b9\u53ef\u4ee5\u901a\u8fc7\u786e\u4fdd\u7f51\u7ad9\u6ca1\u6709\u88ab\u5d4c\u5165\u5230\u522b\u4eba\u7684\u7ad9\u70b9\u91cc\u9762\uff0c\u4ece\u800c\u907f\u514d\u70b9\u51fb\u52ab\u6301 (en-US)\u653b\u51fb\u3002"),(0,o.kt)("h2",{id:"cookie-security"},"Cookie Security"),(0,o.kt)("p",null,"\u89c1 HTTP Cookie\u8fd9\u7ae0\u3002"))}u.isMDXComponent=!0}}]);