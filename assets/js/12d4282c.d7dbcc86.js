"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4349],{31916:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"examples/release-notes","title":"Release notes","description":"May 10, 2022","source":"@site/docs/examples/release-notes.md","sourceDirName":"examples","slug":"/examples/release-notes","permalink":"/techwriter/docs/examples/release-notes","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1732465504000,"frontMatter":{"id":"release-notes","title":"Release notes"}}');var i=s(74848),o=s(28453);const r={id:"release-notes",title:"Release notes"},a=void 0,d={},l=[];function c(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{title:"Release date",type:"important",children:(0,i.jsx)(n.p,{children:"May 10, 2022"})}),"\n",(0,i.jsxs)(n.p,{children:["The goal of the patch is to add a new component, fix various performance and styling issues within the MT Builder and remove the vulnerabilities in third-party libraries and plugins used in the Product's components. To apply the patch, you must have Enterprise Edition v.10.1 installed. Refer to our ",(0,i.jsx)(n.a,{href:"https://example.com",children:"Upgrade guide"})," for detailed instructions."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"New features"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Version 10.2 of the Enterprise Edition introduces integration with Pendo Analytics, a leading product digital adoption platform. Pendo is added into all components: Digital Workers, Control Tower, and WorkSpace, and runs both in on-premise and Cloud Product versions."}),"\n",(0,i.jsx)(n.p,{children:"This new integration is all about your user experience, and here's how it will benefit you:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Simplified onboarding"}),": Pendo guides help new users quickly understand the Product's key features and functionalities, leading to a faster and more effective onboarding process."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Easy feedback sharing"}),": share your thoughts and experiences easily using Pendo's in-app feedback mechanism. This will allow us better to understand your needs, expectations, and experiences and help continuously improve our services."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Interactive help and support"}),": provides instant access to interactive help content and tutorials."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Personalized user experience"}),": Pendo's insights allow us to personalize and improve your product experience by understanding how you use our Product, which features are the most valuable, and where to improve."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Pendo also follows industry-standard security practices and complies with all relevant privacy laws and regulations, such as GDPR and CCPA, so all your data and processes stay on the safe side."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Bugfixes"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed the bug with the tagged XML output of the Tagging-on-Document Manual Task."}),"\n",(0,i.jsx)(n.p,{children:"The issue affected the tasks created via any MT Builder, contained a document of at least six pages, and included the uploaded input data with the tagged XML. Now, the output XML includes tags from the input XML and the newly added ones, as designed."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed performance issues in the new MT Builder. Initializing the Review Manual Task in a custom Digital Worker could take up to 90 seconds. The loading speed of 40-page ToD documents and the extracted data is now decreased by 30%. You will also see the indicator showing the original documents being loaded."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Fixed the issue with the vertical scroll in the Manual Task layout. The scroll wasn't rendered if elements were added above single- or multi-doc."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fixed the issue with the ",(0,i.jsx)(n.code,{children:"answerType"})," for Date not being saved in the labeling configuration. When you create a document dataset with the Date component, the corresponding ",(0,i.jsx)(n.code,{children:"answerType"})," is now saved and present in the request to the backend."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Updates"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ZooKeeper is updated to version 3.8.0 to remove vulnerable Log4j files."}),"\n",(0,i.jsxs)(n.li,{children:["The Log4j dependency in the ",(0,i.jsx)(n.code,{children:"logstash-output-jdbc"})," plugin is updated from version 1.1 to 2.17.2."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var t=s(96540);const i={},o=t.createContext(i);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);