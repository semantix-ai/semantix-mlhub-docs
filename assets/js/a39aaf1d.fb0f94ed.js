"use strict";(self.webpackChunksemantix_mlhub_docs=self.webpackChunksemantix_mlhub_docs||[]).push([[8010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),g=o,m=p["".concat(s,".").concat(g)]||p[g]||d[g]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},9693:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:1},a="Getting Started with Semantix ML Hub",c={unversionedId:"getting-started/first-steps",id:"getting-started/first-steps",title:"Getting Started with Semantix ML Hub",description:"Welcome to Semantix ML Hub! This guide will help you get started with the basic workflow for building, deploying, and managing machine learning models with our platform.",source:"@site/docs/getting-started/first-steps.md",sourceDirName:"getting-started",slug:"/getting-started/first-steps",permalink:"/semantix-mlhub-docs/docs/getting-started/first-steps",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/semantix-mlhub-docs/docs/category/getting-started"},next:{title:"Create a Financial Risk Predictor",permalink:"/semantix-mlhub-docs/docs/getting-started/create-a-financial-risk-predictor"}},s={},l=[{value:"Signing Up",id:"signing-up",level:3},{value:"Creating Your First Project",id:"creating-your-first-project",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started-with-semantix-ml-hub"},"Getting Started with Semantix ML Hub"),(0,o.kt)("h2",{id:""}),(0,o.kt)("p",null,"Welcome to Semantix ML Hub! This guide will help you get started with the basic workflow for building, deploying, and managing machine learning models with our platform."),(0,o.kt)("h3",{id:"signing-up"},"Signing Up"),(0,o.kt)("p",null,"First, you'll need to sign up for a Semantix ML Hub account. You can sign up on our website at ",(0,o.kt)("a",{parentName:"p",href:"https://home.ml.semantixhub.com"},"https://home.ml.semantixhub.com"),". Once you've entered your information and confirmed your email, you'll have access to the ML Hub."),(0,o.kt)("h3",{id:"creating-your-first-project"},"Creating Your First Project"),(0,o.kt)("p",null,"After logging in, you'll be taken to the Data Connectors page. Here you can connect to an external source of data or upload a simple CSV (not recommended for production use cases)."),(0,o.kt)("p",null,'To create a connection, click the button with the type of Data Connector you desire to use or on the "Add New" button on the top of the page. Provide the necessary information for configuring the connection and complete by clicking in "Add Data Connector". You can look at our documentation for learning ',(0,o.kt)("a",{parentName:"p",href:"/docs/feature-store/ingesting-features-from-a-pipeline"},"how to build an ingestion integration with your preferred data pipeline management tool"),"."),(0,o.kt)("p",null,"Once your data connector is created, you'll be taken to the feature table page so that you can start configuring your feature store."))}d.isMDXComponent=!0}}]);