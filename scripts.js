const { createBundleRenderer } = require('vue-server-renderer');

const serverBundle = require('./dist/vue-ssr-server-bundle.json');
// const clientManifest = require('../output/vue-ssr-client-manifest.json');

const createRenderer = (bundle, options = {}) => {
    return createBundleRenderer(bundle, Object.assign(options, {
        runInNewContext: false
    }));
};

let renderer = createRenderer(serverBundle);

// module.exports.render = (path = '/', context = {}) => {
const ctx = {
    route: { path: '/index' },
};


renderer.renderToString(ctx, (err, html) => {
    if (err) {
        return console.log(err);
    }
    console.log(html);
});