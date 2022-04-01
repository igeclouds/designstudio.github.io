"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[346],{5242:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(3929);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,c(c({ref:t},l),{},{components:r})):n.createElement(f,c({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9380:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(6346),a=r(8155),o=(r(3929),r(5242)),c=["components"],i={title:"rush update-cloud-credentials (experimental)"},s=void 0,u={unversionedId:"pages/commands/rush_update-cloud-credentials",id:"pages/commands/rush_update-cloud-credentials",title:"rush update-cloud-credentials (experimental)",description:"\u53c2\u8003\u66f4\u591a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_update-cloud-credentials.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_update-cloud-credentials",permalink:"/zh-cn/pages/commands/rush_update-cloud-credentials",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_update-cloud-credentials.md",tags:[],version:"current",frontMatter:{title:"rush update-cloud-credentials (experimental)"},sidebar:"docsSidebar",previous:{title:"rush update-autoinstaller",permalink:"/zh-cn/pages/commands/rush_update-autoinstaller"},next:{title:"rush version",permalink:"/zh-cn/pages/commands/rush_version"}},l={},p=[{value:"\u53c2\u8003\u66f4\u591a",id:"\u53c2\u8003\u66f4\u591a",level:2}],d={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u7528\u6cd5\uff1a rush update-cloud-credentials [-h] [-i]\n                                     [--credential CREDENTIAL_STRING] [-d]\n\n\uff08\u5b9e\u9a8c\u6027\uff09\u5982\u679c\u914d\u7f6e\u4e86\u6784\u5efa\u7f13\u5b58\u72d7\u80fd\uff0c\u90a3\u4e48\u8be5\u6307\u4ee4\u53ef\u4ee5\u53ef\u4ee5\u65b9\u4fbf\u7684\u66f4\u65b0\u57fa\u4e8e\u4e91\u670d\u52a1\u5546\u7684\u51ed\u8bc1\u3002\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\n  -i, --interactive     \u5982\u679c\u4e91\u670d\u52a1\u5546\u652f\u6301\u7684\u8bdd\uff0c\u53ef\u4ee5\u4ee5\u4ea4\u4e92\u5f62\u5f0f\u6765\u66f4\u65b0\u51ed\u8bc1\u3002\n  --credential CREDENTIAL_STRING\n                        \u4e00\u4e2a\u5c06\u88ab\u7f13\u5b58\u7684\u9759\u6001\u51ed\u8bc1\u3002\n  -d, --delete          \u4e00\u65e6\u6307\u5b9a\u6539\u53c2\u6570\uff0c\u4f1a\u5220\u9664\u5b58\u50a8\u7684\u51ed\u8bc1\u3002\n")),(0,o.kt)("h2",{id:"\u53c2\u8003\u66f4\u591a"},"\u53c2\u8003\u66f4\u591a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../maintainer/build_cache"},"\u542f\u7528\u6784\u5efa\u7f13\u5b58"))))}m.isMDXComponent=!0}}]);