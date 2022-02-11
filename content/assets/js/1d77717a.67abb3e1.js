"use strict";(self.webpackChunkwebsite_next=self.webpackChunkwebsite_next||[]).push([[56916],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return g}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),u=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=u(n),g=r,d=f["".concat(c,".").concat(g)]||f[g]||p[g]||o;return n?a.createElement(d,i(i({ref:t},l),{},{components:n})):a.createElement(d,i({ref:t},l))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9076:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return l},default:function(){return f}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),i=["components"],s={id:"functions-guarantees",title:"Processing guarantees",sidebar_label:"Processing guarantees",original_id:"functions-guarantees"},c=void 0,u={unversionedId:"functions-guarantees",id:"version-2.2.0/functions-guarantees",title:"Processing guarantees",description:"Pulsar Functions provides three different messaging semantics that you can apply to any function:",source:"@site/versioned_docs/version-2.2.0/functions-guarantees.md",sourceDirName:".",slug:"/functions-guarantees",permalink:"/docs/2.2.0/functions-guarantees",editUrl:"https://github.com/apache/pulsar/edit/master/site2/website-next/versioned_docs/version-2.2.0/functions-guarantees.md",tags:[],version:"2.2.0",frontMatter:{id:"functions-guarantees",title:"Processing guarantees",sidebar_label:"Processing guarantees",original_id:"functions-guarantees"},sidebar:"version-2.2.0/docsSidebar",previous:{title:"Deploying functions",permalink:"/docs/2.2.0/functions-deploying"},next:{title:"State Storage",permalink:"/docs/2.2.0/functions-state"}},l=[{value:"Applying processing guarantees to a function",id:"applying-processing-guarantees-to-a-function",children:[],level:2},{value:"Updating the processing guarantees of a function",id:"updating-the-processing-guarantees-of-a-function",children:[],level:2}],p={toc:l};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pulsar Functions provides three different messaging semantics that you can apply to any function:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"left"},"Delivery semantics"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"At-most-once")," delivery"),(0,o.kt)("td",{parentName:"tr",align:"left"},'Each message that is sent to the function will most likely be processed but also may not be (hence the "at most")')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"At-least-once")," delivery"),(0,o.kt)("td",{parentName:"tr",align:"left"},'Each message that is sent to the function could be processed more than once (hence the "at least")')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("strong",{parentName:"td"},"Effectively-once")," delivery"),(0,o.kt)("td",{parentName:"tr",align:"left"},"Each message that is sent to the function will have one output associated with it")))),(0,o.kt)("h2",{id:"applying-processing-guarantees-to-a-function"},"Applying processing guarantees to a function"),(0,o.kt)("p",null,"You can set the processing guarantees for a Pulsar Function when you create the Function. This ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.2.0/pulsar-admin#create-1"},(0,o.kt)("inlineCode",{parentName:"a"},"pulsar-function create"))," command, for example, would apply effectively-once guarantees to the Function:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions create \\\n  --processing-guarantees EFFECTIVELY_ONCE \\\n  # Other function configs\n\n")),(0,o.kt)("p",null,"The available options are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ATMOST_ONCE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ATLEAST_ONCE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"EFFECTIVELY_ONCE"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"By default, Pulsar Functions provide at-most-once delivery guarantees. So if you create a function without supplying a value for the ",(0,o.kt)("inlineCode",{parentName:"p"},"--processingGuarantees")," flag, then the function will provide at-most-once guarantees.")),(0,o.kt)("h2",{id:"updating-the-processing-guarantees-of-a-function"},"Updating the processing guarantees of a function"),(0,o.kt)("p",null,"You can change the processing guarantees applied to a function once it's already been created using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/2.2.0/pulsar-admin#update-1"},(0,o.kt)("inlineCode",{parentName:"a"},"update"))," command. Here's an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\n$ bin/pulsar-admin functions update \\\n  --processing-guarantees ATMOST_ONCE \\\n  # Other function configs\n\n")))}f.isMDXComponent=!0}}]);