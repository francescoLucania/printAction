!function(e,n,t){function o(e,n){return typeof e===n}function r(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function s(){var e=n.body;return e||((e=r(x?"svg":"body")).fake=!0),e}function i(e,t,o,i){var a,l,f,u,c="modernizr",d=r("div"),p=s();if(parseInt(o,10))for(;o--;)(f=r("div")).id=i?i[o]:c+(o+1),d.appendChild(f);return a=r("style"),a.type="text/css",a.id="s"+c,(p.fake?p:d).appendChild(a),p.appendChild(d),a.styleSheet?a.styleSheet.cssText=e:a.appendChild(n.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),l=t(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!l}function a(e,n){return!!~(""+e).indexOf(n)}function l(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function f(n,o){var r=n.length;if("CSS"in e&&"supports"in e.CSS){for(;r--;)if(e.CSS.supports(l(n[r]),o))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];r--;)s.push("("+l(n[r])+":"+o+")");return s=s.join(" or "),i("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function c(e,n,s,i){function l(){d&&(delete z.style,delete z.modElem)}if(i=!o(i,"undefined")&&i,!o(s,"undefined")){var c=f(e,s);if(!o(c,"undefined"))return c}for(var d,p,m,h,v,y=["modernizr","tspan"];!z.style;)d=!0,z.modElem=r(y.shift()),z.style=z.modElem.style;for(m=e.length,p=0;p<m;p++)if(h=e[p],v=z.style[h],a(h,"-")&&(h=u(h)),z.style[h]!==t){if(i||o(s,"undefined"))return l(),"pfx"!=n||h;try{z.style[h]=s}catch(e){}if(z.style[h]!=v)return l(),"pfx"!=n||h}return l(),!1}function d(e,n){return function(){return e.apply(n,arguments)}}function p(e,n,t){var r;for(var s in e)if(e[s]in n)return!1===t?e[s]:(r=n[e[s]],o(r,"function")?d(r,t||n):r);return!1}function m(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+S.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?c(a,n,r,s):(a=(e+" "+T.join(i+" ")+i).split(" "),p(a,n,t))}function h(e,n,o){return m(e,t,t,n,o)}var v=[],y={_version:"3.3.1",_config:{classPrefix:"mod_",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){v.push({name:e,fn:n,options:t})},addAsyncTest:function(e){v.push({name:null,fn:e})}},g=function(){};g.prototype=y,g=new g;var C=[],w=n.documentElement,x="svg"===w.nodeName.toLowerCase(),b=function(){var n=e.matchMedia||e.msMatchMedia;return n?function(e){var t=n(e);return t&&t.matches||!1}:function(n){var t=!1;return i("@media "+n+" { #modernizr { position: absolute; } }",function(n){t="absolute"==(e.getComputedStyle?e.getComputedStyle(n,null):n.currentStyle).position}),t}}();y.mq=b;var S=y._config.usePrefixes?"Moz O ms Webkit".split(" "):[];y._cssomPrefixes=S;var _={elem:r("modernizr")};g._q.push(function(){delete _.elem});var z={style:_.elem.style};g._q.unshift(function(){delete z.style});var T=y._config.usePrefixes?"Moz O ms Webkit".toLowerCase().split(" "):[];y._domPrefixes=T,y.testAllProps=m,y.testAllProps=h,g.addTest("flexboxtweener",h("flexAlign","end",!0));var P=y._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[];y._prefixes=P;var j=y.testStyles=i;g.addTest("touchevents",function(){var t;if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch)t=!0;else{var o=["@media (",P.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("");j(o,function(e){t=9===e.offsetTop})}return t}),function(){var e,n,t,r,s,i;for(var a in v)if(v.hasOwnProperty(a)){if(e=[],(n=v[a]).name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)1===(i=e[s].split(".")).length?g[i[0]]=r:(!g[i[0]]||g[i[0]]instanceof Boolean||(g[i[0]]=new Boolean(g[i[0]])),g[i[0]][i[1]]=r),C.push((r?"":"no-")+i.join("-"))}}(),function(e){var n=w.className,t=g._config.classPrefix||"";if(x&&(n=n.baseVal),g._config.enableJSClass){var o=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(o,"$1"+t+"js$2")}g._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?w.className.baseVal=n:w.className=n)}(C),delete y.addTest,delete y.addAsyncTest;for(var E=0;E<g._q.length;E++)g._q[E]();e.Modernizr=g}(window,document);