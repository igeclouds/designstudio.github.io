"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[9361],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(6393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),m=l(t),f=o,h=m["".concat(p,".").concat(f)]||m[f]||u[f]||s;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var a={};for(var p in n)hasOwnProperty.call(n,p)&&(a[p]=n[p]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var l=2;l<s;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9600:(e,n,t)=>{t.r(n),t.d(n,{frontMatter:()=>a,contentTitle:()=>p,metadata:()=>l,toc:()=>c,default:()=>m});var r=t(1731),o=t(396),s=(t(6393),t(158)),i=["components"],a={title:"experiments.json"},p=void 0,l={unversionedId:"pages/configs/experiments_json",id:"pages/configs/experiments_json",title:"experiments.json",description:"This is the template that rush init",source:"@site/docs/pages/configs/experiments_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/experiments_json",permalink:"/pages/configs/experiments_json",editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/experiments_json.md",tags:[],version:"current",frontMatter:{title:"experiments.json"},sidebar:"docsSidebar",previous:{title:"deploy.json",permalink:"/pages/configs/deploy_json"},next:{title:"rush.json",permalink:"/pages/configs/rush_json"}},c=[],u={toc:c};function m(e){var n=e.components,t=(0,o.Z)(e,i);return(0,s.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"This is the template that ",(0,s.kt)("a",{parentName:"p",href:"../../commands/rush_init"},"rush init"),"\ngenerates for ",(0,s.kt)("strong",{parentName:"p"},"experiments.json"),":"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"common/config/rush/experiments.json")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * This configuration file allows repo maintainers to enable and disable experimental\n * Rush features.  More documentation is available on the Rush website: https://rushjs.io\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/experiments.schema.json",\n\n  /**\n   * Rush 5.14.0 improved incremental builds to ignore spurious changes in the pnpm-lock.json file.\n   * This optimization is enabled by default. If you encounter a problem where "rush build" is neglecting\n   * to build some projects, please open a GitHub issue. As a workaround you can uncomment this line\n   * to temporarily restore the old behavior where everything must be rebuilt whenever pnpm-lock.json\n   * is modified.\n   */\n  /*[LINE "HYPOTHETICAL"]*/ "legacyIncrementalBuildDependencyDetection": true,\n\n  /**\n   * By default, \'rush install\' passes --no-prefer-frozen-lockfile to \'pnpm install\'.\n   * Set this option to true to pass \'--frozen-lockfile\' instead for faster installs.\n   */\n  /*[LINE "HYPOTHETICAL"]*/ "usePnpmFrozenLockfileForRushInstall": true,\n\n  /**\n   * By default, \'rush update\' passes --no-prefer-frozen-lockfile to \'pnpm install\'.\n   * Set this option to true to pass \'--prefer-frozen-lockfile\' instead to minimize shrinkwrap changes.\n   */\n  /*[LINE "HYPOTHETICAL"]*/ "usePnpmPreferFrozenLockfileForRushUpdate": true,\n\n  /**\n   * If using the \'preventManualShrinkwrapChanges\' option, restricts the hash to only include the layout of external dependencies.\n   * Used to allow links between workspace projects or the addition/removal of references to existing dependency versions to not\n   * cause hash changes.\n   */\n  /*[LINE "HYPOTHETICAL"]*/ "omitImportersFromPreventManualShrinkwrapChanges": true,\n\n  /**\n   * If true, the chmod field in temporary project tar headers will not be normalized.\n   * This normalization can help ensure consistent tarball integrity across platforms.\n   */\n  /*[LINE "HYPOTHETICAL"]*/ "noChmodFieldInTarHeaderNormalization": true\n}\n')))}m.isMDXComponent=!0}}]);