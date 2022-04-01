"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9808],{5242:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(3929);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return t?n.createElement(h,i(i({ref:r},u),{},{components:t})):n.createElement(h,i({ref:r},u))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6017:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var n=t(6346),a=t(8155),o=(t(3929),t(5242)),i=["components"],c={title:"rush write-build-cache (experimental)"},s=void 0,l={unversionedId:"pages/commands/rush_write-build-cache",id:"pages/commands/rush_write-build-cache",title:"rush write-build-cache (experimental)",description:"See also",source:"@site/docs/pages/commands/rush_write-build-cache.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_write-build-cache",permalink:"/pages/commands/rush_write-build-cache",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_write-build-cache.md",tags:[],version:"current",frontMatter:{title:"rush write-build-cache (experimental)"},sidebar:"docsSidebar",previous:{title:"rush version",permalink:"/pages/commands/rush_version"},next:{title:"Environment variables",permalink:"/pages/configs/environment_vars"}},u={},p=[{value:"See also",id:"see-also",level:2}],m={toc:p};function d(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"usage: rush write-build-cache [-h] -c COMMAND [-v]\n\n(EXPERIMENTAL) If the build cache is configured, when this command is run in\nthe folder of a project, write the current state of the project to the cache.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -c COMMAND, --command COMMAND\n                        (Required) The command run in the current project\n                        that produced the current project state.\n  -v, --verbose         Display verbose log information.\n")),(0,o.kt)("h2",{id:"see-also"},"See also"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../maintainer/build_cache"},"Enabling the build cache"))))}d.isMDXComponent=!0}}]);