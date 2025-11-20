module.exports=[18622,(e,t,r)=>{t.exports=e.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},56704,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},32319,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},24725,(e,t,r)=>{t.exports=e.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},70406,(e,t,r)=>{t.exports=e.x("next/dist/compiled/@opentelemetry/api",()=>require("next/dist/compiled/@opentelemetry/api"))},93695,(e,t,r)=>{t.exports=e.x("next/dist/shared/lib/no-fallback-error.external.js",()=>require("next/dist/shared/lib/no-fallback-error.external.js"))},93300,(e,t,r)=>{"use strict";t.exports=e.r(18622)},40944,(e,t,r)=>{"use strict";t.exports=e.r(93300).vendored["react-rsc"].React},6312,e=>{"use strict";var t=e.i(14068),r=e.i(12113),a=e.i(32375),s=e.i(93485),n=e.i(1641),o=e.i(20496),i=e.i(53856),l=e.i(64168),d=e.i(38556),p=e.i(80163),c=e.i(78399),u=e.i(43280),h=e.i(91147),g=e.i(80896),v=e.i(74450),x=e.i(18772),m=e.i(93695);e.i(92909);var f=e.i(68518),b=e.i(11027),R=e.i(133);async function w(e){try{if(console.log("[v0] Report API called"),!process.env.RESEND_API_KEY)return console.error("[v0] RESEND_API_KEY is not configured"),b.NextResponse.json({error:"Email service not configured"},{status:500});let{subscriptions:t,adminEmail:r,companyName:a}=await e.json();if(!t||!Array.isArray(t))return console.error("[v0] Invalid subscriptions data"),b.NextResponse.json({error:"Invalid subscriptions data"},{status:400});if(!r)return console.error("[v0] No admin email provided"),b.NextResponse.json({error:"Admin email is required"},{status:400});console.log("[v0] Preparing report for:",r);let s=t.length,n=t.filter(e=>"active"===e.status).length,o=t.filter(e=>"expired"===e.status).length,i=t.reduce((e,t)=>e+(Number.parseFloat(t.price)||0),0),l=new Date,d=new Date(l);d.setDate(l.getDate()+30);let p=t.filter(e=>{if(!e.renewal_date)return!1;let t=new Date(e.renewal_date);return t>=l&&t<=d}),c=`
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 800px; margin: 0 auto; padding: 20px; }
          .logo { text-align: center; margin-bottom: 30px; }
          .logo img { max-width: 300px; height: auto; }
          .header { background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: white; padding: 30px; border-radius: 8px; margin-bottom: 30px; }
          .stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin-bottom: 30px; }
          .stat-card { background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #1e3a8a; }
          .stat-label { font-size: 14px; color: #666; margin-bottom: 5px; }
          .stat-value { font-size: 32px; font-weight: bold; color: #333; }
          table { width: 100%; border-collapse: collapse; margin-top: 20px; }
          th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
          th { background: #f8f9fa; font-weight: 600; }
          .status { padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; }
          .status.active { background: #d1fae5; color: #065f46; }
          .status.expired { background: #fee2e2; color: #991b1b; }
          .status.pending { background: #fef3c7; color: #92400e; }
          .footer { margin-top: 40px; padding-top: 20px; border-top: 2px solid #e5e7eb; text-align: center; color: #666; }
        </style>
      </head>
      <body>
        <div class="container">
            <div class="logo">
            <img src="/digilink-logo.png" alt="Digilink IT Subscription Management System" />
          </div>
          
          <div class="header">
            <h1>Subscription Report</h1>
            <p>${a||"Digilink IT Subscription Management System"}</p>
            <p>Generated on ${new Date().toLocaleDateString()}</p>
          </div>

          <div class="stats">
            <div class="stat-card">
              <div class="stat-label">Total Subscriptions</div>
              <div class="stat-value">${s}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Active Subscriptions</div>
              <div class="stat-value">${n}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Expired Subscriptions</div>
              <div class="stat-value">${o}</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">Total Revenue</div>
              <div class="stat-value">$${i.toFixed(2)}</div>
            </div>
          </div>

          <h2>Upcoming Renewals (Next 30 Days)</h2>
          ${p.length>0?`
            <table>
              <thead>
                <tr>
                  <th>Client Name</th>
                  <th>Type</th>
                  <th>Renewal Date</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                ${p.map(e=>`
                  <tr>
                    <td>${e.client_name}</td>
                    <td>${e.subscription_type}</td>
                    <td>${new Date(e.renewal_date).toLocaleDateString()}</td>
                    <td>$${Number.parseFloat(e.price).toFixed(2)}</td>
                  </tr>
                `).join("")}
              </tbody>
            </table>
          `:"<p>No upcoming renewals in the next 30 days.</p>"}

          <h2>All Subscriptions</h2>
          <table>
            <thead>
              <tr>
                <th>Client Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>End Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              ${t.map(e=>`
                <tr>
                  <td>${e.client_name}</td>
                  <td>${e.subscription_type}</td>
                  <td><span class="status ${e.status}">${e.status}</span></td>
                  <td>${new Date(e.end_date).toLocaleDateString()}</td>
                  <td>$${Number.parseFloat(e.price).toFixed(2)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>

          <div class="footer">
            <p>This is an automated report from Digilink IT Subscription Management System</p>
            <p style="font-size: 12px; margin-top: 10px;">Connecting You to the Digital World</p>
          </div>
        </div>
      </body>
      </html>
    `;console.log("[v0] Sending email to:",r);try{let e=await (0,R.default)({from:process.env.EMAIL_FROM,to:r,subject:`Subscription Report - ${new Date().toLocaleDateString()}`,html:c});if(!e.success)return console.error("[v0] Resend API error:",e.error),b.NextResponse.json({error:`Failed to send email: ${e.error?.message||"Unknown error"}`},{status:500});return console.log("[v0] Email sent successfully:",e.data),b.NextResponse.json({message:"Report sent successfully",data:e.data})}catch(e){return console.error("[v0] Exception sending email:",e),b.NextResponse.json({error:`Email service error: ${e.message||"Unknown error"}`},{status:500})}}catch(e){return console.error("[v0] Unexpected error generating report:",e),b.NextResponse.json({error:`Failed to generate report: ${e.message||"Unknown error"}`},{status:500})}}e.s(["POST",()=>w],28115);var y=e.i(28115);let E=new t.AppRouteRouteModule({definition:{kind:r.RouteKind.APP_ROUTE,page:"/api/reports/send-subscription-report/route",pathname:"/api/reports/send-subscription-report",filename:"route",bundlePath:""},distDir:".next",relativeProjectDir:"",resolvedPagePath:"[project]/app/api/reports/send-subscription-report/route.ts",nextConfigOutput:"",userland:y}),{workAsyncStorage:_,workUnitAsyncStorage:S,serverHooks:A}=E;function N(){return(0,a.patchFetch)({workAsyncStorage:_,workUnitAsyncStorage:S})}async function C(e,t,a){E.isDev&&(0,s.addRequestMeta)(e,"devRequestTimingInternalsEnd",process.hrtime.bigint());let b="/api/reports/send-subscription-report/route";b=b.replace(/\/index$/,"")||"/";let R=await E.prepare(e,t,{srcPage:b,multiZoneDraftMode:!1});if(!R)return t.statusCode=400,t.end("Bad Request"),null==a.waitUntil||a.waitUntil.call(a,Promise.resolve()),null;let{buildId:w,params:y,nextConfig:_,parsedUrl:S,isDraftMode:A,prerenderManifest:N,routerServerContext:C,isOnDemandRevalidate:k,revalidateOnlyGenerated:D,resolvedPathname:$,clientReferenceManifest:T,serverActionsManifest:P}=R,j=(0,l.normalizeAppPath)(b),I=!!(N.dynamicRoutes[j]||N.routes[$]),O=async()=>((null==C?void 0:C.render404)?await C.render404(e,t,S,!1):t.end("This page could not be found"),null);if(I&&!A){let e=!!N.routes[$],t=N.dynamicRoutes[j];if(t&&!1===t.fallback&&!e){if(_.experimental.adapterPath)return await O();throw new m.NoFallbackError}}let q=null;!I||E.isDev||A||(q="/index"===(q=$)?"/":q);let M=!0===E.isDev||!I,U=I&&!M;P&&T&&(0,o.setReferenceManifestsSingleton)({page:b,clientReferenceManifest:T,serverActionsManifest:P,serverModuleMap:(0,i.createServerModuleMap)({serverActionsManifest:P})});let F=e.method||"GET",H=(0,n.getTracer)(),K=H.getActiveScopeSpan(),L={params:y,prerenderManifest:N,renderOpts:{experimental:{authInterrupts:!!_.experimental.authInterrupts},cacheComponents:!!_.cacheComponents,supportsDynamicResponse:M,incrementalCache:(0,s.getRequestMeta)(e,"incrementalCache"),cacheLifeProfiles:_.cacheLife,waitUntil:a.waitUntil,onClose:e=>{t.on("close",e)},onAfterTaskError:void 0,onInstrumentationRequestError:(t,r,a)=>E.onRequestError(e,t,a,C)},sharedContext:{buildId:w}},z=new d.NodeNextRequest(e),B=new d.NodeNextResponse(t),G=p.NextRequestAdapter.fromNodeNextRequest(z,(0,p.signalFromNodeResponse)(t));try{let o=async e=>E.handle(G,L).finally(()=>{if(!e)return;e.setAttributes({"http.status_code":t.statusCode,"next.rsc":!1});let r=H.getRootSpanAttributes();if(!r)return;if(r.get("next.span_type")!==c.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${r.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let a=r.get("next.route");if(a){let t=`${F} ${a}`;e.setAttributes({"next.route":a,"http.route":a,"next.span_name":t}),e.updateName(t)}else e.updateName(`${F} ${b}`)}),i=!!(0,s.getRequestMeta)(e,"minimalMode"),l=async s=>{var n,l;let d=async({previousCacheEntry:r})=>{try{if(!i&&k&&D&&!r)return t.statusCode=404,t.setHeader("x-nextjs-cache","REVALIDATED"),t.end("This page could not be found"),null;let n=await o(s);e.fetchMetrics=L.renderOpts.fetchMetrics;let l=L.renderOpts.pendingWaitUntil;l&&a.waitUntil&&(a.waitUntil(l),l=void 0);let d=L.renderOpts.collectedTags;if(!I)return await (0,h.sendResponse)(z,B,n,L.renderOpts.pendingWaitUntil),null;{let e=await n.blob(),t=(0,g.toNodeOutgoingHttpHeaders)(n.headers);d&&(t[x.NEXT_CACHE_TAGS_HEADER]=d),!t["content-type"]&&e.type&&(t["content-type"]=e.type);let r=void 0!==L.renderOpts.collectedRevalidate&&!(L.renderOpts.collectedRevalidate>=x.INFINITE_CACHE)&&L.renderOpts.collectedRevalidate,a=void 0===L.renderOpts.collectedExpire||L.renderOpts.collectedExpire>=x.INFINITE_CACHE?void 0:L.renderOpts.collectedExpire;return{value:{kind:f.CachedRouteKind.APP_ROUTE,status:n.status,body:Buffer.from(await e.arrayBuffer()),headers:t},cacheControl:{revalidate:r,expire:a}}}}catch(t){throw(null==r?void 0:r.isStale)&&await E.onRequestError(e,t,{routerKind:"App Router",routePath:b,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:k})},C),t}},p=await E.handleResponse({req:e,nextConfig:_,cacheKey:q,routeKind:r.RouteKind.APP_ROUTE,isFallback:!1,prerenderManifest:N,isRoutePPREnabled:!1,isOnDemandRevalidate:k,revalidateOnlyGenerated:D,responseGenerator:d,waitUntil:a.waitUntil,isMinimalMode:i});if(!I)return null;if((null==p||null==(n=p.value)?void 0:n.kind)!==f.CachedRouteKind.APP_ROUTE)throw Object.defineProperty(Error(`Invariant: app-route received invalid cache entry ${null==p||null==(l=p.value)?void 0:l.kind}`),"__NEXT_ERROR_CODE",{value:"E701",enumerable:!1,configurable:!0});i||t.setHeader("x-nextjs-cache",k?"REVALIDATED":p.isMiss?"MISS":p.isStale?"STALE":"HIT"),A&&t.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate");let c=(0,g.fromNodeOutgoingHttpHeaders)(p.value.headers);return i&&I||c.delete(x.NEXT_CACHE_TAGS_HEADER),!p.cacheControl||t.getHeader("Cache-Control")||c.get("Cache-Control")||c.set("Cache-Control",(0,v.getCacheControlHeader)(p.cacheControl)),await (0,h.sendResponse)(z,B,new Response(p.value.body,{headers:c,status:p.value.status||200})),null};K?await l(K):await H.withPropagatedContext(e.headers,()=>H.trace(c.BaseServerSpan.handleRequest,{spanName:`${F} ${b}`,kind:n.SpanKind.SERVER,attributes:{"http.method":F,"http.target":e.url}},l))}catch(t){if(t instanceof m.NoFallbackError||await E.onRequestError(e,t,{routerKind:"App Router",routePath:j,routeType:"route",revalidateReason:(0,u.getRevalidateReason)({isStaticGeneration:U,isOnDemandRevalidate:k})}),I)throw t;return await (0,h.sendResponse)(z,B,new Response(null,{status:500})),null}}e.s(["handler",()=>C,"patchFetch",()=>N,"routeModule",()=>E,"serverHooks",()=>A,"workAsyncStorage",()=>_,"workUnitAsyncStorage",()=>S],6312)},92930,e=>{e.v(t=>Promise.all(["server/chunks/275cd_next_dist_compiled_react-dom_server_node_a621ee75.js","server/chunks/[root-of-the-server]__ddd6af35._.js"].map(t=>e.l(t))).then(()=>t(18480)))}];

//# sourceMappingURL=%5Broot-of-the-server%5D__4ceb667e._.js.map