"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[562],{562:function(e,t,r){r.r(t);var n=r(861),a=r(439),u=r(757),c=r.n(u),s=r(476),i=r(854),o=r(155),f=r(791),p=r(289),v=r(184);t.default=function(){var e=(0,f.useState)([]),t=(0,a.Z)(e,2),r=t[0],u=t[1],l=(0,f.useState)([!1]),d=(0,a.Z)(l,2),m=d[0],h=d[1],x=(0,f.useState)([!1]),w=(0,a.Z)(x,2),Z=w[0],_=w[1],k=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.prev=1,e.next=4,(0,s._L)();case 4:t=e.sent,u(t.results),t.results?h(!1):h(!0),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),h(!0);case 12:return e.prev=12,_(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();return(0,f.useEffect)((function(){k()}),[]),(0,v.jsxs)("div",{children:[(0,v.jsx)("h1",{className:p.Z.firstTitle,children:"Trending today"}),Z&&(0,v.jsx)(i.a,{className:p.Z.loader}),r.length>0&&(0,v.jsx)(o.O,{array:r}),m&&(0,v.jsx)("h3",{children:"Wait a second, please..."})]})}},476:function(e,t,r){r.d(t,{I5:function(){return o},_L:function(){return s},qF:function(){return p},t2:function(){return i},tx:function(){return f}});var n=r(861),a=r(757),u=r.n(a),c=r(340);c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"a771aa97b6f20a2b246806be1610be4c",language:"en-US"};var s=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/all/week");case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/credits"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(t,"/reviews"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?query=".concat(t,"&include_adult=false&page=1"));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},854:function(e,t,r){r.d(t,{a:function(){return a}});r(791);var n=r(184),a=function(e){var t=e.className,r=void 0===t?"":t;return(0,n.jsx)("div",{className:r})}},155:function(e,t,r){r.d(t,{O:function(){return o}});var n=r(689),a=r(87),u="MoviesList_moviesList__P6SP5",c="MoviesList_listItem__LULLo",s="MoviesList_movieItem__p4FQU",i=r(184),o=function(e){var t=e.array,r=e.query,o=(0,n.TH)();return(0,i.jsx)("ul",{className:u,children:t.map((function(e){var t=e.id,n=e.title,u=e.name;return(0,i.jsx)("li",{className:c,children:(0,i.jsx)(a.rU,{className:s,to:"/movie/".concat(t),state:{from:r?"/movie?query=".concat(r):o.pathname},children:n||u})},t)}))})}}}]);
//# sourceMappingURL=562.8d384a6e.chunk.js.map