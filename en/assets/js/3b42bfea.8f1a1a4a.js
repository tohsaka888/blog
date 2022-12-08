"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[155],{535:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>x,default:()=>T,frontMatter:()=>f,metadata:()=>h,toc:()=>y});var a=r(7579),n=r(959),o=r(7942),s=r(5924),l=r(3750),p=r(4168),u=r(6493),i=r(6572);const d="tabList_PpFF",c="tabItem_A0v2";function m(e){var t;const{lazy:r,block:o,defaultValue:l,values:m,groupId:b,className:v}=e,k=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??k.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),x=(0,p.l)(f,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const h=null===l?l:l??(null==(t=k.find((e=>e.props.default)))?void 0:t.props.value)??k[0].props.value;if(null!==h&&!f.some((e=>e.value===h)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${h}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:y}=(0,u.U)(),[N,T]=(0,n.useState)(h),R=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=b){const e=g[b];null!=e&&e!==N&&f.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,r=R.indexOf(t),a=f[r].value;a!==N&&(C(t),T(a),null!=b&&y(b,String(a)))},I=e=>{var t;let r=null;switch(e.key){case"Enter":E(e);break;case"ArrowRight":{const t=R.indexOf(e.currentTarget)+1;r=R[t]??R[0];break}case"ArrowLeft":{const t=R.indexOf(e.currentTarget)-1;r=R[t]??R[R.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},v)},f.map((e=>{let{value:t,label:r,attributes:o}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>R.push(e),onKeyDown:I,onClick:E},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":N===t})}),r??t)}))),r?(0,n.cloneElement)(k.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function b(e){const t=(0,l.Z)();return n.createElement(m,(0,a.Z)({key:String(t)},e))}const v="tabItem_qGDr";function k(e){let{children:t,hidden:r,className:a}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(v,a),hidden:r},t)}r(931);const f={sidebar_position:5},x=void 0,h={unversionedId:"Redux/\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",id:"Redux/\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",title:"\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",description:"\u5b89\u88c5",source:"@site/docs/Redux/\u5728\u9879\u76ee\u4e2d\u4f7f\u7528.mdx",sourceDirName:"Redux",slug:"/Redux/\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",permalink:"/blog/en/docs/Redux/\u5728\u9879\u76ee\u4e2d\u4f7f\u7528",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Redux/\u5728\u9879\u76ee\u4e2d\u4f7f\u7528.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u4e09\u5927\u539f\u5219",permalink:"/blog/en/docs/Redux/\u4e09\u5927\u539f\u5219"},next:{title:"\u524d\u7aef\u8def\u7531\u7684\u5b9e\u73b0\u65b9\u5f0f",permalink:"/blog/en/docs/\u516b\u80a1\u6587/\u524d\u7aef\u8def\u7531\u7684\u5b9e\u73b0\u65b9\u5f0f"}},g={},y=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u521b\u5efa\u4e00\u4e2a Redux store",id:"\u521b\u5efa\u4e00\u4e2a-redux-store",level:3},{value:"\u5411 React \u63d0\u4f9b Redux store",id:"\u5411-react-\u63d0\u4f9b-redux-store",level:3}],N={toc:y};function T(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},N,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,o.kt)(b,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(k,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @reduxjs/toolkit react-redux\n"))),(0,o.kt)(k,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @reduxjs/toolkit react-redux\n")))),(0,o.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,o.kt)("p",null,"\u8fd9\u91cc\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"typescript"),"\u9879\u76ee\u4e3a\u4f8b:"),(0,o.kt)("h3",{id:"\u521b\u5efa\u4e00\u4e2a-redux-store"},"\u521b\u5efa\u4e00\u4e2a Redux store"),(0,o.kt)("p",null,"\u5728\u4efb\u610f\u76ee\u5f55\u521b\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"store.ts"),"\u6587\u4ef6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"store.ts","store.ts":!0},'import { configureStore } from "@reduxjs/toolkit";\n\nexport const store = configureStore({\n  reducer: {},\n});\n\n// Infer the `RootState` and `AppDispatch` types from the store itself\nexport type RootState = ReturnType<typeof store.getState>;\n// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}\nexport type AppDispatch = typeof store.dispatch;\n')),(0,o.kt)("p",null,"\u8fd9\u6837\u6211\u4eec\u5c31\u521b\u5efa\u4e86\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u5e76\u4e14\u81ea\u52a8\u914d\u7f6e\u4e86 Redux Devtools, \u6211\u4eec\u53ef\u4ee5\u5728\u5f00\u53d1\u4e2d\u6765\u68c0\u67e5\u8fd9\u4e2a store\u3002"),(0,o.kt)("h3",{id:"\u5411-react-\u63d0\u4f9b-redux-store"},"\u5411 React \u63d0\u4f9b Redux store"),(0,o.kt)("p",null,"\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"store"),"\u540e, \u6211\u4eec\u53ef\u4ee5\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"<Provider>"),"\u5728\u9876\u5c42\u7ec4\u4ef6\u4f20\u9012",(0,o.kt)("inlineCode",{parentName:"p"},"store"),":"),(0,o.kt)(b,{mdxType:"Tabs"},(0,o.kt)(k,{label:"Create React App",value:"cra",default:!0,mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"app.tsx","app.tsx":!0},'import React from "react";\nimport ReactDOM from "react-dom";\nimport "./index.css";\nimport App from "./App";\nimport { store } from "./app/store";\nimport { Provider } from "react-redux";\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById("root")\n);\n'))),(0,o.kt)(k,{label:"Next.js",value:"nextjs",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"pages/_app.tsx","pages/_app.tsx":!0},'import type { AppProps } from "next/app";\nimport { store } from "../store";\nimport { Provider } from "react-redux";\n\nfunction MyApp({ Component, pageProps }: AppProps) {\n  return (\n    <Provider store={store}>\n      <Component {...pageProps} />\n    </Provider>\n  );\n}\n\nexport default MyApp;\n')))))}T.isMDXComponent=!0}}]);