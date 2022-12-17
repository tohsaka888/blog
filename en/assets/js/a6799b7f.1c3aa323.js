"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7704],{7942:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(959);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,b=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,s=new Array(i);s[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8686:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var n=r(7579),o=(r(959),r(7942));const i={},s=void 0,a={unversionedId:"web\u5b89\u5168/Cross-site scripting",id:"web\u5b89\u5168/Cross-site scripting",title:"Cross-site scripting",description:"\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08Cross-site scripting\uff0cXSS\uff09\u662f\u4e00\u79cd\u5b89\u5168\u6f0f\u6d1e\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u5229\u7528\u8fd9\u79cd\u6f0f\u6d1e\u5728\u7f51\u7ad9\u4e0a\u6ce8\u5165\u6076\u610f\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\u3002\u82e5\u53d7\u5bb3\u8005\u8fd0\u884c\u8fd9\u4e9b\u6076\u610f\u4ee3\u7801\uff0c\u653b\u51fb\u8005\u5c31\u53ef\u4ee5\u7a81\u7834\u7f51\u7ad9\u7684\u8bbf\u95ee\u9650\u5236\u5e76\u5192\u5145\u53d7\u5bb3\u8005\u3002\u6839\u636e\u5f00\u653e\u5f0f Web \u5e94\u7528\u5b89\u5168\u9879\u76ee\uff08OWASP\uff09\uff0cXSS \u5728 2017 \u5e74\u88ab\u8ba4\u4e3a 7 \u79cd\u6700\u5e38\u89c1\u7684 Web \u5e94\u7528\u7a0b\u5e8f\u6f0f\u6d1e\u4e4b\u4e00\u3002",source:"@site/docs/web\u5b89\u5168/Cross-site scripting.md",sourceDirName:"web\u5b89\u5168",slug:"/web\u5b89\u5168/Cross-site scripting",permalink:"/blog/en/docs/web\u5b89\u5168/Cross-site scripting",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/web\u5b89\u5168/Cross-site scripting.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5757\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587",permalink:"/blog/en/docs/css/\u5757\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587"},next:{title:"\u524d\u7aef\u8def\u7531\u7684\u5b9e\u73b0\u65b9\u5f0f",permalink:"/blog/en/docs/\u516b\u80a1\u6587/\u524d\u7aef\u8def\u7531\u7684\u5b9e\u73b0\u65b9\u5f0f"}},l={},p=[{value:"\u5b58\u50a8\u578b XSS",id:"\u5b58\u50a8\u578b-xss",level:2},{value:"\u53cd\u5c04\u578b XSS",id:"\u53cd\u5c04\u578b-xss",level:2},{value:"\u57fa\u4e8e <code>DOM</code> \u7684 <code>XSS</code>",id:"\u57fa\u4e8e-dom-\u7684-xss",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8de8\u7ad9\u811a\u672c\u653b\u51fb\uff08Cross-site scripting\uff0cXSS\uff09\u662f\u4e00\u79cd\u5b89\u5168\u6f0f\u6d1e\uff0c\u653b\u51fb\u8005\u53ef\u4ee5\u5229\u7528\u8fd9\u79cd\u6f0f\u6d1e\u5728\u7f51\u7ad9\u4e0a\u6ce8\u5165\u6076\u610f\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\u3002\u82e5\u53d7\u5bb3\u8005\u8fd0\u884c\u8fd9\u4e9b\u6076\u610f\u4ee3\u7801\uff0c\u653b\u51fb\u8005\u5c31\u53ef\u4ee5\u7a81\u7834\u7f51\u7ad9\u7684\u8bbf\u95ee\u9650\u5236\u5e76\u5192\u5145\u53d7\u5bb3\u8005\u3002\u6839\u636e\u5f00\u653e\u5f0f ",(0,o.kt)("inlineCode",{parentName:"p"},"Web")," \u5e94\u7528\u5b89\u5168\u9879\u76ee\uff08OWASP\uff09\uff0cXSS \u5728 2017 \u5e74\u88ab\u8ba4\u4e3a 7 \u79cd\u6700\u5e38\u89c1\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Web")," \u5e94\u7528\u7a0b\u5e8f\u6f0f\u6d1e\u4e4b\u4e00\u3002"),(0,o.kt)("p",null,"\u5982\u679c ",(0,o.kt)("inlineCode",{parentName:"p"},"Web")," \u5e94\u7528\u7a0b\u5e8f\u6ca1\u6709\u90e8\u7f72\u8db3\u591f\u7684\u5b89\u5168\u9a8c\u8bc1\uff0c\u90a3\u4e48\uff0c\u8fd9\u4e9b\u653b\u51fb\u5f88\u5bb9\u6613\u6210\u529f\u3002\u6d4f\u89c8\u5668\u65e0\u6cd5\u63a2\u6d4b\u5230\u8fd9\u4e9b\u6076\u610f\u811a\u672c\u662f\u4e0d\u53ef\u4fe1\u7684\uff0c\u6240\u4ee5\uff0c\u8fd9\u4e9b\u811a\u672c\u53ef\u4ee5\u4efb\u610f\u8bfb\u53d6 cookie\uff0csession tokens\uff0c\u6216\u8005\u5176\u5b83\u654f\u611f\u7684\u7f51\u7ad9\u4fe1\u606f\uff0c\u6216\u8005\u8ba9\u6076\u610f\u811a\u672c\u91cd\u5199HTML\u5185\u5bb9\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"XSS")," \u653b\u51fb\u7684\u5f62\u5f0f\u5343\u5dee\u4e07\u522b\uff0c\u4f46\u4ed6\u4eec\u901a\u5e38\u90fd\u4f1a\uff1a\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"cookies")," \u6216\u5176\u4ed6\u9690\u79c1\u4fe1\u606f\u53d1\u9001\u7ed9\u653b\u51fb\u8005\uff0c\u5c06\u53d7\u5bb3\u8005\u91cd\u5b9a\u5411\u5230\u7531\u653b\u51fb\u8005\u63a7\u5236\u7684\u7f51\u9875\uff0c\u6216\u662f\u7ecf\u7531\u6076\u610f\u7f51\u7ad9\u5728\u53d7\u5bb3\u8005\u7684\u673a\u5668\u4e0a\u8fdb\u884c\u5176\u4ed6\u6076\u610f\u64cd\u4f5c\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"XSS")," \u653b\u51fb\u53ef\u4ee5\u5206\u4e3a 3 \u7c7b\uff1a\u5b58\u50a8\u578b\uff08\u6301\u4e45\u578b\uff09\u3001\u53cd\u5c04\u578b\uff08\u975e\u6301\u4e45\u578b\uff09\u3001DOM \u578b\u3002"),(0,o.kt)("h2",{id:"\u5b58\u50a8\u578b-xss"},"\u5b58\u50a8\u578b XSS"),(0,o.kt)("p",null,"\u6ce8\u5165\u578b\u811a\u672c\u6c38\u4e45\u5b58\u50a8\u5728\u76ee\u6807\u670d\u52a1\u5668\u4e0a\u3002\u5f53\u6d4f\u89c8\u5668\u8bf7\u6c42\u6570\u636e\u65f6\uff0c\u811a\u672c\u4ece\u670d\u52a1\u5668\u4e0a\u4f20\u56de\u5e76\u6267\u884c\u3002"),(0,o.kt)("h2",{id:"\u53cd\u5c04\u578b-xss"},"\u53cd\u5c04\u578b XSS"),(0,o.kt)("p",null,"\u5f53\u7528\u6237\u70b9\u51fb\u4e00\u4e2a\u6076\u610f\u94fe\u63a5\uff0c\u6216\u8005\u63d0\u4ea4\u4e00\u4e2a\u8868\u5355\uff0c\u6216\u8005\u8fdb\u5165\u4e00\u4e2a\u6076\u610f\u7f51\u7ad9\u65f6\uff0c\u6ce8\u5165\u811a\u672c\u8fdb\u5165\u88ab\u653b\u51fb\u8005\u7684\u7f51\u7ad9\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Web"),' \u670d\u52a1\u5668\u5c06\u6ce8\u5165\u811a\u672c\uff0c\u6bd4\u5982\u4e00\u4e2a\u9519\u8bef\u4fe1\u606f\uff0c\u641c\u7d22\u7ed3\u679c\u7b49 \u8fd4\u56de\u5230\u7528\u6237\u7684\u6d4f\u89c8\u5668\u4e0a\u3002\u7531\u4e8e\u6d4f\u89c8\u5668\u8ba4\u4e3a\u8fd9\u4e2a\u54cd\u5e94\u6765\u81ea"\u53ef\u4fe1\u4efb"\u7684\u670d\u52a1\u5668\uff0c\u6240\u4ee5\u4f1a\u6267\u884c\u8fd9\u6bb5\u811a\u672c\u3002'),(0,o.kt)("h2",{id:"\u57fa\u4e8e-dom-\u7684-xss"},"\u57fa\u4e8e ",(0,o.kt)("inlineCode",{parentName:"h2"},"DOM")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"h2"},"XSS")),(0,o.kt)("p",null,"\u901a\u8fc7\u4fee\u6539\u539f\u59cb\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\uff0c\u53d7\u5bb3\u8005\u6d4f\u89c8\u5668\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"DOM")," \u73af\u5883\u6539\u53d8\uff0c\u5bfc\u81f4\u6709\u6548\u8f7d\u8377\u7684\u6267\u884c\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u9875\u9762\u672c\u8eab\u5e76\u6ca1\u6709\u53d8\u5316\uff0c\u4f46\u7531\u4e8e ",(0,o.kt)("inlineCode",{parentName:"p"},"DOM")," \u73af\u5883\u88ab\u6076\u610f\u4fee\u6539\uff0c\u6709\u5ba2\u6237\u7aef\u4ee3\u7801\u88ab\u5305\u542b\u8fdb\u4e86\u9875\u9762\uff0c\u5e76\u4e14\u610f\u5916\u6267\u884c\u3002"))}u.isMDXComponent=!0}}]);