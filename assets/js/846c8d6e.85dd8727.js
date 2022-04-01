"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[1122],{5242:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>h});var n=t(3929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=n.createContext({}),p=function(e){var r=n.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(i.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(t),h=a,f=m["".concat(i,".").concat(h)]||m[h]||l[h]||o;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var p=2;p<o;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8452:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var n=t(6346),a=t(8155),o=(t(3929),t(5242)),s=["components"],c={title:"rush check"},i=void 0,p={unversionedId:"pages/commands/rush_check",id:"pages/commands/rush_check",title:"rush check",description:"",source:"@site/docs/pages/commands/rush_check.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_check",permalink:"/pages/commands/rush_check",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_check.md",tags:[],version:"current",frontMatter:{title:"rush check"},sidebar:"docsSidebar",previous:{title:"rush change",permalink:"/pages/commands/rush_change"},next:{title:"rush deploy",permalink:"/pages/commands/rush_deploy"}},u={},l=[],m={toc:l};function h(e){var r=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: rush check [-h] [--variant VARIANT] [--json]\n\nChecks each project's package.json files and ensures that all dependencies\nare of the same version throughout the repository.\n\nOptional arguments:\n  -h, --help         Show this help message and exit.\n  --variant VARIANT  Run command using a variant installation configuration.\n                     This parameter may alternatively be specified via the\n                     RUSH_VARIANT environment variable.\n  --json             If this flag is specified, output will be in JSON format.\n")))}h.isMDXComponent=!0}}]);