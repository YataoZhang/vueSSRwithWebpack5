# vue SSR with Webpack5

first, run `npm run build`, and next run `node scripts.js`, it will report an error like this:
```
[vue-router] Failed to resolve async component default: Error: Cannot find module '../js/index.63fb9d8d.js'
Require stack:
Require stack:
- vueSSRwithWebpack5/node_modules/vue-server-renderer/build.dev.js
- vueSSRwithWebpack5/node_modules/vue-server-renderer/index.js
- vueSSRwithWebpack5/scripts.js
[vue-router] uncaught error during route navigation:
Error: Cannot find module '../js/index.63fb9d8d.js'
Require stack:
- vueSSRwithWebpack5/node_modules/vue-server-renderer/build.dev.js
- vueSSRwithWebpack5/node_modules/vue-server-renderer/index.js
- vueSSRwithWebpack5/scripts.js
```