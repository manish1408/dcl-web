(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[4],{qLLh:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"c",(function(){return u}));var r="https://distinctcloud.cdn.prismic.io/api/v2",o="",i=function(e){return"blog_post"===e.type?"/posts/".concat(e.uid):"/"},u=function(e){return"blog_post"===e.type?"/posts/[uid]":"/"}},"wG+1":function(e,t,n){var r;"undefined"!==typeof self&&self,r=function(e){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({"./node_modules/object-assign/index.js":function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;function u(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,a,c=u(e),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))o.call(n,l)&&(c[l]=n[l]);if(r){a=r(n);for(var f=0;f<a.length;f++)i.call(n,a[f])&&(c[a[f]]=n[a[f]])}}return c}},"./node_modules/prismic-helpers/dist/prismic-helpers.min.js":function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r=n(2),o=n(3);e.exports={Link:r,Date:o}},function(e,t,n){e.exports={url:function(e,t){if(e&&[e.link_type,e._linkType,e.linkType].some((function(e){return e&&["Document","Link.Document","Link.document"].includes(e)}))&&t&&"function"==typeof t){var n=t(e);if(n)return n}return e&&e.url?e.url:""}}},function(e,t){e.exports=function(e){if(!e)return null;var t=24==e.length?"".concat(e.substring(0,22),":").concat(e.substring(22,24)):e;return new Date(t)}}])},"./node_modules/prismic-richtext/dist/prismic-richtext.min.js":function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=9)}([function(e,t,n){var r=n(3);e.exports=function(e){return function t(n){return 0===arguments.length||r(n)?t:e.apply(this,arguments)}}},function(e,t,n){var r=n(0),o=n(3);e.exports=function(e){return function t(n,i){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r((function(t){return e(n,t)}));default:return o(n)&&o(i)?t:o(n)?r((function(t){return e(t,i)})):o(i)?r((function(t){return e(n,t)})):e(n,i)}}}},function(e,t,n){"use strict";var r;function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.PRIORITIES=t.NODE_TYPES=void 0;var i={heading1:"heading1",heading2:"heading2",heading3:"heading3",heading4:"heading4",heading5:"heading5",heading6:"heading6",paragraph:"paragraph",preformatted:"preformatted",strong:"strong",em:"em",listItem:"list-item",oListItem:"o-list-item",list:"group-list-item",oList:"group-o-list-item",image:"image",embed:"embed",hyperlink:"hyperlink",label:"label",span:"span"};t.NODE_TYPES=i;var u=(o(r={},i.heading1,4),o(r,i.heading2,4),o(r,i.heading3,4),o(r,i.heading4,4),o(r,i.heading5,4),o(r,i.heading6,4),o(r,i.paragraph,3),o(r,i.preformatted,5),o(r,i.strong,6),o(r,i.em,6),o(r,i.oList,1),o(r,i.list,1),o(r,i.listItem,1),o(r,i.oListItem,1),o(r,i.image,1),o(r,i.embed,1),o(r,i.hyperlink,3),o(r,i.label,4),o(r,i.span,7),r);t.PRIORITIES=u},function(e,t){e.exports=function(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=d(n(12)),o=d(n(15)),i=d(n(16)),u=d(n(17)),a=d(n(21)),c=d(n(7)),s=n(23),l=n(2),f=n(8);function d(e){return e&&e.__esModule?e:{default:e}}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function m(e,t){var n=t.others.reduce((function(n,r){var o=n.inner,i=n.outer,u=function(e,t,n){return n.start<t.start?{inner:f.SpanNode.slice(n,t.start,n.end,e),outer:f.SpanNode.slice(n,n.start,t.start,e)}:n.end>t.end?{inner:f.SpanNode.slice(n,n.start,t.end,e),outer:f.SpanNode.slice(n,t.end,n.end,e)}:{inner:n}}(e,t.elected,r);return{inner:o.concat(u.inner),outer:u.outer?i.concat(u.outer):i}}),{inner:[],outer:[]}),r=n.inner,o=n.outer;return[t.elected.setChildren(v(e,r,t.elected.boundaries()))].concat(g(e,o))}function b(e){return function(e,t){return t.reduce((function(t,n){var r=(0,a.default)(t);if(r){if(r.some((function(e){return e.isParentOf(n)})))return(0,u.default)(t).concat([r.concat(n)]);var o=(0,a.default)(r);return o&&e(o,n)?(0,u.default)(t).concat([r.concat(n)]):t.concat([[n]])}return[[n]]}),[])}((function(e,t){return e.end>=t.start}),(0,i.default)([function(e,t){return e.start-t.start},function(e,t){return e.end-t.end}],e))}function h(e){if(0===e.length)throw new Error("Unable to elect node on empty list");var t=y(e.sort((function(e,t){if(e.isParentOf(t))return-1;if(t.isParentOf(e))return 1;var n=l.PRIORITIES[e.type]-l.PRIORITIES[t.type];return 0===n?e.text.length-t.text.length:n})));return{elected:t[0],others:t.slice(1)}}function v(e,t,n){if(t.length>0)return function(e,t,n){return t.reduce((function(r,o,i){var u=[],a=0===i&&o.start>n.lower,c=i===t.length-1&&n.upper>o.end;if(a){var s=new f.TextNode(n.lower,o.start,e.slice(n.lower,o.start));u=u.concat(s)}else{var l=t[i-1];if(l&&o.start>l.end){var d=e.slice(l.end,o.start),p=new f.TextNode(l.end,o.start,d);u=u.concat(p)}}if(u=u.concat(o),c){var y=new f.TextNode(o.end,n.upper,e.slice(o.end,n.upper));u=u.concat(y)}return r.concat(u)}),[])}(e,g(e,t),n);var r=e.slice(n.lower,n.upper);return[new f.TextNode(n.lower,n.upper,r)]}function g(e,t){var n=b((0,o.default)((function(e){return e.start}),t)).map(h),i=(0,r.default)(n.map((function(t){return m(e,t)})));return(0,o.default)((function(e){return e.start}),i)}var O=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,r;return t=e,r=[{key:"fromRichText",value:function(e){return{key:(0,c.default)(),children:e.reduce((function(e,t,n){if(s.RichTextBlock.isEmbedBlock(t.type)||s.RichTextBlock.isImageBlock(t.type))return e.concat(new f.BlockNode(t.type,t));var r=function(e){var t=e.spans.map((function(t){var n=e.text.slice(t.start,t.end);return new f.SpanNode(t.start,t.end,t.type,n,[],t)})),n={lower:0,upper:e.text.length};return v(e.text,t,n)}(t),o=e[e.length-1];if(s.RichTextBlock.isListItem(t.type)&&o&&o instanceof f.ListBlockNode){var i=new f.ListItemBlockNode(t,r),a=o.addChild(i);return(0,u.default)(e).concat(a)}if(s.RichTextBlock.isOrderedListItem(t.type)&&o&&o instanceof f.OrderedListBlockNode){var c=new f.OrderedListItemBlockNode(t,r),l=o.addChild(c);return(0,u.default)(e).concat(l)}if(s.RichTextBlock.isListItem(t.type)){var d=new f.ListItemBlockNode(t,r),p=new f.ListBlockNode(s.RichTextBlock.emptyList(),[d]);return e.concat(p)}if(s.RichTextBlock.isOrderedListItem(t.type)){var y=new f.OrderedListItemBlockNode(t,r),m=new f.OrderedListBlockNode(s.RichTextBlock.emptyOrderedList(),[y]);return e.concat(m)}return e.concat(new f.BlockNode(t.type,t,r))}),[])}}}],(n=null)&&p(t.prototype,n),r&&p(t,r),e}();t.default=O},function(e,t){e.exports=Array.isArray||function(e){return null!=e&&e.length>=0&&"[object Array]"===Object.prototype.toString.call(e)}},function(e,t){e.exports=function(e){return"[object String]"===Object.prototype.toString.call(e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=(new Date).getTime();return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var n=(e+16*Math.random())%16|0;return e=Math.floor(e/16),("x"==t?n:3&n|8).toString(16)}))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ListBlockNode=t.OrderedListBlockNode=t.OrderedListItemBlockNode=t.ListItemBlockNode=t.BlockNode=t.TextNode=t.SpanNode=t.Node=void 0;var r,o=(r=n(7))&&r.__esModule?r:{default:r},i=n(2);function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function c(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),e}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var y=function e(t,n,r){p(this,e),this.key=(0,o.default)(),this.type=t,this.element=n,this.children=r};t.Node=y;var m=function(e){function t(e,n,r,o,i,u){var a;return p(this,t),(a=s(this,l(t).call(this,r,u,i))).start=e,a.end=n,a.text=o,a.children=i,a}return f(t,y),c(t,[{key:"boundaries",value:function(){return{lower:this.start,upper:this.end}}},{key:"isParentOf",value:function(e){return this.start<=e.start&&this.end>=e.end}},{key:"setChildren",value:function(e){return new t(this.start,this.end,this.type,this.text,e,this.element)}}],[{key:"slice",value:function(e,n,r,o){return new t(n,r,e.type,o.slice(n,r),e.children,e.element)}}]),t}();t.SpanNode=m;var b=function(e){function t(e,n,r){p(this,t);var o={type:i.NODE_TYPES.span,start:e,end:n,text:r};return s(this,l(t).call(this,e,n,i.NODE_TYPES.span,r,[],o))}return f(t,m),t}();t.TextNode=b;var h=function(e){function t(e,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return p(this,t),s(this,l(t).call(this,e,n,r))}return f(t,y),t}();t.BlockNode=h;var v=function(e){function t(e,n){return p(this,t),s(this,l(t).call(this,i.NODE_TYPES.listItem,e,n))}return f(t,h),t}();t.ListItemBlockNode=v;var g=function(e){function t(e,n){return p(this,t),s(this,l(t).call(this,i.NODE_TYPES.oListItem,e,n))}return f(t,h),t}();t.OrderedListItemBlockNode=g;var O=function(e){function t(e,n){return p(this,t),s(this,l(t).call(this,i.NODE_TYPES.oList,e,n))}return f(t,h),c(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.OrderedListBlockNode=O;var x=function(e){function t(e,n){return p(this,t),s(this,l(t).call(this,i.NODE_TYPES.list,e,n))}return f(t,h),c(t,[{key:"addChild",value:function(e){var n=this.children.concat(e);return new t(this.element,n)}}]),t}();t.ListBlockNode=x},function(e,t,n){e.exports=n(10)},function(e,t,n){"use strict";var r=a(n(11)),o=a(n(4)),i=a(n(24)),u=n(2);function a(e){return e&&e.__esModule?e:{default:e}}e.exports={asText:r.default,asTree:o.default.fromRichText,serialize:i.default,Elements:u.NODE_TYPES}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e,t){var n="string"==typeof t?t:" ";return e.map((function(e){return e.text})).join(n)};t.default=r},function(e,t,n){var r=n(0)(n(13)(!0));e.exports=r},function(e,t,n){var r=n(14);e.exports=function(e){return function t(n){for(var o,i,u,a=[],c=0,s=n.length;c<s;){if(r(n[c]))for(u=0,i=(o=e?t(n[c]):n[c]).length;u<i;)a[a.length]=o[u],u+=1;else a[a.length]=n[c];c+=1}return a}}},function(e,t,n){var r=n(0),o=n(5),i=n(6),u=r((function(e){return!!o(e)||!!e&&"object"==typeof e&&!i(e)&&(1===e.nodeType?!!e.length:0===e.length||e.length>0&&e.hasOwnProperty(0)&&e.hasOwnProperty(e.length-1))}));e.exports=u},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){var r=e(t),o=e(n);return r<o?-1:r>o?1:0}))}));e.exports=r},function(e,t,n){var r=n(1)((function(e,t){return Array.prototype.slice.call(t,0).sort((function(t,n){for(var r=0,o=0;0===r&&o<e.length;)r=e[o](t,n),o+=1;return r}))}));e.exports=r},function(e,t,n){var r=n(18)(0,-1);e.exports=r},function(e,t,n){var r=n(19),o=n(20)(r("slice",(function(e,t,n){return Array.prototype.slice.call(n,e,t)})));e.exports=o},function(e,t,n){var r=n(5);e.exports=function(e,t){return function(){var n=arguments.length;if(0===n)return t();var o=arguments[n-1];return r(o)||"function"!=typeof o[e]?t.apply(this,arguments):o[e].apply(o,Array.prototype.slice.call(arguments,0,n-1))}}},function(e,t,n){var r=n(0),o=n(1),i=n(3);e.exports=function(e){return function t(n,u,a){switch(arguments.length){case 0:return t;case 1:return i(n)?t:o((function(t,r){return e(n,t,r)}));case 2:return i(n)&&i(u)?t:i(n)?o((function(t,n){return e(t,u,n)})):i(u)?o((function(t,r){return e(n,t,r)})):r((function(t){return e(n,u,t)}));default:return i(n)&&i(u)&&i(a)?t:i(n)&&i(u)?o((function(t,n){return e(t,n,a)})):i(n)&&i(a)?o((function(t,n){return e(t,u,n)})):i(u)&&i(a)?o((function(t,r){return e(n,t,r)})):i(n)?r((function(t){return e(t,u,a)})):i(u)?r((function(t){return e(n,t,a)})):i(a)?r((function(t){return e(n,u,t)})):e(n,u,a)}}}},function(e,t,n){var r=n(22)(-1);e.exports=r},function(e,t,n){var r=n(1),o=n(6),i=r((function(e,t){var n=e<0?t.length+e:e;return o(t)?t.charAt(n):t[n]}));e.exports=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.RichTextBlock=void 0;var r=n(2);function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.type=t,this.text=n,this.spans=r}var t,n,i;return t=e,i=[{key:"isEmbedBlock",value:function(e){return e===r.NODE_TYPES.embed}},{key:"isImageBlock",value:function(e){return e===r.NODE_TYPES.image}},{key:"isList",value:function(e){return e===r.NODE_TYPES.list}},{key:"isOrderedList",value:function(e){return e===r.NODE_TYPES.oList}},{key:"isListItem",value:function(e){return e===r.NODE_TYPES.listItem}},{key:"isOrderedListItem",value:function(e){return e===r.NODE_TYPES.oListItem}},{key:"emptyList",value:function(){return{type:r.NODE_TYPES.list,spans:[],text:""}}},{key:"emptyOrderedList",value:function(){return{type:r.NODE_TYPES.oList,spans:[],text:""}}}],(n=null)&&o(t.prototype,n),i&&o(t,i),e}();t.RichTextBlock=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,o=(r=n(4))&&r.__esModule?r:{default:r},i=n(8),u=function(e,t,n){return o.default.fromRichText(e).children.map((function(e,r){return function(e,t,n,r){return function e(n,o){var u=n instanceof i.SpanNode?n.text:null,a=n.children.reduce((function(t,n,r){return t.concat([e(n,r)])}),[]);return r&&r(n.type,n.element,u,a,o)||t(n.type,n.element,u,a,o)}(e,n)}(e,t,r,n)}))};t.default=u}])},"./node_modules/prop-types/checkPropTypes.js":function(e,t,n){"use strict";var r=function(){},o=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),i={},u=Function.call.bind(Object.prototype.hasOwnProperty);function a(e,t,n,a,c){for(var s in e)if(u(e,s)){var l;try{if("function"!==typeof e[s]){var f=Error((a||"React class")+": "+n+" type `"+s+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[s]+"`.");throw f.name="Invariant Violation",f}l=e[s](t,s,a,n,null,o)}catch(p){l=p}if(!l||l instanceof Error||r((a||"React class")+": type specification of "+n+" `"+s+"` is invalid; the type checker function must return `null` or an `Error` but returned a "+typeof l+". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."),l instanceof Error&&!(l.message in i)){i[l.message]=!0;var d=c?c():"";r("Failed "+n+" type: "+l.message+(null!=d?d:""))}}}r=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},a.resetWarningCache=function(){i={}},e.exports=a},"./node_modules/prop-types/factoryWithTypeCheckers.js":function(e,t,n){"use strict";var r=n("./node_modules/react-is/index.js"),o=n("./node_modules/object-assign/index.js"),i=n("./node_modules/prop-types/lib/ReactPropTypesSecret.js"),u=n("./node_modules/prop-types/checkPropTypes.js"),a=Function.call.bind(Object.prototype.hasOwnProperty),c=function(){};function s(){return null}c=function(e){var t="Warning: "+e;"undefined"!==typeof console&&console.error(t);try{throw new Error(t)}catch(n){}},e.exports=function(e,t){var n="function"===typeof Symbol&&Symbol.iterator,l={array:y("array"),bool:y("boolean"),func:y("function"),number:y("number"),object:y("object"),string:y("string"),symbol:y("symbol"),any:p(s),arrayOf:function(e){return p((function(t,n,r,o,u){if("function"!==typeof e)return new d("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=t[n];if(!Array.isArray(a))return new d("Invalid "+o+" `"+u+"` of type `"+b(a)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<a.length;c++){var s=e(a,c,r,o,u+"["+c+"]",i);if(s instanceof Error)return s}return null}))},element:p((function(t,n,r,o,i){var u=t[n];return e(u)?null:new d("Invalid "+o+" `"+i+"` of type `"+b(u)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:p((function(e,t,n,o,i){var u=e[t];return r.isValidElementType(u)?null:new d("Invalid "+o+" `"+i+"` of type `"+b(u)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(e){return p((function(t,n,r,o,i){if(!(t[n]instanceof e)){var u=e.name||"<<anonymous>>";return new d("Invalid "+o+" `"+i+"` of type `"+((a=t[n]).constructor&&a.constructor.name?a.constructor.name:"<<anonymous>>")+"` supplied to `"+r+"`, expected instance of `"+u+"`.")}var a;return null}))},node:p((function(e,t,n,r,o){return m(e[t])?null:new d("Invalid "+r+" `"+o+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(e){return p((function(t,n,r,o,u){if("function"!==typeof e)return new d("Property `"+u+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=t[n],s=b(c);if("object"!==s)return new d("Invalid "+o+" `"+u+"` of type `"+s+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(a(c,l)){var f=e(c,l,r,o,u+"."+l,i);if(f instanceof Error)return f}return null}))},oneOf:function(e){if(!Array.isArray(e))return c(arguments.length>1?"Invalid arguments supplied to oneOf, expected an array, got "+arguments.length+" arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).":"Invalid argument supplied to oneOf, expected an array."),s;function t(t,n,r,o,i){for(var u=t[n],a=0;a<e.length;a++)if(f(u,e[a]))return null;var c=JSON.stringify(e,(function(e,t){return"symbol"===h(t)?String(t):t}));return new d("Invalid "+o+" `"+i+"` of value `"+String(u)+"` supplied to `"+r+"`, expected one of "+c+".")}return p(t)},oneOfType:function(e){if(!Array.isArray(e))return c("Invalid argument supplied to oneOfType, expected an instance of array."),s;for(var t=0;t<e.length;t++){var n=e[t];if("function"!==typeof n)return c("Invalid argument supplied to oneOfType. Expected an array of check functions, but received "+v(n)+" at index "+t+"."),s}return p((function(t,n,r,o,u){for(var a=0;a<e.length;a++)if(null==(0,e[a])(t,n,r,o,u,i))return null;return new d("Invalid "+o+" `"+u+"` supplied to `"+r+"`.")}))},shape:function(e){return p((function(t,n,r,o,u){var a=t[n],c=b(a);if("object"!==c)return new d("Invalid "+o+" `"+u+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var s in e){var l=e[s];if(l){var f=l(a,s,r,o,u+"."+s,i);if(f)return f}}return null}))},exact:function(e){return p((function(t,n,r,u,a){var c=t[n],s=b(c);if("object"!==s)return new d("Invalid "+u+" `"+a+"` of type `"+s+"` supplied to `"+r+"`, expected `object`.");var l=o({},t[n],e);for(var f in l){var p=e[f];if(!p)return new d("Invalid "+u+" `"+a+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(t[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(e),null,"  "));var y=p(c,f,r,u,a+"."+f,i);if(y)return y}return null}))}};function f(e,t){return e===t?0!==e||1/e===1/t:e!==e&&t!==t}function d(e){this.message=e,this.stack=""}function p(e){var n={},r=0;function o(o,u,a,s,l,f,p){if(s=s||"<<anonymous>>",f=f||a,p!==i){if(t){var y=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw y.name="Invariant Violation",y}if("undefined"!==typeof console){var m=s+":"+a;!n[m]&&r<3&&(c("You are manually calling a React.PropTypes validation function for the `"+f+"` prop on `"+s+"`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."),n[m]=!0,r++)}}return null==u[a]?o?null===u[a]?new d("The "+l+" `"+f+"` is marked as required in `"+s+"`, but its value is `null`."):new d("The "+l+" `"+f+"` is marked as required in `"+s+"`, but its value is `undefined`."):null:e(u,a,s,l,f)}var u=o.bind(null,!1);return u.isRequired=o.bind(null,!0),u}function y(e){return p((function(t,n,r,o,i,u){var a=t[n];return b(a)!==e?new d("Invalid "+o+" `"+i+"` of type `"+h(a)+"` supplied to `"+r+"`, expected `"+e+"`."):null}))}function m(t){switch(typeof t){case"number":case"string":case"undefined":return!0;case"boolean":return!t;case"object":if(Array.isArray(t))return t.every(m);if(null===t||e(t))return!0;var r=function(e){var t=e&&(n&&e[n]||e["@@iterator"]);if("function"===typeof t)return t}(t);if(!r)return!1;var o,i=r.call(t);if(r!==t.entries){for(;!(o=i.next()).done;)if(!m(o.value))return!1}else for(;!(o=i.next()).done;){var u=o.value;if(u&&!m(u[1]))return!1}return!0;default:return!1}}function b(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":function(e,t){return"symbol"===e||!!t&&("Symbol"===t["@@toStringTag"]||"function"===typeof Symbol&&t instanceof Symbol)}(t,e)?"symbol":t}function h(e){if("undefined"===typeof e||null===e)return""+e;var t=b(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}function v(e){var t=h(e);switch(t){case"array":case"object":return"an "+t;case"boolean":case"date":case"regexp":return"a "+t;default:return t}}return d.prototype=Error.prototype,l.checkPropTypes=u,l.resetWarningCache=u.resetWarningCache,l.PropTypes=l,l}},"./node_modules/prop-types/index.js":function(e,t,n){var r=n("./node_modules/react-is/index.js");e.exports=n("./node_modules/prop-types/factoryWithTypeCheckers.js")(r.isElement,!0)},"./node_modules/prop-types/lib/ReactPropTypesSecret.js":function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},"./node_modules/react-is/cjs/react-is.development.js":function(e,t,n){"use strict";!function(){Object.defineProperty(t,"__esModule",{value:!0});var e="function"===typeof Symbol&&Symbol.for,n=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,o=e?Symbol.for("react.fragment"):60107,i=e?Symbol.for("react.strict_mode"):60108,u=e?Symbol.for("react.profiler"):60114,a=e?Symbol.for("react.provider"):60109,c=e?Symbol.for("react.context"):60110,s=e?Symbol.for("react.async_mode"):60111,l=e?Symbol.for("react.concurrent_mode"):60111,f=e?Symbol.for("react.forward_ref"):60112,d=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,y=e?Symbol.for("react.memo"):60115,m=e?Symbol.for("react.lazy"):60116,b=e?Symbol.for("react.fundamental"):60117,h=e?Symbol.for("react.responder"):60118,v=function(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=0,i="Warning: "+e.replace(/%s/g,(function(){return n[o++]}));"undefined"!==typeof console&&console.warn(i);try{throw new Error(i)}catch(u){}},g=function(e,t){if(void 0===t)throw new Error("`lowPriorityWarning(condition, format, ...args)` requires a warning message argument");if(!e){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];v.apply(void 0,[t].concat(r))}};function O(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:var p=e.type;switch(p){case s:case l:case o:case u:case i:case d:return p;default:var b=p&&p.$$typeof;switch(b){case c:case f:case a:return b;default:return t}}case m:case y:case r:return t}}}var x=s,j=l,w=c,_=a,E=n,S=f,k=o,T=m,P=y,I=r,N=u,L=i,R=d,B=!1;function M(e){return O(e)===l}t.typeOf=O,t.AsyncMode=x,t.ConcurrentMode=j,t.ContextConsumer=w,t.ContextProvider=_,t.Element=E,t.ForwardRef=S,t.Fragment=k,t.Lazy=T,t.Memo=P,t.Portal=I,t.Profiler=N,t.StrictMode=L,t.Suspense=R,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===o||e===l||e===u||e===i||e===d||e===p||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===y||e.$$typeof===a||e.$$typeof===c||e.$$typeof===f||e.$$typeof===b||e.$$typeof===h)},t.isAsyncMode=function(e){return B||(B=!0,g(!1,"The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")),M(e)||O(e)===s},t.isConcurrentMode=M,t.isContextConsumer=function(e){return O(e)===c},t.isContextProvider=function(e){return O(e)===a},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return O(e)===f},t.isFragment=function(e){return O(e)===o},t.isLazy=function(e){return O(e)===m},t.isMemo=function(e){return O(e)===y},t.isPortal=function(e){return O(e)===r},t.isProfiler=function(e){return O(e)===u},t.isStrictMode=function(e){return O(e)===i},t.isSuspense=function(e){return O(e)===d}}()},"./node_modules/react-is/index.js":function(e,t,n){"use strict";e.exports=n("./node_modules/react-is/cjs/react-is.development.js")},"./src/Component.js":function(e,t,n){"use strict";n.r(t),n("react");var r=n("./node_modules/prop-types/index.js"),o=n("./node_modules/prismic-richtext/dist/prismic-richtext.min.js"),i=n("./src/richtext.js");function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(e){var t=e.Component,n=e.elements,r=e.htmlSerializer,c=e.linkResolver,s=e.render,l=(e.renderAsText,e.serializeHyperlink),f=u(e,["Component","elements","htmlSerializer","linkResolver","render","renderAsText","serializeHyperlink"]),d=r||l&&function(){var e=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).reduce((function(e,t){var n=t.type,r=t.fn;return Object.assign({},e,a({},n,r))}),{});return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return e[t]?e[t].apply(e,[t].concat(r)):null}}({},[{type:o.Elements.hyperlink,fn:l}]);return s?Object(i.renderRichText)(s,c,d,t,n,f):null};c.propTypes={Component:r.elementType,linkResolver:r.func,htmlSerializer:r.func,elements:r.object,serializeHyperlink:function(e,t,n){if(e.serializeHyperlink&&e.htmlSerializer)return new Error("You cannot specify both 'htmlSerializer' and 'serializeHyperlink'. The latter will be ignored by '".concat(n,"'."))},render:function(e,t,n){if(!e.render)return new Error("Prop 'render' was not specified in '".concat(n,"'."))}},c.asText=i.asText,c.render=i.renderRichText,c.displayName="RichText",t.default=c},"./src/embeds.js":function(e,t,n){"use strict";function r(e){var t=e.property,n=e.src,r=e.id;window&&function(e,n){var r,o=document.getElementsByTagName("script")[0],i=window[t]||{};document.getElementById(n)||((r=document.createElement("script")).id=n,r.src=e,o.parentNode.insertBefore(r,o),i._e=[],i.ready=function(e){i._e.push(e)})}(n,r)}n.r(t),n.d(t,"createScript",(function(){return r})),n.d(t,"embeds",(function(){return o}));var o={Twitter:{property:"twttr",src:"https://platform.twitter.com/widgets.js",id:"twitter-wjs",load:function(){window&&window.twttr&&window.twttr.widgets.load()}},Facebook:{property:"FB",src:"https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.3",id:"fb-wjs",load:function(e){window&&window.FB&&window.FB.XFBML.parse(e)}},Instagram:{property:"instgrm",src:"https://www.instagram.com/embed.js",id:"insta-wjs",load:function(){window&&window.instgrm&&window.instgrm.Embeds.process()}}}},"./src/index.js":function(e,t,n){var r=n("./node_modules/prismic-helpers/dist/prismic-helpers.min.js"),o=n("./node_modules/prismic-richtext/dist/prismic-richtext.min.js"),i=n("./src/Component.js");e.exports={Date:r.Date,Elements:o.Elements,Link:r.Link,RichText:i.default}},"./src/richtext.js":function(e,t,n){"use strict";n.r(t),n.d(t,"asText",(function(){return m})),n.d(t,"renderRichText",(function(){return b}));var r=n("react"),o=n("./node_modules/prismic-richtext/dist/prismic-richtext.min.js"),i=n.n(o),u=n("./node_modules/prismic-helpers/dist/prismic-helpers.min.js"),a=n("./src/embeds.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f="undefined"!==typeof window?n("./src/embeds.js").createScript:function(){};function d(e,t,n,i,c,d,m){if(t[n])return function(e,t,n,o,i,u){return Object(r.createElement)(e,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({key:"element-".concat(t,"-").concat(u+1)},n,{children:i&&i.length?i:void 0},"image"===t?{src:n.url,url:void 0}:null))}(t[n],n,i,0,d,m);switch(n){case o.Elements.heading1:return y("h1",i,d,m);case o.Elements.heading2:return y("h2",i,d,m);case o.Elements.heading3:return y("h3",i,d,m);case o.Elements.heading4:return y("h4",i,d,m);case o.Elements.heading5:return y("h5",i,d,m);case o.Elements.heading6:return y("h6",i,d,m);case o.Elements.paragraph:return y("p",i,d,m);case o.Elements.preformatted:return y("pre",i,d,m);case o.Elements.strong:return y("strong",i,d,m);case o.Elements.em:return y("em",i,d,m);case o.Elements.listItem:case o.Elements.oListItem:return y("li",i,d,m);case o.Elements.list:return y("ul",i,d,m);case o.Elements.oList:return y("ol",i,d,m);case o.Elements.image:return function(e,t,n){var o=t.linkTo?u.Link.url(t.linkTo,e):null,i=t.linkTo&&t.linkTo.target?{target:t.linkTo.target}:{},a=i.target?{rel:"noopener"}:{},c=Object(r.createElement)("img",{src:t.url,alt:t.alt||""});return Object(r.createElement)("p",p({className:[t.label||"","block-img"].join(" ")},n),o?Object(r.createElement)("a",Object.assign({href:o},i,a),c):c)}(e,i,m);case o.Elements.embed:return function(e,t){a.embeds[e.oembed.provider_name]&&f(a.embeds[e.oembed.provider_name]);var n="embed embed-".concat(e.oembed.provider_name.toLowerCase()),o=Object.assign({"data-oembed":e.oembed.embed_url,"data-oembed-type":e.oembed.type,"data-oembed-provider":e.oembed.provider_name,ref:function(t){a.embeds[e.oembed.provider_name]&&a.embeds[e.oembed.provider_name].load(t)}},e.label?{className:"".concat(n," ").concat(e.label)}:{className:n}),i=Object(r.createElement)("div",{dangerouslySetInnerHTML:{__html:e.oembed.html}});return Object(r.createElement)("div",p(o,t),i)}(i,m);case o.Elements.hyperlink:return function(e,t,n,o){var i=t.data.target?{target:t.data.target}:{},a=t.data.target?{rel:"noopener"}:{},c=Object.assign({href:u.Link.url(t.data,e)},i,a);return Object(r.createElement)("a",p(c,o),n)}(e,i,d,m);case o.Elements.label:return function(e,t,n){var o=e.data?Object.assign({},{className:e.data.label}):{};return Object(r.createElement)("span",p(o,n),t)}(i,d,m);case o.Elements.span:return function(e){return e?e.split("\n").reduce((function(e,t){if(0===e.length)return[t];var n=(e.length+1)/2-1,o=Object(r.createElement)("br",p({},n));return e.concat([o,t])}),[]):null}(c);default:return null}}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return Object.assign(e,{key:t})}function y(e,t,n,o){var i=t.label?Object.assign({},{className:t.label}):{};return Object(r.createElement)(e,p(i,o),n)}var m=function(e){return"[object Array]"!==Object.prototype.toString.call(e)?(console.warn("Rich text argument should be an Array. Received ".concat(c(e))),null):i.a.asText(e)},b=function(e,t,n){var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:r.Fragment,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};if("[object Array]"!==Object.prototype.toString.call(e))return console.warn("Rich text argument should be an Array. Received ".concat(c(e))),null;var s=i.a.serialize(e,d.bind(null,t,u),n);return Object(r.createElement)(o,a,s)}},0:function(e,t,n){e.exports=n("./src/index.js")},react:function(t,n){t.exports=e}})},e.exports=r(n("q1tI"))}}]);