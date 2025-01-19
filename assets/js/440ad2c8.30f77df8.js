"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3761],{76995:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"examples/dw","title":"Configure Skill","description":"Once you install the Digital Worker (DW), configure it before running for the first time.","source":"@site/docs/examples/dw.md","sourceDirName":"examples","slug":"/examples/dw","permalink":"/techwriter/docs/examples/dw","draft":false,"unlisted":false,"tags":[],"version":"current","lastUpdatedAt":1737304790000,"sidebarPosition":1,"frontMatter":{"sidebar_position":1,"id":"dw","title":"Configure Skill"}}');var t=s(74848),r=s(28453);const o={sidebar_position:1,id:"dw",title:"Configure Skill"},l=void 0,a={},c=[{value:"Credentials",id:"credentials",level:3},{value:"Input step",id:"input-step",level:3},{value:"Google API",id:"google-api",level:4},{value:"Investigation step",id:"investigation-step",level:3},{value:"Output step",id:"output-step",level:3},{value:"Review",id:"review",level:3}];function d(e){const n={a:"a",code:"code",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Once you install the Digital Worker (DW), configure it before running for the first time."}),"\n",(0,t.jsxs)(n.p,{children:["You can configure multiple variations, or sets of parameters, for a DW. For example, a different media provider or a set of keywords per variation. For more information, see the ",(0,t.jsx)(n.a,{href:"https://example.com",children:"release notes"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"credentials",children:"Credentials"}),"\n",(0,t.jsx)(n.p,{children:"Before setting the news providers, ensure you have obtained the corresponding license with credentials."}),"\n",(0,t.jsx)(n.p,{children:"The following search providers are supported:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Google API"}),"\n",(0,t.jsx)(n.li,{children:"Dow Jones Factiva Headlines"}),"\n",(0,t.jsx)(n.li,{children:"LexisNexis L&P News v1"}),"\n",(0,t.jsx)(n.li,{children:"World-Check One"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You must acquire licenses and credentials for all providers except for Google API. The DW solution includes access to Google API at no additional cost."}),"\n",(0,t.jsxs)(n.p,{children:["You must first set up the above credentials in the Secrets Storage to use other providers besides Google API. For the step-by-step instructions, see this ",(0,t.jsx)(n.a,{href:"https://example.com",children:"guide"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"input-step",children:"Input step"}),"\n",(0,t.jsx)(n.p,{children:"To set up your installed Digital Worker, do the following:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the ",(0,t.jsx)(n.strong,{children:"Control Tower"})," menu, in the ",(0,t.jsx)(n.strong,{children:"Digital Workers"})," section, find your newly installed solution, and click the ",(0,t.jsx)(n.strong,{children:"Prepare"})," button."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"Prepare your digital worker"})," window containing a configuration form appears."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["In the window, on the ",(0,t.jsx)(n.strong,{children:"Input"}),' step, select a news provider for searching for news about the entity or individual. "Google API" is set by default.']}),"\n",(0,t.jsx)(n.p,{children:"The required configurations may differ based on the selected news provider."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(47607).A+"",width:"1022",height:"765"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The solution can return results from up to four providers at a time. When selecting several providers, each will appear in a separate, collapsible section. Review each section carefully to ensure all required parameters are configured correctly. Available parameters may vary by provider."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(85976).A+"",width:"1021",height:"766"})}),"\n",(0,t.jsx)(n.p,{children:"See the following sections for a detailed description of the Google provider setting."}),"\n",(0,t.jsx)(n.h4,{id:"google-api",children:"Google API"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(99936).A+"",width:"6650",height:"7367"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Google API Credentials Location"}),". Specify the corresponding Secret Storage alias for the Google API system."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Article Language"}),". Select the language of articles to search in. 'Any' language is used by default. You can also choose ",(0,t.jsx)(n.strong,{children:"Keyword Language"})," and its following options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Shared"})," creates a single input field for keywords."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.strong,{children:"Defined by keyword language"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Number of articles to extract"}),". Specify the maximum number of reports to fetch from 1 to 20. By default, up to ",(0,t.jsx)(n.strong,{children:"20"})," articles are retrieved."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Search Time period"}),". Select an option to find information published during a specific time frame. To specify the starting and the ending date for the articles' search, select ",(0,t.jsx)(n.strong,{children:"Custom Range"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Dynamic Location Search"}),". Select to dynamically broaden the search location for an entity if no results were found."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Keywords"}),". Specify keywords to be used for the search. You can add a maximum of 28 words."]}),"\n",(0,t.jsx)(n.p,{children:"The following keywords are added by default based on the article languages you select:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"English:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"ACCUSE, ARREST, BRIBE, CONVICT, CORRUPT, COUNTERFEIT, CRIME, EMBEZZLEMENT, FRAUD, GUILT, ILLEGAL, INDICTMENT, INVESTIGATION, KICKBACK, MONEY LAUNDERING, NARCOTIC, PENALTY, SANCTION, SENTENCED, EVASION, TERRORIST, THEFT, TRAFFICKING, VIOLATION\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Spanish:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"ACUSAR, ARRESTAR, SOBORNO, CORRUPTO, FALSIFICACI\xd3N, CRIMEN, MALVERSACI\xd3N, FRAUDE, CULPA, ILEGAL, ACUSACI\xd3N, INVESTIGACI\xd3N, CONTRAGOLPE, LAVADO DE DINERO, NARC\xd3TICO, MULTA, SANCI\xd3N, SENTENCIADO, EVASI\xd3N, TERRORISTA, ROBO, TR\xc1FICO, VIOLACI\xd3N\n"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Enable Keyword Thesaurus"}),". Activate to look not only for exact keywords but also for their synonyms. By default, the feature is turned on. Disable it if your organization requires only exact matches on all keywords."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"High-risk countries"}),". Select countries from the dropdown or enter their names in the search field. The high-risk countries configured here are highlighted in articles returned from each investigation."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"File types to exclude from results"}),". Select the file types that you want to exclude from Google results:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"HTML is included by default."}),"\n",(0,t.jsx)(n.li,{children:"Non-HTML file types do not have the same metadata and tagging. Excluding them reduces the number of articles to review and false hits by 50% without increasing the risk of missing a true hit."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["After setting the ",(0,t.jsx)(n.strong,{children:"Input"})," parameters, click ",(0,t.jsx)(n.strong,{children:"Next"})," to go to the following step of the wizard."]}),"\n",(0,t.jsx)(n.h3,{id:"investigation-step",children:"Investigation step"}),"\n",(0,t.jsx)(n.p,{children:"In the following step, specify the following parameters:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ML Model Version"}),". Select the model version to use. The latest model is selected by default."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Identify Duplicate Articles"}),". Select ",(0,t.jsx)(n.strong,{children:"Yes"})," to identify and group articles by the configurable similarity threshold. By default, the value is set to 50%."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Remove Legal Endings"}),". Select ",(0,t.jsx)(n.strong,{children:"Yes"})," to remove legal endings from the company entities. Entities with common names or small businesses (LLCs, S corps) may receive more tailored results when the option is set to ",(0,t.jsx)(n.strong,{children:"No"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Human-in-the-Loop"}),". Select ",(0,t.jsx)(n.strong,{children:"Yes"})," to enable the Manual Review Step. If the option is on, configure the additional options:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Frequency of use"}),". Specify how frequently a Manual Task is created when at least one result per entity is found."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Require users to disposition all articles"}),". Select ",(0,t.jsx)(n.strong,{children:"Yes"})," if users are required to disposition all articles before closing an investigation in WorkSpace."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Automatically route users to the next task"}),". Select ",(0,t.jsx)(n.strong,{children:"Yes"})," to direct users to the next task in the queue. If the option is disabled, the users are always returned to the main queue list after closing or saving an assignment."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Number of submit investigation tasks"}),'. When running the Launcher Business Process, specify how many "Submit Investigation Tasks" you want to create. One task is suggested for two or three analysts.']}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(78302).A+"",width:"1019",height:"763"})}),"\n",(0,t.jsx)(n.h3,{id:"output-step",children:"Output step"}),"\n",(0,t.jsxs)(n.p,{children:["In the last step, specify the ",(0,t.jsx)(n.strong,{children:"Output"})," parameters:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Interface Language"}),". Select the language of the final report and Manual Tasks."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Report Format"}),". Select the report file format for generating a screening request: HTML or PDF."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(2781).A+"",width:"6695",height:"4798"})}),"\n",(0,t.jsx)(n.h3,{id:"review",children:"Review"}),"\n",(0,t.jsxs)(n.p,{children:["Once you complete the required fields, review the configuration. You can return to any step to change previous settings before finalizing. If everything looks correct, click ",(0,t.jsx)(n.strong,{children:"Finish"}),". You are now ready to use the Adverse Media Monitoring skill."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},47607:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/amm-config-input-v3.3-e3abd81c253bc4844e86a660e31c7d4b.png"},78302:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/amm-config-investigation-b92b15524a0112815c02f7287fefe24b.png"},2781:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/amm-config-output-04b3a47efe3dbfca534c666671a3e832.jpg"},99936:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/amm-ui-google-input-e8d710b8ce4c5f1e3ba92972a03418eb.jpg"},85976:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/search-providers-65d6d8e0f2f6377a92d2773eb12656df.png"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},r=i.createContext(t);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);