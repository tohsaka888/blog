"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4813],{7942:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(959);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4630:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7579),a=(r(959),r(7942));const o={sidebar_position:4},i=void 0,l={unversionedId:"Redux/\u4e09\u5927\u539f\u5219",id:"Redux/\u4e09\u5927\u539f\u5219",title:"\u4e09\u5927\u539f\u5219",description:"\u52a8\u673a",source:"@site/docs/Redux/\u4e09\u5927\u539f\u5219.mdx",sourceDirName:"Redux",slug:"/Redux/\u4e09\u5927\u539f\u5219",permalink:"/blog/en/docs/Redux/\u4e09\u5927\u539f\u5219",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redux/\u4e09\u5927\u539f\u5219.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Redux\u6570\u636e\u6d41",permalink:"/blog/en/docs/Redux/Redux\u6570\u636e\u6d41"},next:{title:"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",permalink:"/blog/en/docs/Redux/\u5728\u9879\u76ee\u4e2d\u4f7f\u7528"}},u={},c=[{value:"\u52a8\u673a",id:"\u52a8\u673a",level:2},{value:"\u5355\u4e00\u6570\u636e\u6e90",id:"\u5355\u4e00\u6570\u636e\u6e90",level:2},{value:"State \u662f\u53ea\u8bfb\u7684",id:"state-\u662f\u53ea\u8bfb\u7684",level:2},{value:"\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u6267\u884c&quot;\u4fee\u6539&quot;",id:"\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u6267\u884c\u4fee\u6539",level:2}],p={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u52a8\u673a"},"\u52a8\u673a"),(0,a.kt)("p",null,"\u968f\u7740 JavaScript \u5355\u9875\u5e94\u7528\u5f00\u53d1\u65e5\u8d8b\u590d\u6742\uff0c",(0,a.kt)("strong",{parentName:"p"},"\u6211\u4eec\u7684\u7f16\u7801\u8981\u7ba1\u7406\u7684 state\uff08\u72b6\u6001\uff09\u6bd4\u4ee5\u5f80\u4efb\u4f55\u65f6\u5019\u90fd\u8981\u591a"),"\u3002"),(0,a.kt)("p",null,"\u7ba1\u7406\u4e0d\u65ad\u53d8\u5316\u7684 state \u975e\u5e38\u56f0\u96be\u3002\u5982\u679c\u4e00\u4e2a State \u7684\u53d8\u5316\u4f1a\u5f15\u8d77\u53e6\u4e00\u4e2a State \u53d8\u5316\uff0c\u90a3\u4e48\u5f53 view \u53d8\u5316\u65f6\uff0c\u5c31\u53ef\u80fd\u5f15\u8d77\u5bf9\u5e94 State \u4ee5\u53ca\u53e6\u4e00\u4e2a State \u7684\u53d8\u5316\uff0c\u8fd9\u4e2a\u53d8\u5316\u53cd\u8fc7\u6765\u53c8\u53ef\u80fd\u5f15\u8d77\u53e6\u4e00\u4e2a view \u7684\u53d8\u5316\u3002\u5f53\u8fd9\u4e9b\u8fde\u9501\u53cd\u5e94\u5230\u4e00\u5b9a\u7a0b\u5ea6\u4e4b\u540e\uff0c\u4f60\u6839\u672c\u641e\u4e0d\u6e05\u695a\u5230\u5e95\u53d1\u751f\u4e86\u4ec0\u4e48\u3002state \u5728\u4ec0\u4e48\u65f6\u5019\uff0c\u7531\u4e8e\u4ec0\u4e48\u539f\u56e0\uff0c\u5982\u4f55\u53d8\u5316\u5df2\u7136\u4e0d\u53d7\u63a7\u5236\u3002 \u5f53\u7cfb\u7edf\u53d8\u5f97\u9519\u7efc\u590d\u6742\u7684\u65f6\u5019\uff0c\u60f3\u91cd\u73b0\u95ee\u9898\u6216\u8005\u6dfb\u52a0\u65b0\u529f\u80fd\u5c31\u4f1a\u53d8\u5f97\u4e3e\u6b65\u7ef4\u8270\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Redux")," \u8bd5\u56fe\u8ba9 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u7684\u53d8\u5316\u53d8\u5f97\u53ef\u9884\u6d4b\u3002\u8fd9\u4e9b\u9650\u5236\u6761\u4ef6\u4f53\u73b0\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Redux")," \u7684\u4e09\u5927\u539f\u5219\u4e2d\u3002"),(0,a.kt)("h2",{id:"\u5355\u4e00\u6570\u636e\u6e90"},"\u5355\u4e00\u6570\u636e\u6e90"),(0,a.kt)("p",null,"\u6574\u4e2a\u5e94\u7528\u7684 \u5168\u5c40 ",(0,a.kt)("inlineCode",{parentName:"p"},"state")," \u88ab\u50a8\u5b58\u5728\u4e00\u68f5 ",(0,a.kt)("inlineCode",{parentName:"p"},"object tree")," \u4e2d\uff0c\u5e76\u4e14\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"object tree")," \u53ea\u5b58\u5728\u4e8e\u552f\u4e00\u4e00\u4e2a store \u4e2d\u3002"),(0,a.kt)("p",null,"\u8fd9\u6761\u539f\u5219\u7b80\u5316\u4e86\u540c\u6784\u5e94\u7528\u7684\u5f00\u53d1\uff0c\u56e0\u4e3a\u5728\u670d\u52a1\u7aef\u7684 state \u53ef\u4ee5\u5e8f\u5217\u5316\u5e76\u6ce8\u5165\u5230\u5ba2\u6237\u7aef\uff0c\u4e0d\u9700\u8981\u505a\u5176\u4ed6\u7684\u4e00\u4e9b\u4e8b\u60c5\u3002\u4e00\u4e2a\u5355\u4e00\u6570\u636e\u6e90 state tree \u4e5f\u7b80\u5316\u4e86\u5e94\u7528\u7684\u8c03\u8bd5\u548c\u548c\u76d1\u63a7\uff1b\u5b83\u4e5f\u8ba9\u4f60\u5728\u5f00\u53d1\u4e2d\u80fd\u5c06\u5e94\u7528\u6570\u636e\u6301\u4e45\u5316\u5230\u672c\u5730\uff0c\u4ece\u800c\u52a0\u901f\u5f00\u53d1\u5468\u671f\u3002\u6b64\u5916\uff0c\u6709\u4e00\u4e9b\u529f\u80fd\u4ee5\u524d\u5f88\u96be\u5b9e\u73b0\uff0c\u6bd4\u5982\u201c\u64a4\u9500/\u91cd\u505a\u201d\uff0c\u5728\u5355\u4e00\u6570\u636e\u6e90\u7684\u539f\u5219\u4e0b\uff0c\u4f7f\u7528 Redux \u5b9e\u73b0\u5c06\u975e\u5e38\u5bb9\u6613\u3002"),(0,a.kt)("h2",{id:"state-\u662f\u53ea\u8bfb\u7684"},"State \u662f\u53ea\u8bfb\u7684"),(0,a.kt)("p",null,"\u552f\u4e00\u6539\u53d8 state \u7684\u65b9\u6cd5\u5c31\u662f\u89e6\u53d1 action\uff0caction \u662f\u4e00\u4e2a\u7528\u4e8e\u63cf\u8ff0\u5df2\u53d1\u751f\u4e8b\u4ef6\u7684\u666e\u901a\u5bf9\u8c61\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u6267\u884c\u4fee\u6539"},'\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u6267\u884c"\u4fee\u6539"'),(0,a.kt)("p",null,"\u4e3a\u4e86\u63cf\u8ff0 action \u5982\u4f55\u6539\u53d8 state tree\uff0c\u4f60\u9700\u8981\u7f16\u5199\u7eaf\u7684 reducers\u3002"),(0,a.kt)("p",null,"Reducer \u662f\u7eaf\u51fd\u6570\uff0c\u5b83\u63a5\u6536\u4e4b\u524d\u7684 state \u548c action\uff0c\u5e76\u8fd4\u56de\u65b0\u7684 state\u3002\u8bb0\u4f4f\uff0c\u4e00\u5b9a\u8981\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u5bf9\u8c61\uff0c\u800c\u4e0d\u662f\u4fee\u6539\u4e4b\u524d\u7684 state\u3002\u4f60\u4e00\u5f00\u59cb\u53ef\u4ee5\u53ea\u6709\u5355\u4e2a reducer\uff0c\u4f46\u968f\u7740\u5e94\u7528\u590d\u6742\u5ea6\u7684\u589e\u957f\uff0c\u4f60\u53ef\u4ee5\u628a\u5927\u7684 reducer \u5212\u5206\u4e3a\u4e00\u4e2a\u4e2a\u5c0f\u7684 reducers\uff0c\u5206\u522b\u7ba1\u7406\u7740 state tree \u7684\u4e0d\u540c\u90e8\u5206\u3002\u7531\u4e8e reducer \u53ea\u662f\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u63a7\u5236\u5b83\u4eec\u88ab\u8c03\u7528\u7684\u987a\u5e8f\uff0c\u4f20\u5165\u9644\u52a0\u6570\u636e\uff0c\u751a\u81f3\u7f16\u5199\u53ef\u590d\u7528\u7684 reducer \u6765\u5904\u7406\u4e00\u4e9b\u901a\u7528\u4efb\u52a1\uff0c\u5982\u5206\u9875\u5668\u3002"))}s.isMDXComponent=!0}}]);