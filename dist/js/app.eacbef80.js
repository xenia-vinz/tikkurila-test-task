(function(t){function a(a){for(var s,r,c=a[0],o=a[1],l=a[2],p=0,_=[];p<c.length;p++)r=c[p],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&_.push(n[r][0]),n[r]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(_.length)_.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,a=0;a<i.length;a++){for(var e=i[a],s=!0,c=1;c<e.length;c++){var o=e[c];0!==n[o]&&(s=!1)}s&&(i.splice(a--,1),t=r(r.s=e[0]))}return t}var s={},n={app:0},i=[];function r(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=t,r.c=s,r.d=function(t,a,e){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)r.d(e,s,function(a){return t[a]}.bind(null,s));return e},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="/tikkurila-test-task/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=a,c=c.slice();for(var l=0;l<c.length;l++)a(c[l]);var u=o;i.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"008b":function(t,a,e){"use strict";var s=e("6f9b"),n=e.n(s);n.a},1:function(t,a){},"224c":function(t,a,e){"use strict";var s=e("42a7"),n=e.n(s);n.a},"2eea":function(t,a,e){},"42a7":function(t,a,e){},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=e("948d"),i=e.n(n),r=e("415c"),c=e.n(r),o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"wrapper",attrs:{id:"app"}},[e("Header"),e("main",{staticClass:"main"},[e("div",{staticClass:"main__inner"},[e("SearchPanel"),e("Painters")],1)]),e("Footer")],1)},l=[],u=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"header"},[e("div",{staticClass:"header__inner"},[t._m(0),e("Menu")],1)])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"header-top"},[e("div",{staticClass:"header-top__inner width-wrapper"},[e("div",{staticClass:"header-logo"},[e("a",{staticClass:"header-logo__link",attrs:{href:"/"}},[t._v(" Tikkurila ")])]),e("div",{staticClass:"header-slogan"},[e("div",{staticClass:"header-slogan__text"},[t._v(" Tekijätpankki ")])])])])}],_=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"main-menu",class:{"main-menu--open":t.isOpen}},[t._m(0),e("button",{staticClass:"main-menu-trigger"},[e("span",{staticClass:"main-menu-trigger__icon",on:{click:t.toggleMenu}})])])},d=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"main-menu__items"},[e("div",{staticClass:"main-menu__item main-menu__item--home"},[e("a",{staticClass:"main-menu__link",attrs:{href:"/"}},[t._v("Home")])]),e("div",{staticClass:"main-menu__item"},[e("a",{staticClass:"main-menu__link",attrs:{href:"/painters"}},[t._v("Tekijät")])]),e("div",{staticClass:"main-menu__item"},[e("a",{staticClass:"main-menu__link",attrs:{href:"/about"}},[t._v("Tietoa palvelusta")])]),e("div",{staticClass:"main-menu__item main-menu__item--btn"},[e("button",{staticClass:"main-menu__link request-counter-btn",attrs:{disabled:""}},[e("span",{staticClass:"request-counter-btn__text"},[t._v("Pyydä tarjous")]),e("span",{staticClass:"request-counter-btn__counter"},[t._v("0")])])])])}],f={name:"Menu",props:{},data:function(){return{isOpen:!1}},methods:{toggleMenu:function(){this.isOpen=!this.isOpen}}},m=f,v=(e("d7ee"),e("2877")),h=Object(v["a"])(m,_,d,!1,null,"5900a8f8",null),g=h.exports,C={name:"Header",props:{},components:{Menu:g}},b=C,y=(e("7e7b"),Object(v["a"])(b,u,p,!1,null,"d77803bc",null)),k=y.exports,E=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-panel"},[e("div",{staticClass:"search-panel__inner"},[e("div",{staticClass:"search-panel-top"},[e("div",{staticClass:"search-panel-top__inner width-wrapper"},[t._m(0),e("div",{staticClass:"search-panel-sorting",class:{"search-panel-sorting--hidden":!t.sortings}},[e("div",{staticClass:"search-panel-sorting__title"},[t._v("Lajitteluperuste")]),e("div",{staticClass:"search-panel-sorting__items"},t._l(t.sortings,(function(a){return e("span",{key:a.slug,staticClass:"search-panel-sorting__item",class:[{"search-panel-sorting__item--active":t.currentSorting==a.slug}],on:{click:function(e){return t.setSorting(a.slug)}}},[t._v(" "+t._s(a.title)+" ")])})),0)])])]),e("div",{staticClass:"search-panel-bottom"},[e("div",{staticClass:"search-panel-bottom__inner"},[e("div",{staticClass:"search-panel-filters",class:{"search-panel-filters--hidden":!t.tags}},[e("div",{staticClass:"search-panel-filters__inner width-wrapper"},[e("div",{staticClass:"search-panel-filters__title"},[t._v(" Valitse maalaustyö ")]),e("div",{staticClass:"search-panel-filters__tags"},[e("ul",{staticClass:"search-panel-tags"},t._l(t.tags,(function(a){return e("li",{key:a.slug,staticClass:"search-panel-tags__tag",class:[{"search-panel-tags__tag--active":a.selected}],attrs:{"data-tag":a.slug,"data-selected":a.selected},on:{click:function(e){return t.setTag(a.slug,a.selected)}}},[e("span",{staticClass:"search-panel-tags__tag-btn",attrs:{"data-tag":"terassit"}},[t._v(" "+t._s(a.title)+" ")])])})),0)])])]),t._m(1)])])])])},T=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-panel-form"},[e("div",{staticClass:"search-panel-form__title"},[t._v("Hae")]),e("div",{staticClass:"search-panel-form__form"},[e("form",{staticClass:"search-form",attrs:{action:""}},[e("input",{staticClass:"search-form__input",attrs:{type:"text",name:"search_queue",value:"",placeholder:""}}),e("button",{staticClass:"search-form__submit-btn",attrs:{type:"submit"}},[t._v(" Hae ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"search-panel-description"},[e("div",{staticClass:"search-panel-description__inner width-wrapper text-content"},[e("p",[t._v("Etsi projektiisi sopivia urakoitsijoita ja pyydä tarjous!")])])])}],j={name:"SearchPanel",props:{},data:function(){return{}},computed:{sortings:{get:function(){return this.$store.getters["sortings/getData"]}},currentSorting:{get:function(){return this.$store.getters["sortings/getCurrent"]}},tags:{get:function(){return this.$store.getters["tags/getData"]}}},mounted:function(){this.$store.dispatch("sortings/loadData"),this.$store.dispatch("tags/loadData")},methods:{setSorting:function(t){return this.$store.dispatch("sortings/setCurrent",t),!1},setTag:function(t,a){return this.$store.dispatch("tags/toggleSelected",{slug:t,selected:!a}),!1}}},S=j,w=(e("008b"),Object(v["a"])(S,E,T,!1,null,"0b5873ce",null)),O=w.exports,$=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"painters"},[e("div",{staticClass:"painters__inner width-wrapper"},[e("transition-group",{attrs:{name:"painters-transition",tag:"div"}},t._l(t.displayedPainters,(function(t){return e("Painter",{key:t.guid,attrs:{painter:t}})})),1)],1)])},D=[],x=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"painter"},[e("div",{staticClass:"painter__inner"},[e("div",{staticClass:"painter-avatar"},[e("img",{staticClass:"painter-avatar__image",attrs:{src:t.painter.avatar,alt:t.painter.name}})]),e("div",{staticClass:"painter-data"},[e("div",{staticClass:"painter-data__item painter-data__item--full-width"},[e("div",{staticClass:"painter-name"},[e("a",{staticClass:"painter-name__link",attrs:{href:t.painter.url}},[t._v(" "+t._s(t.painter.name)+" ")])])]),e("div",{staticClass:"painter-data__item painter-data__item--full-width"},[e("div",{staticClass:"painter-property painter-property--location"},[e("span",{staticClass:"painter-property__label"},[t._v(" "+t._s(t.painter.location)+" ")])])]),e("div",{staticClass:"painter-data__item"},[e("div",{staticClass:"painter-property painter-property--phone"},[e("a",{staticClass:"painter-property__label painter-property__label--link",attrs:{href:"tel:"+t.painter.phone}},[t._v(t._s(t.painter.phone)+" ")])])]),e("div",{staticClass:"painter-data__item"},[e("div",{staticClass:"painter-property painter-property--email"},[e("a",{staticClass:"painter-property__label painter-property__label--link",attrs:{href:"mailto:"+t.painter.email}},[t._v(t._s(t.painter.email)+" ")])])]),e("div",{staticClass:"painter-data__item painter-data__item--full-width"},[e("div",{staticClass:"painter-description",domProps:{innerHTML:t._s(t.painter.descripton)}})]),e("div",{staticClass:"painter-data__item painter-data__item--full-width"},[e("ul",{staticClass:"painter-tags"},t._l(t.painter.tags,(function(a,s){return e("li",{key:"painter-"+t.painter.guid+"-tag-"+s,staticClass:"painter-tags__item"},[t._v(" "+t._s(a.title)+" ")])})),0)])]),e("div",{staticClass:"painter-actions"},[t._m(0),e("div",{staticClass:"painter-projects-counter"},[e("span",{staticClass:"painter-projects-counter__icon",attrs:{title:"Projektien määrä"}}),e("div",{staticClass:"painter-projects-counter__text"},[t._v(t._s(t.painter.projects))])])])])])},P=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"painter-actions__btn request-btn"},[e("span",{staticClass:"request-btn__text"},[t._v("Pyydä tarjous!")])])}],A={name:"painter",props:["painter"]},q=A,M=(e("7cc8"),Object(v["a"])(q,x,P,!1,null,"72945f75",null)),R=M.exports,H={name:"Painters",components:{Painter:R},props:{},data:function(){return{}},computed:{displayedPainters:function(){return this.$store.getters["painters/getData"]}},mounted:function(){this.$store.dispatch("painters/loadData")},methods:{}},L=H,U=(e("224c"),Object(v["a"])(L,$,D,!1,null,"70088ac6",null)),Q=U.exports,F=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"footer"},[e("div",{staticClass:"footer__inner width-wrapper"},[e("div",{staticClass:"footer-content"},[e("div",{staticClass:"footer-content__inner"},[e("div",{staticClass:"footer-content-block"},[e("div",{staticClass:"footer-content-block__inner"},[e("div",{staticClass:"footer-content-block__title"},[t._v("Löydä lähin luotettava tekijä!")]),e("div",{staticClass:"footer-content-block__content text-content"},[e("p",[t._v("Tekijäpankista löydät osaavat ja luotettavat tekijät maalaustyöllesi.")])]),e("div",{staticClass:"footer-content-block__links"},[e("ul",{staticClass:"footer-menu"},[e("li",{staticClass:"footer-menu__item"},[e("a",{staticClass:"footer-menu__item-link",attrs:{href:"/about"}},[t._v("Lue lisää")])])])])])]),e("div",{staticClass:"footer-content-block"},[e("div",{staticClass:"footer-content-block__inner"},[e("div",{staticClass:"footer-content-block__title"},[t._v("Yleistä")]),e("div",{staticClass:"footer-content-block__links"},[e("ul",{staticClass:"footer-menu"},[e("li",{staticClass:"footer-menu__item"},[e("a",{staticClass:"footer-menu__item-link",attrs:{href:"/about"}},[t._v("Tietoa palvelusta")])]),e("li",{staticClass:"footer-menu__item"},[e("a",{staticClass:"footer-menu__item-link",attrs:{href:"/about/contact"}},[t._v("Ota yhteyttä")])])])])])])])]),e("div",{staticClass:"footer-copyright"},[e("div",{staticClass:"footer-copyright__inner text-content",attrs:{id:"text"}},[e("p",[t._v("© 2019 Tikkurila Oyj - "),e("a",{attrs:{href:"https://www.tikkurila.fi"}},[t._v("www.tikkurila.fi")])])])])])])}],N={name:"Footer",props:{}},G=N,J=(e("5f5d"),Object(v["a"])(G,F,I,!1,null,"4aa7b952",null)),B=J.exports,K={name:"App",components:{Header:k,SearchPanel:O,Painters:Q,Footer:B},data:function(){return{}},created:function(){},mounted:function(){}},V=K,Y=(e("5c0b"),Object(v["a"])(V,o,l,!1,null,null,null)),z=Y.exports,W=e("2f62"),X={namespaced:!0,state:{data:null,current:null},mutations:{SET_DATA:function(t,a){s["a"].set(t,"data",a)},SET_CURRENT:function(t,a){s["a"].set(t,"current",a)}},actions:{loadData:function(t){var a="/api/sortings.json";s["a"].superagent.get(a).accept("json").then((function(a){var e=a.body||{};if(Object.prototype.hasOwnProperty.call(e,"data")&&(t.commit("SET_DATA",e.data),!t.state.current)){var n=s["a"].$_.findKey(e.data,{default:!0})||null;t.commit("SET_CURRENT",n),t.dispatch("painters/loadData",null,{root:!0})}})).catch((function(t){console.error(t)}))},setCurrent:function(t,a){t.state.current!==a&&(t.commit("SET_CURRENT",a),t.dispatch("painters/loadData",null,{root:!0}))}},getters:{getData:function(t){return t.data},getCurrent:function(t){return t.current}}},Z=(e("4de4"),e("c740"),e("d81d"),{namespaced:!0,state:{data:null},mutations:{SET_DATA:function(t,a){s["a"].set(t,"data",a)},SET_SELECTED:function(t,a){var e=s["a"].$_.findIndex(t.data,{slug:a.slug});-1!==e&&s["a"].set(t.data[e],"selected",a.selected)}},actions:{loadData:function(t){var a="/api/tags.json";s["a"].superagent.get(a).accept("json").then((function(a){var e=a.body||{};Object.prototype.hasOwnProperty.call(e,"data")&&t.commit("SET_DATA",e.data)})).catch((function(t){console.error(t)}))},toggleSelected:function(t,a){t.commit("SET_SELECTED",a),t.dispatch("painters/loadData",null,{root:!0})}},getters:{getData:function(t){return t.data},getSelected:function(t){var a=t.data?t.data.filter((function(t){return t.selected})):[],e=a.map((function(t){return t.slug}));return e}}}),tt=(e("a15b"),{namespaced:!0,state:{data:null,request:null},mutations:{SET_DATA:function(t,a){s["a"].set(t,"data",a)},SET_SELECTED:function(t,a){var e=s["a"].$_.findIndex(t.data,{slug:a.slug});-1!==e&&s["a"].set(t.data[e],"selected",a.selected)},SET_REQUEST:function(t,a){s["a"].set(t,"request",a)}},actions:{loadData:function(t){var a="/api/painters.json",e=t.rootGetters["sortings/getCurrent"],n=t.rootGetters["tags/getSelected"],i={};e&&(i.sort=e),s["a"].$_.isEmpty(n)||(i.tags=n.join(";"));var r=s["a"].superagent.get(a).query(i).accept("json");t.state.request&&t.state.request.abort(),r.then((function(a){var i=a.body||{};if(Object.prototype.hasOwnProperty.call(i,"data")){var r=i.data;if(n&&(r=r.filter((function(t){var a=t.tags.map((function(t){return t.slug})),e=s["a"].$_.intersection(a,n);return!n.length||e.length>0}))),e){var c="name"!==e?"desc":"acs";r=s["a"].$_.orderBy(r,(function(t){var a=t[e];return+a||"0"===a?parseInt(a,10):a}),[c])}t.commit("SET_DATA",r)}t.commit("SET_REQUEST",null)})).catch((function(a){console.error(a),t.commit("SET_REQUEST",null)})),t.commit("SET_REQUEST",r)},setData:function(t,a){t.commit("SET_DATA",a)}},getters:{getData:function(t){return t.data}}});s["a"].use(W["a"]);var at=new W["a"].Store({modules:{sortings:X,tags:Z,painters:tt}});s["a"].use(i.a),s["a"].use(c.a,{name:"$_"}),s["a"].config.productionTip=!1,new s["a"]({store:at,render:function(t){return t(z)}}).$mount("#app")},"5c0b":function(t,a,e){"use strict";var s=e("9c0c"),n=e.n(s);n.a},"5f5d":function(t,a,e){"use strict";var s=e("2eea"),n=e.n(s);n.a},"6f9b":function(t,a,e){},"7cc8":function(t,a,e){"use strict";var s=e("c997"),n=e.n(s);n.a},"7e7b":function(t,a,e){"use strict";var s=e("932c"),n=e.n(s);n.a},"932c":function(t,a,e){},"9c0c":function(t,a,e){},a90b:function(t,a,e){},c997:function(t,a,e){},d7ee:function(t,a,e){"use strict";var s=e("a90b"),n=e.n(s);n.a}});
//# sourceMappingURL=app.eacbef80.js.map