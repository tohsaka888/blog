"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9655],{7942:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=o,k=u["".concat(p,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(k,a(a({ref:t},s),{},{components:r})):n.createElement(k,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5536:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(7579),o=(r(959),r(7942));const i={sidebar_position:1},a=void 0,l={unversionedId:"JavaScript/Promise/Promise",id:"JavaScript/Promise/Promise",title:"Promise",description:"1. \u201c\u751f\u4ea7\u8005\u4ee3\u7801\uff08producing code\uff09\u201d\u4f1a\u505a\u4e00\u4e9b\u4e8b\u513f\uff0c\u5e76\u4e14\u4f1a\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u7f51\u7edc\u52a0\u8f7d\u6570\u636e\u7684\u4ee3\u7801\u3002\u5b83\u5c31\u50cf\u4e00\u4f4d\u201c\u6b4c\u624b\u201d\u3002",source:"@site/docs/JavaScript/Promise/Promise.mdx",sourceDirName:"JavaScript/Promise",slug:"/JavaScript/Promise/",permalink:"/blog/docs/JavaScript/Promise/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JavaScript/Promise/Promise.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u6211\u4ecb\u7ecd",permalink:"/blog/docs/intro"},next:{title:"\u4e24\u6570\u4e4b\u548c",permalink:"/blog/docs/LeetCode/\u4e24\u6570\u4e4b\u548c"}},p={},c=[],s={toc:c};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u201c\u751f\u4ea7\u8005\u4ee3\u7801\uff08producing code\uff09\u201d\u4f1a\u505a\u4e00\u4e9b\u4e8b\u513f\uff0c\u5e76\u4e14\u4f1a\u9700\u8981\u4e00\u4e9b\u65f6\u95f4\u3002\u4f8b\u5982\uff0c\u901a\u8fc7\u7f51\u7edc\u52a0\u8f7d\u6570\u636e\u7684\u4ee3\u7801\u3002\u5b83\u5c31\u50cf\u4e00\u4f4d\u201c\u6b4c\u624b\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u201c\u6d88\u8d39\u8005\u4ee3\u7801\uff08consuming code\uff09\u201d\u60f3\u8981\u5728\u201c\u751f\u4ea7\u8005\u4ee3\u7801\u201d\u5b8c\u6210\u5de5\u4f5c\u7684\u7b2c\u4e00\u65f6\u95f4\u5c31\u80fd\u83b7\u5f97\u5176\u5de5\u4f5c\u6210\u679c\u3002\u8bb8\u591a\u51fd\u6570\u53ef\u80fd\u90fd\u9700\u8981\u8fd9\u4e2a\u7ed3\u679c\u3002\u8fd9\u4e9b\u5c31\u662f\u201c\u7c89\u4e1d\u201d\u3002"),(0,o.kt)("li",{parentName:"ol"},"Promise \u662f\u5c06\u201c\u751f\u4ea7\u8005\u4ee3\u7801\u201d\u548c\u201c\u6d88\u8d39\u8005\u4ee3\u7801\u201d\u8fde\u63a5\u5728\u4e00\u8d77\u7684\u4e00\u4e2a\u7279\u6b8a\u7684 JavaScript \u5bf9\u8c61\u3002\u7528\u6211\u4eec\u7684\u7c7b\u6bd4\u6765\u8bf4\uff1a\u8fd9\u5c31\u662f\u5c31\u50cf\u662f\u201c\u8ba2\u9605\u5217\u8868\u201d\u3002\u201c\u751f\u4ea7\u8005\u4ee3\u7801\u201d\u82b1\u8d39\u5b83\u6240\u9700\u7684\u4efb\u610f\u957f\u5ea6\u65f6\u95f4\u6765\u4ea7\u51fa\u6240\u627f\u8bfa\u7684\u7ed3\u679c\uff0c\u800c \u201cpromise\u201d \u5c06\u5728\u5b83\uff08\u8bd1\u6ce8\uff1a\u6307\u7684\u662f\u201c\u751f\u4ea7\u8005\u4ee3\u7801\u201d\uff0c\u4e5f\u5c31\u662f\u4e0b\u6587\u6240\u8bf4\u7684 executor\uff09\u51c6\u5907\u597d\u65f6\uff0c\u5c06\u7ed3\u679c\u5411\u6240\u6709\u8ba2\u9605\u4e86\u7684\u4ee3\u7801\u5f00\u653e\u3002")),(0,o.kt)("p",null,"\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"new Promise")," \u7684\u51fd\u6570\u88ab\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"executor"),"\u3002\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"new Promise")," \u88ab\u521b\u5efa\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u4f1a\u81ea\u52a8\u8fd0\u884c\u3002\u5b83\u5305\u542b\u6700\u7ec8\u5e94\u4ea7\u51fa\u7ed3\u679c\u7684\u751f\u4ea7\u8005\u4ee3\u7801\u3002\u6309\u7167\u4e0a\u9762\u7684\u7c7b\u6bd4\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u5c31\u662f\u201c\u6b4c\u624b\u201d\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u6240\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"Promise"),"\u5305\u88f9\u7684\u4ee3\u7801\u662f\u540c\u6b65\u6267\u884c\u7684\u3002")),(0,o.kt)("p",null,"\u5b83\u7684\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"reject")," \u662f\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"JavaScript")," \u81ea\u8eab\u63d0\u4f9b\u7684\u56de\u8c03\u3002\u6211\u4eec\u7684\u4ee3\u7801\u4ec5\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u7684\u5185\u90e8\u3002"),(0,o.kt)("p",null,"\u5f53 ",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u83b7\u5f97\u4e86\u7ed3\u679c\uff0c\u65e0\u8bba\u662f\u65e9\u8fd8\u662f\u665a\u90fd\u6ca1\u5173\u7cfb\uff0c\u5b83\u5e94\u8be5\u8c03\u7528\u4ee5\u4e0b\u56de\u8c03\u4e4b\u4e00\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"resolve(value)")," \u2014\u2014 \u5982\u679c\u4efb\u52a1\u6210\u529f\u5b8c\u6210\u5e76\u5e26\u6709\u7ed3\u679c ",(0,o.kt)("inlineCode",{parentName:"li"},"value"),"\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reject(error)")," \u2014\u2014 \u5982\u679c\u51fa\u73b0\u4e86 ",(0,o.kt)("inlineCode",{parentName:"li"},"error"),"\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"error")," \u5373\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"error")," \u5bf9\u8c61\u3002")),(0,o.kt)("p",null,"\u6240\u4ee5\u603b\u7ed3\u4e00\u4e0b\u5c31\u662f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"executor")," \u4f1a\u81ea\u52a8\u8fd0\u884c\u5e76\u5c1d\u8bd5\u6267\u884c\u4e00\u9879\u5de5\u4f5c\u3002\u5c1d\u8bd5\u7ed3\u675f\u540e\uff0c\u5982\u679c\u6210\u529f\u5219\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"resolve"),"\uff0c\u5982\u679c\u51fa\u73b0 ",(0,o.kt)("inlineCode",{parentName:"p"},"error")," \u5219\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"reject"),"\u3002"),(0,o.kt)("p",null,"\u7531 ",(0,o.kt)("inlineCode",{parentName:"p"},"new Promise")," \u6784\u9020\u5668\u8fd4\u56de\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"promise")," \u5bf9\u8c61\u5177\u6709\u4ee5\u4e0b\u5185\u90e8\u5c5e\u6027\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'state \u2014\u2014 \u6700\u521d\u662f "pending"\uff0c\u7136\u540e\u5728 resolve \u88ab\u8c03\u7528\u65f6\u53d8\u4e3a "fulfilled"\uff0c\u6216\u8005\u5728 reject \u88ab\u8c03\u7528\u65f6\u53d8\u4e3a "rejected"\u3002'),(0,o.kt)("li",{parentName:"ul"},"result \u2014\u2014 \u6700\u521d\u662f undefined\uff0c\u7136\u540e\u5728 resolve(value) \u88ab\u8c03\u7528\u65f6\u53d8\u4e3a value\uff0c\u6216\u8005\u5728 reject(error) \u88ab\u8c03\u7528\u65f6\u53d8\u4e3a error\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://zh.javascript.info/article/promise-basics/promise-resolve-reject.svg",alt:"img"})))}m.isMDXComponent=!0}}]);