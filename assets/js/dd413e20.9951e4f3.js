"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9184],{158:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(6393);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6958:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var a=n(216),r=n(2228),i=(n(6393),n(158)),o=["components"],s={title:"Incremental builds"},l=void 0,p={unversionedId:"pages/advanced/incremental_builds",id:"pages/advanced/incremental_builds",title:"Incremental builds",description:"Rush's incremental build feature speeds things up by skipping projects that are already up to date.",source:"@site/docs/pages/advanced/incremental_builds.md",sourceDirName:"pages/advanced",slug:"/pages/advanced/incremental_builds",permalink:"/pages/advanced/incremental_builds",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/advanced/incremental_builds.md",tags:[],version:"current",frontMatter:{title:"Incremental builds"},sidebar:"docsSidebar",previous:{title:"Preferred versions",permalink:"/pages/advanced/preferred_versions"},next:{title:"Using watch mode",permalink:"/pages/advanced/watch_mode"}},c={},u=[{value:"How to use it",id:"how-to-use-it",level:2},{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Building changed projects only (unsafe)",id:"building-changed-projects-only-unsafe",level:2},{value:"See also",id:"see-also",level:2}],d={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rush's ",(0,i.kt)("strong",{parentName:"p"},"incremental build"),' feature speeds things up by skipping projects that are already up to date.\nIn this context, "already up to date" means:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the project has already been built locally, AND"),(0,i.kt)("li",{parentName:"ol"},"its source files and NPM dependencies have not changed since then, AND"),(0,i.kt)("li",{parentName:"ol"},"if the project depends on any other Rush projects, those projects are up to date as well, AND"),(0,i.kt)("li",{parentName:"ol"},"the command line parameters haven't changed. (For example, invoking ",(0,i.kt)("inlineCode",{parentName:"li"},"rush build --production"),"\nafter ",(0,i.kt)("inlineCode",{parentName:"li"},"rush build")," would require rebuilding.)")),(0,i.kt)("p",null,"This feature can be combined with ",(0,i.kt)("a",{parentName:"p",href:"/pages/developer/selecting_subsets"},"project selection parameters"),",\nwhere a person explicitly tells Rush which projects to process. Incremental builds reuse existing outputs on\nyour local disk. (This can be contrasted with Rush's upcoming\n",(0,i.kt)("a",{parentName:"p",href:"/pages/maintainer/build_cache"},"build cache"),"\nfeature that can fetch previously built outputs from a cloud storage container. The build cache is still experimental,\nbut it may eventually replace incremental builds entirely.)"),(0,i.kt)("h2",{id:"how-to-use-it"},"How to use it"),(0,i.kt)("p",null,"To see incremental builds in action, simply run the ",(0,i.kt)("inlineCode",{parentName:"p"},"rush build")," command twice:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"rush install\n\n# This might take several minutes...\nrush build\n\n# ...but the second time it finishes in just a few seconds.\nrush build\n")),(0,i.kt)("p",null,"The native ",(0,i.kt)("inlineCode",{parentName:"p"},"rush build")," is hard-wired to be incremental. (And ",(0,i.kt)("inlineCode",{parentName:"p"},"rush rebuild")," is the non-incremental variant of\nthis command.) If you define your own custom ",(0,i.kt)("a",{parentName:"p",href:"/pages/maintainer/custom_commands"},"bulk commands"),",\nyou can make them incremental as well by enabling the ",(0,i.kt)("inlineCode",{parentName:"p"},'"incremental"')," option in\nthe ",(0,i.kt)("a",{parentName:"p",href:"/pages/configs/command-line_json"},"command-line.json")," config file."),(0,i.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,i.kt)("p",null,"Your project's build script (as invoked by ",(0,i.kt)("inlineCode",{parentName:"p"},"rushx build")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run build"),") probably already implements its own\nincremental optimizations. For example, ",(0,i.kt)("a",{parentName:"p",href:"https://rushstack.io/pages/heft/overview/"},"Heft")," maintains multiple caches\nfor various tasks. However, even when ",(0,i.kt)("inlineCode",{parentName:"p"},"rushx build")," does no work for a project, there is still nontrivial overhead\nfor spawning the Node.js process, evaluating JavaScript files, and comparing timestamps for individual files. Suppose\nall those things take only 500ms for one project. If your monorepo has 100 projects, this works out to\n100 x 0.5 = ",(0,i.kt)("strong",{parentName:"p"},"50 seconds")," worth of computation required in the best case where everything is already up to date."),(0,i.kt)("p",null,"Rush eliminates this overhead by performing its own global analysis of the repo, in a single pass -- this way\nbuild scripts are not invoked at all for projects that are up to date. As an additional optimization, Rush's\nincremental analysis relies on file hashes rather than timestamps. For example, if you switch to a different\nGit branch, then switch back, many files may get their timestamps bumped, but Rush's incremental analysis won't\nbe impacted as long as the source file contents have not changed. The file hashes are managed by the\n",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@rushstack/package-deps-hash"},"@rushstack/package-deps-hash")," library.\nThe hashes are saved in a file such as ",(0,i.kt)("inlineCode",{parentName:"p"},"<your-project>/.rush/temp/package-deps_<task-name>.json"),". Inspecting this\nfile can provide some insight into what the algorithm is doing."),(0,i.kt)("h2",{id:"building-changed-projects-only-unsafe"},"Building changed projects only (unsafe)"),(0,i.kt)("p",null,"Suppose hypothetically that our monorepo has the following projects:"),(0,i.kt)("img",{src:"/images/docs/selection-intro.svg",alt:"a sample monorepo",style:{height:"150px"}}),(0,i.kt)("p",null,"In the above illustration, the circles represent local projects, not external NPM dependencies.\nThe arrow from ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," indicates that ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," depends on ",(0,i.kt)("inlineCode",{parentName:"p"},"C"),"; this means that ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," must be built before\n",(0,i.kt)("inlineCode",{parentName:"p"},"D")," can be built."),(0,i.kt)("p",null,"Suppose that after rebuilding everything, we make a change to a source file under project ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),".\nProjects ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"D")," depend on ",(0,i.kt)("inlineCode",{parentName:"p"},"B"),", so they need to be built as well:"),(0,i.kt)("img",{src:"/images/docs/selection-impact.svg",alt:"rush build --impacted-by B",style:{height:"150px"}}),(0,i.kt)("p",null,"We might invoke:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This command will rebuild B, C, and D\nrush build\n")),(0,i.kt)("p",null,"But what if you know that your change to ",(0,i.kt)("inlineCode",{parentName:"p"},"C")," won't affect its API contract? For example, maybe you updated the\ncolor of a button control, or some text in an error message."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--changed-projects-only")," flag tells Rush to build only those projects where a file was changed:"),(0,i.kt)("img",{src:"/images/docs/selection-only.svg",alt:"rush build --only B",style:{height:"150px"}}),(0,i.kt)("p",null,"We'd invoke it like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# This command will rebuild B (but ignore the effects for C and D)\nrush build --changed-projects-only\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"--changed-projects-only"),' is "unsafe" because errors might be encountered if the downstream projects actually\ndid need to be rebuilt. This parameter saves time by assuming that you know better than Rush about what really needs\nto be built. If that assumption is incorrect, you can always do ',(0,i.kt)("inlineCode",{parentName:"p"},"rush build")," to get back to a good state."),(0,i.kt)("h2",{id:"see-also"},"See also"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/developer/selecting_subsets"},"Selecting subsets of projects")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/pages/advanced/watch_mode"},"Using watch mode"))))}h.isMDXComponent=!0}}]);