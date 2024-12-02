import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CuEYMbo2.mjs';
import { manifest } from './manifest_DmkSiLxO.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/login.json.astro.mjs');
const _page2 = () => import('./pages/api/ticket.json.astro.mjs');
const _page3 = () => import('./pages/api/users.json.astro.mjs');
const _page4 = () => import('./pages/forgotpassword.astro.mjs');
const _page5 = () => import('./pages/movies/_id_.astro.mjs');
const _page6 = () => import('./pages/resetpassword.astro.mjs');
const _page7 = () => import('./pages/signin.astro.mjs');
const _page8 = () => import('./pages/signup.astro.mjs');
const _page9 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/login.json.ts", _page1],
    ["src/pages/api/ticket.json.ts", _page2],
    ["src/pages/api/users.json.ts", _page3],
    ["src/pages/forgotpassword.astro", _page4],
    ["src/pages/movies/[id].astro", _page5],
    ["src/pages/resetpassword.astro", _page6],
    ["src/pages/signin.astro", _page7],
    ["src/pages/signup.astro", _page8],
    ["src/pages/index.astro", _page9]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c592f79d-7072-4301-b083-fa25d0c04e33",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
