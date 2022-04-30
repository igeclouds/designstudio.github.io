"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[404],{5242:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(3929);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),m=r,y=c["".concat(i,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(y,p(p({ref:t},d),{},{components:a})):n.createElement(y,p({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,p=new Array(o);p[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,p[1]=s;for(var l=2;l<o;l++)p[l]=a[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},2601:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(394),r=a(1614),o=(a(3929),a(5242)),p=["components"],s={title:"Modifying package.json"},i=void 0,l={unversionedId:"pages/developer/modifying_package_json",id:"pages/developer/modifying_package_json",title:"Modifying package.json",description:'Let\'s say you need to add a new dependency on a library "example-lib". Without Rush, you would do something like this:',source:"@site/docs/pages/developer/modifying_package_json.md",sourceDirName:"pages/developer",slug:"/pages/developer/modifying_package_json",permalink:"/pages/developer/modifying_package_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/developer/modifying_package_json.md",tags:[],version:"current",frontMatter:{title:"Modifying package.json"},sidebar:"docsSidebar",previous:{title:"Everyday commands",permalink:"/pages/developer/everyday_commands"},next:{title:"Other helpful commands",permalink:"/pages/developer/other_commands"}},d={},u=[{value:"Upgrading to newer versions of your NPM packages",id:"upgrading-to-newer-versions-of-your-npm-packages",level:2}],c={toc:u};function m(e){var t=e.components,a=(0,r.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Let's say you need to add a new dependency on a library \"",(0,o.kt)("strong",{parentName:"p"},"example-lib"),'". Without Rush, you would do something like this:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# DON'T DO THIS IN A RUSH REPO:\n~/my-repo$ cd apps/my-app\n~/my-repo/apps/my-app$ npm install --save example-lib\n")),(0,o.kt)("p",null,"In a Rush repo, you should instead use the ",(0,o.kt)("a",{parentName:"p",href:"../../commands/rush_add"},"rush add")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'~/my-repo$ cd apps/my-app\n\n# Add "example-lib" as a dependency of "my-app", and then automatically run "rush update":\n~/my-repo/apps/my-app$ rush add --package example-lib\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rush add")," command can also be used to update the version of an existing dependency:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Update "my-app" to use "example-lib" version "~1.2.3":\n~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3\n\n# Or if you want the version specifier "^1.2.3":\n~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3 --caret\n\n# A more advanced example, where we query the NPM registry to find latest version that is\n# compatible with the SemVer specifier "^1.2.0" and then add it as a tilde dependency\n# such as "~1.5.3".\n#\n# IMPORTANT: When specifying symbol characters on the command line, use quotes so they\n# don\'t get misinterpreted by your shell.\n~/my-repo/apps/my-app$ rush add --package "example-lib@^1.2.0"\n\n# If any other projects in the repo are using "example-lib", you can update them all\n# to "1.2.3" in bulk:\n~/my-repo/apps/my-app$ rush add --package example-lib@1.2.3 --make-consistent\n\n')),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"../../commands/rush_add"},"command-line help")," for ",(0,o.kt)("inlineCode",{parentName:"p"},"rush add")," describes other options that you can use to customize the behavior."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Tip: A cool VS Code feature")),(0,o.kt)("p",{parentName:"blockquote"},"By the way, if you use Visual Studio Code as your editor, another option is to simply edit the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," file directly. If you start typing ",(0,o.kt)("inlineCode",{parentName:"p"},'"example-lib":'),", VS Code will automatically query the NPM registry and show autocomplete suggestions for the latest published version. For simple additions, this can be even quicker than ",(0,o.kt)("inlineCode",{parentName:"p"},"rush add"),"."),(0,o.kt)("p",{parentName:"blockquote"},"If you modify ",(0,o.kt)("strong",{parentName:"p"},"package.json")," manually, don't forget to run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update")," afterwards.")),(0,o.kt)("h2",{id:"upgrading-to-newer-versions-of-your-npm-packages"},"Upgrading to newer versions of your NPM packages"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update --full")," can install newer versions that satisfy your existing ",(0,o.kt)("strong",{parentName:"p"},"package.json")," files; however, if you want to upgrade the ",(0,o.kt)("strong",{parentName:"p"},"package.json")," files to specify newer version ranges, today Rush does not yet provide a command for doing that in bulk."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/npm-check-updates"},"npm-check-updates")," tool will work to upgrade individual projects in a Rush repo, as long as you remember to run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush update")," afterwards (instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install"),")."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"NOTE: Support for PNPM workspaces is ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/microsoft/rushstack/pull/1938"},"already available"),"; with this feature enabled, the ",(0,o.kt)("a",{parentName:"em",href:"https://pnpm.js.org/en/cli/update"},"pnpm update")," command can be used for bulk upgrades.")))}m.isMDXComponent=!0}}]);