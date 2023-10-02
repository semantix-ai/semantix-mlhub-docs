"use strict";(self.webpackChunksemantix_mlhub_docs=self.webpackChunksemantix_mlhub_docs||[]).push([[4017],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9544:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:2},o="Serving a Model via HTTP",s={unversionedId:"serving-models/serving-a-model-with-http",id:"serving-models/serving-a-model-with-http",title:"Serving a Model via HTTP",description:"Serving your machine learning model via HTTP in Semantix ML Hub is a streamlined process that allows you to deploy your models quickly and make predictions accessible through HTTP requests. Follow these steps to serve a model:",source:"@site/docs/serving-models/serving-a-model-with-http.md",sourceDirName:"serving-models",slug:"/serving-models/serving-a-model-with-http",permalink:"/semantix-mlhub-docs/docs/serving-models/serving-a-model-with-http",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/serving-models/serving-a-model-with-http.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Serving Models - Overview",permalink:"/semantix-mlhub-docs/docs/serving-models/overview-2"},next:{title:"Account Management",permalink:"/semantix-mlhub-docs/docs/category/account-management"}},l={},p=[],c={toc:p},m="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(m,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serving-a-model-via-http"},"Serving a Model via HTTP"),(0,a.kt)("p",null,"Serving your machine learning model via HTTP in Semantix ML Hub is a streamlined process that allows you to deploy your models quickly and make predictions accessible through HTTP requests. Follow these steps to serve a model:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Access Inference Servers Page:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Navigate to the Inference Servers page within Semantix ML Hub.\n",(0,a.kt)("img",{alt:"infserver",src:r(7097).Z,width:"824",height:"461"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Add Inference Server:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'Click on the "Add Inference Server" button to initiate the model serving setup.\n',(0,a.kt)("img",{alt:"infserveadd",src:r(274).Z,width:"823",height:"223"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Define Model Name:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Provide a unique and descriptive name for the particular model you wish to serve. This identifier will make it easier to manage and distinguish your models.\n",(0,a.kt)("img",{alt:"infserve_name",src:r(8161).Z,width:"822",height:"428"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Select Model Framework:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Choose the appropriate model framework from the available options. Semantix ML Hub supports various frameworks, including Scikit-learn, PyTorch, TensorFlow, TensorFlow Lite, Keras, and ONNX."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Upload Model File:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Upload the trained model file from your local computer. This file should contain the necessary model parameters and weights for inference.\n",(0,a.kt)("img",{alt:"infserve_frame",src:r(5445).Z,width:"820",height:"250"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure Request Body:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Define the request body that the inference server should expect when receiving HTTP requests.\n",(0,a.kt)("img",{alt:"infserveupl",src:r(9276).Z,width:"825",height:"269"}))))),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Configure from Features:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Add the features from your feature tables.\n",(0,a.kt)("img",{alt:"infserveft",src:r(7469).Z,width:"794",height:"273"})))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Create Inference Server:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},'After configuring the model\'s settings and features, click on the "Create Inference Server" button to finalize the deployment process.\n',(0,a.kt)("img",{alt:"infserve_create",src:r(5904).Z,width:"822",height:"371"}))))),(0,a.kt)("p",null,"Once you've completed these steps, your model will be served via HTTP, and you'll be ready to make predictions and perform inference by sending HTTP requests to the designated inference server. This streamlined approach to model deployment ensures that your machine learning models are readily accessible for real-world applications and integration with various services."))}d.isMDXComponent=!0},5904:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/infserve_create-f455e32780cf80efb17b8e28fc4f8037.png"},8161:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/infserve_name-440afc9bd92b2630838bc2698235f405.png"},274:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/infserveadd-2ee99d806be6baac98f67c54502e2fda.png"},5445:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/infserveframe-9401382de02af28c42f3d248def00cdf.png"},7469:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/infserveft-932ba8af42b74ea99d7a08c5d97ccefd.png"},7097:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/infserver-6796c7021039bd9f00796d964209e5e0.png"},9276:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/infserveupl-b7b73baec49bc4c48236e0bcb7a22818.png"}}]);