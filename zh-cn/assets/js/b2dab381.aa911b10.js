"use strict";(self.webpackChunkrushjs_io=self.webpackChunkrushjs_io||[]).push([[12],{158:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>u});var s=t(6393);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,s,o=function(e,n){if(null==e)return{};var t,s,o={},i=Object.keys(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(s=0;s<i.length;s++)t=i[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=s.createContext({}),l=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},h=s.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),h=l(t),u=o,m=h["".concat(p,".").concat(u)]||h[u]||d[u]||i;return t?s.createElement(m,a(a({ref:n},c),{},{components:t})):s.createElement(m,a({ref:n},c))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=h;var r={};for(var p in n)hasOwnProperty.call(n,p)&&(r[p]=n[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,a[1]=r;for(var l=2;l<i;l++)a[l]=t[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,t)}h.displayName="MDXCreateElement"},7848:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var s=t(216),o=t(2228),i=(t(6393),t(158)),a=["components"],r={title:"pnpm-config.json"},p=void 0,l={unversionedId:"pages/configs/pnpm-config_json",id:"pages/configs/pnpm-config_json",title:"pnpm-config.json",description:"NOTE: This config file was introduced with Rush 5.79.0. Prior to that release,",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/pages/configs/pnpm-config_json.md",sourceDirName:"pages/configs",slug:"/pages/configs/pnpm-config_json",permalink:"/zh-cn/pages/configs/pnpm-config_json",draft:!1,editUrl:"https://github.com/microsoft/rushstack-websites/tree/main/websites/rushjs.io/docs/pages/configs/pnpm-config_json.md",tags:[],version:"current",frontMatter:{title:"pnpm-config.json"},sidebar:"docsSidebar",previous:{title:"experiments.json",permalink:"/zh-cn/pages/configs/experiments_json"},next:{title:"rush.json",permalink:"/zh-cn/pages/configs/rush_json"}},c={},d=[],h={toc:d};function u(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,s.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"NOTE: This config file was introduced with Rush 5.79.0. Prior to that release,\nPNPM settings were instead stored in the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpmOptions"')," section of ",(0,i.kt)("strong",{parentName:"p"},"rush.json"),".\nFor backwards compatibility, Rush 5 still accepts the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpmOptions"')," section.\nIf you are upgrading an old monorepo, in order to access these new PNPM settings,\nyou must manually delete the ",(0,i.kt)("inlineCode",{parentName:"p"},'"pnpmOptions"')," setting from ",(0,i.kt)("strong",{parentName:"p"},"rush.json")," and\ncreate the ",(0,i.kt)("strong",{parentName:"p"},"pnpm-config.json")," file.")),(0,i.kt)("p",null,"This is the template that ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/pages/commands/rush_init"},"rush init"),"\ngenerates for ",(0,i.kt)("strong",{parentName:"p"},"pnpm-config.json"),":"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"common/config/rush/pnpm-config.json")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'/**\n * This configuration file provides settings specific to the PNPM package manager.\n * More documentation is available on the Rush website: https://rushjs.io\n */\n{\n  "$schema": "https://developer.microsoft.com/json-schemas/rush/v5/pnpm-config.schema.json",\n\n  /**\n   * If true, then `rush install` and `rush update` will use the PNPM workspaces feature\n   * to perform the install, instead of the old model where Rush generated the symlinks\n   * for each projects\'s node_modules folder.\n   *\n   * When using workspaces, Rush will generate a `common/temp/pnpm-workspace.yaml` file referencing\n   * all local projects to install. Rush will also generate a `.pnpmfile.cjs` shim which implements\n   * Rush-specific features such as preferred versions.  The user\'s `common/config/rush/.pnpmfile.cjs`\n   * is invoked by the shim.\n   *\n   * This option is strongly recommended. The default value is false.\n   */\n  "useWorkspaces": true,\n\n  /**\n   * If true, then Rush will add the `--strict-peer-dependencies` command-line parameter when\n   * invoking PNPM.  This causes `rush update` to fail if there are unsatisfied peer dependencies,\n   * which is an invalid state that can cause build failures or incompatible dependency versions.\n   * (For historical reasons, JavaScript package managers generally do not treat this invalid\n   * state as an error.)\n   *\n   * PNPM documentation: https://pnpm.io/npmrc#strict-peer-dependencies\n   *\n   * The default value is false to avoid legacy compatibility issues.\n   * It is strongly recommended to set `strictPeerDependencies=true`.\n   */\n  // "strictPeerDependencies": true,\n\n  /**\n   * Environment variables that will be provided to PNPM.\n   */\n  // "environmentVariables": {\n  //   "NODE_OPTIONS": {\n  //     "value": "--max-old-space-size=4096",\n  //     "override": false\n  //   }\n  // },\n\n  /**\n   * Specifies the location of the PNPM store.  There are two possible values:\n   *\n   * - `local` - use the `pnpm-store` folder in the current configured temp folder:\n   *   `common/temp/pnpm-store` by default.\n   * - `global` - use PNPM\'s global store, which has the benefit of being shared\n   *    across multiple repo folders, but the disadvantage of less isolation for builds\n   *    (for example, bugs or incompatibilities when two repos use different releases of PNPM)\n   *\n   * In both cases, the store path can be overridden by the environment variable `RUSH_PNPM_STORE_PATH`.\n   *\n   * The default value is `local`.\n   */\n  // "pnpmStore": "global",\n\n  /**\n   * If true, then `rush install` will report an error if manual modifications\n   * were made to the PNPM shrinkwrap file without running `rush update` afterwards.\n   *\n   * This feature protects against accidental inconsistencies that may be introduced\n   * if the PNPM shrinkwrap file (`pnpm-lock.yaml`) is manually edited.  When this\n   * feature is enabled, `rush update` will append a hash to the file as a YAML comment,\n   * and then `rush update` and `rush install` will validate the hash.  Note that this\n   * does not prohibit manual modifications, but merely requires `rush update` be run\n   * afterwards, ensuring that PNPM can report or repair any potential inconsistencies.\n   *\n   * To temporarily disable this validation when invoking `rush install`, use the\n   * `--bypass-policy` command-line parameter.\n   *\n   * The default value is false.\n   */\n  // "preventManualShrinkwrapChanges": true,\n\n  /**\n   * The "globalOverrides" setting provides a simple mechanism for overriding version selections\n   * for all dependencies of all projects in the monorepo workspace.  The settings are copied\n   * into the `pnpm.overrides` field of the `common/temp/package.json` file that is generated\n   * by Rush during installation.\n   *\n   * Order of precedence: `.pnpmfile.cjs` has the highest precedence, followed by\n   * `unsupportedPackageJsonSettings`, `globalPeerDependencyRules`, `globalPackageExtensions`,\n   * and `globalOverrides` has lowest precedence.\n   *\n   * PNPM documentation: https://pnpm.io/package_json#pnpmoverrides\n   */\n  "globalOverrides": {\n    // "example1": "^1.0.0",\n    // "example2": "npm:@company/example2@^1.0.0"\n  },\n\n  /**\n   * The `globalPeerDependencyRules` setting provides various settings for suppressing validation errors\n   * that are reported during installation with `strictPeerDependencies=true`.  The settings are copied\n   * into the `pnpm.peerDependencyRules` field of the `common/temp/package.json` file that is generated\n   * by Rush during installation.\n   *\n   * Order of precedence: `.pnpmfile.cjs` has the highest precedence, followed by\n   * `unsupportedPackageJsonSettings`, `globalPeerDependencyRules`, `globalPackageExtensions`,\n   * and `globalOverrides` has lowest precedence.\n   *\n   * https://pnpm.io/package_json#pnpmpeerdependencyrules\n   */\n  "globalPeerDependencyRules": {\n    // "ignoreMissing": ["@eslint/*"],\n    // "allowedVersions": { "react": "17" },\n    // "allowAny": ["@babel/*"]\n  },\n\n  /**\n   * The `globalPackageExtension` setting provides a way to patch arbitrary package.json fields\n   * for any PNPM dependency of the monorepo.  The settings are copied into the `pnpm.packageExtensions`\n   * field of the `common/temp/package.json` file that is generated by Rush during installation.\n   * The `globalPackageExtension` setting has similar capabilities as `.pnpmfile.cjs` but without\n   * the downsides of an executable script (nondeterminism, unreliable caching, performance concerns).\n   *\n   * Order of precedence: `.pnpmfile.cjs` has the highest precedence, followed by\n   * `unsupportedPackageJsonSettings`, `globalPeerDependencyRules`, `globalPackageExtensions`,\n   * and `globalOverrides` has lowest precedence.\n   *\n   * PNPM documentation: https://pnpm.io/package_json#pnpmpackageextensions\n   */\n  "globalPackageExtensions": {\n    // "fork-ts-checker-webpack-plugin": {\n    //   "dependencies": {\n    //     "@babel/core": "1"\n    //   },\n    //   "peerDependencies": {\n    //     "eslint": ">= 6"\n    //   },\n    //   "peerDependenciesMeta": {\n    //     "eslint": {\n    //       "optional": true\n    //     }\n    //   }\n    // }\n  },\n\n  /**\n   * The `globalNeverBuiltDependencies` setting suppresses the `preinstall`, `install`, and `postinstall`\n   * lifecycle events for the specified NPM dependencies.  This is useful for scripts with poor practices\n   * such as downloading large binaries without retries or attempting to invoke OS tools such as\n   * a C++ compiler.  (PNPM\'s terminology refers to these lifecycle events as "building" a package;\n   * it has nothing to do with build system operations such as `rush build` or `rushx build`.)\n   * The settings are copied into the `pnpm.neverBuiltDependencies` field of the `common/temp/package.json`\n   * file that is generated by Rush during installation.\n   *\n   * PNPM documentation: https://pnpm.io/package_json#pnpmneverbuiltdependencies\n   */\n  "globalNeverBuiltDependencies": [\n    // "fsevents"\n  ],\n\n  /**\n   * The `globalAllowedDeprecatedVersions` setting suppresses installation warnings for package\n   * versions that the NPM registry reports as being deprecated.  This is useful if the\n   * deprecated package is an indirect dependency of an external package that has not released a fix.\n   * The settings are copied into the `pnpm.allowedDeprecatedVersions` field of the `common/temp/package.json`\n   * file that is generated by Rush during installation.\n   *\n   * PNPM documentation: https://pnpm.io/package_json#pnpmalloweddeprecatedversions\n   *\n   * If you are working to eliminate a deprecated version, it\'s better to specify `allowedDeprecatedVersions`\n   * in the package.json file for individual Rush projects.\n   */\n  "globalAllowedDeprecatedVersions": {\n    // "request": "*"\n  },\n\n  /**\n   * (USE AT YOUR OWN RISK)  This is a free-form property bag that will be copied into\n   * the `common/temp/package.json` file that is generated by Rush during installation.\n   * This provides a way to experiment with new PNPM features.  These settings will override\n   * any other Rush configuration associated with a given JSON field except for `.pnpmfile.cjs`.\n   *\n   * USAGE OF THIS SETTING IS NOT SUPPORTED BY THE RUSH MAINTAINERS AND MAY CAUSE RUSH\n   * TO MALFUNCTION.  If you encounter a missing PNPM setting that you believe should\n   * be supported, please create a GitHub issue or PR.  Note that Rush does not aim to\n   * support every possible PNPM setting, but rather to promote a battle-tested installation\n   * strategy that is known to provide a good experience for large teams with lots of projects.\n   */\n  "unsupportedPackageJsonSettings": {\n    // "dependencies": {\n    //   "not-a-good-practice": "*"\n    // },\n    // "scripts": {\n    //   "do-something": "echo Also not a good practice"\n    // },\n    // "pnpm": { "futurePnpmFeature": true }\n  }\n}\n')))}u.isMDXComponent=!0}}]);