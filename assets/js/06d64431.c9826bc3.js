"use strict";(self.webpackChunksemantix_mlhub_docs=self.webpackChunksemantix_mlhub_docs||[]).push([[6240],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(a),f=r,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},3491:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:2},o="Ingesting Data with the Python SDK",s={unversionedId:"feature-store/ingestion-data/ingesting-data-with-python-sdk",id:"feature-store/ingestion-data/ingesting-data-with-python-sdk",title:"Ingesting Data with the Python SDK",description:"The Semantix ML Hub Python SDK provides an easy way to ingest data into the feature store from your Python applications and scripts.",source:"@site/docs/feature-store/ingestion-data/ingesting-data-with-python-sdk.md",sourceDirName:"feature-store/ingestion-data",slug:"/feature-store/ingestion-data/ingesting-data-with-python-sdk",permalink:"/docs/feature-store/ingestion-data/ingesting-data-with-python-sdk",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ingesting Features from a CSV",permalink:"/docs/feature-store/ingestion-data/ingesting-features-from-a-csv-file"},next:{title:"Ingesting Features From a Pipeline Tool",permalink:"/docs/feature-store/ingestion-data/ingesting-features-from-a-pipeline"}},l={},u=[{value:"Installation",id:"installation",level:3},{value:"Creating a Client",id:"creating-a-client",level:3},{value:"Configuring the schema of your feature tables",id:"configuring-the-schema-of-your-feature-tables",level:3},{value:"Ingesting a Pandas DataFrame",id:"ingesting-a-pandas-dataframe",level:3},{value:"Ingesting from other sources",id:"ingesting-from-other-sources",level:3},{value:"Scheduled ingestion",id:"scheduled-ingestion",level:3}],p={toc:u},d="wrapper";function c(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ingesting-data-with-the-python-sdk"},"Ingesting Data with the Python SDK"),(0,r.kt)("p",null,"The Semantix ML Hub Python SDK provides an easy way to ingest data into the feature store from your Python applications and scripts."),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("p",null,"First install the SDK:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip install elemeno-ai-sdk\n")),(0,r.kt)("h3",{id:"creating-a-client"},"Creating a Client"),(0,r.kt)("p",null,"First you will need to export an environment variable with your Semantix ML Hub Api Key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export MLHUB_API_KEY=<YOUR_API_KEY>\n")),(0,r.kt)("p",null,"Replace YOUR_API_KEY with your actual API key from your Semantix account. If you don't have an API key, ",(0,r.kt)("a",{parentName:"p",href:"/"},"check this page"),"."),(0,r.kt)("p",null,"Then create a client instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from elemeno_ai_sdk.ml.features.feature_table import FeatureTable\n\nft = FeatureTable()\n")),(0,r.kt)("h3",{id:"configuring-the-schema-of-your-feature-tables"},"Configuring the schema of your feature tables"),(0,r.kt)("p",null,"In order to use the feature store you need to define the schema of your feature tables. This is an important step to ensure your feature store is organized and your features are stored using the appropriate data type."),(0,r.kt)("p",null,"You have the option to create the feature table schema definition via our GUI screen or via the SDK. The next steps will show how to perform this task using the SDK, if you prefer doing via GUI ",(0,r.kt)("a",{parentName:"p",href:"/docs/feature-store/creating-a-feature-table"},"check this page"),"."),(0,r.kt)("p",null,"The first step is to create a JSON schema file. The file should look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{  \n    "name": "creditcard_demo",  \n    "entities": ["id"],  \n    "schema": [  \n        {"name": "v1", "type": "float"},  \n        {"name": "v2", "type": "float"},\n        {"name": "v3", "type": "float"},\n        {"name": "v4", "type": "float"},\n        {"name": "class", "type": "int"},\n        {"name": "event_timestamp", "type": "timestamp"}\n    ]\n}\n')),(0,r.kt)("p",null,"Here are a few details about what is the schema file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"name: This is the unique identifier of our feature table."),(0,r.kt)("li",{parentName:"ul"},"entities: The entity identifier is required, you can have composed identifiers with multiple properties if necessary. When reading features, you will may want to use the entity identifier to filter features for specific entities."),(0,r.kt)("li",{parentName:"ul"},"schema: This is all fields in the dataset. Adding field event_timestamp to filter features between data.")),(0,r.kt)("p",null,"Once you create your schema file you need to call the ingest schema method and create an instance of your feature table."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'await ft.create("./fs_schema.json")\n')),(0,r.kt)("h3",{id:"ingesting-a-pandas-dataframe"},"Ingesting a Pandas DataFrame"),(0,r.kt)("p",null,"The simplest way to ingest data is directly from a Pandas DataFrame:"),(0,r.kt)("p",null,"Creating DataFrame"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n\ncredicard_demo = pd.DataFrame({\n    'id': [1, 2, 3],\n    'v1': [0.3, 0.5, 0.93],\n    'v2': [0.1, 0.25, 0.29],\n    'v3': [0.1, 0.25, 0.29],\n    'v4': [0.1, 0.25, 0.29],\n    'class': [0, 1, 1],\n    'event_timestamp': ['2022-07-14 18:08:05.488248', '2022-07-14 18:08:06.581331', '2022-07-15 11:20:03.900023']\n})\n")),(0,r.kt)("p",null,"This will ingest the DataFrame into the feature table sepal_ft created in the previous step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from elemeno_ai_sdk.ml.features.feature_store import FeatureStore\n\nfs = FeatureStore()\nawait fs.ingest('creditcard_demo', credicard_demo)\n")),(0,r.kt)("h3",{id:"ingesting-from-other-sources"},"Ingesting from other sources"),(0,r.kt)("p",null,"You can also ingest data from any other source by converting it to pandas dataframe. The example below reads. from a CSV file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from elemeno_ai_sdk.ml.features.feature_store import FeatureStore\n\ndata = pd.read_csv(FILE_PATH)\nfs = FeatureStore()\nawait fs.ingest('creditcard_demo', credicard_demo)\n")),(0,r.kt)("p",null,"The source CSV in this example must have columns that match the properties you defined in the schema file."),(0,r.kt)("h3",{id:"scheduled-ingestion"},"Scheduled ingestion"),(0,r.kt)("p",null,"When integrating in production, oftentimes you will need to repeat the ingestion operation from time to time so that your feature store receives newly generated data from your sources. Our product does not offer a scheduler for your jobs via SDK, however you can use any pipeline management tool to have the job running on a cron."),(0,r.kt)("p",null,'The data ingested in the feature store is never updated and it will be only deleted when you close your account or request a deletion via support ticket. The data in the feature tables is append-only, and there\'s no constraints in the ID field. You can ingest the same features, with the same entity ID value several times. But you need to make a good use of the "event_timestamp" field so that when you\'re training models you can select the period of features you want to use. During inference time, our server will always retrieve the most recent version of the feature. If there are multiple items with the same entity ID, during inference, the one with the latest "event_timestamp" will be used.'))}c.isMDXComponent=!0}}]);