_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"08WI":function(e,t,a){"use strict";var n=a("vuIU"),r=a("JX7q");function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=a("U8pU");function c(e,t){return!t||"object"!==Object(l.a)(t)&&"function"!==typeof t?Object(r.a)(e):t}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var o=a("rePB"),u=a("vQTQ"),m=a("wx14"),p=a("q1tI"),f=a.n(p),d=p.createElement;var g=function(e){return d("svg",Object(m.a)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100"},e),d("circle",{fill:"none",stroke:"#cfcfcf",strokeWidth:4,cx:50,cy:50,r:44,opacity:.5}),d("circle",{fill:"#fff",stroke:"#44ce6f",strokeWidth:3,cx:8,cy:54,r:6},d("animateTransform",{attributeName:"transform",dur:"2s",type:"rotate",from:"0 50 48",to:"360 50 52",repeatCount:"indefinite"})))},h=a("5AJ6"),v=Object(h.a)(p.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search"),b=a("YFqc"),N=a.n(b),y=a("qLLh"),w=f.a.createElement;function O(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=i(e);if(t){var r=i(this).constructor;a=Reflect.construct(n,arguments,r)}else a=n.apply(this,arguments);return c(this,a)}}var j=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(a,e);var t=O(a);function a(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),n=t.call(this,e),Object(o.a)(Object(r.a)(n),"handleOnInputChange",(function(e){var t=e.target.value;n.setState({query:t})})),Object(o.a)(Object(r.a)(n),"handleOnSubmit",(function(e){e.preventDefault();var t=n.state.query;t?n.setState({query:t,loading:!0,message:""},(function(){n.fetchSearchResults(t)})):n.setState({query:t,result:{},message:""})})),Object(o.a)(Object(r.a)(n),"fetchSearchResults",(function(e){u.a.client("https://distinctcloud.prismic.io/api/v2").query([u.a.Predicates.at("document.type","blog_post"),u.a.Predicates.fulltext("document",e)]).then((function(e){var t=e.results.length?"":"No Search Result";n.setState({results:e.results,message:t,loading:!1})})).catch((function(e){n.setState({loading:!1,message:"Failed to load request"})}))})),Object(o.a)(Object(r.a)(n),"renderSearchResults",(function(){var e=n.state.results;if(Object.keys(e).length&&e.length)return w("div",null,e.map((function(e){return w("div",{key:e.id},w(N.a,{as:Object(y.d)(e),href:Object(y.c)(e)},w("a",{className:"result-items"},w("h6",{className:"image-username"},e.data.title[0].text),w("div",{className:"image-wrapper"},w("img",{className:"image",src:e.data.featured_image.url,alt:"image"})))))})))})),n.state={query:"",results:{},loading:!1,message:"",button:!1},n}return Object(n.a)(a,[{key:"render",value:function(){var e=this.state,t=(e.query,e.message),a=e.loading;e.results;return w(f.a.Fragment,null,w("form",{className:"search-form"},w("label",{htmlFor:"search-input"},w("span",{className:"screen-reader-text"},"Search for:"),w("input",{className:"search-field",name:"query",type:"text",onChange:this.handleOnInputChange,value:this.state.query,id:"search-input",placeholder:"Search..."})),w("button",{type:"submit",onClick:this.handleOnSubmit},w(v,null))),t&&w("p",null,t),w("div",{className:"search-loading ".concat(a?"show":"hide")},w(g,null)),this.renderSearchResults())}}]),a}(f.a.Component);t.a=j},"HE+H":function(e,t,a){"use strict";a.r(t);var n=a("o0o1"),r=a.n(n),s=a("HaE+"),l=a("q1tI"),c=a.n(l),i=a("wG+1"),o=a("bMwp"),u=a("pRT7"),m=a.n(u),p=(a("ZDfL"),a("Cgje")),f=a("naWs"),d=a("mgkc"),g=a("MT4C"),h=a.n(g),v=a("08WI"),b=(a("vQTQ"),a("8Kt/")),N=a.n(b),y=c.a.createElement,w=function(e){var t=e.post;return t&&t.title?y(c.a.Fragment,null,y(N.a,null,y("title",null,"Distinct Cloud Labs - Blog")),y(p.a,null),y(d.a,{title:t.title.length?t.title[0].text:""}),y("section",{className:"blog-details-area ptb-80"},y("div",{className:"container"},y("div",{className:"row"},y("div",{className:"col-lg-8 col-md-12"},y("div",{className:"blog-details-desc"},y("div",{className:"article-image"},y("img",{src:t.banner_image.url,alt:"image"})),y("div",{className:"article-content"},y("div",{className:"entry-meta"},y("ul",null,y("li",null,y(h.a,null)," ",y("a",{href:"#"},new Date(t.time).toLocaleDateString())))),y("div",{className:"blog-content"},i.RichText.render(t.body,m.a)," ")),y("div",{className:"startp-post-navigation"},y("div",{className:"prev-link-wrapper"},y("div",{className:"info-prev-link-wrapper"},y("a",{href:"#"},y("span",{className:"image-prev"},y("img",{src:"assets/img/blog-image/2.jpg",alt:"image"}),y("span",{className:"post-nav-title"},"Prev")),y("span",{className:"prev-link-info-wrapper"},y("span",{className:"prev-title"},"Don't buy a tech gift until you read these rules"),y("span",{className:"meta-wrapper"},y("span",{className:"date-post"},"January 21, 2020")))))),y("div",{className:"next-link-wrapper"},y("div",{className:"info-next-link-wrapper"},y("a",{href:"#"},y("span",{className:"next-link-info-wrapper"},y("span",{className:"next-title"},"The golden rule of buying a phone as a gift"),y("span",{className:"meta-wrapper"},y("span",{className:"date-post"},"January 21, 2020"))),y("span",{className:"image-next"},y("img",{src:"assets/img/blog-image/3.jpg",alt:"image"}),y("span",{className:"post-nav-title"},"Next")))))))),y("div",{className:"col-lg-4 col-md-12"},y("aside",{className:"widget-area",id:"secondary"},y("section",{className:"widget widget_search"},y(v.a,null)),y("section",{className:"widget widget_startp_posts_thumb"},y("h3",{className:"widget-title"},"Popular Posts"),y("article",{className:"item"},y("a",{href:"#",className:"thumb"},y("span",{className:"fullimage cover bg1",role:"img"})),y("div",{className:"info"},y("time",{dateTime:"2019-06-30"},"June 10, 2019"),y("h4",{className:"title usmall"},y("a",{href:"#"},"Making Peace With The Feast Or Famine Of Freelancing"))),y("div",{className:"clear"})),y("article",{className:"item"},y("a",{href:"#",className:"thumb"},y("span",{className:"fullimage cover bg2",role:"img"})),y("div",{className:"info"},y("time",{dateTime:"2019-06-30"},"June 21, 2019"),y("h4",{className:"title usmall"},y("a",{href:"#"},"I Used The Web For A Day On A 50 MB Budget"))),y("div",{className:"clear"})),y("article",{className:"item"},y("a",{href:"#",className:"thumb"},y("span",{className:"fullimage cover bg3",role:"img"})),y("div",{className:"info"},y("time",{dateTime:"2019-06-30"},"June 30, 2019"),y("h4",{className:"title usmall"},y("a",{href:"#"},"How To Create A Responsive Popup Gallery?"))),y("div",{className:"clear"}))),y("section",{className:"widget widget_categories"},y("h3",{className:"widget-title"},"Categories"),y("ul",null,y("li",null,y("a",{href:"#"},"Business")),y("li",null,y("a",{href:"#"},"Privacy")),y("li",null,y("a",{href:"#"},"Technology")),y("li",null,y("a",{href:"#"},"Tips")),y("li",null,y("a",{href:"#"},"Uncategorized")))),y("section",{className:"widget widget_archive"},y("h3",{className:"widget-title"},"Archives"),y("ul",null,y("li",null,y("a",{href:"#"},"May 2019")),y("li",null,y("a",{href:"#"},"April 2019")),y("li",null,y("a",{href:"#"},"June 2019")))),y("section",{className:"widget widget_meta"},y("h3",{className:"widget-title"},"Meta"),y("ul",null,y("li",null,y("a",{href:"#"},"Log in")),y("li",null,y("a",{href:"#"},"Entries"," ",y("abbr",{title:"Really Simple Syndication"},"RSS"))),y("li",null,y("a",{href:"#"},"Comments"," ",y("abbr",{title:"Really Simple Syndication"},"RSS"))),y("li",null,y("a",{href:"#"},"WordPress.org")))),y("section",{className:"widget widget_tag_cloud"},y("h3",{className:"widget-title"},"Tags"),y("div",{className:"tagcloud"},y("a",{href:"#"},"IT ",y("span",{className:"tag-link-count"}," (3)")),y("a",{href:"#"},"Spacle ",y("span",{className:"tag-link-count"}," (3)")),y("a",{href:"#"},"Games ",y("span",{className:"tag-link-count"}," (2)")),y("a",{href:"#"},"Fashion ",y("span",{className:"tag-link-count"}," (2)")),y("a",{href:"#"},"Travel ",y("span",{className:"tag-link-count"}," (1)")),y("a",{href:"#"},"Smart ",y("span",{className:"tag-link-count"}," (1)")),y("a",{href:"#"},"Marketing ",y("span",{className:"tag-link-count"}," (1)")),y("a",{href:"#"},"Tips ",y("span",{className:"tag-link-count"}," (2)"))))))))),y(f.a,null)):y(c.a.Fragment,null," ")};w.getInitialProps=function(){var e=Object(s.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.query,e.next=3,Object(o.a)(a.slug);case 3:return n=e.sent,e.abrupt("return",{post:n.data});case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),t.default=w},"HaE+":function(e,t,a){"use strict";function n(e,t,a,n,r,s,l){try{var c=e[s](l),i=c.value}catch(o){return void a(o)}c.done?t(i):Promise.resolve(i).then(n,r)}function r(e){return function(){var t=this,a=arguments;return new Promise((function(r,s){var l=e.apply(t,a);function c(e){n(l,r,s,c,i,"next",e)}function i(e){n(l,r,s,c,i,"throw",e)}c(void 0)}))}}a.d(t,"a",(function(){return r}))},MT4C:function(e,t,a){"use strict";var n=a("TqRt"),r=a("284h");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=r(a("q1tI")),l=(0,n(a("8/g6")).default)(s.createElement(s.Fragment,null,s.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),s.createElement("path",{d:"M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"})),"AccessTime");t.default=l},bMwp:function(e,t,a){"use strict";a.d(t,"b",(function(){return u})),a.d(t,"a",(function(){return m}));var n=a("o0o1"),r=a.n(n),s=a("rePB"),l=a("HaE+"),c=a("3gx5");function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){Object(s.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var u=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.api("https://distinctcloud.prismic.io/api/v2");case 3:return a=e.sent,e.next=6,a.query(c.a.Predicates.at("document.type","blog_post"),o({orderings:"[my.blog_post.date desc]"},t));case 6:return n=e.sent,e.abrupt("return",n);case 10:return e.prev=10,e.t0=e.catch(0),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c.a.api("https://distinctcloud.prismic.io/api/v2");case 3:return a=e.sent,e.next=6,a.query(c.a.Predicates.at("my.blog_post.uid",t));case 6:return n=e.sent,e.abrupt("return",n.results[0]);case 10:return e.prev=10,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},mVsN:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blogPost",function(){return a("HE+H")}])},pRT7:function(e,t){}},[["mVsN",0,1,2,3,4,5]]]);