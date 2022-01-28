"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[1949],{158:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var o=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=u(n),c=r,d=m["".concat(l,".").concat(c)]||m[c]||h[c]||s;return n?o.createElement(d,i(i({ref:t},p),{},{components:n})):o.createElement(d,i({ref:t},p))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=m;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var u=2;u<s;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8388:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>u,toc:()=>p,default:()=>m});var o=n(1731),r=n(396),s=(n(6393),n(158)),i=["components"],a={title:"Frequently Asked Questions (FAQ)"},l=void 0,u={unversionedId:"pages/help/faq",id:"pages/help/faq",title:"Frequently Asked Questions (FAQ)",description:"All my projects in one big repo? Is that a good idea?",source:"@site/docs/pages/help/faq.md",sourceDirName:"pages/help",slug:"/pages/help/faq",permalink:"/pages/help/faq",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/help/faq.md",tags:[],version:"current",frontMatter:{title:"Frequently Asked Questions (FAQ)"},sidebar:"docsSidebar",previous:{title:"Getting support",permalink:"/pages/help/support"}},p=[{value:"All my projects in one big repo? Is that a good idea?",id:"all-my-projects-in-one-big-repo-is-that-a-good-idea",children:[],level:3},{value:"Where do I send bug reports or feature requests?",id:"where-do-i-send-bug-reports-or-feature-requests",children:[],level:3},{value:"With many projects in one repo, will &quot;npm install&quot; take too long?",id:"with-many-projects-in-one-repo-will-npm-install-take-too-long",children:[],level:3},{value:"Will Rush make my tooling nonstandard?",id:"will-rush-make-my-tooling-nonstandard",children:[],level:3},{value:"Is &quot;Rush Stack&quot; the same thing as Rush?",id:"is-rush-stack-the-same-thing-as-rush",children:[],level:3},{value:"After installing Rush, why am I still seeing the old version?",id:"after-installing-rush-why-am-i-still-seeing-the-old-version",children:[],level:3},{value:"The &quot;npm install&quot; step is reporting network errors -- what to do?",id:"the-npm-install-step-is-reporting-network-errors----what-to-do",children:[],level:3},{value:"Why do Rush&#39;s JSON config files contain <code>//</code> comments that GitHub shows in red?",id:"why-do-rushs-json-config-files-contain--comments-that-github-shows-in-red",children:[],level:3},{value:"How to clean up Rush&#39;s installation to avoid interfering with other tools?",id:"how-to-clean-up-rushs-installation-to-avoid-interfering-with-other-tools",children:[],level:3}],h={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h3",{id:"all-my-projects-in-one-big-repo-is-that-a-good-idea"},"All my projects in one big repo? Is that a good idea?"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Answered in ",(0,s.kt)("a",{parentName:"em",href:"../../intro/why_mono"},"this article"),".")),(0,s.kt)("h3",{id:"where-do-i-send-bug-reports-or-feature-requests"},"Where do I send bug reports or feature requests?"),(0,s.kt)("p",null,"Open a ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/issues"},"GitHub issue")," for the ",(0,s.kt)("strong",{parentName:"p"},"rushstack"),' project. Include "Rush" in your issue title.'),(0,s.kt)("h3",{id:"with-many-projects-in-one-repo-will-npm-install-take-too-long"},'With many projects in one repo, will "npm install" take too long?'),(0,s.kt)("p",null,'You might be thinking: "Hmmm.. if my current install takes 3 minutes, and you want me to put 20 projects in one repo, won\'t that multiply my NPM install time to 60 minutes!?" Nope. Rush centralizes your dependencies in a "common" folder and runs "npm install" exactly once, with essentially the same install time as your original monolithic application.'),(0,s.kt)("h3",{id:"will-rush-make-my-tooling-nonstandard"},"Will Rush make my tooling nonstandard?"),(0,s.kt)("p",null,"Nope! Rush works within the existing systems and standards. It just does things better and faster."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Each project folder remains self-contained (no blurring of package boundaries)"),(0,s.kt)("li",{parentName:"ul"},"It's still possible to build any project without Rush; just do ",(0,s.kt)("inlineCode",{parentName:"li"},"npm install")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"gulp")," as usual"),(0,s.kt)("li",{parentName:"ul"},"A project can be moved to a separate repo at any time, without any code changes; no commitment!")),(0,s.kt)("h3",{id:"is-rush-stack-the-same-thing-as-rush"},'Is "Rush Stack" the same thing as Rush?'),(0,s.kt)("p",null,"No. ",(0,s.kt)("strong",{parentName:"p"},"Rush Stack")," is a suite of projects, maintained by a group of developers with a common mission to build\nprofessional tooling for large scale TypeScript monorepos. Rush is a part of Rush Stack. The other pieces are\nstrictly optional, though. Rush itself is toolchain agnostic -- it works great as a standalone tool.\nFor more details, check out the ",(0,s.kt)("a",{parentName:"p",href:"https://rushstack.io/"},"Rush Stack")," website."),(0,s.kt)("h3",{id:"after-installing-rush-why-am-i-still-seeing-the-old-version"},"After installing Rush, why am I still seeing the old version?"),(0,s.kt)("p",null,"This problem isn't specific to Rush, but we hear about it a lot because Rush is one of the first tools people need to invoke when starting work in a repo. The symptoms look like this:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"$ npm install -g @microsoft/rush\nC:\\Program Files\\nodejs\\rush -> C:\\Program Files\\nodejs\\node_modules\\@microsoft\\\nrush\\bin\\rush\nC:\\Program Files\\nodejs\n`-- @microsoft/rush@3.0.1\n\n$ rush\nRush Multi-Package Build Tool 2.5.0 - http://aka.ms/rush\n")),(0,s.kt)("p",null,"NPM seems to say that it is installing version 3.0.1, but when we execute the command, it shows Rush version 2.5.0. What's going on here?!"),(0,s.kt)("p",null,'The problem is that when you type commands like "gulp" or "rush", they are found in your system PATH, which can be pointing to folders from previous installs of NodeJS or NPM.'),(0,s.kt)("p",null,"The fix:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Run ",(0,s.kt)("inlineCode",{parentName:"li"},"npm ls -g --depth 0")," to figure out where your NPM packages are being installed."),(0,s.kt)("li",{parentName:"ol"},"Run the ",(0,s.kt)("inlineCode",{parentName:"li"},"set")," command, and examine your PATH environment variable."),(0,s.kt)("li",{parentName:"ol"},"Make sure that no other NPM or NodeJS folders appear in your PATH before the folder from #1"),(0,s.kt)("li",{parentName:"ol"},"Delete any obsolete folders from your PATH, e.g. from an old install of NPM, NodeJS, nodist, nvm-windows, etc."),(0,s.kt)("li",{parentName:"ol"},"If you previously used one of these alternative engines, most likely you have a bunch of deadwood NPM packages left behind on your disk somewhere. It's a good idea to track them down and delete them.")),(0,s.kt)("p",null,"Some places to look:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"C:\\Program Files\\nodejs\nC:\\Program Files (x86)\\nodist\n%APPDATA%\\npm\n%APPDATA%\\nvm\n")),(0,s.kt)("h3",{id:"the-npm-install-step-is-reporting-network-errors----what-to-do"},'The "npm install" step is reporting network errors -- what to do?'),(0,s.kt)("p",null,'If you install packages from a custom NPM registry (e.g. a private server for your company or a caching proxy), then your project maintainer will instruct you to add special configuration settings in your .npmrc file. If these settings are incorrect, "npm install" may report confusing errors that seem to indicate a network failure. It\'s important to understand that the NPM tool looks for ".npmrc" files multiple locations (and ignores other locations).'),(0,s.kt)("p",null,'Without Rush, NPM looks for "',(0,s.kt)("strong",{parentName:"p"},".npmrc"),'" in these two places, ',(0,s.kt)("em",{parentName:"p"},"and merges their contents"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"in the same folder as your package.json (useful for storing project-specific settings in Git)"),(0,s.kt)("li",{parentName:"ul"},"in your user home directory (your authentication token goes here)")),(0,s.kt)("p",null,'When Rush invokes "npm install", it looks for "',(0,s.kt)("strong",{parentName:"p"},".npmrc"),'" in these two places:'),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},'"',(0,s.kt)("strong",{parentName:"li"},"./common/config/rush/.npmrc"),'" (which gets copied to "',(0,s.kt)("strong",{parentName:"li"},"./common/temp/.npmrc"),'" during install)'),(0,s.kt)("li",{parentName:"ul"},"in your user home directory")),(0,s.kt)("h3",{id:"why-do-rushs-json-config-files-contain--comments-that-github-shows-in-red"},"Why do Rush's JSON config files contain ",(0,s.kt)("inlineCode",{parentName:"h3"},"//")," comments that GitHub shows in red?"),(0,s.kt)("p",null,"JSON was originally intended as a machine interchange format, and thus does not formally support\ncode comments. Recently JSON has gained popularity as a human-edited config file format, which obviously requires\ncomments. As such, most serious JSON libraries can handle comments without any trouble. (A notable exception\nis ",(0,s.kt)("inlineCode",{parentName:"p"},"JSON.parse()"),"; don't use that -- it cannot validate schemas and has poor error reporting.)"),(0,s.kt)("p",null,'VS Code highlights JSON comments as errors by default, but it provides an optional "',(0,s.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/languages/json#_json-with-comments"},"JSON with comments"),'" mode. To enable this, add this line to\nyour ',(0,s.kt)("strong",{parentName:"p"},"settings.json")," in VS Code:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"files.associations": { "*.json": "jsonc" }\n')),(0,s.kt)("p",null,"GitHub also highlights comments as errors by default. To fix that, you can add this line to your\n",(0,s.kt)("strong",{parentName:"p"},".gitattributes")," file (and you may also need to commit a change to the affected files to work around a GitHub\ncaching issue):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"*.json  linguist-language=JSON-with-Comments\n")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"For a discussion of some other possibilities, see\n",(0,s.kt)("a",{parentName:"em",href:"https://github.com/microsoft/rushstack/issues/1088"},"issue #1088"),".")),(0,s.kt)("h3",{id:"how-to-clean-up-rushs-installation-to-avoid-interfering-with-other-tools"},"How to clean up Rush's installation to avoid interfering with other tools?"),(0,s.kt)("p",null,"Generally it's recommended to perform all monorepo management using Rush. The symlinks that Rush creates under the project ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," folders may confuse other tools such as NPM or Yarn, causing them to malfunction because they expect a different installation model. Sometimes this is unavoidable, however. For example, when migrating an existing repo to use Rush however, the CI system may need to reuse an existing working folder to build different branches that use different installation models. To prevent interference, your CI job will first need to invoke a command that deletes the old files from the previous installation model."),(0,s.kt)("p",null,"For Yarn or NPM, a command like ",(0,s.kt)("inlineCode",{parentName:"p"},"git clean -dfx")," is generally sufficient. (THIS DELETES FILES -- ",(0,s.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-clean"},"read the manual")," before invoking!)"),(0,s.kt)("p",null,"For cleaning up a Rush installation, ",(0,s.kt)("inlineCode",{parentName:"p"},"git clean")," is NOT recommended because it does not handle symlinks reliably. Instead, use the ",(0,s.kt)("a",{parentName:"p",href:"../../commands/rush_purge"},"rush purge")," command to delete the ",(0,s.kt)("inlineCode",{parentName:"p"},"node_modules")," folders created by Rush."))}m.isMDXComponent=!0}}]);