(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{202:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(8),r(96);var n=r(52),c=r(53),o=r(54),l=r(26),f=r(9),v=r(27),d=r(203),h=r(204);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var j=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},O=function(t){Object(c.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(v.c);j([Object(v.b)({type:Object,required:!0})],O.prototype,"article",void 0),j([Object(v.b)({type:Object})],O.prototype,"prev",void 0),j([Object(v.b)({type:Object})],O.prototype,"next",void 0);var m=O=j([Object(v.a)({components:{Sidebar:d.default,Suggested:h.default}})],O),_=r(13),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container"},[r("section",{staticClass:"grid post"},[r("article",[r("header",{staticClass:"article-header"},[r("div",{staticClass:"container"},[r("div",{staticClass:"thumb"},[t.article.img?r("img",{attrs:{src:t.article.img,alt:t.article.alt}}):t._e(),t._v(" "),r("h1",[t._v(t._s(t.article.title))])])])]),t._v(" "),r("nuxt-content",{attrs:{document:t.article}})],1),t._v(" "),r("sidebar",{attrs:{date:t.article.createdAt,tags:t.article.tags}})],1),t._v(" "),r("suggested",{attrs:{prev:t.prev,next:t.next}})],1)}),[],!1,null,"064af50c",null);e.default=component.exports;installComponents(component,{Sidebar:r(203).default,Suggested:r(204).default})},203:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(8),r(96);var n=r(52),c=r(192),o=r(53),l=r(54),f=r(26),v=r(9),d=r(27),h=r(205);function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var j=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},O=function(t){Object(o.a)(r,t);var e=y(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return Object(c.a)(r,[{key:"linkTagClass",value:function(t){return"tag-".concat(t)}}]),r}(d.c);j([Object(d.b)({type:String,required:!0})],O.prototype,"date",void 0),j([Object(d.b)({type:Array})],O.prototype,"tags",void 0);var m=O=j([Object(d.a)({components:{SearchForm:h.default},filters:{formatDate:function(t){return new Date(t).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}})],O),_=r(13),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("aside",[r("div",{staticClass:"aside-content"},[r("section",[r("img",{staticClass:"avatar",attrs:{src:"https://github.com/farajist.png",alt:"Hamza"}}),t._v(" "),r("p",[t._v("\n        I'm "),r("nuxt-link",{attrs:{to:"/about"}},[t._v("Hamza")]),t._v("\n        I'm a software engineer with keen interest in applied ML and OSS.\n        This website is my portfolio, I like to keep it updated with what I learn\n        along the journey of life as well as things I'm interested in.\n      ")],1)]),t._v(" "),r("section",[r("h3",[t._v("Tags")]),t._v(" "),r("div",{staticClass:"cell tags"},t._l(t.tags,(function(e,n){return r("nuxt-link",{key:n,class:t.linkTagClass(e),attrs:{to:"/tags/"+e}},[t._v("\n          "+t._s(e)+"\n        ")])})),1)]),t._v(" "),r("section",[r("h3",[t._v("Published")]),t._v(" "),r("time",[t._v(t._s(t._f("formatDate")(t.date)))])]),t._v(" "),r("section",[r("h3",[t._v("Search")]),t._v(" "),r("p",[t._v("Search anything on the site.")]),t._v(" "),r("search-form")],1)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SearchForm:r(205).default})},204:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(8),r(96);var n=r(52),c=r(53),o=r(54),l=r(26),f=r(9),v=r(27);function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(l.a)(t);if(e){var c=Object(l.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(o.a)(this,r)}}var h=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},y=function(t){Object(c.a)(r,t);var e=d(r);function r(){return Object(n.a)(this,r),e.apply(this,arguments)}return r}(v.c);h([Object(v.b)({type:Object,default:null})],y.prototype,"prev",void 0),h([Object(v.b)({type:Object,default:null})],y.prototype,"next",void 0);var j=y=h([v.a],y),O=r(13),component=Object(O.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",[t._v("Up next")]),t._v(" "),r("nav",{staticClass:"flex container suggested"},[t.prev?r("nuxt-link",{attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v("\n      "+t._s(t.prev.title)+"\n    ")]):t._e(),t._v(" "),t.next?r("nuxt-link",{attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v("\n      "+t._s(t.next.title)+"\n    ")]):t._e()],1)])}),[],!1,null,"6ab570fb",null);e.default=component.exports;installComponents(component,{Nav:r(48).default})},205:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(8),r(96);var n=r(52),c=r(192),o=r(53),l=r(54),f=r(26),v=r(9),d=r(27);function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var c=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},j=function(t){Object(o.a)(r,t);var e=h(r);function r(){var t;return Object(n.a)(this,r),(t=e.apply(this,arguments)).searchQuery=null,t}return Object(c.a)(r,[{key:"submitForm",value:function(t){t.preventDefault(),this.searchQuery&&this.$router.push("/blog/?search=".concat(this.searchQuery))}}]),r}(d.c),O=j=y([Object(d.a)({})],j),m=r(13),component=Object(m.a)(O,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"search-form",on:{submit:t.submitForm}},[r("label",{attrs:{for:"search",hidden:""}},[t._v("\n    Name\n  ")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.searchQuery,expression:"searchQuery"}],attrs:{id:"search",type:"search",placeholder:"Type a keyword ..."},domProps:{value:t.searchQuery},on:{input:function(e){e.target.composing||(t.searchQuery=e.target.value)}}}),t._v(" "),r("button",[t._v("🔍")])])}),[],!1,null,null,null);e.default=component.exports},213:function(t,e,r){"use strict";r.r(e);r(17),r(18),r(8),r(96);var n=r(49),c=(r(28),r(2)),o=r(52),l=r(53),f=r(54),v=r(26),d=r(9),h=r(27),y=r(202);function j(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var c=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,c)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var O=function(t,e,r,desc){var n,c=arguments.length,o=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(o=(c<3?n(o):c>3?n(e,r,o):n(e,r))||o);return c>3&&o&&Object.defineProperty(e,r,o),o},m=function(t){Object(l.a)(r,t);var e=j(r);function r(){return Object(o.a)(this,r),e.apply(this,arguments)}return r}(h.c),_=m=O([Object(h.a)({components:{Post:y.default},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r,c,article,o,l,f,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,c=t.params,e.next=3,r("articles",c.slug).fetch();case 3:return article=e.sent,e.next=6,r("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(c.slug).fetch();case 6:return o=e.sent,l=Object(n.a)(o,2),f=l[0],v=l[1],e.abrupt("return",{article:article,prev:f,next:v});case 11:case"end":return e.stop()}}),e)})))()}})],m),R=r(13),component=Object(R.a)(_,(function(){var t=this.$createElement;return(this._self._c||t)("post",{attrs:{article:this.article,prev:this.prev,next:this.next}})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Post:r(202).default})}}]);