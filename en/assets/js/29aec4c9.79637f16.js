"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[120],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(p,".").concat(m)]||c[m]||s[m]||i;return n?r.createElement(k,l(l({ref:t},d),{},{components:n})):r.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},72:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=n(7579),a=(n(9496),n(9613));const i={sidebar_position:3},l=void 0,o={unversionedId:"Redux/Redux\u6570\u636e\u6d41",id:"Redux/Redux\u6570\u636e\u6d41",title:"Redux\u6570\u636e\u6d41",description:"\u65e9\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u8c08\u5230\u4e86\u201c\u5355\u5411\u6570\u636e\u6d41\u201d\uff0c\u5b83\u63cf\u8ff0\u4e86\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u7684\u4ee5\u4e0b\u6b65\u9aa4\u5e8f\u5217\uff1a",source:"@site/docs/Redux/Redux\u6570\u636e\u6d41.mdx",sourceDirName:"Redux",slug:"/Redux/Redux\u6570\u636e\u6d41",permalink:"/blog/en/docs/Redux/Redux\u6570\u636e\u6d41",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redux/Redux\u6570\u636e\u6d41.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Redux\u6982\u89c8",permalink:"/blog/en/docs/Redux/Redux\u6982\u89c8"}},p={},u=[],d={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u65e9\u4e9b\u65f6\u5019\uff0c\u6211\u4eec\u8c08\u5230\u4e86\u201c\u5355\u5411\u6570\u636e\u6d41\u201d\uff0c\u5b83\u63cf\u8ff0\u4e86\u66f4\u65b0\u5e94\u7528\u7a0b\u5e8f\u7684\u4ee5\u4e0b\u6b65\u9aa4\u5e8f\u5217\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"State \u63cf\u8ff0\u4e86\u5e94\u7528\u7a0b\u5e8f\u5728\u7279\u5b9a\u65f6\u95f4\u70b9\u7684\u72b6\u51b5"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e state \u6765\u6e32\u67d3\u89c6\u56fe"),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u53d1\u751f\u67d0\u4e9b\u4e8b\u60c5\u65f6\uff08\u4f8b\u5982\u7528\u6237\u5355\u51fb\u6309\u94ae\uff09\uff0cstate \u4f1a\u6839\u636e\u53d1\u751f\u7684\u4e8b\u60c5\u8fdb\u884c\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u65b0\u7684 state \u91cd\u65b0\u6e32\u67d3\u89c6\u56fe")),(0,a.kt)("p",null,"\u5177\u4f53\u6765\u8bf4\uff0c\u5bf9\u4e8e Redux\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u8fd9\u4e9b\u6b65\u9aa4\u5206\u89e3\u4e3a\u66f4\u8be6\u7ec6\u7684\u5185\u5bb9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u521d\u59cb\u542f\u52a8"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u6700\u9876\u5c42\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"root reducer")," \u51fd\u6570\u521b\u5efa ",(0,a.kt)("inlineCode",{parentName:"li"},"Redux store")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u8c03\u7528\u4e00\u6b21 ",(0,a.kt)("inlineCode",{parentName:"li"},"root reducer"),"\uff0c\u5e76\u5c06\u8fd4\u56de\u503c\u4fdd\u5b58\u4e3a\u5b83\u7684\u521d\u59cb ",(0,a.kt)("inlineCode",{parentName:"li"},"state")),(0,a.kt)("li",{parentName:"ul"},"\u5f53\u89c6\u56fe",(0,a.kt)("strong",{parentName:"li"},"\u9996\u6b21\u6e32\u67d3"),"\u65f6\uff0c\u89c6\u56fe\u7ec4\u4ef6\u8bbf\u95ee ",(0,a.kt)("inlineCode",{parentName:"li"},"Redux store")," \u7684\u5f53\u524d ",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\uff0c\u5e76\u4f7f\u7528\u8be5\u6570\u636e\u6765\u51b3\u5b9a\u8981\u5448\u73b0\u7684\u5185\u5bb9\u3002\u540c\u65f6\u76d1\u542c ",(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u7684\u66f4\u65b0\uff0c\u4ee5\u4fbf\u4ed6\u4eec\u53ef\u4ee5\u77e5\u9053 ",(0,a.kt)("inlineCode",{parentName:"li"},"state")," \u662f\u5426\u5df2\u66f4\u6539\u3002"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u66f4\u65b0\u73af\u8282"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8f\u4e2d\u53d1\u751f\u4e86\u67d0\u4e9b\u4e8b\u60c5\uff0c\u4f8b\u5982\u7528\u6237\u5355\u51fb\u6309\u94ae"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dispatch"),"\u4e00\u4e2a",(0,a.kt)("inlineCode",{parentName:"li"},"action"),"\u5230",(0,a.kt)("inlineCode",{parentName:"li"},"Redux store")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u7528\u4e4b\u524d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"state")," \u548c\u5f53\u524d\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," \u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"li"},"reducer")," \u51fd\u6570\uff0c\u5e76\u5c06\u8fd4\u56de\u503c\u4fdd\u5b58\u4e3a\u65b0\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"state")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u901a\u77e5\u6240\u6709\u8ba2\u9605\u8fc7\u7684\u89c6\u56fe\uff0c\u901a\u77e5\u5b83\u4eec ",(0,a.kt)("inlineCode",{parentName:"li"},"store")," \u53d1\u751f\u66f4\u65b0"),(0,a.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u8ba2\u9605\u8fc7 store \u6570\u636e\u7684\u89c6\u56fe\u7ec4\u4ef6\u90fd\u4f1a\u68c0\u67e5\u5b83\u4eec\u7528\u5230\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u662f\u5426\u88ab\u66f4\u65b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u53d1\u73b0",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u66f4\u65b0\u7684\u7ec4\u4ef6\u4f7f\u7528\u65b0\u503c\u8fdb\u884c\u91cd\u65b0\u6e32\u67d3")))),(0,a.kt)("p",null,"\u52a8\u753b\u7684\u65b9\u5f0f\u6765\u8868\u8fbe\u6570\u636e\u6d41\u66f4\u65b0:\n",(0,a.kt)("img",{parentName:"p",src:"https://cn.redux.js.org/assets/images/ReduxDataFlowDiagram-49fa8c3968371d9ef6f2a1486bd40a26.gif",alt:"img"})))}s.isMDXComponent=!0}}]);