import{s as G,o as J,l as V}from"../chunks/scheduler.904f18b0.js";import{S as K,i as N,g as b,s as $,h as g,j as L,c as j,f as l,k as A,a as d,B as S,d as I,t as z,b as T,A as w,z as u,p as O}from"../chunks/index.efd091db.js";import{a as Q}from"../chunks/paths.f6d8863c.js";import{c as U,q as o,f as P,b as v}from"../chunks/stores.673a1848.js";function R(D){let i,f=`<img id="logo" src="${Q}/logo.svg" alt="Rocket"/>`,a,n;return{c(){i=b("a"),i.innerHTML=f,this.h()},l(t){i=g(t,"A",{href:!0,"data-svelte-h":!0}),w(i)!=="svelte-dhtdal"&&(i.innerHTML=f),this.h()},h(){A(i,"href","./")},m(t,s){d(t,i,s),n=!0},i(t){n||(t&&V(()=>{n&&(a||(a=u(i,P,{delay:0,duration:1e3,easing:o},!0)),a.run(1))}),n=!0)},o(t){t&&(a||(a=u(i,P,{delay:0,duration:1e3,easing:o},!1)),a.run(0)),n=!1},d(t){t&&l(i),t&&a&&a.end()}}}function F(D){let i,f="Building",a,n,t,s="an",r,k,_,B="immutable world",C,q,c,E="for",h,M,m,H="limitless freedom",y,x;return{c(){i=b("div"),i.textContent=f,n=$(),t=b("div"),t.textContent=s,k=$(),_=b("div"),_.textContent=B,q=$(),c=b("div"),c.textContent=E,M=$(),m=b("div"),m.textContent=H},l(e){i=g(e,"DIV",{"data-svelte-h":!0}),w(i)!=="svelte-xzw5ow"&&(i.textContent=f),n=j(e),t=g(e,"DIV",{"data-svelte-h":!0}),w(t)!=="svelte-6rvg8h"&&(t.textContent=s),k=j(e),_=g(e,"DIV",{"data-svelte-h":!0}),w(_)!=="svelte-m0ow43"&&(_.textContent=B),q=j(e),c=g(e,"DIV",{"data-svelte-h":!0}),w(c)!=="svelte-17j7ap4"&&(c.textContent=E),M=j(e),m=g(e,"DIV",{"data-svelte-h":!0}),w(m)!=="svelte-1r808dj"&&(m.textContent=H)},m(e,p){d(e,i,p),d(e,n,p),d(e,t,p),d(e,k,p),d(e,_,p),d(e,q,p),d(e,c,p),d(e,M,p),d(e,m,p),x=!0},i(e){x||(e&&V(()=>{x&&(a||(a=u(i,v,{delay:500,duration:1e3,easing:o},!0)),a.run(1))}),e&&V(()=>{x&&(r||(r=u(t,v,{delay:1e3,duration:1e3,easing:o},!0)),r.run(1))}),e&&V(()=>{x&&(C||(C=u(_,v,{delay:1500,duration:1e3,easing:o},!0)),C.run(1))}),e&&V(()=>{x&&(h||(h=u(c,v,{delay:2e3,duration:1e3,easing:o},!0)),h.run(1))}),e&&V(()=>{x&&(y||(y=u(m,v,{delay:2500,duration:1e3,easing:o},!0)),y.run(1))}),x=!0)},o(e){e&&(a||(a=u(i,v,{delay:500,duration:1e3,easing:o},!1)),a.run(0)),e&&(r||(r=u(t,v,{delay:1e3,duration:1e3,easing:o},!1)),r.run(0)),e&&(C||(C=u(_,v,{delay:1500,duration:1e3,easing:o},!1)),C.run(0)),e&&(h||(h=u(c,v,{delay:2e3,duration:1e3,easing:o},!1)),h.run(0)),e&&(y||(y=u(m,v,{delay:2500,duration:1e3,easing:o},!1)),y.run(0)),x=!1},d(e){e&&(l(i),l(n),l(t),l(k),l(_),l(q),l(c),l(M),l(m)),e&&a&&a.end(),e&&r&&r.end(),e&&C&&C.end(),e&&h&&h.end(),e&&y&&y.end()}}}function W(D){let i,f,a,n=D[0]&&R(),t=D[0]&&F();return{c(){i=b("div"),n&&n.c(),f=$(),a=b("div"),t&&t.c(),this.h()},l(s){i=g(s,"DIV",{class:!0});var r=L(i);n&&n.l(r),f=j(r),a=g(r,"DIV",{class:!0});var k=L(a);t&&t.l(k),k.forEach(l),r.forEach(l),this.h()},h(){A(a,"class","mottotext"),A(i,"class","container about")},m(s,r){d(s,i,r),n&&n.m(i,null),S(i,f),S(i,a),t&&t.m(a,null)},p(s,[r]){s[0]?n?r&1&&I(n,1):(n=R(),n.c(),I(n,1),n.m(i,f)):n&&(O(),z(n,1,1,()=>{n=null}),T()),s[0]?t?r&1&&I(t,1):(t=F(),t.c(),I(t,1),t.m(a,null)):t&&(O(),z(t,1,1,()=>{t=null}),T())},i(s){I(n),I(t)},o(s){z(n),z(t)},d(s){s&&l(i),n&&n.d(),t&&t.d()}}}function X(D,i,f){let a=!1;return J(()=>{U.set("about"),f(0,a=!0)}),[a]}class it extends K{constructor(i){super(),N(this,i,X,W,G,{})}}export{it as component};
