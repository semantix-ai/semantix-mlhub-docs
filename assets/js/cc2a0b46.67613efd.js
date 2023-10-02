"use strict";(self.webpackChunksemantix_mlhub_docs=self.webpackChunksemantix_mlhub_docs||[]).push([[4388],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1},o="Serving Models - Overview",s={unversionedId:"serving-models/overview-2",id:"serving-models/overview-2",title:"Serving Models - Overview",description:"In Semantix ML Hub, we offer a robust model serving solution that allows you to deploy inference servers, essentially creating APIs to serve your machine learning models via HTTP requests. This capability enables you to make predictions and perform inference using your trained models seamlessly.",source:"@site/docs/serving-models/overview-2.md",sourceDirName:"serving-models",slug:"/serving-models/overview-2",permalink:"/semantix-mlhub-docs/docs/serving-models/overview-2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/serving-models/overview-2.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Serving Models",permalink:"/semantix-mlhub-docs/docs/category/serving-models"},next:{title:"Serving a Model via HTTP",permalink:"/semantix-mlhub-docs/docs/serving-models/serving-a-model-with-http"}},l={},u=[{value:"Key Features:",id:"key-features",level:3},{value:"Benefits:",id:"benefits",level:3}],p={toc:u},m="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serving-models---overview"},"Serving Models - Overview"),(0,a.kt)("p",null,"In Semantix ML Hub, we offer a robust model serving solution that allows you to deploy inference servers, essentially creating APIs to serve your machine learning models via HTTP requests. This capability enables you to make predictions and perform inference using your trained models seamlessly."),(0,a.kt)("h3",{id:"key-features"},"Key Features:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Model Selection:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You have the flexibility to define a unique model identifier, making it easy to manage and identify different models."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Model Frameworks:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Our platform supports a wide range of popular model frameworks, including Scikit-learn, PyTorch, TensorFlow, TensorFlow Lite, Keras, and ONNX. This ensures compatibility with your preferred machine learning frameworks."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Model Upload:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can upload your trained model file, whether it's a pickled model or a .pt model, to our platform for deployment."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Request Structure Definition:")),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Define how you want the inference server to receive requests, ensuring that it aligns with your specific use case. You have multiple options:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Utilize a feature table: All the necessary features for inference are preloaded into a feature table. You only need to pass the business ID defined in the feature table when making a request."),(0,a.kt)("li",{parentName:"ul"},"Send JSON requests: You can send JSON data with all the required features for inference at the time of the request."),(0,a.kt)("li",{parentName:"ul"},"Combine the above methods: Customize your request structure by using a combination of feature tables and JSON requests to meet your unique needs.")))))),(0,a.kt)("h3",{id:"benefits"},"Benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Easy Deployment:")," Deploying your machine learning models as inference servers is a straightforward process, allowing you to quickly put your models into production.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Framework Compatibility:")," Our platform supports a variety of popular machine learning frameworks, ensuring that you can deploy models trained with your preferred tools.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Flexible Request Handling:")," Define the request structure that best suits your use case, whether it involves feature tables, JSON data, or a combination of both.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Scalability:")," Serve models at scale by utilizing HTTP requests, making it easy to handle predictions for a large number of requests from your applications or services."))),(0,a.kt)("p",null,"Semantix ML Hub's model serving capabilities simplify the process of deploying and serving machine learning models, enabling you to harness the power of your models in real-world applications with ease."))}c.isMDXComponent=!0}}]);