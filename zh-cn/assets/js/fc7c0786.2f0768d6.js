"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8281],{5242:(e,n,r)=>{r.d(n,{Zo:()=>u,kt:()=>m});var t=r(3929);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),i=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},u=function(e){var n=i(e.components);return t.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},l=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=i(r),m=a,f=l["".concat(p,".").concat(m)]||l[m]||d[m]||o;return r?t.createElement(f,s(s({ref:n},u),{},{components:r})):t.createElement(f,s({ref:n},u))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=l;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}l.displayName="MDXCreateElement"},8344:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var t=r(394),a=r(1614),o=(r(3929),r(5242)),s=["components"],c={title:"rush add"},p=void 0,i={unversionedId:"pages/commands/rush_add",id:"pages/commands/rush_add",title:"rush add",description:"",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/commands/rush_add.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_add",permalink:"/zh-cn/pages/commands/rush_add",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_add.md",tags:[],version:"current",frontMatter:{title:"rush add"},sidebar:"docsSidebar",previous:{title:"\u4f7f\u7528 Rush \u5e93\u7684 API",permalink:"/zh-cn/pages/advanced/api"},next:{title:"rush build",permalink:"/zh-cn/pages/commands/rush_build"}},u={},d=[],l={toc:d};function m(e){var n=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},l,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\u7528\u6cd5\uff1arush add [-h] -p PACKAGE [--exact] [--caret] [--dev] [-m] [-s] [--all]\n\n\u5728\u5f53\u524d\u9879\u76ee\u4e0b\uff08\u7531\u5f53\u524d\u7684\u5de5\u4f5c\u76ee\u5f55\u51b3\u5b9a\uff09\u6dfb\u52a0\u6307\u5b9a\u7684\u5305\u4f5c\u4e3a\u4f9d\u8d56\uff0c\u7136\u540e\u8fd0\u884c"rush update"\u3002\n\u5982\u679c\u7248\u672c\u6ca1\u6709\u6307\u5b9a\uff0c\u5219\u4f1a\u81ea\u52a8\u68c0\u6d4b\u7248\u672c\uff08\u901a\u5e38\u662f\u6700\u65b0\u7684\u7248\u672c\u6216\u8005\u662f\u4e0d\u4f1a\u7834\u574f "ensureConsistentVersions" \u7b56\u7565\u7684\u7248\u672c\uff09\n\u5982\u679c\u6307\u5b9a\u4e86\u7248\u672c\u8303\u56f4\uff08\u6216\u8005\u5de5\u4f5c\u533a\u8303\u56f4\uff09\uff0c\u5219\u4f1a\u4f7f\u7528\u8303\u56f4\u5185\u7684\u6700\u65b0\u7248\u672c\u3002\n\u5982\u679c\u6ca1\u6709\u4f7f\u7528 "--exact" \u6216 "--carte" \u53c2\u6570\uff0c\u5219\u4f1a\u81ea\u52a8\u5728\u7248\u672c\u53f7\u524d\u9762\u52a0\u4e0a\u6ce2\u6d6a\u53f7\u3002\n\u5982\u679c\u4f7f\u7528 "--make-consistent" \u53c2\u6570\uff0c\u5219\u53ef\u4ee5\u66f4\u65b0\u6240\u6709\u5305\u7684 package.json \u6587\u4ef6\uff0c\u4f7f\u5176\u4f7f\u7528\u76f8\u540c\u7684\u4f9d\u8d56\u3002\n\n\u53ef\u9009\u53c2\u6570\uff1a\n  -h, --help            \u5c55\u793a\u5e2e\u52a9\u4fe1\u606f\u5e76\u9000\u51fa\u3002\n  -p PACKAGE, --package PACKAGE\n                        (\u5fc5\u987b) \u5e94\u5f53\u88ab\u6dfb\u52a0\u5230\u4f9d\u8d56\u7684\u5305\u540d\u3002\u53ef\u4ee5\u5728 "@" \u7b26\u53f7\u540e\u6dfb\u52a0\u8bed\u4e49\u5316\u7248\u672c\u3002\n                        \u8b66\u544a\uff1a \u7279\u5f81\u5b57\u7b26\u4e32\u7ecf\u5e38\u88ab shell \u89e3\u91ca\uff0c\u6240\u4ee5\u5efa\u8bae\u4f7f\u7528\u5f15\u53f7\u3002\u4f8b\u5982\uff0c\u4e66\n                        \u5199 "rush add --package "example@^1.2.3"", \u800c\u4e0d\u662f\n                        "rush add --package example@^1.2.3".\n  --exact               \u4e00\u65e6\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u6dfb\u52a0\u5230 package.json \u90a3\u7684\u7248\u672c\u5c06\u662f\u4e00\u4e2a\u7cbe\u786e\n                        \u7248\u672c\uff08\u4f8b\u5982\uff0c\u6ca1\u6709 ~ \u6216 ^ \u6807\u8bb0\uff09\u3002\n  --caret               \u4e00\u65e6\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u90a3\u4e48\u6dfb\u52a0\u5230 package.json \u4e2d\u7684\u7248\u672c\u5c06\u5e26\u6709\n                        ^ \u6807\u8bb0\u3002\n  --dev                 \u4e00\u65e6\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u90a3\u4e48\u6dfb\u52a0\u5230\u5e93\u5c06\u6dfb\u52a0\u5230 package.json \u4e2d\u7684\n                        "devDependencies" \u5b57\u6bb5\u3002\n  -m, --make-consistent\n                        \u4e00\u65e6\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u4f7f\u7528\u8be5\u5e93\u7684\u5176\u4ed6\u9879\u76ee\u5c06\u4f1a\u5728 package.json \u6587\u4ef6\u4e2d\n                        \u5c06\u8be5\u4f9d\u8d56\u6210\u76f8\u540c\u7684\u7248\u672c\u3002\n  -s, --skip-update     \u4e00\u65e6\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u5f53\u66f4\u65b0\u5b8c package.json \u6587\u4ef6\u540e\u5c06\u4e0d\u4f1a\u6267\u884c\n                        "rush update".\n  --all                 \u4e00\u65e6\u4f7f\u7528\u8be5\u53c2\u6570\uff0c\u8be5\u4f9d\u8d56\u5c06\u88ab\u6dfb\u52a0\u5230\u6240\u6709\u9879\u76ee\u4e2d\u3002\n')))}m.isMDXComponent=!0}}]);