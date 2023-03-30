"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3824],{7942:(e,t,n)=>{n.d(t,{Zo:()=>T,kt:()=>c});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},T=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,T=o(e,["components","mdxType","originalType","parentName"]),s=d(n),c=a,m=s["".concat(p,".").concat(c)]||s[c]||u[c]||l;return n?r.createElement(m,i(i({ref:t},T),{},{components:n})):r.createElement(m,i({ref:t},T))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},7122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var r=n(7579),a=(n(959),n(7942));const l={sidebar_position:3},i=void 0,o={unversionedId:"HTTP/HTTP\u6d88\u606f",id:"HTTP/HTTP\u6d88\u606f",title:"HTTP\u6d88\u606f",description:"HTTP \u6d88\u606f\u662f\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u4ea4\u6362\u6570\u636e\u7684\u65b9\u5f0f\u3002\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u6d88\u606f\ufe30 \u8bf7\u6c42\uff08requests\uff09-- \u7531\u5ba2\u6237\u7aef\u53d1\u9001\u7528\u6765\u89e6\u53d1\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u52a8\u4f5c\uff1b\u54cd\u5e94\uff08responses\uff09-- \u6765\u81ea\u670d\u52a1\u5668\u7684\u5e94\u7b54\u3002",source:"@site/docs/HTTP/HTTP\u6d88\u606f.md",sourceDirName:"HTTP",slug:"/HTTP/HTTP\u6d88\u606f",permalink:"/blog/docs/HTTP/HTTP\u6d88\u606f",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/HTTP/HTTP\u6d88\u606f.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"HTTP\u7684\u57fa\u672c\u6027\u8d28",permalink:"/blog/docs/HTTP/HTTP\u7684\u57fa\u672c\u6027\u8d28"},next:{title:"HTTP\u7684\u8fde\u63a5\u7ba1\u7406",permalink:"/blog/docs/HTTP/HTTP\u7684\u8fde\u63a5\u7ba1\u7406"}},p={},d=[{value:"\u7c7b\u578b 1-HTTP \u8bf7\u6c42",id:"\u7c7b\u578b-1-http-\u8bf7\u6c42",level:2},{value:"\u8d77\u59cb\u884c",id:"\u8d77\u59cb\u884c",level:3},{value:"Headers",id:"headers",level:3},{value:"Body",id:"body",level:3},{value:"\u7c7b\u578b 2-HTTP \u54cd\u5e94",id:"\u7c7b\u578b-2-http-\u54cd\u5e94",level:2},{value:"\u72b6\u6001\u884c",id:"\u72b6\u6001\u884c",level:3},{value:"Headers",id:"headers-1",level:3},{value:"Body",id:"body-1",level:3},{value:"HTTP/2 \u5e27",id:"http2-\u5e27",level:2}],T={toc:d};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},T,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u6d88\u606f\u662f\u670d\u52a1\u5668\u548c\u5ba2\u6237\u7aef\u4e4b\u95f4\u4ea4\u6362\u6570\u636e\u7684\u65b9\u5f0f\u3002\u6709\u4e24\u79cd\u7c7b\u578b\u7684\u6d88\u606f\ufe30 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u8bf7\u6c42\uff08requests\uff09"),"-- \u7531\u5ba2\u6237\u7aef\u53d1\u9001\u7528\u6765\u89e6\u53d1\u4e00\u4e2a\u670d\u52a1\u5668\u4e0a\u7684\u52a8\u4f5c\uff1b",(0,a.kt)("inlineCode",{parentName:"p"},"\u54cd\u5e94\uff08responses\uff09"),"-- \u6765\u81ea\u670d\u52a1\u5668\u7684\u5e94\u7b54\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u6d88\u606f\u7531\u91c7\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ASCII")," \u7f16\u7801\u7684\u591a\u884c\u6587\u672c\u6784\u6210\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP/1.1")," \u53ca\u65e9\u671f\u7248\u672c\u4e2d\uff0c\u8fd9\u4e9b\u6d88\u606f\u901a\u8fc7\u8fde\u63a5\u516c\u5f00\u5730\u53d1\u9001\u3002\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP/2")," \u4e2d\uff0c\u4e3a\u4e86\u4f18\u5316\u548c\u6027\u80fd\u65b9\u9762\u7684\u6539\u8fdb\uff0c\u66fe\u7ecf\u53ef\u4eba\u5de5\u9605\u8bfb\u7684\u6d88\u606f\u88ab\u5206\u5230\u591a\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP")," \u5e27\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u7c7b\u578b-1-http-\u8bf7\u6c42"},"\u7c7b\u578b 1-HTTP \u8bf7\u6c42"),(0,a.kt)("h3",{id:"\u8d77\u59cb\u884c"},"\u8d77\u59cb\u884c"),(0,a.kt)("p",null,"\u8d77\u59cb\u884c (start-line) \u5305\u542b\u4e09\u4e2a\u5143\u7d20\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP")," \u65b9\u6cd5"),(0,a.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u76ee\u6807 (request target)\uff0c\u901a\u5e38\u662f\u4e00\u4e2a URL\uff0c\u6216\u8005\u662f\u534f\u8bae\u3001\u7aef\u53e3\u548c\u57df\u540d\u7684\u7edd\u5bf9\u8def\u5f84\u3002"),(0,a.kt)("li",{parentName:"ul"},"HTTP \u7248\u672c (HTTP version)")),(0,a.kt)("h3",{id:"headers"},"Headers"),(0,a.kt)("p",null,"\u6765\u81ea\u8bf7\u6c42\u7684 HTTP headers \u9075\u5faa\u548c HTTP header \u76f8\u540c\u7684\u57fa\u672c\u7ed3\u6784\uff1a",(0,a.kt)("strong",{parentName:"p"},"\u4e0d\u533a\u5206\u5927\u5c0f\u5199\u7684\u5b57\u7b26\u4e32"),"\uff0c\u7d27\u8ddf\u7740\u7684\u5192\u53f7\u548c\u4e00\u4e2a\u7ed3\u6784\u53d6\u51b3\u4e8e header \u7684\u503c\uff08key: value\uff09\u3002"),(0,a.kt)("h3",{id:"body"},"Body"),(0,a.kt)("p",null,"\u8bf7\u6c42\u7684\u6700\u540e\u4e00\u90e8\u5206\u662f\u5b83\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," \u3002\u4e0d\u662f\u6240\u6709\u7684\u8bf7\u6c42\u90fd\u6709\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"body")," \uff1a\u4f8b\u5982\u83b7\u53d6\u8d44\u6e90\u7684\u8bf7\u6c42\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"GET"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"HEAD"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"DELETE")," \u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"OPTIONS"),"\uff0c\u901a\u5e38\u5b83\u4eec\u4e0d\u9700\u8981 ",(0,a.kt)("inlineCode",{parentName:"p"},"body"),"\u3002\u6709\u4e9b\u8bf7\u6c42\u5c06\u6570\u636e\u53d1\u9001\u5230\u670d\u52a1\u5668\u4ee5\u4fbf\u66f4\u65b0\u6570\u636e\uff1a\u5e38\u89c1\u7684\u7684\u60c5\u51b5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"POST")," \u8bf7\u6c42\uff08\u5305\u542b ",(0,a.kt)("inlineCode",{parentName:"p"},"HTML")," \u8868\u5355\u6570\u636e\uff09\u3002"),(0,a.kt)("h2",{id:"\u7c7b\u578b-2-http-\u54cd\u5e94"},"\u7c7b\u578b 2-HTTP \u54cd\u5e94"),(0,a.kt)("h3",{id:"\u72b6\u6001\u884c"},"\u72b6\u6001\u884c"),(0,a.kt)("p",null,"HTTP \u54cd\u5e94\u7684\u8d77\u59cb\u884c\u88ab\u79f0\u4f5c \u72b6\u6001\u884c (status line)\uff0c\u5305\u542b\u4ee5\u4e0b\u4fe1\u606f\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u534f\u8bae\u7248\u672c\uff0c\u901a\u5e38\u4e3a HTTP/1.1\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u72b6\u6001\u7801 (status code)\uff0c\u8868\u660e\u8bf7\u6c42\u662f\u6210\u529f\u6216\u5931\u8d25\u3002\u5e38\u89c1\u7684\u72b6\u6001\u7801\u662f ",(0,a.kt)("inlineCode",{parentName:"li"},"200"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"404"),"\uff0c\u6216 ",(0,a.kt)("inlineCode",{parentName:"li"},"302"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u72b6\u6001\u6587\u672c (status text)\u3002\u4e00\u4e2a\u7b80\u77ed\u7684\uff0c\u7eaf\u7cb9\u7684\u4fe1\u606f\uff0c\u901a\u8fc7\u72b6\u6001\u7801\u7684\u6587\u672c\u63cf\u8ff0\uff0c\u5e2e\u52a9\u4eba\u4eec\u7406\u89e3\u8be5 ",(0,a.kt)("inlineCode",{parentName:"li"},"HTTP")," \u6d88\u606f\u3002")),(0,a.kt)("h3",{id:"headers-1"},"Headers"),(0,a.kt)("p",null,"\u7ed3\u6784\u540c\u8bf7\u6c42\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"Headers")),(0,a.kt)("h3",{id:"body-1"},"Body"),(0,a.kt)("p",null,"\u54cd\u5e94\u7684\u6700\u540e\u4e00\u90e8\u5206\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"body"),"\u3002\u4e0d\u662f\u6240\u6709\u7684\u54cd\u5e94\u90fd\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"body"),"\uff1a\u5177\u6709\u72b6\u6001\u7801 (\u5982 201 \u6216 204) \u7684\u54cd\u5e94\uff0c\u901a\u5e38\u4e0d\u4f1a\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"body"),"\u3002"),(0,a.kt)("h2",{id:"http2-\u5e27"},"HTTP/2 \u5e27"),(0,a.kt)("p",null,"HTTP/1.x \u62a5\u6587\u6709\u4e00\u4e9b\u6027\u80fd\u4e0a\u7684\u7f3a\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Header \u4e0d\u50cf body\uff0c\u5b83\u4e0d\u4f1a\u88ab\u538b\u7f29\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u62a5\u6587\u4e4b\u95f4\u7684 header \u901a\u5e38\u975e\u5e38\u76f8\u4f3c\uff0c\u4f46\u5b83\u4eec\u4ecd\u7136\u5728\u8fde\u63a5\u4e2d\u91cd\u590d\u4f20\u8f93\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u590d\u7528\u3002\u5f53\u5728\u540c\u4e00\u4e2a\u670d\u52a1\u5668\u6253\u5f00\u51e0\u4e2a\u8fde\u63a5\u65f6\uff1aTCP \u70ed\u8fde\u63a5\u6bd4\u51b7\u8fde\u63a5\u66f4\u52a0\u6709\u6548\u3002")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"HTTP/2")," \u5f15\u5165\u4e86\u4e00\u4e2a\u989d\u5916\u7684\u6b65\u9aa4\uff1a\u5b83\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP/1.x")," \u6d88\u606f\u5206\u6210\u5e27\u5e76\u5d4c\u5165\u5230\u6d41 (stream) \u4e2d\u3002\u6570\u636e\u5e27\u548c\u62a5\u5934\u5e27\u5206\u79bb\uff0c\u8fd9\u5c06\u5141\u8bb8\u62a5\u5934\u538b\u7f29\u3002\u5c06\u591a\u4e2a\u6d41\u7ec4\u5408\uff0c\u8fd9\u662f\u4e00\u4e2a\u88ab\u79f0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"\u591a\u8def\u590d\u7528")," (multiplexing) \u7684\u8fc7\u7a0b\uff0c\u5b83\u5141\u8bb8\u66f4\u6709\u6548\u7684\u5e95\u5c42 ",(0,a.kt)("inlineCode",{parentName:"p"},"TCP")," \u8fde\u63a5\u3002"))}u.isMDXComponent=!0}}]);