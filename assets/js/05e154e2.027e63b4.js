"use strict";(self.webpackChunksemantix_mlhub_docs=self.webpackChunksemantix_mlhub_docs||[]).push([[2632],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=u(a),d=n,g=f["".concat(l,".").concat(d)]||f[d]||p[d]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[f]="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8460:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(7462),n=(a(7294),a(3905));const o={sidebar_position:1},i="Ingesting Features from a CSV",s={unversionedId:"feature-store/ingestion-data/ingesting-features-from-a-csv-file",id:"feature-store/ingestion-data/ingesting-features-from-a-csv-file",title:"Ingesting Features from a CSV",description:"In Semantix ML Hub, you can conveniently ingest features from a CSV dataset, making it a seamless process to work with your data. Follow these steps to upload a CSV dataset and select features based on the data provided:",source:"@site/docs/feature-store/ingestion-data/ingesting-features-from-a-csv-file.md",sourceDirName:"feature-store/ingestion-data",slug:"/feature-store/ingestion-data/ingesting-features-from-a-csv-file",permalink:"/docs/feature-store/ingestion-data/ingesting-features-from-a-csv-file",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Ingestion Data",permalink:"/docs/category/ingestion-data"},next:{title:"Ingesting Data with the Python SDK",permalink:"/docs/feature-store/ingestion-data/ingesting-data-with-python-sdk"}},l={},u=[],c={toc:u},f="wrapper";function p(e){let{components:t,...o}=e;return(0,n.kt)(f,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ingesting-features-from-a-csv"},"Ingesting Features from a CSV"),(0,n.kt)("p",null,"In Semantix ML Hub, you can conveniently ingest features from a CSV dataset, making it a seamless process to work with your data. Follow these steps to upload a CSV dataset and select features based on the data provided:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"1. Upload the CSV Dataset")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Begin by navigating to the ",(0,n.kt)("strong",{parentName:"li"},"Data Connectors")," section within Semantix ML Hub."),(0,n.kt)("li",{parentName:"ul"},'Select "Add New" to start the process of ingesting features from your CSV dataset.'),(0,n.kt)("li",{parentName:"ul"},"Upload your CSV file by either dragging and dropping it or selecting it from your local file system.\n",(0,n.kt)("img",{alt:"ft_upcsv",src:a(3316).Z,width:"823",height:"261"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"2. Create Feature Table")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Now, you can proceed with selecting the features you want to use from the CSV dataset. Features are the specific attributes or columns of your data that are relevant to your machine learning task. ",(0,n.kt)("a",{parentName:"li",href:"/docs/feature-store/creating-a-feature-table"},"check this page"),".")),(0,n.kt)("p",null,"By following these steps, you can effortlessly ingest features from a CSV dataset into Semantix ML Hub. This feature-rich platform streamlines the process of working with your data, enabling you to focus on developing machine learning models and deriving valuable insights from your data. With your features now available, you can proceed with creating feature tables and building your machine learning projects."))}p.isMDXComponent=!0},3316:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/ft_upcsv-7afffd6fcb51212b2a04a6a9706e9ba5.png"}}]);