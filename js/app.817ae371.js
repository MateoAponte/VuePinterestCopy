(function(e){function t(t){for(var s,n,r=t[0],c=t[1],d=t[2],b=0,l=[];b<r.length;b++)n=r[b],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&l.push(i[n][0]),i[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,d||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],s=!0,n=1;n<a.length;n++){var r=a[n];0!==i[r]&&(s=!1)}s&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var s={},n={app:0},i={app:0},o=[];function r(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"19c136e9"}[e]+".js"}function c(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var s="css/"+({about:"about"}[e]||e)+"."+{about:"a42f16f5"}[e]+".css",i=c.p+s,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var d=o[r],b=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(b===s||b===i))return t()}var l=document.getElementsByTagName("style");for(r=0;r<l.length;r++){d=l[r],b=d.getAttribute("data-href");if(b===s||b===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var s=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=s,delete n[e],f.parentNode.removeChild(f),a(o)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){n[e]=0})));var s=i[e];if(0!==s)if(s)t.push(s[2]);else{var o=new Promise((function(t,a){s=i[e]=[t,a]}));t.push(s[2]=o);var d,b=document.createElement("script");b.charset="utf-8",b.timeout=120,c.nc&&b.setAttribute("nonce",c.nc),b.src=r(e);var l=new Error;d=function(t){b.onerror=b.onload=null,clearTimeout(f);var a=i[e];if(0!==a){if(a){var s=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",l.name="ChunkLoadError",l.type=s,l.request=n,a[1](l)}i[e]=void 0}};var f=setTimeout((function(){d({type:"timeout",target:b})}),12e4);b.onerror=b.onload=d,document.head.appendChild(b)}return Promise.all(t)},c.m=e,c.c=s,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)c.d(a,s,function(t){return e[t]}.bind(null,s));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],b=d.push.bind(d);d.push=t,d=d.slice();for(var l=0;l<d.length;l++)t(d[l]);var f=b;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("cd49")},"06a6":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s="@modules/feed/home"},"09fb":function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var s={FETCH_FEED:"@actions/fetchFeedData",UPDATE_PAGINATION_DATA:"@actions/updatePaginationData",TRANSFORM_FETCH_DATA:"@actions/transformFetchData"}},"1ae4":function(e,t,a){e.exports=a.p+"img/logo.dff6cda8.svg"},"2fb4":function(e,t,a){},4678:function(e,t,a){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=i(e);return a(t)}function i(e){if(!a.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}n.keys=function(){return Object.keys(s)},n.resolve=i,e.exports=n,n.id="4678"},"5c0b":function(e,t,a){"use strict";a("9c0c")},"9c0c":function(e,t,a){},cd49:function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("nav-bar"),a("main",{staticClass:"main-container"},[a("router-view")],1)],1)},i=[],o=a("d4ec"),r=a("262e"),c=a("2caf"),d=a("9ab4"),b=a("1b40"),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("nav",{staticClass:"navbar"},[a("section",{staticClass:"navbar__items"},[e._m(0),a("router-link",{staticClass:"navbar__link",attrs:{to:"/"}},[e._v("Inicio")]),a("router-link",{staticClass:"navbar__link",attrs:{to:"/about"}},[e._v("Hoy")]),a("span",{staticClass:"navbar__link navbar__popover",on:{click:e.triggerCreate}},[e._v("Crear "),a("i",{staticClass:"fa-solid fa-chevron-down"}),a("Popover",{staticClass:"create__popover",attrs:{show:e.showCreate,position:e.createPosition,"has-header":!1,"has-footer":!1},scopedSlots:e._u([{key:"body",fn:function(){return[a("div",{staticClass:"create__container"},[a("div",{staticClass:"create__option"},[e._v("Crear un Idea Pin")]),a("div",{staticClass:"create__option"},[e._v("Crear Pin")])])]},proxy:!0}])})],1)],1),e._m(1),a("section",{staticClass:"navbar__items"},[a("a",{staticClass:"navbar__icon",on:{click:function(t){return e.triggerNotifications()}}},[e._m(2),a("Popover",{staticClass:"notification__popover",attrs:{show:e.showNotifications,position:e.notificationPosition,"has-header":!1,"has-footer":!1},scopedSlots:e._u([{key:"body",fn:function(){return[a("div",{staticClass:"notifications-title"},[a("span",[e._v("Actualizaciones")])]),a("div",{staticClass:"notifications"},e._l(e.notifications,(function(t,s){return a("div",{key:s,staticClass:"notification__item"},[a("span",{domProps:{innerHTML:e._s(t.html)}}),a("div",{staticClass:"notification__image"},e._l(t.img,(function(e,t){return a("img",{key:t,attrs:{src:e}})})),0)])})),0)]},proxy:!0}])})],1),a("a",{staticClass:"navbar__icon",on:{click:function(t){return e.triggerInbox()}}},[a("i",{staticClass:"fas fa-comment-dots"}),a("Popover",{staticClass:"inbox__popover",attrs:{show:e.showInbox,position:e.inboxPosition,"has-header":!1,"has-footer":!1},scopedSlots:e._u([{key:"body",fn:function(){return[a("div",{staticClass:"inbox-header__content"},[a("span",{staticClass:"inbox-title"},[e._v(" Bandeja de entrada ")]),a("i",{staticClass:"fas fa-three-dots"})]),a("div",{staticClass:"inbox"},[a("section",{staticClass:"inbox__new-message"},[a("div",{staticClass:"inbox__new-message-icon"},[a("i",{staticClass:"fa-solid fa-pencil"})]),a("span",{staticClass:"inbox__new-message-text"},[e._v("Mensaje nuevo ")])]),a("section",{staticClass:"inbox__messages"},[a("span",{staticClass:"inbox__section-title"},[e._v("Mensajes")]),e._l(e.inbox.messages,(function(t,s){return a("div",{key:s,staticClass:"inbox__row"},[a("div",{staticClass:"inbox__image"},[a("img",{attrs:{src:t.profilePhoto,alt:""}})]),a("div",{staticClass:"inbox__info"},[a("span",{staticClass:"inbox__name"},[e._v(e._s(t.name))]),a("span",{staticClass:"inbox__message"},[e._v(e._s(e.reduceMessage(t.message))+" ° "+e._s(e.addWeekdays(t.date))+" sem")])])])}))],2),a("section",{staticClass:"inbox__suggestions"},[a("span",{staticClass:"inbox__section-title"},[e._v("Sugerencias")]),e._l(e.inbox.suggestions,(function(t,s){return a("div",{key:s,staticClass:"inbox__row"},[a("div",{staticClass:"inbox__image"},[a("img",{attrs:{src:t.profilePhoto,alt:""}})]),a("div",{staticClass:"inbox__info"},[a("span",{staticClass:"inbox__name"},[e._v(e._s(t.name))]),a("span",{staticClass:"inbox__isFollowed"},[e._v(e._s(t?"Seguido":"Sugerido"))])])])}))],2)])]},proxy:!0}])})],1),e._m(3),a("a",{staticClass:"navbar__icon navbar__icon--small user__popover",on:{click:function(t){return e.triggerMoreOptions()}}},[a("i",{staticClass:"fas fa-chevron-down"}),a("Popover",{attrs:{show:e.showMoreOptions,position:e.moreOptionsPosition,"has-header":!1,"has-footer":!1},scopedSlots:e._u([{key:"body",fn:function(){return[a("div",{staticClass:"user__container"},[a("section",{staticClass:"user__section"},[a("span",[e._v("Actualmente en")]),a("div",{staticClass:"user__option user__info"},[a("div",{staticClass:"user__image"},[a("img",{attrs:{src:e.user.image,alt:""}})]),a("div",{staticClass:"user__data"},[a("span",{staticClass:"user__name"},[e._v(" "+e._s(e.user.username)+" ")]),a("span",{staticClass:"user__account-type"},[e._v(" "+e._s(e.user.accountType)+" ")]),a("span",{staticClass:"user__email"},[e._v(" "+e._s(e.user.email)+" ")])])])]),a("section",{staticClass:"user__section"},[a("span",[e._v("Tus cuentas")]),a("div",{staticClass:"user__option"},[e._v("Agregar cuenta")]),a("div",{staticClass:"user__option"},[e._v("Convertir en cuenta profesional")])]),a("section",{staticClass:"user__section"},[a("span",[e._v("Más opciones")]),a("div",{staticClass:"user__option"},[e._v("Configuración")]),a("div",{staticClass:"user__option"},[e._v("Mejora tu feed de inicio")]),a("div",{staticClass:"user__option"},[e._v("Instalar la aplicación de Windows")]),a("div",{staticClass:"user__option"},[e._v("Tus derechos de privacidad")]),a("div",{staticClass:"user__option"},[a("span",[e._v(" Obtener ayuda ")]),a("i",{staticClass:"fa-solid fa-arrow-right-to-bracket"})]),a("div",{staticClass:"user__option"},[a("span",[e._v(" Ver condiciones de servicio ")]),a("i",{staticClass:"fa-solid fa-arrow-right-to-bracket"})]),a("div",{staticClass:"user__option"},[a("span",[e._v(" Ver política de privacidad ")]),a("i",{staticClass:"fa-solid fa-arrow-right-to-bracket"})]),a("div",{staticClass:"user__option"},[a("span",[e._v(" Sé un evaluador beta ")]),a("i",{staticClass:"fa-solid fa-arrow-right-to-bracket"})]),a("div",{staticClass:"user__option"},[e._v("Salir")])])])]},proxy:!0}])})],1)])]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isRecommended,expression:"isRecommended"}],staticClass:"navbar__searcher-recommended"},[a("div",{staticClass:"recommended__popover"},[a("popover-section",{attrs:{title:"Búsquedas recientes"}},e._l(e.searcherData.recentSearchs,(function(e,t){return a("section",{key:t},[a("tags",{staticClass:"popover__item",attrs:{value:e.name}})],1)})),0),a("popover-section",{attrs:{title:e.userFeedTitle}},e._l(e.userFeedRecommendation,(function(e,t){return a("section",{key:t},[a("popover-category",{attrs:{name:e.name,path:e.img}})],1)})),0),a("popover-section",{attrs:{title:e.popularFeedTitle}},e._l(e.popularFeedRecommendation,(function(e,t){return a("section",{key:t},[a("popover-category",{attrs:{name:e.name,path:e.img}})],1)})),0),a("popover-section",{attrs:{title:e.specialFeedTitle}},e._l(e.specialFeedRecommendation,(function(e,t){return a("section",{key:t},[a("popover-category",{attrs:{name:e.name,path:e.img}})],1)})),0)],1),a("div",{staticClass:"recommended__overlay",attrs:{id:"searcher__overlay"}})])])},f=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"navbar__link navbar__link-logo"},[s("img",{staticClass:"navbar__logo",attrs:{src:a("1ae4"),alt:"Logo"}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",{staticClass:"navbar__searcher"},[a("div",{staticClass:"navbar__searcher-input",attrs:{id:"navbar__searcher"}},[a("input",{staticClass:"searcher__input",attrs:{id:"searcher__input",placeholder:"Buscar"}}),a("i",{staticClass:"searcher__icon fas fa-search"})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("i",{staticClass:"fas fa-bell"},[a("span",{staticClass:"navbar__notifications"},[e._v("1")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a",{staticClass:"navbar__icon"},[a("i",{staticClass:"fas fa-user"})])}],p=a("2909"),u=a("bee2"),m=(a("fb6a"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popover__section"},[a("span",{staticClass:"popover__title"},[e._v(e._s(e.title))]),a("div",{staticClass:"popover__group"},[e._t("default")],2)])}),h=[],_=function(e){Object(r["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(b["c"]);Object(d["a"])([Object(b["b"])()],_.prototype,"title",void 0),_=Object(d["a"])([Object(b["a"])({name:"PopoverSection"})],_);var v=_,g=v,j=a("2877"),y=Object(j["a"])(g,m,h,!1,null,null,null),C=y.exports,w=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"popover__category"},[a("img",{staticClass:"popover__category-image",attrs:{src:e.path,alt:e.name}}),a("div",{staticClass:"popover__category-overlay"},[a("span",{staticClass:"popover__category-title"},[e._v(e._s(e.name))])])])},O=[],k=function(e){Object(r["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(b["c"]);Object(d["a"])([Object(b["b"])()],k.prototype,"path",void 0),Object(d["a"])([Object(b["b"])()],k.prototype,"name",void 0),k=Object(d["a"])([Object(b["a"])({name:"PopoverCategory"})],k);var x=k,I=x,T=Object(j["a"])(I,w,O,!1,null,null,null),E=T.exports,P={recentSearchs:[{name:"Bioshock",date:new Date},{name:"Hollow Knight",date:new Date},{name:"Borderlands",date:new Date},{name:"Castlevania Wallpaper",date:new Date}],userFeed:{title:"Ideas para ti",recommendation:[{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"}]},popularFeed:{title:"Populares en TikTok",recommendation:[{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"}]},specialFeed:{title:"Moda para Frikis",recommendation:[{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"},{name:"Idea",img:"https://cdn.dribbble.com/users/3872218/screenshots/7946517/media/3ff2a0ba4196762443dfdbb10c538a4d.png"}]}},A=P,F=a("dfcb"),D=[{html:"<p>Creemos que te podrían gustar estas 12 ideas</p>",img:["https://i.pinimg.com/290x/de/8b/9d/de8b9d83f008836e2ee21cf9ee10a11d.jpg","https://i.pinimg.com/290x/00/28/a9/0028a9a91eed3709240013df2845e857.jpg","https://i.pinimg.com/290x/ad/02/44/ad0244017849224a008fe91cd63b0e4e.jpg"]},{html:"<p><strong>35</strong> Pines de <strong>Diseño móvil</strong> que tal vez te gusten</p>",img:["https://i.pinimg.com/290x/35/da/83/35da83d14a048ea99cd22277d6c5d025.jpg","https://i.pinimg.com/290x/99/9b/b0/999bb02306ad1aba63fd0bb65366ae0d.jpg","https://i.pinimg.com/290x/13/40/43/134043f7d4657bbfaa5d98ca807393bb.jpg"]},{html:"<p>Hay nuevos pines en tu feed de inicio</p>",img:["https://i.pinimg.com/290x/34/8b/6b/348b6b0a3ec161baab33a349bbabbeed.jpg","https://i.pinimg.com/290x/99/9b/b0/999bb02306ad1aba63fd0bb65366ae0d.jpg","https://i.pinimg.com/290x/1d/ef/64/1def649c505d804717f523e0c4fc38a8.jpg"]}],N={messages:[{profilePhoto:"https://randomuser.me/api/portraits/men/14.jpg",message:"Tú: Leidy tiene toda estudiada la plataforma jajaja",date:"2023/04/21",name:"Leidy Natalia"}],suggestions:[{isFollowed:!1,profilePhoto:"https://randomuser.me/api/portraits/men/22.jpg",name:"Manuela Uribe"},{isFollowed:!1,profilePhoto:"https://randomuser.me/api/portraits/men/26.jpg",name:"Karla Chi"},{isFollowed:!0,profilePhoto:"https://randomuser.me/api/portraits/men/2.jpg",name:"Charlene"}]},S={image:"https://randomuser.me/api/portraits/men/70.jpg",username:"MathewAp",email:"apontemurciamateo@gmail.com",accountType:"personal"},M=a("c1df"),z=a.n(M),R=function(e){Object(r["a"])(a,e);var t=Object(c["a"])(a);function a(){var e;return Object(o["a"])(this,a),e=t.apply(this,arguments),e.isRecommended=!1,e.searcherData={},e.showNotifications=!1,e.showInbox=!1,e.showCreate=!1,e.showMoreOptions=!1,e.notifications=[],e.inbox={},e.user={},e.notificationPosition={top:"60",left:"-210"},e.inboxPosition={top:"60",left:"-260"},e.moreOptionsPosition={top:"40",left:"-330"},e.createPosition={top:"60",left:"150"},e}return Object(u["a"])(a,[{key:"userFeedTitle",get:function(){var e;return(null===(e=this.searcherData.userFeed)||void 0===e?void 0:e.title)||""}},{key:"userFeedRecommendation",get:function(){var e;return(null===(e=this.searcherData.userFeed)||void 0===e?void 0:e.recommendation)||[]}},{key:"popularFeedTitle",get:function(){var e;return(null===(e=this.searcherData.popularFeed)||void 0===e?void 0:e.title)||""}},{key:"popularFeedRecommendation",get:function(){var e;return(null===(e=this.searcherData.popularFeed)||void 0===e?void 0:e.recommendation)||[]}},{key:"specialFeedTitle",get:function(){var e;return(null===(e=this.searcherData.specialFeed)||void 0===e?void 0:e.title)||""}},{key:"specialFeedRecommendation",get:function(){var e;return(null===(e=this.searcherData.specialFeed)||void 0===e?void 0:e.recommendation)||[]}},{key:"showRecommended",value:function(e){this.isRecommended=e}},{key:"triggerCreate",value:function(){this.showCreate=!this.showCreate,this.showInbox=!1,this.showMoreOptions=!1,this.showNotifications=!1}},{key:"triggerNotifications",value:function(){this.showNotifications=!this.showNotifications,this.showInbox=!1,this.showMoreOptions=!1,this.showCreate=!1}},{key:"triggerInbox",value:function(){this.showInbox=!this.showInbox,this.showNotifications=!1,this.showMoreOptions=!1,this.showCreate=!1}},{key:"triggerMoreOptions",value:function(){this.showMoreOptions=!this.showMoreOptions,this.showNotifications=!1,this.showInbox=!1,this.showCreate=!1}},{key:"reduceMessage",value:function(e){return e.slice(0,16)+"..."}},{key:"addWeekdays",value:function(e){var t=z()(e),a=z()(Date.now()),s=t.diff(a,"days");while(s>0)t=t.add(1,"days"),6!==t.isoWeekday()&&7!==t.isoWeekday()&&(s-=1);return-1*s}},{key:"mounted",value:function(){var e,t=this,a=document.getElementById("navbar__searcher")||new Node,s=document.getElementById("searcher__input")||new HTMLInputElement,n=document.getElementById("searcher__overlay")||new Node;(e=this.notifications).push.apply(e,Object(p["a"])(D)),this.inbox=N,this.user=S,s.addEventListener("focus",(function(){t.showRecommended(!0)})),a.addEventListener("click",(function(){s.focus()})),n.addEventListener("click",(function(){t.showRecommended(!1)})),setTimeout((function(){t.searcherData=A}),2e3)}}]),a}(b["c"]);R=Object(d["a"])([Object(b["a"])({name:"NavBar",components:{PopoverSection:C,PopoverCategory:E,Popover:F["a"]}})],R);var H=R,L=H,B=Object(j["a"])(L,l,f,!1,null,null,null),$=B.exports,U=function(e){Object(r["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(b["c"]);U=Object(d["a"])([Object(b["a"])({name:"Pinterest",components:{NavBar:$}})],U);var W=U,q=W,G=(a("5c0b"),Object(j["a"])(q,n,i,!1,null,null,null)),K=G.exports,J=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f"));s["default"].use(J["a"]);var V,Q,X=[{path:"/",name:"HomeFeed",component:function(){return a.e("about").then(a.bind(null,"a002"))}}],Y=new J["a"]({mode:"history",base:"/",routes:X}),Z=Y,ee=a("ade3"),te=a("2f62"),ae=a("06a6"),se={feed_data:Array(),pagination_data:{page_number:1,page_size:35,query_name:""}},ne=(a("159b"),a("ac1f"),a("1276"),a("5319"),a("bc3a")),ie=a.n(ne),oe=function(){function e(){Object(o["a"])(this,e)}return Object(u["a"])(e,[{key:"getFeedData",value:function(e){return ie.a.get("https://pixabay.com/api/?key=23093987-7870cc66c6cff217c5f437144&per_page="+e.page_size+"&page="+e.page_number)}}]),e}(),re=new oe,ce=a("09fb"),de={SET_FEED_DATA:"@mutations/setFeedData",SET_PAGINATION_DATA:"@mutations/setPaginationData"},be=(V={},Object(ee["a"])(V,ce["a"].FETCH_FEED,(function(e,t){var a=e.dispatch;re.getFeedData(t).then((function(e){a(ce["a"].TRANSFORM_FETCH_DATA,e.data.hits)}))})),Object(ee["a"])(V,ce["a"].UPDATE_PAGINATION_DATA,(function(e,t){var a=e.commit;a(de.SET_PAGINATION_DATA,t)})),Object(ee["a"])(V,ce["a"].TRANSFORM_FETCH_DATA,(function(e,t){var a=e.commit,s=e.state,n=Array(),i=s.feed_data;t.forEach((function(e){var t={},a=Math.floor(2*Math.random()+0);t.path=e.previewURL,t.user=1===a?{image:e.userImageURL,name:e.user}:{image:"",name:""},t.imageData={previewWidth:e.previewWidth,previewHeight:e.previewHeight,imageHeight:e.imageHeight,imageWidth:e.imageWidth},t.tags=e.tags.split(", "),t.originPage=1===a?"Pixabay.com":"",t.title=e.pageURL.replace(/https:\/\/pixabay.com\/photos\//g,"").replace(/-/g," ").replace(/\//g,""),t.reactions=0===a?e.likes:0,t.id=e.id,n.push(t)})),i.push.apply(i,n),a(de.SET_FEED_DATA,i)})),V),le=(Q={},Object(ee["a"])(Q,de.SET_FEED_DATA,(function(e,t){e.feed_data=t})),Object(ee["a"])(Q,de.SET_PAGINATION_DATA,(function(e,t){e.pagination_data=t})),Q),fe={getUserInfo:function(e){return e.feed_data[0]||{}}},pe={state:se,actions:be,mutations:le,getters:fe};s["default"].use(te["a"]);var ue={modules:Object(ee["a"])({},ae["a"],pe)},me=new te["a"].Store(ue),he=(a("2fb4"),a("ecee")),_e=a("c074"),ve=a("ad3d"),ge=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"tag"},[e._t("default",(function(){return[e._v(" "+e._s(e.value)+" ")]}))],2)},je=[],ye=function(e){Object(r["a"])(a,e);var t=Object(c["a"])(a);function a(){return Object(o["a"])(this,a),t.apply(this,arguments)}return a}(b["c"]);Object(d["a"])([Object(b["b"])()],ye.prototype,"value",void 0),ye=Object(d["a"])([Object(b["a"])({name:"Tag"})],ye);var Ce=ye,we=Ce,Oe=Object(j["a"])(we,ge,je,!1,null,null,null),ke=Oe.exports;s["default"].config.productionTip=!1,he["c"].add(_e["a"]),s["default"].component("Tags",ke),s["default"].component("font-awesome-icon",ve["a"]),new s["default"]({router:Z,store:me,render:function(e){return e(K)}}).$mount("#app")},dfcb:function(e,t,a){"use strict";var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.show?a("div",{staticClass:"select-board",style:{top:e.position.top+"px",left:e.position.left+"px"}},[a("div",{staticClass:"select-board__popover"},[e.hasHeader?a("div",{staticClass:"select-board__popover-header"},[a("div",{staticClass:"select-board__popover-section"},[a("span",[e._v(e._s(e.headerText))])]),a("div",{staticClass:"select-board__popover-section"},[e._t("header")],2)]):e._e(),a("div",{staticClass:"select-board__popover-body"},[e._t("body")],2),e.hasFooter?a("div",{staticClass:"select-board__popover-footer popover-list"},[e._t("footer")],2):e._e()])]):e._e()},n=[],i=a("d4ec"),o=a("262e"),r=a("2caf"),c=a("9ab4"),d=a("1b40"),b=function(e){Object(o["a"])(a,e);var t=Object(r["a"])(a);function a(){return Object(i["a"])(this,a),t.apply(this,arguments)}return a}(d["c"]);Object(c["a"])([Object(d["b"])({default:!1})],b.prototype,"hasHeader",void 0),Object(c["a"])([Object(d["b"])({default:""})],b.prototype,"headerText",void 0),Object(c["a"])([Object(d["b"])({default:!1})],b.prototype,"show",void 0),Object(c["a"])([Object(d["b"])({default:{top:"0px",left:"0px"}})],b.prototype,"position",void 0),Object(c["a"])([Object(d["b"])({default:!1})],b.prototype,"hasFooter",void 0),b=Object(c["a"])([Object(d["a"])({name:"Popover"})],b);var l=b,f=l,p=a("2877"),u=Object(p["a"])(f,s,n,!1,null,null,null);t["a"]=u.exports}});
//# sourceMappingURL=app.817ae371.js.map