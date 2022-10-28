"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3254],{7942:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(959);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=a,f=s["".concat(l,".").concat(m)]||s[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},923:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7579),a=(n(959),n(7942));const i={sidebar_position:1},o=void 0,p={unversionedId:"Redux/Redux\u6838\u5fc3\u6982\u5ff5",id:"Redux/Redux\u6838\u5fc3\u6982\u5ff5",title:"Redux\u6838\u5fc3\u6982\u5ff5",description:"State",source:"@site/docs/Redux/Redux\u6838\u5fc3\u6982\u5ff5.mdx",sourceDirName:"Redux",slug:"/Redux/Redux\u6838\u5fc3\u6982\u5ff5",permalink:"/blog/docs/Redux/Redux\u6838\u5fc3\u6982\u5ff5",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redux/Redux\u6838\u5fc3\u6982\u5ff5.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4fdd\u6301\u7ec4\u4ef6\u4e3a\u7eaf\u51fd\u6570\u7ec4\u4ef6",permalink:"/blog/docs/React/\u4fdd\u6301\u7ec4\u4ef6\u4e3a\u7eaf\u51fd\u6570\u7ec4\u4ef6"},next:{title:"Redux\u6982\u89c8",permalink:"/blog/docs/Redux/Redux\u6982\u89c8"}},l={},d=[{value:"State",id:"state",level:3},{value:"Action",id:"action",level:3},{value:"Reducer",id:"reducer",level:3},{value:"\u5168\u5c40\u7ba1\u7406",id:"\u5168\u5c40\u7ba1\u7406",level:3}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"state"},"State"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Redux"),"\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"State"),"\u4e0d\u53ef\u968f\u610f\u4fee\u6539(",(0,a.kt)("inlineCode",{parentName:"p"},"immutable"),")\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("h3",{id:"action"},"Action"),(0,a.kt)("p",null,"\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"Redux"),"\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"State"),"\u4e0d\u53ef\u968f\u610f\u4fee\u6539(",(0,a.kt)("inlineCode",{parentName:"p"},"immutable"),"), \u82e5\u60f3\u8981\u66f4\u65b0",(0,a.kt)("inlineCode",{parentName:"p"},"State"),"\u7684\u6570\u636e, \u6211\u4eec\u9700\u8981\u53d1\u8d77\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"action"),"\u662f\u4e00\u4e2a\u666e\u901a\u7684 JavaScript \u5bf9\u8c61\u3002\u5b83\u901a\u5e38\u6709\u4e24\u4e2a\u90e8\u5206\u7ec4\u6210:"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"type")," \u63cf\u8ff0\u53d8\u5316"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"payload")," \u6539\u53d8\u6570\u636e"))),(0,a.kt)("h3",{id:"reducer"},"Reducer"),(0,a.kt)("p",null,"\u53d1\u8d77",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"\u4e4b\u540e\u6211\u4eec\u8fd8\u9700\u8981\u4e00\u4e2a\u51fd\u6570\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"action"),"\u8054\u7cfb\u8d77\u6765\u3002\u8fd9\u4e2a\u51fd\u6570\u5c31\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"reducer"),"\u3002"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"reducer \u53ea\u662f\u4e00\u4e2a\u63a5\u6536 state \u548c action \u4f5c\u4e3a\u5176\u53c2\u6570,\u5e76\u8fd4\u56de\u7ed9\u5e94\u7528",(0,a.kt)("strong",{parentName:"p"},"\u65b0\u7684 state \u7684\u51fd\u6570"),"\u3002\n\u5e38\u89c1\u7684\u8bef\u533a\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"reducer"),"\u66f4\u6539\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"state"),", \u5176\u5b9e\u4e0d\u7136, ",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\u662f\u4e0d\u53ef\u53d8\u7684, ",(0,a.kt)("inlineCode",{parentName:"p"},"reducer"),"\u505a\u7684\u53ea\u662f\u8fd4\u56de\u4e86\u4e00\u4e2a\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"state"),"\u3002")),(0,a.kt)("h3",{id:"\u5168\u5c40\u7ba1\u7406"},"\u5168\u5c40\u7ba1\u7406"),(0,a.kt)("p",null,"\u5bf9\u4e8e\u5927\u7684\u5e94\u7528\u6765\u8bf4\uff0c\u4e0d\u5927\u53ef\u80fd\u4ec5\u4ec5\u53ea\u5199\u4e00\u4e2a\u8fd9\u6837\u7684\u51fd\u6570\uff0c\u6240\u4ee5\u6211\u4eec\u7f16\u5199\u5f88\u591a\u5c0f\u51fd\u6570\u6765\u5206\u522b\u7ba1\u7406 state \u7684\u4e00\u90e8\u5206\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u518d\u5f00\u53d1\u4e00\u4e2a reducer, \u901a\u8fc7\u8c03\u7528\u8fd9\u4e24\u4e2a reducer \u6765\u83b7\u53d6\u76f8\u5e94\u7684\u72b6\u6001, \u8fdb\u800c\u6765\u7ba1\u7406\u6574\u4e2a\u5e94\u7528\u7684 state\u3002"))}c.isMDXComponent=!0}}]);