"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[4017],{5242:(n,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>f});var o=r(3929);function t(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function i(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,o)}return r}function s(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){t(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function a(n,e){if(null==n)return{};var r,o,t=function(n,e){if(null==n)return{};var r,o,t={},i=Object.keys(n);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(o=0;o<i.length;o++)r=i[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var c=o.createContext({}),p=function(n){var e=o.useContext(c),r=e;return n&&(r="function"==typeof n?n(e):s(s({},e),n)),r},l=function(n){var e=p(n.components);return o.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(n,e){var r=n.components,t=n.mdxType,i=n.originalType,c=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),m=p(r),f=t,h=m["".concat(c,".").concat(f)]||m[f]||u[f]||i;return r?o.createElement(h,s(s({ref:e},l),{},{components:r})):o.createElement(h,s({ref:e},l))}));function f(n,e){var r=arguments,t=e&&e.mdxType;if("string"==typeof n||t){var i=r.length,s=new Array(i);s[0]=m;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=n,a.mdxType="string"==typeof n?n:t,s[1]=a;for(var p=2;p<i;p++)s[p]=r[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2911:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>u});var o=r(394),t=r(1614),i=(r(3929),r(5242)),s=["components"],a={title:"version-policies.json"},c=void 0,p={unversionedId:"pages/configs/version-policies_json",id:"pages/configs/version-policies_json",title:"version-policies.json",description:"\u8be5\u6587\u4ef6\u662f rush init \u751f\u6210\u7684 version-policies.json \u6a21\u677f\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/version-policies_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/version-policies_json",permalink:"/zh-cn/pages/configs/version-policies_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/version-policies_json.md",tags:[],version:"current",frontMatter:{title:"version-policies.json"},sidebar:"docsSidebar",previous:{title:"rush-project.json \uff08\u5b9e\u9a8c\u6027\uff09",permalink:"/zh-cn/pages/configs/rush-project_json"},next:{title:"\u83b7\u53d6\u652f\u6301",permalink:"/zh-cn/pages/help/support"}},l={},u=[],m={toc:u};function f(n){var e=n.components,r=(0,t.Z)(n,s);return(0,i.kt)("wrapper",(0,o.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8be5\u6587\u4ef6\u662f ",(0,i.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init")," \u751f\u6210\u7684 ",(0,i.kt)("strong",{parentName:"p"},"version-policies.json")," \u6a21\u677f\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"common/config/rush/version-policies.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * \u8be5\u914d\u7f6e\u6587\u4ef6\u7528\u4e8e\u4f7f\u7528 Rush \u53d1\u5e03\u65f6\u7684\u9ad8\u7ea7\u914d\u7f6e\u3002\n * \u66f4\u591a\u4fe1\u606f\u53ef\u4ee5\u53c2\u8003 Rush \u5b98\u7f51\uff1a https://rushjs.io\n */\n\n/**\n * \u4e00\u7cfb\u5217\u7248\u672c\u7b56\u7565\u7684\u5b9a\u4e49\u3002\u201c\u7248\u672c\u653f\u7b56\u201d\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u7684\u5305\uff0c\u5b83\u4f1a\u5f71\u54cd "rush change",\n * "rush version", \u548c "rush publish". \u8fd9\u4e2a\u7b56\u7565\u9002\u7528\u4e8e\u5728 rush.json \u4e0b\u6307\u5b9a\u4e86\n * "versionPolicyName" \u5b57\u6bb5\u7684\u9879\u76ee\u3002\n */\n[\n  // {\n  //   /**\n  //    * \uff08\u5fc5\u987b\uff09 \u8868\u660e\u7248\u672c\u653f\u7b56\u7684\u79cd\u7c7b\u3002\n  //    * \uff08"lockStepVersion" \u6216 "individualVersion"\uff09\n  //    *\n  //    * "lockStepVersion" \u6a21\u5f0f\u662f\u6307\u9879\u76ee\u5c06\u4f1a\u4f7f\u7528 "lock-step versioning". \u8be5\u7b56\u7565\n  //    * \u9002\u7528\u4e8e\u4e00\u7ec4\u4f5c\u4e3a\u540c\u4e00\u4e2a\u4ea7\u54c1\u7684\u53ef\u9009\u62e9\u7ec4\u4ef6\u7684\u5305\u3002\u6574\u5957\u5305\u662f\u4e00\u671f\u53d1\u5e03\uff0c\u5e76\u4f7f\u7528\u76f8\u540c\u7684 NPM\n  //    * \u7248\u672c\u53f7\u3002\u5f53\u8fd9\u7ec4\u5185\u7684\u67d0\u4e2a\u5305\u4f9d\u8d56\u5176\u4ed6\u65f6\uff0c\u8bed\u4e49\u5316\u7248\u672c\u901a\u5e38\u88ab\u9650\u5236\u4e3a\u5355\u4e00\u7248\u672c\u3002\n  //    */\n  //   "definitionName": "lockStepVersion",\n  //\n  //   /**\n  //    * \uff08\u5fc5\u987b\uff09\u653f\u7b56\u540d\u5c06\u88ab\u7528\u4e8e rush.json \u4e0b\u7684 "versionPolicyName" \u5b57\u6bb5\u3002\n  //    * \u8be5\u5b57\u6bb5\u540c\u6837\u88ab\u7528\u4e8e\u547d\u4ee4\u884c\u53c2\u6570\u4e2d\uff0c\u4f8b\u5982 "--version-policy" \u548c "--to-version-policy".\n  //    */\n  //   "policyName": "MyBigFramework",\n  //\n  //   /**\n  //    * \uff08\u5fc5\u987b\uff09\u5f53\u524d\u7248\u672c\u3002\u5f53\u524d\u5206\u652f\u4e0b\uff0c\u96c6\u5408\u5185\u7684\u6240\u6709\u5305\u5e94\u5f53\u90fd\u662f\u5f53\u524d\u7248\u672c\uff0c\u5f53\u7248\u672c\u53f7\u53d8\u5316\u65f6\u5019\n  //    *  Rush \u7528\u6b64\u6765\u51b3\u5b9a\u4e0b\u4e00\u4e2a\u7248\u672c\u3002\n  //    * (\u4e0d\u8003\u8651 package.json \u4e0b "version" \u5b57\u6bb5\u3002)\n  //    */\n  //   "version": "1.0.0",\n  //\n  //   /**\n  //    * \uff08\u5fc5\u987b\uff09 \u53d8\u66f4\u7c7b\u578b\uff0c\u9002\u7528\u4e8e\u53d1\u5e03\u4e0b\u4e00\u4e2a\u7248\u672c\u3002\n  //    * \u5f53\u5728 Git \u4e0a\u521b\u5efa\u53d1\u5e03\u5206\u652f\u65f6\uff0c\u8be5\u5b57\u6bb5\u5e94\u5f53\u6839\u636e\u53d1\u5e03\u7c7b\u578b\u66f4\u65b0\u3002\n  //    *\n  //    * \u6709\u6548\u503c\uff1a "prerelease", "release", "minor", "patch", "major"\n  //    */\n  //   "nextBump": "prerelease",\n  //\n  //   /**\n  //    * \uff08\u53ef\u9009\uff09\u4e00\u65e6\u6307\u5b9a\uff0c\u96c6\u5408\u5185\u7684\u6240\u6709\u5305\u5171\u4eab CHANGELOG.md \u6587\u4ef6\u3002\n  //    * \u8be5\u6587\u4ef6\u5b58\u50a8\u4e86\u6240\u6709\u88ab\u6307\u5b9a\u4e3a "main" \u7684\u9879\u76ee\uff0c\u8fd9\u4e9b\u9879\u76ee\u5c5e\u4e8e\u8be5\u96c6\u5408\u3002\n  //    *\n  //    * \u5982\u679c\u8be5\u6587\u4ef6\u88ab\u5ffd\u7565\uff0c\u90a3\u4e48\u96c6\u5408\u5185\u7684\u6bcf\u4e2a\u9879\u76ee\u4f1a\u7ef4\u62a4\u5355\u72ec\u7684 CHANGELOG.md.\n  //    */\n  //   "mainProject": "my-app"\n  // },\n  //\n  // {\n  //   /**\n  //    * \uff08\u5fc5\u987b\uff09 \u8868\u660e\u7248\u672c\u653f\u7b56\u7684\u79cd\u7c7b\u3002\n  //    * \uff08"lockStepVersion" \u6216 "individualVersion"\uff09\n  //    *\n  //    * "individualVersion" \u6a21\u5f0f\u8868\u660e\u9879\u76ee\u5c06\u4f7f\u7528\u201c\u5355\u72ec\u7684\u7248\u672c\u201d\u3002\n  //    * \u8fd9\u662f\u5178\u578b\u7684 NPM \u6a21\u5f0f\uff0c\u6bcf\u4e2a\u9879\u76ee\u90fd\u6709\u72ec\u7acb\u7684\u7248\u672c\u53f7\u548c CHANGELOG.md \u6587\u4ef6\u3002\n  //    * \u5c3d\u7ba1\u5355\u4e2a CI \u8d1f\u8d23\u53d1\u5305\uff0c\u4f46\u662f\u5b83\u4eec\u6ca1\u6709\u4efb\u4f55\u7279\u6b8a\u5173\u7cfb\u3002\u7248\u672c\u53d8\u66f4\u4f1a\u4f9d\u7167\u5f00\u53d1\u8005\n  //    * \u56de\u7b54\u7684 "rush change" \u7684\u95ee\u9898\u3002\n  //    */\n  //   "definitionName": "individualVersion",\n  //\n  //   "policyName": "MyRandomLibraries",\n  //\n  //   /**\n  //    * \uff08\u53ef\u9009\uff09\u8be5\u5c5e\u6027\u786e\u4fdd\u96c6\u5408\u5185\u7684\u6240\u6709\u5305\u4f7f\u7528\u4e00\u4e2a\u4e3b\u7248\u672c\u53f7\u3002\u4f8b\u5982\u56e0\u4e3a\u76f8\u540c\u7684\u4e3b\u7248\u672c\u5206\u652f\u3002\n  //    * \u4ed6\u8fd8\u53ef\u4ee5\u963b\u6b62\u4eba\u4eec\u4e0d\u5c0f\u5fc3\u5bf9 "major" \u8bed\u4e49\u7248\u672c\u8fdb\u884c\u4e86\u4e0d\u9002\u5f53\u7684\u66f4\u6539\u3002 "minor" \u6216\n  //    * "patch" \u7248\u672c\u4f1a\u4f9d\u636e "rush change" \u6765\u7ed9\u6bcf\u4e2a\u53d8\u5316\u7684\u9879\u76ee\u8fdb\u884c\u72ec\u7acb\u7684\u66f4\u6539\u3002\n  //    */\n  //   "lockedMajor": 3,\n  //\n  //   /**\n  //    * \uff08\u53ef\u9009\uff09\u5f53\u4f7f\u7528 Rush \u7ba1\u7406\u53d1\u5e03\u65f6, \u9ed8\u8ba4\u4f7f\u7528 "rush change" \u547d\u4ee4\u6765\u4e3a\u6bcf\u4e2a\u88ab\u4fee\u6539\n  //    * \u7684\u9879\u76ee\u8fdb\u884c\u7248\u672c\u53d8\u66f4\u3002\u8fd9\u4e9b\u53d8\u66f4\u4f1a\u4ea7\u751f CHANGELOG.md \u6587\u4ef6\u3002\u5982\u679c\u4f60\u6388\u6743\u4f60\u7684 CHANGELOG.md\n  //    * \u7531\u624b\u52a8\u7ba1\u7406\u6216\u8005\u5176\u4ed6\u7684\u65b9\u5f0f\uff0c\u90a3\u4e48\u8bbe\u5b9a "exemptFromRushChange" \u4e3a true \u6765\u544a\u8bc9  "rush\n  //    * change" \u5ffd\u7565\u8fd9\u4e9b\u9879\u76ee\u3002\n  //    */\n  //   "exemptFromRushChange": false\n  // }\n];\n')))}f.isMDXComponent=!0}}]);