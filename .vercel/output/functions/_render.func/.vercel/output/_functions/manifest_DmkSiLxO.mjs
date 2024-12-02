import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_Mlx2l4K-.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_CE0LrrUl.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/login.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/login\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"login.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/login.json.ts","pathname":"/api/login.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/ticket.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/ticket\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"ticket.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/ticket.json.ts","pathname":"/api/ticket.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/users.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/users\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"users.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/users.json.ts","pathname":"/api/users.json","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CQ5XiRRz.js"}],"styles":[{"type":"external","src":"/_astro/forgotpassword.BvBQInpM.css"}],"routeData":{"route":"/forgotpassword","isIndex":false,"type":"page","pattern":"^\\/forgotpassword\\/?$","segments":[[{"content":"forgotpassword","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/forgotpassword.astro","pathname":"/forgotpassword","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.VqTYtgAw.js"}],"styles":[{"type":"external","src":"/_astro/forgotpassword.BvBQInpM.css"}],"routeData":{"route":"/movies/[id]","isIndex":false,"type":"page","pattern":"^\\/movies\\/([^/]+?)\\/?$","segments":[[{"content":"movies","dynamic":false,"spread":false}],[{"content":"id","dynamic":true,"spread":false}]],"params":["id"],"component":"src/pages/movies/[id].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CDzI-1Bd.js"}],"styles":[{"type":"external","src":"/_astro/forgotpassword.BvBQInpM.css"}],"routeData":{"route":"/resetpassword","isIndex":false,"type":"page","pattern":"^\\/resetpassword\\/?$","segments":[[{"content":"resetpassword","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/resetpassword.astro","pathname":"/resetpassword","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.B46GzH4M.js"}],"styles":[{"type":"external","src":"/_astro/forgotpassword.BvBQInpM.css"}],"routeData":{"route":"/signin","isIndex":false,"type":"page","pattern":"^\\/signin\\/?$","segments":[[{"content":"signin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signin.astro","pathname":"/signin","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.D231099R.js"}],"styles":[{"type":"external","src":"/_astro/forgotpassword.BvBQInpM.css"}],"routeData":{"route":"/signup","isIndex":false,"type":"page","pattern":"^\\/signup\\/?$","segments":[[{"content":"signup","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/signup.astro","pathname":"/signup","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.CDzI-1Bd.js"}],"styles":[{"type":"external","src":"/_astro/forgotpassword.BvBQInpM.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/forgotpassword.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/movies/[id].astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/resetpassword.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/signin.astro",{"propagation":"none","containsHead":true}],["C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/src/pages/signup.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/api/login.json@_@ts":"pages/api/login.json.astro.mjs","\u0000@astro-page:src/pages/api/ticket.json@_@ts":"pages/api/ticket.json.astro.mjs","\u0000@astro-page:src/pages/api/users.json@_@ts":"pages/api/users.json.astro.mjs","\u0000@astro-page:src/pages/forgotpassword@_@astro":"pages/forgotpassword.astro.mjs","\u0000@astro-page:src/pages/movies/[id]@_@astro":"pages/movies/_id_.astro.mjs","\u0000@astro-page:src/pages/resetpassword@_@astro":"pages/resetpassword.astro.mjs","\u0000@astro-page:src/pages/signin@_@astro":"pages/signin.astro.mjs","\u0000@astro-page:src/pages/signup@_@astro":"pages/signup.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Admin/Documents/Developer/Astro/SalaGinexTurso/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DmkSiLxO.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.CQ5XiRRz.js","/astro/hoisted.js?q=2":"_astro/hoisted.B46GzH4M.js","/astro/hoisted.js?q=3":"_astro/hoisted.D231099R.js","/astro/hoisted.js?q=1":"_astro/hoisted.VqTYtgAw.js","/astro/hoisted.js?q=4":"_astro/hoisted.CDzI-1Bd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/forgotpassword.BvBQInpM.css","/favicon.svg","/_astro/dom.DyxYIT6y.js","/_astro/hoisted.B46GzH4M.js","/_astro/hoisted.CDzI-1Bd.js","/_astro/hoisted.CQ5XiRRz.js","/_astro/hoisted.D231099R.js","/_astro/hoisted.VqTYtgAw.js"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"axOQMLEqkp590JoxCqGKNrvm8cND5FK1dvnTkdrIICE=","experimentalEnvGetSecretEnabled":false});

export { manifest };
