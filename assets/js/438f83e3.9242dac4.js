"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[8661],{5242:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(3929);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3357:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var r=n(6346),o=n(8155),a=(n(3929),n(5242)),i=["components"],s={title:"rush deploy"},l=void 0,p={unversionedId:"pages/commands/rush_deploy",id:"pages/commands/rush_deploy",title:"rush deploy",description:"See also",source:"@site/docs/pages/commands/rush_deploy.md",sourceDirName:"pages/commands",slug:"/pages/commands/rush_deploy",permalink:"/pages/commands/rush_deploy",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/commands/rush_deploy.md",tags:[],version:"current",frontMatter:{title:"rush deploy"},sidebar:"docsSidebar",previous:{title:"rush check",permalink:"/pages/commands/rush_check"},next:{title:"rush init",permalink:"/pages/commands/rush_init"}},c={},d=[{value:"See also",id:"see-also",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'usage: rush deploy [-h] [-p PROJECT_NAME] [-s SCENARIO_NAME] [--overwrite]\n                   [-t PATH] [--create-archive ARCHIVE_PATH]\n\n\nAfter building the repo, "rush deploy" can be used to prepare a deployment by\ncopying a subset of Rush projects and their dependencies to a target folder,\nwhich can then be uploaded to a production server. The "rush deploy" behavior\nis specified by a scenario config file that must be created first, using the\n"rush init-deploy" command.\n\nOptional arguments:\n  -h, --help            Show this help message and exit.\n  -p PROJECT_NAME, --project PROJECT_NAME\n                        Specifies the name of the main Rush project to be\n                        deployed. It must appear in the\n                        "deploymentProjectNames" setting in the deployment\n                        config file.\n  -s SCENARIO_NAME, --scenario SCENARIO_NAME\n                        By default, the deployment configuration is specified\n                        in "common/config/rush/deploy.json". You can use\n                        "--scenario" to specify an alternate name. The name\n                        must be lowercase and separated by dashes. For\n                        example, if SCENARIO_NAME is "web", then the config\n                        file would be "common/config/rush/deploy-web.json".\n  --overwrite           By default, deployment will fail if the target folder\n                        is not empty. SPECIFYING THIS FLAG WILL RECURSIVELY\n                        DELETE EXISTING CONTENTS OF THE TARGET FOLDER.\n  -t PATH, --target-folder PATH\n                        By default, files are deployed to the "common/deploy"\n                        folder inside the Rush repo. Use this parameter to\n                        specify a different location. WARNING: USE CAUTION\n                        WHEN COMBINING WITH "--overwrite". This parameter may\n                        alternatively be specified via the\n                        RUSH_DEPLOY_TARGET_FOLDER environment variable.\n  --create-archive ARCHIVE_PATH\n                        If specified, after the deployment has been prepared,\n                        "rush deploy" will create an archive containing the\n                        contents of the target folder. The newly created\n                        archive file will be placed according to the\n                        designated path, relative to the target folder.\n                        Supported file extensions: .zip\n')),(0,a.kt)("h2",{id:"see-also"},"See also"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../maintainer/deploying"},"Deploying projects")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"../../commands/rush_init-deploy"},"rush init-deploy"))))}m.isMDXComponent=!0}}]);