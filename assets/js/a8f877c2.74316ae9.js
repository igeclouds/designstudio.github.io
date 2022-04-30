"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[1322],{5242:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(3929);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2178:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var r=n(6346),a=n(8155),o=(n(3929),n(5242)),i=["components"],s={title:"Enabling policies"},l=void 0,p={unversionedId:"pages/maintainer/setup_policies",id:"pages/maintainer/setup_policies",title:"Enabling policies",description:"The rush-schema.json JSON schema defines some additional settings you can specify in rush.json.",source:"@site/docs/pages/maintainer/setup_policies.md",sourceDirName:"pages/maintainer",slug:"/pages/maintainer/setup_policies",permalink:"/pages/maintainer/setup_policies",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/maintainer/setup_policies.md",tags:[],version:"current",frontMatter:{title:"Enabling policies"},sidebar:"docsSidebar",previous:{title:"NPM vs PNPM vs Yarn",permalink:"/pages/maintainer/package_managers"},next:{title:"Installing Git hooks",permalink:"/pages/maintainer/git_hooks"}},c={},u=[{value:"projectFolderMinDepth: Controlling folder size",id:"projectfoldermindepth-controlling-folder-size",level:2},{value:"allowedEmailRegExps: Avoiding private e-mail addresses",id:"allowedemailregexps-avoiding-private-e-mail-addresses",level:2},{value:"approvedPackagesPolicy: Reviewing new NPM dependencies",id:"approvedpackagespolicy-reviewing-new-npm-dependencies",level:2},{value:"How approvals work",id:"how-approvals-work",level:4}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/blob/main/libraries/rush-lib/src/schemas/rush.schema.json"},"rush-schema.json")," JSON schema defines some additional settings you can specify in ",(0,o.kt)("strong",{parentName:"p"},"rush.json"),"."),(0,o.kt)("h2",{id:"projectfoldermindepth-controlling-folder-size"},"projectFolderMinDepth: Controlling folder size"),(0,o.kt)("p",null,"Rush repositories can grow very big. When you have lots of projects (and maybe several repositories), it's very useful to impose a standard structure that makes it immediately obvious which folders contain buildable projects. We suggest a convention like this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'In the repo, top-level folders are "category folders" (e.g. "',(0,o.kt)("strong",{parentName:"li"},"~/demo/libraries"),'")'),(0,o.kt)("li",{parentName:"ul"},'Project folders are always nested under a category folder (e.g. "',(0,o.kt)("strong",{parentName:"li"},"~/demo/libraries/lib1"),'")'),(0,o.kt)("li",{parentName:"ul"},'A project folder must always be at the second level (e.g. we forbid nesting such as "',(0,o.kt)("strong",{parentName:"li"},"~/demo/libraries/lib1/lib2"),'")'),(0,o.kt)("li",{parentName:"ul"},'Cross-project files are always stored in the common folder (e.g. "',(0,o.kt)("strong",{parentName:"li"},"~/demo/common/docs"),'", "',(0,o.kt)("strong",{parentName:"li"},"~demo/common/scripts"),'", etc.)'),(0,o.kt)("li",{parentName:"ul"},"There are no exceptions to these rules")),(0,o.kt)("p",null,"If we want to adopt this policy for our demo repo, we can move the projects into category folders like this:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"~/demo/apps/application"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"~/demo/libraries/lib1"),(0,o.kt)("br",null),"\n",(0,o.kt)("strong",{parentName:"p"},"~/demo/libraries/lib2"),(0,o.kt)("br",null)),(0,o.kt)("p",null,"...and then enforce that projects must be a the second level using these settings in ",(0,o.kt)("strong",{parentName:"p"},"~/demo/rush.json"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'  // The minimum folder depth for the projectFolder field.\n  // (The default value is 1, i.e. no slashes in the path name.)\n  "projectFolderMinDepth": 2,\n  // The maximum folder depth for the projectFolder field.\n  // (The default value is 2, i.e. a single slash in the path name.)\n  "projectFolderMaxDepth": 2,\n')),(0,o.kt)("h2",{id:"allowedemailregexps-avoiding-private-e-mail-addresses"},"allowedEmailRegExps: Avoiding private e-mail addresses"),(0,o.kt)("p",null,"Git requires every commit to be accompanied by a name and e-mail address. However, there is no validation of these fields, and their defaults are pulled from a global setting on your PC that's easy to forget about. When using Git for work, people often accidentally commit using an unintended e-mail address that looks... not so professional. If the repo is hosted on GitHub, these e-mail addresses immediately become queryable via the GitHub REST API, easy pickings for unscrupulous spammers. (The privacy settings for your GitHub account don't affect \"git commit\".)"),(0,o.kt)("p",null,'Rush can help, though. The "gitPolicy" setting in ',(0,o.kt)("strong",{parentName:"p"},"rush.json")," allows you to specify a list of acceptable e-mail patterns for a repository. The patterns are regular expressions. (Since they are inside a JSON string literal, note that backslashes must be double-escaped.)"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'  "gitPolicy": {\n    // A list of regular expressions describing allowable e-mail patterns\n    // for Git commits.  They are case-insensitive anchored JavaScript RegExps.\n    // Example: ".*@example\\\\.com"\n    "allowedEmailRegExps": [\n      // Require GitHub scrubbed e-mails\n      "[^@]+@users\\\\.noreply\\\\.github\\\\.com"\n    ],\n\n    // An example valid e-mail address for "Mr. Example" that conforms to one\n    // of the allowedEmailRegExps.  Example: "mr-example@contoso.com"\n    "sampleEmail": "mrexample@users.noreply.github.com"\n  },\n')),(0,o.kt)("p",null,"Whenever the developer runs ",(0,o.kt)("inlineCode",{parentName:"p"},"rush install"),", Rush will check that their e-mail address follows one of the patterns. If not, it displays a warning like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'$ rush install\nRush Multi-Package Build Tool\n\nChecking Git policy for this repository.\n\nHey there!  To keep things tidy, this repo asks you to submit your Git commmits\nusing an e-mail like this pattern:\n\n    [^@]+@users\\.noreply\\.github\\.com\n\n...but yours is configured like this:\n\n    Bob <bobbles@somewhere.sketchy.int>\n\nTo fix it, you can use commands like this:\n\n    git config --local user.name "Mr. Example"\n    git config --local user.email "mrexample@users.noreply.github.com"\n\nAborting, so you can go fix your settings.  (Or use --bypass-policy to skip.)\n')),(0,o.kt)("h2",{id:"approvedpackagespolicy-reviewing-new-npm-dependencies"},"approvedPackagesPolicy: Reviewing new NPM dependencies"),(0,o.kt)("p",null,"Are there certain people on your team who constantly find exciting new libraries and add them to your package.json? This can quickly get out of hand, especially in environments that require legal or security reviews for external code. The ",(0,o.kt)("strong",{parentName:"p"},"approvedPackagesPolicy")," feature allows you to detect when new NPM dependencies are introduced."),(0,o.kt)("p",null,'Since different levels of scrutiny are often required (e.g. for a shipping product, versus an intern project, versus an internal library), we distinguish "review categories". This allows us to approve a package once for an entire category of projects, while still being alerted when the dependency is used somewhere else.'),(0,o.kt)("p",null,"Continuing the example scenario from ",(0,o.kt)("a",{parentName:"p",href:"../../maintainer/setup_new_repo"},"Setting up a new repo"),", here's how we would update ",(0,o.kt)("strong",{parentName:"p"},"rush.json"),' to define some review categories for "published" versus "internal" projects:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "rushVersion": "4.0.0",\n  "npmVersion": "5.5.1",\n  "nodeSupportedVersionRange": ">=8.9.0 <9.0.0",\n\n  "approvedPackagesPolicy": {\n    "reviewCategories": [ "published", "internal" ],\n    // We don\'t need to review @types packages, because we can assume\n    // the untyped package should already have been approved\n    "ignoredNpmScopes": [ "@types" ]\n  },\n\n  "projects": [\n    {\n      "packageName": "application",\n      "projectFolder": "application",\n      "reviewCategory": "internal"\n    },\n    {\n      "packageName": "lib1",\n      "projectFolder": "lib1",\n      "reviewCategory": "internal"\n    },\n    {\n      "packageName": "lib2",\n      "projectFolder": "lib2",\n      "reviewCategory": "published"\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"When you run ",(0,o.kt)("inlineCode",{parentName:"p"},"rush install"),", it will create two files that report your dependencies. These files should be added to Git and can be configured so that changes require approval:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"~/demo/common/config/rush/browser-approved-packages.json"),": Packages approved for usage in a web browser. This is generally the stricter of the two types, so by default all new packages are added to this file. For web browser dependencies, the review discussion typically focuses on: ",(0,o.kt)("em",{parentName:"li"},"How big is the minified code?")," ",(0,o.kt)("em",{parentName:"li"},"What's the license?")," ",(0,o.kt)("em",{parentName:"li"},"Are there security issues?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"~/demo/common/config/rush/nonbrowser-approved-packages.json"),": Packages approved for usage everywhere ",(0,o.kt)("em",{parentName:"li"},"except")," in a web browser. This review discussion typically focuses on: ",(0,o.kt)("em",{parentName:"li"},"How much clutter will it pull into our node_modules folder?")," ",(0,o.kt)("em",{parentName:"li"},"Do we already have an equivalent package?")," ",(0,o.kt)("em",{parentName:"li"},"Is there any real code in there, or is it a just a flimsy wrapper for another package?"))),(0,o.kt)("p",null,"After running ",(0,o.kt)("inlineCode",{parentName:"p"},"rush install"),", the ",(0,o.kt)("strong",{parentName:"p"},"browser-approved-packages.json")," file will look like this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "packages": [\n    {\n      "name": "@microsoft/gulp-core-build",\n      "allowedCategories": [ "internal" ]\n    },\n    {\n      "name": "@microsoft/node-library-build",\n      "allowedCategories": [ "internal", "published" ]\n    },\n    {\n      "name": "gulp",\n      "allowedCategories": [ "internal", "published" ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"For example, this file is showing that the external dependency ",(0,o.kt)("strong",{parentName:"p"},"@microsoft/gulp-core-build"),' was found in the package.json file for an "internal" project (let\'s say ',(0,o.kt)("strong",{parentName:"p"},"~/demo/lib1"),') but not any "public" project (such as ',(0,o.kt)("strong",{parentName:"p"},"~/demo/application"),")."),(0,o.kt)("p",null,"Rush has no way to detect whether an NPM package is for the browser or not. Since these are all non-browser files, you must manually move them to the other file ",(0,o.kt)("strong",{parentName:"p"},"browser-approved-packages.json"),"."),(0,o.kt)("h4",{id:"how-approvals-work"},"How approvals work"),(0,o.kt)("p",null,"Whenever ",(0,o.kt)("inlineCode",{parentName:"p"},"rush install")," is run, the content in these files will be broadened to match the current contents of package.json. This file should be committed to Git. When the developer creates a pull request, the PR diff can be used e.g. to trigger a special approval."))}m.isMDXComponent=!0}}]);