"use strict";(self.webpackChunksemantix_mlhub_docs=self.webpackChunksemantix_mlhub_docs||[]).push([[5962],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(n),y=r,m=p["".concat(u,".").concat(y)]||p[y]||d[y]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},3650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:1},o="API Key Authentication",c={unversionedId:"account-management/authentication-with-api-key",id:"account-management/authentication-with-api-key",title:"API Key Authentication",description:"To ensure secure authorization for sending and receiving inferences in Semantix ML Hub, you need to create an API Key. Follow these steps to generate the correct authorization:",source:"@site/docs/account-management/authentication-with-api-key.md",sourceDirName:"account-management",slug:"/account-management/authentication-with-api-key",permalink:"/docs/account-management/authentication-with-api-key",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/account-management/authentication-with-api-key.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Account Management",permalink:"/docs/category/account-management"}},u={},s=[{value:"1. Navigate to Account Settings / API",id:"1-navigate-to-account-settings--api",level:4},{value:"2. Create a New API Key",id:"2-create-a-new-api-key",level:4},{value:"3. Set Expiration Date",id:"3-set-expiration-date",level:4},{value:"4. Create API Key",id:"4-create-api-key",level:4}],l={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"api-key-authentication"},"API Key Authentication"),(0,r.kt)("p",null,"To ensure secure authorization for sending and receiving inferences in Semantix ML Hub, you need to create an API Key. Follow these steps to generate the correct authorization:"),(0,r.kt)("h4",{id:"1-navigate-to-account-settings--api"},"1. Navigate to Account Settings / API"),(0,r.kt)("p",null,"Start by signing in to your Semantix ML Hub account and navigating to the 'Account Settings / API' tab."),(0,r.kt)("h4",{id:"2-create-a-new-api-key"},"2. Create a New API Key"),(0,r.kt)("p",null,"Select 'Create New' to initiate the process of generating a new API Key."),(0,r.kt)("h4",{id:"3-set-expiration-date"},"3. Set Expiration Date"),(0,r.kt)("p",null,"Choose an expiration date for the API Key. This date determines how long the API Key will remain valid. Be sure to select an appropriate expiration date that aligns with your project's security requirements."),(0,r.kt)("h4",{id:"4-create-api-key"},"4. Create API Key"),(0,r.kt)("p",null,"After setting the expiration date, click on 'Create API Key' to generate the API Key."),(0,r.kt)("p",null,"Your API Key is now created and ready for use. This key serves as your secure authentication token, allowing you to access and interact with Semantix ML Hub's APIs for sending and receiving inferences. Keep your API Key confidential and secure, as it provides access to your account's resources."),(0,r.kt)("p",null,"By following these steps, you ensure the correct authorization and secure access to Semantix ML Hub's features and functionalities."))}d.isMDXComponent=!0}}]);