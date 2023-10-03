"use strict";(self.webpackChunksemantix_mlhub_docs=self.webpackChunksemantix_mlhub_docs||[]).push([[6970],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),k=r,m=u["".concat(o,".").concat(k)]||u[k]||d[k]||i;return a?n.createElement(m,l(l({ref:t},c),{},{components:a})):n.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},6244:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},l="Create a Financial Risk Predictor",s={unversionedId:"getting-started/create-a-financial-risk-predictor",id:"getting-started/create-a-financial-risk-predictor",title:"Create a Financial Risk Predictor",description:"In this guide, we will walk you through the process of using Semantix ML Hub to create a Financial Risk Predictor. This tool empowers you to build, deploy, and use a machine learning model for predicting financial risk, making data-driven decisions about loan defaults. Follow these step-by-step instructions to get started:",source:"@site/docs/getting-started/create-a-financial-risk-predictor.md",sourceDirName:"getting-started",slug:"/getting-started/create-a-financial-risk-predictor",permalink:"/docs/getting-started/create-a-financial-risk-predictor",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Getting Started with Semantix ML Hub",permalink:"/docs/getting-started/first-steps"},next:{title:"Concepts",permalink:"/docs/getting-started/concepts"}},o={},p=[],c={toc:p},u="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(u,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-financial-risk-predictor"},"Create a Financial Risk Predictor"),(0,r.kt)("h2",{id:""}),(0,r.kt)("p",null,"In this guide, we will walk you through the process of using Semantix ML Hub to create a Financial Risk Predictor. This tool empowers you to build, deploy, and use a machine learning model for predicting financial risk, making data-driven decisions about loan defaults. Follow these step-by-step instructions to get started:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1. Download the CSV")),(0,r.kt)("p",null,"Please download the following dataset:\n",(0,r.kt)("a",{target:"_blank",href:a(9552).Z},"financial_risk_dataset.csv")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. Add a Data Connector")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to the ",(0,r.kt)("strong",{parentName:"li"},"Data Connectors")," section within Semantix ML Hub."),(0,r.kt)("li",{parentName:"ul"},'Select "Add New."'),(0,r.kt)("li",{parentName:"ul"},"Upload the CSV file you downloaded in step 1."),(0,r.kt)("li",{parentName:"ul"},"Provide a name for the data connector.\n",(0,r.kt)("img",{alt:"finrisk1",src:a(7480).Z,width:"912",height:"351"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3. Create a Feature Table")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Navigate to the ",(0,r.kt)("strong",{parentName:"li"},"Feature Tables")," page."),(0,r.kt)("li",{parentName:"ul"},'Click on "Create Feature Table"'),(0,r.kt)("li",{parentName:"ul"},"Give your feature table a name."),(0,r.kt)("li",{parentName:"ul"},"Select the CSV file used in the Data Connectors page.\n",(0,r.kt)("img",{alt:"finrisk2",src:a(6473).Z,width:"910",height:"259"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. Define Business Entity")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using only normal characters and numbers, name your Business Entity."),(0,r.kt)("li",{parentName:"ul"},"Select '",(0,r.kt)("strong",{parentName:"li"},"index"),"' as the ",(0,r.kt)("strong",{parentName:"li"},"Identifier")," and  '",(0,r.kt)("strong",{parentName:"li"},"string"),"' as the ",(0,r.kt)("strong",{parentName:"li"},"Type"),".\n",(0,r.kt)("img",{alt:"finrisk3",src:a(8584).Z,width:"913",height:"502"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5. Add Features to the Feature Table")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click on "Add Feature."'),(0,r.kt)("li",{parentName:"ul"},"Add the following three features with their respective types:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feature"),": employed ,      ",(0,r.kt)("strong",{parentName:"li"},"type"),": integer"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feature"),": bank_balance , ",(0,r.kt)("strong",{parentName:"li"},"type"),": float"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"feature"),":annual_salary , ",(0,r.kt)("strong",{parentName:"li"},"type"),": float\n",(0,r.kt)("img",{alt:"finrisk4",src:a(5600).Z,width:"910",height:"439"}))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6. Create the Feature Table")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Click "Create" to create the Feature Table.'),(0,r.kt)("li",{parentName:"ul"},"Please wait until the Feature Table finishes deploying before moving onto the next step. You will know that the Feature Table is fully deployed when the status turns green.\n",(0,r.kt)("img",{alt:"finrisk5",src:a(4504).Z,width:"910",height:"196"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7. Set Up the Inference Server")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"After the Feature Table is fully deployed, go to the ",(0,r.kt)("strong",{parentName:"p"},"Inference Servers")," tab.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Select "Add Inference Server."\n',(0,r.kt)("img",{alt:"finrisk6",src:a(1020).Z,width:"910",height:"232"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name your Inference Server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'Choose "ONNX" as the framework.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Upload the default_model_1.onnx file (provided).\n",(0,r.kt)("a",{target:"_blank",href:a(2100).Z},"default_model_1.onnx"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure your Request Body by adding '",(0,r.kt)("strong",{parentName:"p"},"index"),"' as your REQUEST_BODY_KEY.\n",(0,r.kt)("img",{alt:"finrisk7",src:a(2664).Z,width:"913",height:"509"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add the 3 features used when setting up your Feature Table. In the left column, select the dataset that was previously uploaded. In the right column, select the 3 features: ",(0,r.kt)("strong",{parentName:"p"},"employed"),", ",(0,r.kt)("strong",{parentName:"p"},"bank_balance"),", and",(0,r.kt)("strong",{parentName:"p"}," annual_salary"),".\n",(0,r.kt)("img",{alt:"finrisk8",src:a(5917).Z,width:"908",height:"507"})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"8. Wait for Inference Server Allocation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Your Inference Server is now created, but please allow a few minutes for your server to be fully deployed. . You can use this time to discuss other aspects of your project, or to generate an API Key.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"9. Generate an API Key")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Head over to the ",(0,r.kt)("strong",{parentName:"li"},"Account Settings / API")," tab.\n",(0,r.kt)("img",{alt:"finrisk9",src:a(7455).Z,width:"2372",height:"488"})),(0,r.kt)("li",{parentName:"ul"},'Select "Create New"'),(0,r.kt)("li",{parentName:"ul"},"Adjust the expiration date to your preferred date and select 'Create API Key'.\n",(0,r.kt)("img",{alt:"finrisk10",src:a(8267).Z,width:"2362",height:"846"}))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"10. Send an Inference")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Return to the Inference Server tab and make sure your server is deployed by viewing the ",(0,r.kt)("strong",{parentName:"p"},"Status"),". Once fully deployed, the status will turn green and you can move on to the next step.\n",(0,r.kt)("img",{alt:"finrisk11",src:a(4716).Z,width:"2368",height:"274"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Copy your Inference Server's API Endpoint.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Use a tool that works as an API platform, provide your endpoint, API Key, and use the following JSON command to send a ",(0,r.kt)("strong",{parentName:"p"},"POST")," request:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "index": "2"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"11. Inference Results")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"After running the command, you will receive a confidence level indicating how likely the employee is to default on a loan.\n",(0,r.kt)("img",{alt:"finrisk12",src:a(4152).Z,width:"583",height:"180"}))),(0,r.kt)("p",null,"Follow these steps meticulously to create your Financial Risk Predictor using Semantix ML Hub. This tool empowers you to make informed financial decisions based on machine learning predictions."))}d.isMDXComponent=!0},2100:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/default_model_1-2a7fbdb532343706c5eb4ff9a2d69a11.onnx"},9552:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/financial_risk_dataset-b8a38de61832cbc60dcba9472c9dc1d7.csv"},7480:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk1-44c4d076a0be2d9ef6029bce7382ef98.png"},8267:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk10-792544d5c2a6574223aa582fe3eff633.png"},4716:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk11-c7540517771537d266651140e3db2fe1.png"},4152:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk12-03d2fe214c2335f7ea6443647fc2d9e6.png"},6473:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk2-647a6c6fad4568a44d22b296dcbfe676.png"},8584:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk3-888652f335310dc61ee3f923a8acd29a.png"},5600:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk4-80b2cf0367a6016665ad2259d7d3983c.png"},4504:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk5-43c69e25e55eb50ab3ba6d1720481be6.png"},1020:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk6-52443141dabb44b2b968f859ede4e904.png"},2664:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk7-0f3dd6ba6a2757dc16046d30f2d5e6a0.png"},5917:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk8-ba7a7e28898918654c23c6d8c792b061.png"},7455:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/finrisk9-314e9d0c12920aa674dc617b412cdac6.png"}}]);