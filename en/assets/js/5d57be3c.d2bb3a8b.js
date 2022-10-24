"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[899],{7942:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,k=s["".concat(p,".").concat(m)]||s[m]||c[m]||l;return n?a.createElement(k,i(i({ref:t},d),{},{components:n})):a.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2429:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=n(7579),r=(n(959),n(7942));const l={sidebar_position:2},i=void 0,o={unversionedId:"Redux/Redux\u6982\u89c8",id:"Redux/Redux\u6982\u89c8",title:"Redux\u6982\u89c8",description:"Redux \u662f\u4ec0\u4e48\uff1f",source:"@site/docs/Redux/Redux\u6982\u89c8.mdx",sourceDirName:"Redux",slug:"/Redux/Redux\u6982\u89c8",permalink:"/blog/en/docs/Redux/Redux\u6982\u89c8",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redux/Redux\u6982\u89c8.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Redux\u6838\u5fc3\u6982\u5ff5",permalink:"/blog/en/docs/Redux/Redux\u6838\u5fc3\u6982\u5ff5"}},p={},u=[{value:"Redux \u662f\u4ec0\u4e48\uff1f",id:"redux-\u662f\u4ec0\u4e48",level:2},{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Redux",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-redux",level:3},{value:"\u4ec0\u4e48\u65f6\u5019\u7528 Redux",id:"\u4ec0\u4e48\u65f6\u5019\u7528-redux",level:3},{value:"Redux \u7ec4\u6210",id:"redux-\u7ec4\u6210",level:2},{value:"\u5355\u5411\u6570\u636e\u6d41 (one-way data flow)",id:"\u5355\u5411\u6570\u636e\u6d41-one-way-data-flow",level:3},{value:"\u4e0d\u53ef\u53d8\u6027 <code>Immutability</code>",id:"\u4e0d\u53ef\u53d8\u6027-immutability",level:3},{value:"\u672f\u8bed",id:"\u672f\u8bed",level:2},{value:"Action",id:"action",level:3},{value:"Reducer",id:"reducer",level:3},{value:"Action Creator",id:"action-creator",level:3},{value:"store",id:"store",level:3},{value:"Dispatch",id:"dispatch",level:3},{value:"Selector",id:"selector",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"redux-\u662f\u4ec0\u4e48"},"Redux \u662f\u4ec0\u4e48\uff1f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"Redux")," \u662f\u4e00\u4e2a\u4f7f\u7528\u53eb\u505a ",(0,r.kt)("inlineCode",{parentName:"strong"},"action")," \u7684\u4e8b\u4ef6\u6765\u7ba1\u7406\u548c\u66f4\u65b0\u5e94\u7528\u72b6\u6001\u7684\u6a21\u5f0f\u548c\u5de5\u5177\u5e93"),"\u5b83\u4ee5\u96c6\u4e2d\u5f0f Store\uff08centralized store\uff09\u7684\u65b9\u5f0f\u5bf9\u6574\u4e2a\u5e94\u7528\u4e2d\u4f7f\u7528\u7684\u72b6\u6001\u8fdb\u884c\u96c6\u4e2d\u7ba1\u7406\uff0c\u5176\u89c4\u5219\u786e\u4fdd\u72b6\u6001\u53ea\u80fd\u4ee5\u53ef\u9884\u6d4b\u7684\u65b9\u5f0f\u66f4\u65b0\u3002"),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528-redux"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Redux"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Redux"),"\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u7ba1\u7406",(0,r.kt)("strong",{parentName:"p"},"\u5168\u5c40"),"\u72b6\u6001\u3002"),(0,r.kt)("h3",{id:"\u4ec0\u4e48\u65f6\u5019\u7528-redux"},"\u4ec0\u4e48\u65f6\u5019\u7528 Redux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528\u4e2d\u6709\u5f88\u591a state \u5728\u591a\u4e2a\u7ec4\u4ef6\u4e2d\u9700\u8981\u4f7f\u7528 (\u9891\u7e41\u7684\u5728\u7ec4\u4ef6\u89c1\u4f20\u9012",(0,r.kt)("inlineCode",{parentName:"li"},"state"),")"),(0,r.kt)("li",{parentName:"ul"},"\u5e94\u7528 state \u4f1a\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\u800c\u9891\u7e41\u66f4\u65b0 (\u4f8b\u5982: drag/resize/interval)"),(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0 state \u7684\u903b\u8f91\u5f88\u590d\u6742"),(0,r.kt)("li",{parentName:"ul"},"\u4e2d\u578b\u548c\u5927\u578b\u4ee3\u7801\u91cf\u7684\u5e94\u7528\uff0c\u5f88\u591a\u4eba\u534f\u540c\u5f00\u53d1")),(0,r.kt)("p",null,"\u63a8\u8350\u4f7f\u7528 Redux \u7684\u65b9\u5f0f: ",(0,r.kt)("inlineCode",{parentName:"p"},"react-redux")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"redux-toolkit(@reduxjs/toolkit)")," + ",(0,r.kt)("inlineCode",{parentName:"p"},"redux devtools")),(0,r.kt)("h2",{id:"redux-\u7ec4\u6210"},"Redux \u7ec4\u6210"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"state"),": \u9a71\u52a8\u5e94\u7528\u7684\u771f\u5b9e\u6570\u636e\u6e90\u5934"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"view"),": \u57fa\u4e8e\u5f53\u524d\u72b6\u6001\u7684\u89c6\u56fe\u7684\u58f0\u660e\u6027\u63cf\u8ff0"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"actions"),": \u6839\u636e\u7528\u6237\u89e6\u53d1\u7684\u4e8b\u4ef6\uff0c\u5e76\u89e6\u53d1\u72b6\u6001\u66f4\u65b0")),(0,r.kt)("h3",{id:"\u5355\u5411\u6570\u636e\u6d41-one-way-data-flow"},"\u5355\u5411\u6570\u636e\u6d41 (one-way data flow)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u63cf\u8ff0\u5e94\u7528\u7a0b\u5e8f\u5728\u67d0\u4e2a\u65f6\u95f4\u70b9\u7684\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u6e32\u67d3",(0,r.kt)("inlineCode",{parentName:"li"},"view")),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u7528\u6237\u89e6\u53d1\u4e8b\u4ef6(\u4f8b\u5982\u70b9\u51fb\u6309\u94ae), state \u4f1a\u6839\u636e\u53d1\u751f\u7684\u4e8b\u4ef6\u8fdb\u884c\u66f4\u65b0,\u751f\u6210\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"State"),"(\u6ce8\u610f\u4e0d\u662f\u4fee\u6539",(0,r.kt)("inlineCode",{parentName:"li"},"State"),")"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u65b0\u7684",(0,r.kt)("inlineCode",{parentName:"li"},"state"),"\u91cd\u65b0\u6e32\u67d3",(0,r.kt)("inlineCode",{parentName:"li"},"view"))),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cn.redux.js.org/assets/images/one-way-data-flow-04fe46332c1ccb3497ecb04b94e55b97.png",alt:"img"})),(0,r.kt)("p",null,"\u901a\u8fc7\u5b9a\u4e49\u548c\u5206\u79bb state \u7ba1\u7406\u4e2d\u6d89\u53ca\u7684\u6982\u5ff5\u5e76\u5f3a\u5236\u6267\u884c\u7ef4\u62a4 view \u548c state \u4e4b\u95f4\u72ec\u7acb\u6027\u7684\u89c4\u5219\uff0c\u4ee3\u7801\u53d8\u5f97\u66f4\u7ed3\u6784\u5316\u548c\u6613\u4e8e\u7ef4\u62a4\u3002"),(0,r.kt)("p",null,"\u8fd9\u5c31\u662f Redux \u80cc\u540e\u7684\u57fa\u672c\u601d\u60f3\uff1a\u5e94\u7528\u4e2d\u4f7f\u7528\u96c6\u4e2d\u5f0f\u7684\u5168\u5c40\u72b6\u6001\u6765\u7ba1\u7406\uff0c\u5e76\u660e\u786e\u66f4\u65b0\u72b6\u6001\u7684\u6a21\u5f0f\uff0c\u4ee5\u4fbf\u8ba9\u4ee3\u7801\u5177\u6709\u53ef\u9884\u6d4b\u6027\u3002"),(0,r.kt)("h3",{id:"\u4e0d\u53ef\u53d8\u6027-immutability"},"\u4e0d\u53ef\u53d8\u6027 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Immutability")),(0,r.kt)("p",null,"JavaScript \u7684\u5bf9\u8c61\uff08object\uff09\u548c\u6570\u7ec4\uff08array\uff09\u9ed8\u8ba4\u90fd\u662f mutable \u7684\u3002\u5982\u679c\u6211\u521b\u5efa\u4e00\u4e2a\u5bf9\u8c61\uff0c\u6211\u53ef\u4ee5\u66f4\u6539\u5176\u5b57\u6bb5\u7684\u5185\u5bb9\u3002\u5982\u679c\u6211\u521b\u5efa\u4e00\u4e2a\u6570\u7ec4\uff0c\u6211\u4e5f\u53ef\u4ee5\u66f4\u6539\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const obj = { a: 1, b: 2 };\n// \u5bf9\u5916\u4ecd\u7136\u8fd8\u662f\u90a3\u4e2a\u5bf9\u8c61\uff0c\u4f46\u5b83\u7684\u5185\u5bb9\u5df2\u7ecf\u53d8\u4e86\\\n// \u5f15\u7528\u76f8\u540c,\u503c\u6539\u53d8\nobj.b = 3;\n\nconst arr = ["a", "b"];\n// \u540c\u6837\u7684\uff0c\u6570\u7ec4\u7684\u5185\u5bb9\u6539\u53d8\u4e86\narr.push("c");\narr[1] = "d";\n')),(0,r.kt)("p",null,"\u8fd9\u5c31\u662f ",(0,r.kt)("em",{parentName:"p"},"\u6539\u53d8")," \u5bf9\u8c61\u6216\u6570\u7ec4\u7684\u4f8b\u5b50\u3002\u5185\u5b58\u4e2d\u8fd8\u662f\u539f\u6765\u5bf9\u8c61\u6216\u6570\u7ec4\u7684\u5f15\u7528\uff0c\u4f46\u91cc\u9762\u7684\u5185\u5bb9\u53d8\u5316\u4e86\u3002(\u6539\u53d8\u4e86\u503c\u4f46\u662f\u5f15\u7528\u76f8\u540c)"),(0,r.kt)("p",null,"\u5982\u679c\u60f3\u8981\u4e0d\u53ef\u53d8\u7684\u65b9\u5f0f\u6765\u66f4\u65b0\uff0c\u4ee3\u7801\u5fc5\u9700\u5148",(0,r.kt)("strong",{parentName:"p"},"\u590d\u5236"),"\u539f\u6765\u7684 object/array\uff0c\u7136\u540e\u66f4\u65b0\u5b83\u7684\u590d\u5236\u4f53\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Redux \u671f\u671b\u6240\u6709\u72b6\u6001\u66f4\u65b0\u90fd\u662f\u4f7f\u7528\u4e0d\u53ef\u53d8\u7684\u65b9\u5f0f\u3002")),(0,r.kt)("h2",{id:"\u672f\u8bed"},"\u672f\u8bed"),(0,r.kt)("h3",{id:"action"},"Action"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"action"),"\u662f\u4e00\u4e2a\u5177\u6709 type \u5b57\u6bb5\u7684\u666e\u901a JavaScript \u5bf9\u8c61\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4f60\u53ef\u4ee5\u5c06 action \u89c6\u4e3a\u63cf\u8ff0\u5e94\u7528\u7a0b\u5e8f\u4e2d\u53d1\u751f\u4e86\u4ec0\u4e48\u7684\u4e8b\u4ef6\u3002")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u5b57\u6bb5\u662f\u4e00\u4e2a\u5b57\u7b26\u4e32\uff0c\u7ed9\u8fd9\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"action`` \u4e00\u4e2a\u63cf\u8ff0\u6027\u7684\u540d\u5b57\uff0c\u6bd4\u5982"),'"todos/todoAdded"',(0,r.kt)("inlineCode",{parentName:"p"},"\u3002\u6211\u4eec\u901a\u5e38\u628a\u90a3\u4e2a\u7c7b\u578b\u7684\u5b57\u7b26\u4e32\u5199\u6210\u201c\u57df/\u4e8b\u4ef6\u540d\u79f0\u201d\uff0c\u5176\u4e2d\u7b2c\u4e00\u90e8\u5206\u662f\u8fd9\u4e2a "),"action` \u6240\u5c5e\u7684\u7279\u5f81\u6216\u7c7b\u522b\uff0c\u7b2c\u4e8c\u90e8\u5206\u662f\u53d1\u751f\u7684\u5177\u4f53\u4e8b\u60c5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u5bf9\u8c61\u53ef\u4ee5\u6709\u5176\u4ed6\u5b57\u6bb5\uff0c\u5176\u4e2d\u5305\u542b\u6709\u5173\u53d1\u751f\u7684\u4e8b\u60c5\u7684\u9644\u52a0\u4fe1\u606f\u3002\u6309\u7167\u60ef\u4f8b\uff0c\u6211\u4eec\u5c06\u8be5\u4fe1\u606f\u653e\u5728\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"payload")," \u7684\u5b57\u6bb5\u4e2d\u3002"),(0,r.kt)("p",null,"\u4e00\u4e2a\u5178\u578b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u5bf9\u8c61\u53ef\u80fd\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const addTodoAction = {\n  type: "todos/todoAdded",\n  payload: "Buy milk",\n};\n')),(0,r.kt)("h3",{id:"reducer"},"Reducer"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," \u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u6536\u5f53\u524d\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u548c\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u5bf9\u8c61\uff0c\u5fc5\u8981\u65f6\u51b3\u5b9a\u5982\u4f55\u66f4\u65b0\u72b6\u6001\uff0c\u5e76\u8fd4\u56de\u65b0\u72b6\u6001\u3002\u51fd\u6570\u7b7e\u540d\u662f\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"(state, action) => newState"),"\u3002 \u4f60\u53ef\u4ee5\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," \u89c6\u4e3a\u4e00\u4e2a\u4e8b\u4ef6\u76d1\u542c\u5668\uff0c\u5b83\u6839\u636e\u63a5\u6536\u5230\u7684 action\uff08\u4e8b\u4ef6\uff09\u7c7b\u578b\u5904\u7406\u4e8b\u4ef6\u3002"),(0,r.kt)("admonition",{title:"\u8bf4\u660e",type:"info"},(0,r.kt)("p",{parentName:"admonition"},'"Reducer" \u51fd\u6570\u7684\u540d\u5b57\u6765\u6e90\u662f\u56e0\u4e3a\u5b83\u548c Array.reduce() \u51fd\u6570\u4f7f\u7528\u7684\u56de\u8c03\u51fd\u6570\u5f88\u7c7b\u4f3c\u3002')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Reducer")," \u5fc5\u9700\u7b26\u5408\u4ee5\u4e0b\u89c4\u5219\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ec5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"state")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"action")," \u53c2\u6570\u8ba1\u7b97\u65b0\u7684\u72b6\u6001\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u7981\u6b62\u76f4\u63a5\u4fee\u6539 state\u3002\u5fc5\u987b\u901a\u8fc7\u590d\u5236\u73b0\u6709\u7684 state \u5e76\u5bf9\u590d\u5236\u7684\u503c\u8fdb\u884c\u66f4\u6539\u7684\u65b9\u5f0f\u6765\u505a \u4e0d\u53ef\u53d8\u66f4\u65b0\uff08immutable updates\uff09\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7981\u6b62\u4efb\u4f55\u5f02\u6b65\u903b\u8f91\u3001\u4f9d\u8d56\u968f\u673a\u503c\u6216\u5bfc\u81f4\u5176\u4ed6\u201c\u526f\u4f5c\u7528\u201d\u7684\u4ee3\u7801\u3002")),(0,r.kt)("p",null,"reducer \u51fd\u6570\u5185\u90e8\u7684\u903b\u8f91\u901a\u5e38\u9075\u5faa\u4ee5\u4e0b\u6b65\u9aa4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5 reducer \u662f\u5426\u5173\u5fc3\u8fd9\u4e2a action",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u662f\uff0c\u5219\u590d\u5236 state\uff0c\u4f7f\u7528\u65b0\u503c\u66f4\u65b0 state \u526f\u672c\uff0c\u7136\u540e\u8fd4\u56de\u65b0 state"),(0,r.kt)("li",{parentName:"ul"},"\u5426\u5219\uff0c\u8fd4\u56de\u539f\u6765\u7684 state \u4e0d\u53d8")))),(0,r.kt)("p",null,"\u4e0b\u9762\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," \u7684\u5c0f\u4f8b\u5b50\uff0c\u5c55\u793a\u4e86\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," \u5e94\u8be5\u9075\u5faa\u7684\u6b65\u9aa4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const initialState = { value: 0 };\n\nfunction counterReducer(state = initialState, action) {\n  // \u68c0\u67e5 reducer \u662f\u5426\u5173\u5fc3\u8fd9\u4e2a action\n  if (action.type === "counter/increment") {\n    // \u5982\u679c\u662f\uff0c\u590d\u5236 `state`\n    return {\n      ...state,\n      // \u4f7f\u7528\u65b0\u503c\u66f4\u65b0 state \u526f\u672c\n      value: state.value + 1,\n    };\n  }\n  // \u8fd4\u56de\u539f\u6765\u7684 state \u4e0d\u53d8\n  return state;\n}\n')),(0,r.kt)("h3",{id:"action-creator"},"Action Creator"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"action creator")," \u662f\u4e00\u4e2a\u521b\u5efa\u5e76\u8fd4\u56de\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u5bf9\u8c61\u7684\u51fd\u6570\u3002\u5b83\u7684\u4f5c\u7528\u662f\u8ba9\u4f60\u4e0d\u5fc5\u6bcf\u6b21\u90fd\u624b\u52a8\u7f16\u5199 ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const addTodo = text => {\n  return {\n    type: 'todos/todoAdded',\n    payload: text\n  }\n}\n")),(0,r.kt)("h3",{id:"store"},"store"),(0,r.kt)("p",null,"\u5f53\u524d ",(0,r.kt)("inlineCode",{parentName:"p"},"Redux")," \u5e94\u7528\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u5b58\u5728\u4e8e\u4e00\u4e2a\u540d\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," \u7684\u5bf9\u8c61\u4e2d\u3002"),(0,r.kt)("p",null,"store \u662f\u901a\u8fc7\u4f20\u5165\u4e00\u4e2a reducer \u6765\u521b\u5efa\u7684\uff0c\u5e76\u4e14\u6709\u4e00\u4e2a\u540d\u4e3a getState \u7684\u65b9\u6cd5\uff0c\u5b83\u8fd4\u56de\u5f53\u524d\u72b6\u6001\u503c\u3002"),(0,r.kt)("h3",{id:"dispatch"},"Dispatch"),(0,r.kt)("p",null,"Redux store \u6709\u4e00\u4e2a\u65b9\u6cd5\u53eb ",(0,r.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u3002\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u552f\u4e00\u65b9\u6cd5\u662f\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"store.dispatch()")," \u5e76\u4f20\u5165\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"action")," \u5bf9\u8c61\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"store")," \u5c06\u6267\u884c\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"reducer")," \u51fd\u6570\u5e76\u8ba1\u7b97\u51fa\u66f4\u65b0\u540e\u7684 state\uff0c\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"getState()")," \u53ef\u4ee5\u83b7\u53d6\u65b0 state\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'store.dispatch({ type: "counter/increment" });\n')),(0,r.kt)("p",null,'dispatch \u4e00\u4e2a action \u53ef\u4ee5\u5f62\u8c61\u7684\u7406\u89e3\u4e3a "\u89e6\u53d1\u4e00\u4e2a\u4e8b\u4ef6"\u3002\u53d1\u751f\u4e86\u4e00\u4e9b\u4e8b\u60c5\uff0c\u6211\u4eec\u5e0c\u671b store \u77e5\u9053\u8fd9\u4ef6\u4e8b\u3002 Reducer \u5c31\u50cf\u4e8b\u4ef6\u76d1\u542c\u5668\u4e00\u6837\uff0c\u5f53\u5b83\u4eec\u6536\u5230\u5173\u6ce8\u7684 action \u540e\uff0c\u5b83\u5c31\u4f1a\u66f4\u65b0 state \u4f5c\u4e3a\u54cd\u5e94\u3002'),(0,r.kt)("p",null,"\u6211\u4eec\u901a\u5e38\u8c03\u7528 action creator \u6765\u8c03\u7528 action\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const increment = () => {\n  return {\n    type: 'counter/increment'\n  }\n}\n\nstore.dispatch(increment())\n\nconsole.log(store.getState())\n// {value: 2}\n")),(0,r.kt)("h3",{id:"selector"},"Selector"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Selector")," \u51fd\u6570\u53ef\u4ee5\u4ece store \u72b6\u6001\u6811\u4e2d\u63d0\u53d6\u6307\u5b9a\u7684\u7247\u6bb5\u3002\u968f\u7740\u5e94\u7528\u53d8\u5f97\u8d8a\u6765\u8d8a\u5927\uff0c\u4f1a\u9047\u5230\u5e94\u7528\u7a0b\u5e8f\u7684\u4e0d\u540c\u90e8\u5206\u9700\u8981\u8bfb\u53d6\u76f8\u540c\u7684\u6570\u636e\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"selector")," \u53ef\u4ee5\u907f\u514d\u91cd\u590d\u8fd9\u6837\u7684\u8bfb\u53d6\u903b\u8f91\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const selectCounterValue = state => state.value\n\nconst currentValue = selectCounterValue(store.getState())\nconsole.log(currentValue)\n// 2\n")))}c.isMDXComponent=!0}}]);