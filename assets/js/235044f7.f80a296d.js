"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[328],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=r,d=h["".concat(s,".").concat(u)]||h[u]||m[u]||i;return n?a.createElement(d,o(o({ref:t},c),{},{components:n})):a.createElement(d,o({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1029:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>c,default:()=>h});var a=n(1731),r=n(396),i=(n(6393),n(158)),o=["components"],l={title:"Using watch mode"},s=void 0,p={unversionedId:"pages/advanced/watch_mode",id:"pages/advanced/watch_mode",title:"Using watch mode",description:"Popular tools like Webpack and Jest",source:"@site/docs/pages/advanced/watch_mode.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/watch_mode",permalink:"/pages/advanced/watch_mode",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/watch_mode.md",tags:[],version:"current",frontMatter:{title:"Using watch mode"},sidebar:"docsSidebar",previous:{title:"Incremental builds",permalink:"/pages/advanced/incremental_builds"},next:{title:"Installation variants",permalink:"/pages/advanced/installation_variants"}},c=[{value:"A thought experiment",id:"a-thought-experiment",children:[],level:2},{value:"The &quot;watchForChanges&quot; setting (experimental)",id:"the-watchforchanges-setting-experimental",children:[],level:2},{value:"Community solutions",id:"community-solutions",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Popular tools like ",(0,i.kt)("a",{parentName:"p",href:"https://webpack.js.org/configuration/watch/"},"Webpack")," and ",(0,i.kt)("a",{parentName:"p",href:"https://jestjs.io/docs/cli"},"Jest"),'\nprovide a "watch mode" feature: After the task is completed, the tool enters a loop where it watches the file system\nfor changes to your source files. Whenever a change is detected, the task runs again to update its output.\nThis speeds up development because (1) rebuilding happens automatically whenever you save a file, and (2) the task\ncan benefit from in-memory caching because its process never terminates.'),(0,i.kt)("p",null,"But these features typically only work for a single project. When working in a monorepo, we need a watch mode\nthat can monitor ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"multiple projects at once."))),(0,i.kt)("h2",{id:"a-thought-experiment"},"A thought experiment"),(0,i.kt)("p",null,"Suppose hypothetically that our monorepo has the following projects:"),(0,i.kt)("img",{src:"/images/docs/selection-intro.svg",alt:"a sample monorepo",style:{height:"150px"}}),(0,i.kt)("p",null,"In the above illustration, the circles represent local projects, not external NPM dependencies.\nThe arrow from ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," indicates that ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),"; this means that ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," must be built before\n",(0,i.kt)("inlineCode",{parentName:"p"},"D")," can be built."),(0,i.kt)("p",null,"Suppose that you save a change to project ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),":"),(0,i.kt)("img",{src:"/images/docs/selection-impact.svg",alt:"rush build --impacted-by B",style:{height:"150px"}}),(0,i.kt)("p",null,'For a multi-project "watch mode", we\'d expect the following things to happen in order:'),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"B")," should get rebuilt because its file was changed;"),(0,i.kt)("li",{parentName:"ul"},"next, ",(0,i.kt)("inlineCode",{parentName:"li"},"C")," should get rebuilt because it depends on ",(0,i.kt)("inlineCode",{parentName:"li"},"B")),(0,i.kt)("li",{parentName:"ul"},"next, ",(0,i.kt)("inlineCode",{parentName:"li"},"D")," should get rebuilt because it depends on ",(0,i.kt)("inlineCode",{parentName:"li"},"C")),(0,i.kt)("li",{parentName:"ul"},"finally, the Webpack dev server (hosted by ",(0,i.kt)("inlineCode",{parentName:"li"},"D")," presumably) refreshes your web browser with the rebuilt app")),(0,i.kt)("p",null,"How to accomplish that with Rush? Suppose our projects ",(0,i.kt)("inlineCode",{parentName:"p"},"B")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," have a simplistic build script like this:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "rm -Rf lib/ && tsc && jest"\n  }\n  . . .\n')),(0,i.kt)("p",null,"We might try an experiment like invoking ",(0,i.kt)("inlineCode",{parentName:"p"},"rush build --to-except D")," in an endless loop..."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Build everything that D depends on (but not D itself),\n# and keep doing that in an endless loop:\n$ while true; do rush build --to-except D; done\n")),(0,i.kt)("p",null,"...and then, while that is running, we invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"heft start")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"webpack serve"),") in the folder for project ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),"."),(0,i.kt)("p",null,"You'll find that this approach has some problems:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -Rf lib/")," deletes files that are symlink targets. Symlinks seem to confuse Webpack's file watcher, so\nyou may see lots of errors reporting that an imported file cannot be found. Webpack won't recover from that,\nbecause the symlink timestamp isn't updated when the file is later rewritten.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"jest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -Rf")," steps are generally unimportant while watching. The developer's inner loop for\n",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"edit -> rebuild -> reload"))," is much slower than it needs to be."))),(0,i.kt)("p",null,"These problems can be solved by creating a special streamlined script for watch mode, something like this:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"package.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "rm -Rf lib/ && tsc && jest",\n    "build:watch": "tsc"\n  }\n  . . .\n')),(0,i.kt)("h2",{id:"the-watchforchanges-setting-experimental"},'The "watchForChanges" setting (experimental)'),(0,i.kt)("p",null,'Rush\'s "watch mode" formalizes this basic idea, replacing the simple loop with an optimized\n',(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/chokidar"},"chokidar")," filesystem monitor. Here's how you would use it:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a ",(0,i.kt)("a",{parentName:"p",href:"../../maintainer/custom_commands"},"custom command")," in\nyour ",(0,i.kt)("a",{parentName:"p",href:"../../configs/command-line_json"},"command-line.json")," config file.\nContinuing the example above, our custom command will be called ",(0,i.kt)("inlineCode",{parentName:"p"},'"build:watch"'),".\nThe important settings are ",(0,i.kt)("inlineCode",{parentName:"p"},'"incremental"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"watchForChanges"'),":"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"common/config/rush/command-line.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "commands": [\n    {\n      "name": "build:watch",\n      "commandKind": "bulk",\n      "summary": "Build projects and watch for changes",\n      "description": "For details, see the article \\"Using watch mode\\" on the Rush website: https://rushjs.io/",\n\n      // use incremental build logic (important)\n      "incremental": true,\n      "enableParallelism": true,\n      // Enable "watch mode"\n      "watchForChanges": true\n    },\n  . . .\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a ",(0,i.kt)("inlineCode",{parentName:"p"},'"build:watch"')," script to the ",(0,i.kt)("strong",{parentName:"p"},"package.json")," file for each Rush project.\n(",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/pull/2298"},"PR #2298")," aims to simplify this step\nfor projects whose ",(0,i.kt)("inlineCode",{parentName:"p"},'"build:watch"')," would be the same as ",(0,i.kt)("inlineCode",{parentName:"p"},'"build"'),". Eventually it will also be possible\nto consolidate these definitions in a shared ",(0,i.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/rig_packages/"},"rig package"),".)"),(0,i.kt)("p",{parentName:"li"},"If you're using ",(0,i.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/overview/"},"Heft"),", your scripts would look like this:"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"package.json")),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},'  . . .\n  "scripts": {\n    "build": "heft build --clean",\n    "build:watch": "heft build"\n  }\n  . . .\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Invoke the command using ",(0,i.kt)("a",{parentName:"p",href:"../../developer/selecting_subsets"},"project selection parameters")," that\nselect all of ",(0,i.kt)("inlineCode",{parentName:"p"},"D"),"'s dependencies but not ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," itself:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Build everything that D depends on (but not D itself),\n# and keep doing that in an endless loop:\n$ rush build:watch --to-except D\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Lastly, start your dev server in the app folder:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Start Webpack\'s dev server in the folder for project D\n# (which is the web application in this example):\n$ cd apps/D\n$ heft start # <-- or your own "npm run start" equivalent here\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In some situations, the ",(0,i.kt)("inlineCode",{parentName:"p"},"--changed-projects-only")," command can be combined\nwith ",(0,i.kt)("inlineCode",{parentName:"p"},'"watchForChanges"')," for even faster watching. The section\n",(0,i.kt)("a",{parentName:"p",href:"../../advanced/incremental_builds#building-changed-projects-only-unsafe"},"Building changed projects only"),"\nexplains how it works and when it is appropriate."))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},'"Experimental"')," The ",(0,i.kt)("inlineCode",{parentName:"p"},'"watchForChanges"')," feature is still in its early stages. Feedback is welcome!\nGitHub issue ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/rushstack/issues/1202"},"#1202"),"\ntracks additional work items and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wbern"},"William Bernting"),"'s original dev plan.")),(0,i.kt)("h2",{id:"community-solutions"},"Community solutions"),(0,i.kt)("p",null,"The Rush community has shared some interesting alternative approaches to this problem that are also\nhelpful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@telia/rush-select"},"@telia/rush-select")," is an interactive dashboard\nfor monitoring Rush projects and selecting what to rebuild.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://github.com/dimfeld/rush-dev-watcher"},"rush-dev-watcher")," is a simple but useful script from\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/dimfeld"},"Daniel Imfeld")," that performs an initial build and then launches multiple watchers."))),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../developer/selecting_subsets"},"Selecting subsets of projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"../../advanced/incremental_builds"},"Incremental builds"))))}h.isMDXComponent=!0}}]);