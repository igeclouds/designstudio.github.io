"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[3173],{158:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(6393);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9159:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>p,toc:()=>d,default:()=>c});var a=n(1731),i=n(396),r=(n(6393),n(158)),o=["components"],l={title:"Selecting subsets of projects"},s=void 0,p={unversionedId:"pages/developer/selecting_subsets",id:"pages/developer/selecting_subsets",title:"Selecting subsets of projects",description:"Bulk commands like rush build and rush rebuild operate on",source:"@site/docs/pages/developer/selecting_subsets.md",sourceDirName:"pages/developer",slug:"/pages/developer/selecting_subsets",permalink:"/pages/developer/selecting_subsets",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/developer/selecting_subsets.md",tags:[],version:"current",frontMatter:{title:"Selecting subsets of projects"},sidebar:"docsSidebar",previous:{title:"Configuring tab completion",permalink:"/pages/developer/tab_completion"},next:{title:"Setting up a new repo",permalink:"/pages/maintainer/setup_new_repo"}},d=[{value:"--to",id:"--to",children:[],level:2},{value:"--to-except",id:"--to-except",children:[],level:2},{value:"--from",id:"--from",children:[],level:2},{value:"--impacted-by (unsafe)",id:"--impacted-by-unsafe",children:[],level:2},{value:"--impacted-by-except (unsafe)",id:"--impacted-by-except-unsafe",children:[],level:2},{value:"--only (unsafe)",id:"--only-unsafe",children:[],level:2},{value:"Combining parameters",id:"combining-parameters",children:[],level:2},{value:"See also",id:"see-also",children:[],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../../maintainer/custom_commands"},"Bulk commands")," like ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"rush rebuild")," operate on\nall projects in the monorepo by default. This becomes expensive as you accumulate more and more projects.\nTo speed things up, Rush provides a set of command-line parameters for selecting subsets of projects."),(0,r.kt)("p",null,"Suppose we're working with the following collection of Rush projects:"),(0,r.kt)("img",{src:"/images/docs/selection-intro.svg",alt:"a sample monorepo",style:{height:"150px"}}),(0,r.kt)("p",null,"In the above illustration, the circles represent local projects, not external NPM dependencies.\nThe arrow from ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," indicates that ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," depends on ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),"; this means that ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," must be built before\n",(0,r.kt)("inlineCode",{parentName:"p"},"D")," can be built. We'll use the ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build")," command in the examples given below, but these same parameters\nwork for any bulk command."),(0,r.kt)("h2",{id:"--to"},"-","-to"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible scenario:")," Suppose that you have just cloned your monorepo, and now you want to start working\non project ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),". You need to build all the things that ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," depends on, and also ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," itself."),(0,r.kt)("p",null,"Here's how to do that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Build everything up to (and including) project B\n$ rush build --to B\n")),(0,r.kt)("p",null,"The projects selected by this command are ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),":"),(0,r.kt)("img",{src:"/images/docs/selection-to.svg",alt:"rush build --to B",style:{height:"150px"}}),(0,r.kt)("h2",{id:"--to-except"},"-","-to-except"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible scenario:")," In many cases we do not need ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build")," to process ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),', because our next step\nwill be to invoke Webpack or Jest in "watch mode" for ',(0,r.kt)("inlineCode",{parentName:"p"},"B"),". You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"--to-except")," instead\nof ",(0,r.kt)("inlineCode",{parentName:"p"},"--to")," to exclude ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Build everything up to project B, but not B itself\n$ rush build --to-except B\n\n# Invoke Jest watch mode to build B\n$ heft test --watch\n")),(0,r.kt)("p",null,"The projects selected by this command are ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),":"),(0,r.kt)("img",{src:"/images/docs/selection-to-except.svg",alt:"rush build --to-except B",style:{height:"150px"}}),(0,r.kt)("h2",{id:"--from"},"-","-from"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible scenario:")," Now that we've finished making our changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", we want to build the downstream\nprojects ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"D")," to make sure their tests were not broken by our change. In order to build ",(0,r.kt)("inlineCode",{parentName:"p"},"D"),",\nwe also need to include its dependency ",(0,r.kt)("inlineCode",{parentName:"p"},"G"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," command does this. It will also include ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),"\nsince they're required by ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),". (Since ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build")," is incremental, ",(0,r.kt)("inlineCode",{parentName:"p"},"A")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," will probably get skipped assuming\nthey are still up to date.)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Build everything downstream from B, including any implied dependencies\n$ rush build --from B\n")),(0,r.kt)("p",null,"This command selects everything except for ",(0,r.kt)("inlineCode",{parentName:"p"},"F"),":"),(0,r.kt)("img",{src:"/images/docs/selection-from.svg",alt:"rush build --from B",style:{height:"150px"}}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Compatibility note:")," If the ",(0,r.kt)("inlineCode",{parentName:"p"},"rushVersion")," setting in your ",(0,r.kt)("strong",{parentName:"p"},"rush.json")," is older than 5.38.0,\nthen ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," will instead behave like ",(0,r.kt)("inlineCode",{parentName:"p"},"--impacted-by"),". The meaning was changed in Rush 5.38.0 because\nmost users expected ",(0,r.kt)("inlineCode",{parentName:"p"},"--from")," to include dependencies.")),(0,r.kt)("h2",{id:"--impacted-by-unsafe"},"-","-impacted-by (unsafe)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible scenario:")," Suppose that while working on ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," we made some changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build"),"\nincremental analysis assumes that any change to ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," requires all its downstream dependents to be rebuilt,\nincluding ",(0,r.kt)("inlineCode",{parentName:"p"},"F")," for example. That can be a big set. Maybe you know better -- perhaps you later reverted your change\nin ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", or maybe you manually invoked the toolchain so ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," is in good shape, or maybe your change to ",(0,r.kt)("inlineCode",{parentName:"p"},"E")," is\nnot relevant right now."),(0,r.kt)("p",null,"In these situations the ",(0,r.kt)("inlineCode",{parentName:"p"},"--impacted-by")," parameter can be handy: It means ",(0,r.kt)("em",{parentName:"p"},'"Select only those projects\nthat might be broken by a change to B, and trust me that their dependencies are in a usable state."')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Build B and everything downstream from B, but don't include dependencies\n$ rush build --impacted-by B\n")),(0,r.kt)("p",null,"The projects selected by this command are ",(0,r.kt)("inlineCode",{parentName:"p"},"B"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"D"),":"),(0,r.kt)("img",{src:"/images/docs/selection-impact.svg",alt:"rush build --impacted-by B",style:{height:"150px"}}),(0,r.kt)("h2",{id:"--impacted-by-except-unsafe"},"-","-impacted-by-except (unsafe)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible scenario:")," This is the same as ",(0,r.kt)("inlineCode",{parentName:"p"},"--impacted-by")," except that it does not include ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," itself. For example\nthat might make sense if you already built ",(0,r.kt)("inlineCode",{parentName:"p"},"B")," manually while implementing the thing that we now want to test."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Build everything downstream from B, but don't include dependencies\n$ rush build --impacted-by-except B\n")),(0,r.kt)("p",null,"The projects selected by this command are ",(0,r.kt)("inlineCode",{parentName:"p"},"C")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"D"),":"),(0,r.kt)("img",{src:"/images/docs/selection-impact-except.svg",alt:"rush build --impacted-by-except B",style:{height:"150px"}}),(0,r.kt)("h2",{id:"--only-unsafe"},"-","-only (unsafe)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Possible scenario:")," As its name implies, the ",(0,r.kt)("inlineCode",{parentName:"p"},"--only")," parameter adds exactly one project to the selection,\nignoring dependencies."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Build only B and nothing else\n$ rush build --only B\n")),(0,r.kt)("img",{src:"/images/docs/selection-only.svg",alt:"rush build --only B",style:{height:"150px"}}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--only")," parameter is most useful when combined with other parameters. For example, in our narrative above\nwhen we did ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build --impacted-by B"),", maybe we had not actually built ",(0,r.kt)("inlineCode",{parentName:"p"},"G")," yet. We can include it by\ndoing ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build --impacted-by B --only G"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},'"Unsafe" parameters:')," The parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"--only"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"--impacted-by"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"--impacted-by-except")," can all fail if the\nrequired dependencies are not built. These three parameters save time by assuming that you know better than Rush\nabout what really needs to be built. If that assumption is incorrect, you can always do ",(0,r.kt)("inlineCode",{parentName:"p"},"rush build")," to get back\nto a good state.")),(0,r.kt)("h2",{id:"combining-parameters"},"Combining parameters"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You can combine any of the selection parameters on a single command line. The result is always the union of each\nindividual selection."),(0,r.kt)("li",{parentName:"ul"},"The same parameter can be specified multiple times. For example: ",(0,r.kt)("inlineCode",{parentName:"li"},"rush build --only A --only B --only C"),"\nwill select ",(0,r.kt)("inlineCode",{parentName:"li"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"B"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"C")),(0,r.kt)("li",{parentName:"ul"},"Note that Rush does not provide any parameter that would reduce the selection. This is an intentional design choice;\nin ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/microsoft/rushstack/issues/1241"},"#1241")," we'll implement personal tags for building up more\ncomplex selections.)")),(0,r.kt)("p",null,"Here's a more complex combined command-line:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ rush build --only A --impacted-by-except B --to F\n")),(0,r.kt)("p",null,"The projects selected by this example are ",(0,r.kt)("inlineCode",{parentName:"p"},"A"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"C"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"D"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"E"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"F"),":"),(0,r.kt)("img",{src:"/images/docs/selection-multi.svg",alt:"rush build --only A --impacted-by-except B --to F",style:{height:"150px"}}),(0,r.kt)("h2",{id:"see-also"},"See also"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../advanced/incremental_builds"},"Incremental builds")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../advanced/watch_mode"},"Using watch mode")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../commands/rush_build"},"rush build")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"../../commands/rush_rebuild"},"rush rebuild"))))}c.isMDXComponent=!0}}]);