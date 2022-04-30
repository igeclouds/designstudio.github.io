"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[903],{5242:(n,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var a=r(3929);function s(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function o(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,a)}return r}function t(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){s(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,a,s=function(n,e){if(null==n)return{};var r,a,s={},o=Object.keys(n);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(s[r]=n[r]);return s}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(s[r]=n[r])}return s}var i=a.createContext({}),m=function(n){var e=a.useContext(i),r=e;return n&&(r="function"==typeof n?n(e):t(t({},e),n)),r},c=function(n){var e=m(n.components);return a.createElement(i.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(n,e){var r=n.components,s=n.mdxType,o=n.originalType,i=n.parentName,c=l(n,["components","mdxType","originalType","parentName"]),p=m(r),d=s,h=p["".concat(i,".").concat(d)]||p[d]||u[d]||o;return r?a.createElement(h,t(t({ref:e},c),{},{components:r})):a.createElement(h,t({ref:e},c))}));function d(n,e){var r=arguments,s=e&&e.mdxType;if("string"==typeof n||s){var o=r.length,t=new Array(o);t[0]=p;var l={};for(var i in e)hasOwnProperty.call(e,i)&&(l[i]=e[i]);l.originalType=n,l.mdxType="string"==typeof n?n:s,t[1]=l;for(var m=2;m<o;m++)t[m]=r[m];return a.createElement.apply(null,t)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},667:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>m,toc:()=>u});var a=r(394),s=r(1614),o=(r(3929),r(5242)),t=["components"],l={title:"command-line.json"},i=void 0,m={unversionedId:"pages/configs/command-line_json",id:"pages/configs/command-line_json",title:"command-line.json",description:"\u8fd9\u662f rush init \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 command-line.json \u6587\u4ef6\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/command-line_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/command-line_json",permalink:"/zh-cn/pages/configs/command-line_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/command-line_json.md",tags:[],version:"current",frontMatter:{title:"command-line.json"},sidebar:"docsSidebar",previous:{title:"build-cache.json\uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/configs/build-cache_json"},next:{title:"common-versions.json",permalink:"/zh-cn/pages/configs/common-versions_json"}},c={},u=[{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],p={toc:u};function d(n){var e=n.components,r=(0,s.Z)(n,t);return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8fd9\u662f ",(0,o.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init")," \u4e3a monorepo \u751f\u6210\u7684\u6a21\u7248\u4e0b\u7684 ",(0,o.kt)("strong",{parentName:"p"},"command-line.json")," \u6587\u4ef6\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"common/config/rush/command-line.json")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u8be5\u914d\u7f6e\u9879\u914d\u7f6e "rush" \u7684\u81ea\u5b9a\u4e49\u547d\u4ee4\u3002\n * \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 Rush \u5b98\u7f51\uff1a https://rushjs.io\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/command-line.schema.json",\n\n  /**\n   * \u81ea\u5b9a\u4e49\u201c\u547d\u4ee4\u201d\u4e3a\u547d\u4ee4\u884c\u5f15\u5165\u4e86\u65b0\u7684\u53d8\u91cf\u3002\u53ef\u4ee5\u901a\u8fc7 "rush --help", "rush my-bulk-command --help", \u6216\n   * "rush my-global-command --help" \u6765\u770b\u66f4\u591a\u7684\u5e2e\u52a9\u3002\n   */\n  "commands": [\n    // {\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u51b3\u5b9a\u81ea\u5b9a\u4e49\u547d\u4ee4\u7684\u7c7b\u578b\n    //    * Rush \u7684 "bulk" \u547d\u4ee4\u4f1a\u5728\u6bcf\u4e2a\u9879\u76ee\u4e2d\u5355\u72ec\u6267\u884c\u3002Rush \u4f1a\u5bfb\u627e\u6bcf\u4e2a\u9879\u76ee\u5185\u7684 package.json \u6587\u4ef6\u4e0b\u7684\n    //    * \u7b26\u5408\u547d\u4ee4\u7684 "script\' \u811a\u672c\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u547d\u4ee4\u4f1a\u6309\u7167\u4f9d\u8d56\u56fe\u5728\u4ed3\u5e93\u5185\u7684\u6bcf\u4e2a\u9879\u76ee\u6267\u884c\uff08\u4e0e "rush build"\n    //    * \u5de5\u4f5c\u6d41\u7c7b\u4f3c\uff09\u3002\n    //    * \u53ef\u4ee5\u9650\u5b9a\u4e00\u4e9b\u5b50\u9879\u76ee\uff0c\u4f8b\u5982\u4f7f\u7528 "--to" \u6216 "--from" \u53c2\u6570\u3002\n    //    */\n    //   "commandKind": "bulk",\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09 \u8f93\u5165\u7684\u540d\u79f0\u88ab\u89c6\u4e3a\u547d\u4ee4\u884c\u7684\u4e00\u90e8\u5206\u3002 \u8fd9\u4e5f\u9879\u76ee\u5185 package.json \u4e2d\n    //    * "scripts" \u7684\u94a9\u5b50\u3002\n    //    * \u8be5\u540d\u79f0\u5fc5\u987b\u662f\u5927\u5199\u5b57\u6bcd\u3001\u6570\u5b57\u548c\u4e0b\u5212\u7ebf\u7684\u7ec4\u5408\uff0c\u5b83\u5e94\u5f53\u5305\u542b\u4e00\u4e2a\u82f1\u8bed\u52a8\u8bcd\uff08\u4f8b\u5982\uff1a "deploy"\uff09\n    //    * \u4f7f\u7528\u8fde\u5b57\u7b26\u6765\u5206\u5272\u5355\u8bcd\uff08\u4f8b\u5982\uff1a "upload-docs")\u3002\u4e00\u7ec4\u76f8\u5173\u7684\u547d\u4ee4\u53ef\u4ee5\u4ee5\u5192\u53f7\u4e3a\u524d\u7f00\u3002\n    //    * \uff08\u4f8b\u5982\uff1a"docs:generate", "docs:deploy", "docs:serve" \u7b49\u7b49\uff09\n    //    *\n    //    * \u6ce8\u610f\uff0c\u5982\u679c\u6b64\u5904\u8986\u76d6\u4e86 "rebuild" \u547d\u4ee4\uff0c\u5b83\u5c31\u4e0e "build" \u6307\u4ee4\u5206\u5272\u5f00\u4e86\uff0c\n    //    * \u540c\u65f6\u4f1a\u8c03\u7528 "rebuild" \u800c\u4e0d\u662f "build" \u811a\u672c\u3002\n    //    */\n    //   "name": "my-bulk-command",\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u8be5\u81ea\u5b9a\u4e49\u547d\u4ee4\u7684\u7b80\u77ed\u603b\u7ed3\uff0c\u5b83\u5c06\u88ab\u5c55\u793a\u5728\u547d\u4ee4\u884c\u5e2e\u52a9\u4e2d\u3002\n    //    * \u4f8b\u5982 "rush --help".\n    //    */\n    //   "summary": "Example bulk custom command",\n    //\n    //   /**\n    //    * \u5f53\u6253\u5370\u547d\u4ee4\u884c\u5e2e\u52a9\u65f6\u7684\u66f4\u7ec6\u8282\u7684\u63cf\u8ff0\u3002\uff08\u4f8b\u5982\uff1a"rush --help my-command"\uff09\n    //    * \u5982\u679c\u4e3a\u7a7a\uff0c\u5219\u4f7f\u7528 "summary" \u5b57\u6bb5\u3002\n    //    *\n    //    * \u65e0\u8bba\u4f55\u65f6\u5f15\u5165\u6307\u4ee4\u6216\u53c2\u6570\uff0c\u82b1\u4e9b\u65f6\u95f4\u6765\u5199\u4e00\u4e9b\u6709\u610f\u4e49\u7684\u6587\u6863\u4f1a\u7ed9\u5f00\u53d1\u4f53\u9a8c\u5e26\u6765\u5de8\u5927\u63d0\u5347\u3002\n    //    */\n    //   "description": "This is an example custom command that runs separately for each project",\n    //\n    //   /**\n    //    * Rush \u64cd\u4f5c\u9700\u8981\u4e00\u4e2a\u9501\u6587\u4ef6\u6765\u9632\u6b62\u540c\u4e00\u4e2a\u4ed3\u5e93\u88ab\u591a\u4e2a\u6307\u4ee4\u540c\u65f6\u5904\u7406\u3002\uff08\u4f8b\u5982\uff1a\u540c\u65f6\u6267\u884c "rush install" \u548c\n    //    * "rush build" \u4f1a\u51fa\u9519\uff09\u3002\u5982\u679c\u4f60\u7684\u547d\u4ee4\u53ef\u4ee5\u4e0e\u5176\u4ed6\u64cd\u4f5c\u540c\u65f6\u6267\u884c\uff0c\u90a3\u4e48\u8bbe\u5b9a "safeForSimultaneousRushProcesses"\n    //    * \u4e3a true \u6765\u7981\u7528\u8fd9\u79cd\u4fdd\u62a4\u3002\n    //    *\n    //    * \u5bf9\u4e8e\u8c03\u7528\u5176\u4ed6 Rush \u547d\u4ee4\u7684\u811a\u672c\u800c\u8a00\uff0c\u8fd9\u4e00\u70b9\u662f\u5c24\u4e3a\u9700\u8981\u7684\u3002\n    //    */\n    //   "safeForSimultaneousRushProcesses": false,\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u5982\u679c\u4e3a\u771f\uff0c\u90a3\u4e48\u8be5\u6307\u4ee4\u53ef\u4ee5\u5b89\u5168\u7684\u5e76\u884c\u6267\u884c\uff0c\u4f8b\u5982\u540c\u65f6\u5728\u591a\u4e2a\u9879\u76ee\u5185\u6267\u884c\u3002\n    //    * \u4e0e "rush build" \u7c7b\u4f3c\uff0c\u65e0\u8bba\u662f\u5426\u5f00\u542f\u5e76\u884c\uff0c\u5728\u5176\u4f9d\u8d56\u5b8c\u6210\u524d\uff0c\u8be5\u9879\u76ee\u90fd\u4e0d\u4f1a\n    //    * \u5f00\u59cb\u6267\u884c\u3002\n    //    */\n    //   "enableParallelism": false,\n    //\n    //   /**\n    //    * \u901a\u5e38\u9879\u76ee\u4f1a\u4f9d\u7167\u4f9d\u8d56\u987a\u5e8f\u5904\u7406\uff0c\u5bf9\u4e8e\u67d0\u4e2a\u9879\u76ee\u800c\u8a00\uff0c\u76f4\u5230\u5176\u4f9d\u8d56\u5904\u7406\u5b8c\u6210\u540e\u624d\u4f1a\u5904\u7406\n    //    * \u8be5\u9879\u76ee\u3002\u4f46\u5bf9\u4e8e\u67d0\u4e2a\u7279\u5b9a\u7684\u64cd\u4f5c\u800c\u8a00\uff0c\u8be5\u9650\u5236\u5e76\u4e0d\u9002\u7528\uff0c\u4f8b\u5982 "clean" \u4efb\u52a1\u6765\u5220\u9664\n    //    * \u8f93\u51fa\u6587\u4ef6\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u53ef\u4ee5\u8bbe\u5b9a "ignoreDependencyOrder" \u4e3a true \u6765\n    //    * \u63d0\u9ad8\u5e76\u884c\u5ea6\u3002\n    //    */\n    //   "ignoreDependencyOrder": false,\n    //\n    //   /**\n    //    * \u901a\u5e38\u60c5\u51b5\u4e0b\uff0cRush \u4f1a\u8981\u6c42\u6bcf\u4e2a\u9879\u76ee\u7684 package.jso \u6587\u4ef6\u4e0b\u90fd\u6709\u5bf9\u5e94\u7684 "script"\n    //    * \u5339\u914d\u81ea\u5b9a\u4e49\u6307\u4ee4\u540d\u3002\u8bbe\u5b9a "ignoreMissingScript" \u4e3a true \u53ef\u4ee5\u7981\u6b62\u6b64\u68c0\u67e5\uff0c\n    //    * \u7f3a\u5c11\u76f8\u5e94\u5b9a\u4e49\u7684\u9879\u76ee\u4f1a\u88ab\u8df3\u8fc7\u3002\n    //    */\n    //   "ignoreMissingScript": false,\n    //\n    //   /**\n    //    * \u5f53\u8c03\u7528 shell \u811a\u672c\u65f6\uff0cRush \u5c06\u7528\u4ee5\u4e0b\u65b9\u6cd5\u6765\u4ece\u8b66\u544a\u4fe1\u606f\u4e2d\u533a\u5206\u51fa\u9519\u8bef\u4fe1\u606f\uff1a\n    //    * - \u5982\u679c\u811a\u672c\u8fd4\u56de\u975e 0 \u72b6\u6001\u7801\uff0c\u90a3\u4e48 Rush \u4f1a\u8ba4\u4e3a\u5b58\u5728\u201c\u4e00\u4e2a\u6216\u591a\u4e2a\u9519\u8bef\u201d\uff0c\u4e4b\u540e\u4ee5\u7ea2\u8272\u8f93\n    //    * \u51fa\u9519\u8bef\u4fe1\u606f\uff0c\u5b83\u4f1a\u963b\u6b62 Rush \u7ee7\u7eed\u5904\u7406\u5176\u4ed6\u9879\u76ee\u3002\n    //    * - \u5982\u679c\u811a\u672c\u7684\u72b6\u6001\u7801\u4e3a 0, \u4f46\u662f\u5411 stderr \u6d41\u5199\u5165\u4e86\u4e00\u4e9b\u6570\u636e\uff0cRush \u4f1a\u8ba4\u4e3a\u5b58\u5728 \u201c\u4e00\n    //    * \u4e2a\u6216\u591a\u4e2a\u8b66\u544a\u201d\uff0c\u4e4b\u540e\u4ee5\u9ec4\u8272\u8f93\u51fa\u8b66\u544a\u4fe1\u606f\uff0c\u4f46\u662f\u4e0d\u4f1a\u963b\u6b62 Rush \u7ee7\u7eed\u5904\u7406\u5176\u4ed6\u9879\u76ee\u3002\n    //    *\n    //    * \u56e0\u6b64\uff0c\u8b66\u544a\u4fe1\u606f\u4e0d\u4f1a\u963b\u788d\u672c\u5730\u5f00\u53d1\uff0c\u4f46\u5728 Rush \u7684\u8bbe\u8ba1\u4e2d\uff0c\u5f53\u5b58\u5728\u4efb\u4f55\u8b66\u544a\u6216\u62a5\u9519\u4fe1\u606f\uff0c\n    //    * Rush\u8fdb\u7a0b\u4f1a\u8fd4\u56de\u975e 0 \u72b6\u6001\u7801\uff0c\u8fdb\u800c\u4f1a\u5bfc\u81f4 CI \u4efb\u52a1\u5931\u8d25\uff0c\n    //    * \u5728\u4e00\u4e2a\u6d3b\u8dc3\u7684 monorepo \u4e2d\uff0c\u6211\u4eec\u53d1\u73b0\u5982\u679c\u4f60\u7684\u4e3b\u5e72\u5206\u652f\u5141\u8bb8\u8b66\u544a\uff0c\u90a3\u4e48\u5c31\u4f1a\u5728\u4e0d\u7ecf\n    //    * \u610f\u95f4\u4ea4\u7ed9\u5f00\u53d1\u8005\u5ffd\u7565\u8b66\u544a\uff0c\u8fd9\u5f88\u5feb\u4f1a\u5bfc\u81f4\u5b58\u5728\u975e\u5e38\u591a\u201c\u9884\u671f\u201d\u7684\u8b66\u544a\u4fe1\u606f\u4ee5\u81f3\u4e8e\u8fd9\u4e9b\u4fe1\u606f\n    //    * \u6ca1\u6709\u4efb\u4f55\u63d0\u793a\u6027\u4f5c\u7528\u7684\u72b6\u6001\u3002\n    //    *\n    //    * \u6709\u65f6\uff0c\u5c3d\u7ba1\u64cd\u4f5c\u662f\u6210\u529f\u7684\uff0c\u4f46\u7531\u4e8e\u67d0\u4e2a\u884c\u4e3a\u5b58\u5728\u95ee\u9898\u7684\u4efb\u52a1\u4f1a\u88ab\u5199\u5165\u5230 stderr \u6d41\u4e2d\u3002\n    //    * \u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5f3a\u70c8\u5efa\u8bae\u4fee\u590d\u8fd9\u4e2a\u4efb\u52a1\uff0c\u7136\u800c\uff0c\u4f60\u53ef\u4ee5\u8bbe\u5b9a allowWarningsInSuccessfulBuild\n    //    * =true \u6765\u8fdb\u884c\u53d8\u901a\uff0c\u8fd9\u4f1a\u5bfc\u81f4 Rush \u53ea\u4f1a\u5bf9\u9519\u8bef\u4fe1\u606f\u624d\u8fd4\u56de\u975e 0 \u7684\u72b6\u6001\u7801\u3002\n    //    *\n    //    * \u6ce8\u610f\uff1a \u9ed8\u8ba4\u503c\u4e3a false. \u5728 5.7.x \u4ee5\u53ca\u66f4\u65e7\u7684\u7248\u672c\u4e2d\uff0c\u9ed8\u8ba4\u503c\u4e3a true.\n    //    */\n    //   "allowWarningsInSuccessfulBuild": false,\n    //\n    //   /**\n    //    * \u8be5\u53c2\u6570\u4e3a true \u65f6\uff0c\u5176\u884c\u4e3a\u7c7b\u4f3c\u4e8e\u5185\u7f6e\u7684 "build" \u547d\u4ee4\u7684\u589e\u91cf\u6784\u5efa\u3002\n    //    */\n    //   "incremental": false,\n    //\n    //   /**\n    //    * \uff08\u5b9e\u9a8c\u6027\uff09\u901a\u5e38 Rush \u4f1a\u5728\u547d\u4ee4\u5b8c\u6210\u540e\u7ec8\u6b62\u3002\u5982\u679c\u8be5\u503c\u88ab\u8bbe\u5b9a\u4e3a "true", Rush \u4f1a\u8fdb\u5165\n    //    * \u5230\u4e00\u4e2a\u76d1\u542c\u6307\u5b9a\u9879\u76ee\u6587\u4ef6\u7684\u5faa\u73af\u4e2d\u3002\u5f53\u68c0\u6d4b\u5230\u6587\u4ef6\u53d8\u52a8\u65f6\uff0c\u6307\u4ee4\u4f1a\u88ab\u5524\u9192\uff0c\u4e14\u5176\u8303\u56f4\u662f\u9009\n    //    * \u4e2d\u7684\u9879\u76ee\u4ee5\u53ca\u4f9d\u8d56\u3002\n    //    *\n    //    * \u66f4\u591a\u4fe1\u606f\uff0c\u53ef\u4ee5\u53c2\u8003\u201c\u4f7f\u7528\u76d1\u542c\u6a21\u5f0f\u201d\u4e00\u6587\u3002\n    //    */\n    //   "watchForChanges": false,\n    //\n    //   /**\n    //    * \uff08\u5b9e\u9a8c\u6027\uff09\u5bf9\u4e8e\u8be5\u884c\u4e3a\u7981\u6b62\u6389\u7f13\u5b58\u3002\u5982\u679c\u8be5\u547d\u4ee4\u4f1a\u5f71\u54cd\u5230\u9879\u76ee\u81ea\u8eab\u76ee\u5f55\u4ee5\u5916\u7684\u72b6\u6001\u65f6\uff0c\u8be5\n    //    * \u547d\u4ee4\u5f88\u6709\u7528\u3002\n    //    */\n    //   "disableBuildCache ": false\n    // },\n    //\n    // {\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u81ea\u5b9a\u4e49\u6307\u4ee4\u7684\u7c7b\u578b\u3002\n    //    * Rush \u7684 "global" \u6307\u4ee4\u4f1a\u5728\u6574\u4e2a\u9879\u76ee\u5185\u5524\u9192\u4e00\u6b21\u3002\n    //    */\n    //   "commandKind": "global",\n    //\n    //   "name": "my-global-command",\n    //   "summary": "Example global custom command",\n    //   "description": "This is an example custom command that runs once for the entire repo",\n    //\n    //   "safeForSimultaneousRushProcesses": false,\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u4e00\u4e2a\u4f7f\u7528\u64cd\u4f5c\u7cfb\u7edf shell \u8c03\u7528\u7684\u811a\u672c\u3002\u5de5\u4f5c\u76ee\u5f55\u662f\u542b\u6709 rush.json \u7684\n    //    * \u76ee\u5f55\u3002\u5982\u679c\u81ea\u5b9a\u4e49\u6307\u4ee4\u4e0e\u8be5\u6307\u4ee4\u6709\u5173\uff0c\u90a3\u4e48\u5b83\u4eec\u7684\u503c\u5e94\u8be5\u88ab\u6dfb\u52a0\u5230\u5b57\u7b26\u4e32\u7684\u5c3e\u90e8\u3002\n    //    */\n    //   "shellCommand": "node common/scripts/my-global-command.js",\n    //\n    //   /**\n    //    * \u5982\u679c\u4f60\u7684 "shellCommand" \u4f9d\u8d56 NPM \u5305\uff0c\u90a3\u4e48\u63a8\u8350\u5c06\u5176\u5199\u6210 Rush \u5185\u7684\u4e00\n    //    * \u4e2a\u9879\u76ee\uff0c\u4f7f\u5f97\u5de5\u4f5c\u94fe\u53ef\u4ee5\u6b63\u5e38\u6784\u5efa\u3002\u67d0\u4e9b\u60c5\u51b5\u4e0b\u8be5\u6307\u4ee4\u5e94\u8be5\u5728\u6ca1\u6709\u9996\u6b21\u6267\u884c\n    //    * "rush build" \u7684\u60c5\u51b5\u4e0b\u6b63\u5e38\u5de5\u4f5c\uff0c\u63a8\u8350\u7684\u65b9\u5f0f\u662f\u5c06\u8be5\u9879\u76ee\u53d1\u5e03\u5230 NPM \u6e90\n    //    * \u4e0a\uff0c\u5e76\u4f7f\u7528 common/scripts/install-run.js \u6765\u8c03\u7528\u5b83\u3002\n    //    *\n    //    * \u81ea\u52a8\u5b89\u88c5\u529f\u80fd\u63d0\u4f9b\u4e86\u53e6\u5916\u4e00\u79cd\u53ef\u80fd\uff1a\u5728 "common/autoinstallers" \u4e0b\u7684\u76ee\n    //    * \u5f55\u90fd\u6709\u4e00\u4e2a package.json \u6587\u4ef6\u548c shrinkwrap \u6587\u4ef6\u3002\u5728\u88ab\u8c03\u7528\u524d\uff0cRush\n    //    * \u4f1a\u81ea\u52a8\u8c03\u7528\u5305\u7ba1\u7406\u5668\u6765\u5b89\u88c5\u8fd9\u4e9b\u4f9d\u8d56\u3002\u81ea\u52a8\u4e0b\u8f7d\u6709\u4e00\u4e2a\u4f18\u52bf\uff1a\u5373\u4f7f\u6240\u5728\u7684\u5206\u652f\u7684  Autoinstallers have the\n    //    * "rush isntall" \u51fa\u73b0\u4e86\u95ee\u9898\uff0c\u5b83\u4eec\u4e5f\u80fd\u6b63\u5e38\u5de5\u4f5c\uff0c\u8fd9\u4f7f\u5f97\u8be5\u529f\u80fd\u53ef\u4ee5\u5b9e\u73b0\n    //    * Git \u7684\u94a9\u5b50\u811a\u672c\u3002\u4f46\u662f\u8be5\u529f\u80fd\u4e5f\u6709\u4e00\u4e2a\u7f3a\u70b9\uff0c\u5b83\u4eec\u4e0d\u80fd\u7528\u4e8e\u6784\u5efa\u9879\u76ee\uff0c\u5e76\u4e14\u4f1a\u589e\n    //    * \u52a0\u4ed3\u5e93\u7684\u5b89\u88c5\u91cf\u3002\n    //    *\n    //    * "autoinstallerName" \u5c5e\u6027\u4e0d\u80fd\u5305\u542b\u8def\u5f84\uff0c\u5e76\u5fc5\u987b\u662f\u4e00\u4e2a\u6709\u6548\u7684 NPM \u5305\u540d\u3002\n    //    * \u4f8b\u5982\uff0c "my-task" \u662f\u6620\u5c04\u5230 "common/autoinstallers/my-task/package.json"\n    //    * \u7684\u5305\u540d\uff0c\u5f53\u8c03\u7528\u8be5 "shellCommand" \u65f6\uff0c"common/autoinstallers/my-task/node_modules/.bin"\n    //    * \u5e94\u5f53\u88ab\u6dfb\u52a0\u5230\u73af\u5883\u53d8\u91cf\u4e2d\u3002\n    //    */\n    //   // "autoinstallerName": "my-task"\n    // }\n  ],\n\n  /**\n   * \u81ea\u5b9a\u4e49\u201c\u53c2\u6570\u201d\u7ed9\u6307\u5b9a\u7684 Rush \u547d\u4ee4\u884c\u6307\u4ee4\u5f15\u5165\u4e86\u53c2\u6570\u3002\n   * \u4f8b\u5982\uff0c\u4f60\u4e5f\u8bb8\u4f1a\u7ed9 "rush build" \u547d\u4ee4\u589e\u52a0 "production" \u53c2\u6570\u3002\n   */\n  "parameters": [\n    // {\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u7c7b\u578b\n    //    * "flag" \u7c7b\u578b\u8868\u660e\u8be5\u53c2\u6570\u7684\u4f5c\u7528\u662f\u4e00\u4e2a\u5f00\u5173\u3002\n    //    */\n    //   "parameterKind": "flag",\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u53c2\u6570\u7684\u5168\u540d\u3002\u5fc5\u987b\u662f\u5c0f\u5199\u5e76\u4f7f\u7528\u7834\u6298\u53f7\u5206\u5272\u3002\n    //    */\n    //   "longName": "--my-flag",\n    //\n    //   /**\n    //    * \u8be5\u53c2\u6570\u7684\u7f29\u5199\uff0c\u8be5\u5c5e\u6027\u53ef\u9009\u3002\u5b83\u5fc5\u987b\u662f\u5728\u7834\u6298\u53f7\u540e\u8ddf\u6709\u4e00\u4e2a\n    //    * \u5927\u5c0f\u5199\u654f\u611f\u7684\u5b57\u6bcd\uff0c\n    //    *\n    //    * \u6ce8\u610f\uff1a\u63a8\u8350\u4f7f\u7528\u5168\u540d\u6765\u589e\u52a0\u53ef\u8bfb\u6027\u3002\u7f29\u5199\u4ec5\u4ec5\u662f\u4e3a\u4e86\u65b9\u4fbf\u3002\n    //    * \u5b57\u6bcd\u8868\u5f88\u5bb9\u6613\u88ab\u5360\u7528\u5b8c\uff0c\u5e76\u4e14\u4e0d\u65b9\u4fbf\u8bb0\u5fc6\uff0c\u6240\u4ee5*\u4ec5\u4ec5*\u5f53\n    //    * \u9047\u5230\u975e\u5e38\u9891\u7e41\u7684\u64cd\u4f5c\u65f6\u624d\u4f7f\u7528\u7b80\u5199\u3002\n    //    */\n    //   "shortName": "-m",\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09 \u5728\u547d\u4ee4\u5e2e\u52a9\u4e2d\u663e\u793a\u7684\u63cf\u8ff0\u4fe1\u606f\u3002\n    //    *\n    //    * \u65e0\u8bba\u4f55\u65f6\u5f15\u5165\u6307\u4ee4\u6216\u53c2\u6570\uff0c\u82b1\u4e9b\u65f6\u95f4\u6765\u5199\u4e00\u4e9b\u6709\u610f\u4e49\u7684\u6587\u6863\u4f1a\u7ed9\u5f00\u53d1\u4f53\u9a8c\u5e26\u6765\u5de8\u5927\u63d0\u5347\u3002\n    //    */\n    //   "description": "A custom flag parameter that is passed to the scripts that are invoked when building projects",\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u8be5\u5217\u8868\u5185\u5b58\u50a8\u4e86\u8fd9\u4e2a\u53c2\u6570\u53ef\u88ab\u54ea\u4e9b\u81ea\u5b9a\u4e49\u6307\u4ee4\u6216\u5185\u7f6e\u6307\u4ee4\u4f7f\u7528\u3002\n    //    */\n    //   "associatedCommands": ["build", "rebuild"]\n    // },\n    //\n    // {\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u7c7b\u578b\n    //    * \u4e00\u4e2a\u201c\u5b57\u7b26\u4e32\u201d\u7c7b\u578b\u7684\u81ea\u5b9a\u4e49\u547d\u4ee4\u884c\u53c2\u6570\u662f\u6307\u53c2\u6570\u4e3a\u4e00\u4e2a\u7b80\u5355\u7684\u6587\u672c\u3002\n    //    */\n    //   "parameterKind": "string",\n    //   "longName": "--my-string",\n    //   "description": "A custom string parameter for the \\"my-global-command\\" custom command",\n    //\n    //   "associatedCommands": ["my-global-command"],\n    //\n    //   /**\n    //    * \u53c2\u6570\u540d\uff0c\u5728\u547d\u4ee4\u5e2e\u52a9\u4e2d\u5c06\u88ab\u663e\u793a\u3002\n    //    *\n    //    * \u4f8b\u5982\uff0c\u53c2\u6570\u540d\u4e00\u4e2a "--count", \u5176\u7c7b\u578b\u4e3a "NUMBER", \u90a3\u4e48\u547d\u4ee4\u884c\n    //    * \u5e2e\u52a9\u4fe1\u606f\u5e94\u8be5\u5c55\u793a "--count NUMBER". \u8be5\u53c2\u6570\u5fc5\u987b\u7531\u5927\u5199\u5b57\u6bcd\u3001\u6570\u5b57\n    //    * \u4e0b\u5212\u7ebf\u7ec4\u6210\uff0c\u5e94\u8be5\u5c3d\u53ef\u80fd\u7684\u77ed\u3002\n    //    */\n    //   "argumentName": "SOME_TEXT",\n    //\n    //   /**\n    //    * \u5f53\u8be5\u5c5e\u6027\u4e3a true \u65f6\uff0c\u53c2\u6570\u5fc5\u987b\u5305\u542b\u5728\u547d\u4ee4\u4e2d\u3002\u9ed8\u8ba4\u4e3a false.\n    //    */\n    //   "required": false\n    // },\n    //\n    // {\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u81ea\u5b9a\u4e49\u53c2\u6570\u7684\u7c7b\u578b\n    //    * "choice" \u53c2\u6570\u7c7b\u578b\u662f\u6307\u53c2\u6570\u5fc5\u987b\u662f\u7ed9\u5b9a\u5217\u8868\u5185\u7684\u67d0\u4e2a\u503c\u3002\n    //    */\n    //   "parameterKind": "choice",\n    //   "longName": "--my-choice",\n    //   "description": "A custom choice parameter for the \\"my-global-command\\" custom command",\n    //\n    //   "associatedCommands": ["my-global-command"],\n    //\n    //   /**\n    //    * \u5f53\u8be5\u5c5e\u6027\u4e3a true \u65f6\uff0c\u53c2\u6570\u5fc5\u987b\u5305\u542b\u5728\u547d\u4ee4\u4e2d\u3002\u9ed8\u8ba4\u4e3a false.\n    //    */\n    //   "required": false,\n    //\n    //   /**\n    //    * \u6b63\u5e38\u60c5\u51b5\u4e0b\u82e5\u67d0\u4e2a\u53c2\u6570\u88ab\u7701\u7565\u6389\uff0c\u90a3\u4e48\u5b83\u5c06\u4e0d\u4f1a\u88ab\u4f20\u5230 shell \u4e2d\u3002\n    //    * \u8be5\u5c5e\u6027\u7528\u4e8e\u63d2\u5165\u4e00\u4e2a\u9ed8\u8ba4\u503c\uff0c\u82e5 "defaultValue" \u5b9a\u4e49\u540e\uff0c\u53c2\u6570\u6c38\u8fdc\u4f1a\u88ab\n    //    * \u4f20\u5165\u5230 shell \u4e2d\uff0c\u82e5\u672a\u6307\u5b9a\u5219\u4f7f\u7528\u9ed8\u8ba4\u503c\u3002\u8be5\u503c\u5fc5\u987b\u662f\u5b9a\u4e49\u5728\u53ef\u9009\u5217\u8868\u4e2d\n    //    * \u7684\u4e00\u4e2a\u3002\n    //    */\n    //   "defaultValue": "vanilla",\n    //\n    //   /**\n    //    * \uff08\u5fc5\u987b\uff09\u4e00\u7cfb\u5217\u7528\u4e8e\u9009\u62e9\u7684\u53ef\u9009\u53c2\u6570\u3002\n    //    */\n    //   "alternatives": [\n    //     {\n    //       /**\n    //        * \u7528\u4e8e\u9009\u62e9\u53c2\u6570\u7684\u4e00\u4e2a\u53ef\u9009\u503c\u3002\n    //        * \u4f8b\u5982\uff0c\u5728 "--flavor vanilla" \u4f7f\u7528\u4e86 "vanilla".\n    //        */\n    //       "name": "vanilla",\n    //\n    //       /**\n    //        *\n    //        * \u5728\u547d\u4ee4\u884c\u5e2e\u52a9\u4e2d\u663e\u793a\u7684\u53ef\u9009\u53c2\u6570\u7684\u8be6\u7ec6\u63cf\u8ff0\u3002\n    //        *\n    //        * \u65e0\u8bba\u4f55\u65f6\u5f15\u5165\u6307\u4ee4\u6216\u53c2\u6570\uff0c\u82b1\u4e9b\u65f6\u95f4\u6765\u5199\u4e00\u4e9b\u6709\u610f\u4e49\u7684\u6587\u6863\u4f1a\u7ed9\u5f00\u53d1\u4f53\u9a8c\u5e26\u6765\u5de8\u5927\u63d0\u5347\u3002\n    //        *\n    //        */\n    //       "description": "Use the vanilla flavor (the default)"\n    //     },\n    //\n    //     {\n    //       "name": "chocolate",\n    //       "description": "Use the chocolate flavor"\n    //     },\n    //\n    //     {\n    //       "name": "strawberry",\n    //       "description": "Use the strawberry flavor"\n    //     }\n    //   ]\n    // }\n  ]\n}\n')),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../maintainer/custom_commands"},"\u53ef\u9009\u53c2\u6570"))))}d.isMDXComponent=!0}}]);