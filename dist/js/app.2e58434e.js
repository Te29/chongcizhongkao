(function(e){function t(t){for(var i,a,o=t[0],s=t[1],c=t[2],d=0,p=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);u&&u(t);while(p.length)p.shift()();return _.push.apply(_,c||[]),n()}function n(){for(var e,t=0;t<_.length;t++){for(var n=_[t],i=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(i=!1)}i&&(_.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},a={app:0},r={app:0},_=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-64775952":"a1dbf692","chunk-7d8dcbbc":"5a63899c","chunk-a4059680":"db63e429"}[e]+".js"}function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-64775952":1,"chunk-7d8dcbbc":1,"chunk-a4059680":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var i="css/"+({}[e]||e)+"."+{"chunk-64775952":"7fdf1f14","chunk-7d8dcbbc":"fa402595","chunk-a4059680":"b5569d25"}[e]+".css",r=s.p+i,_=document.getElementsByTagName("link"),o=0;o<_.length;o++){var c=_[o],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===i||d===r))return t()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){c=p[o],d=c.getAttribute("data-href");if(d===i||d===r)return t()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=t,u.onerror=function(t){var i=t&&t.target&&t.target.src||r,_=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");_.code="CSS_CHUNK_LOAD_FAILED",_.request=i,delete a[e],u.parentNode.removeChild(u),n(_)},u.href=r;var l=document.getElementsByTagName("head")[0];l.appendChild(u)})).then((function(){a[e]=0})));var i=r[e];if(0!==i)if(i)t.push(i[2]);else{var _=new Promise((function(t,n){i=r[e]=[t,n]}));t.push(i[2]=_);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=o(e);var p=new Error;c=function(t){d.onerror=d.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var i=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",p.name="ChunkLoadError",p.type=i,p.request=a,n[1](p)}r[e]=void 0}};var u=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var u=d;_.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);var i=n("2b0e"),a=n("8c4f"),r=function(){var e=this,t=e._self._c;return t("div",[t("router-view")],1)},_=[],o={},s=o,c=n("0c7c"),d=Object(c["a"])(s,r,_,!1,null,null,null),p=d.exports,u=[{path:"/",component:p,children:[{path:"",component:()=>n.e("chunk-64775952").then(n.bind(null,"fdc7"))},{path:"/item",component:()=>n.e("chunk-7d8dcbbc").then(n.bind(null,"1170"))},{path:"/score",component:()=>n.e("chunk-a4059680").then(n.bind(null,"e2f1"))}]}],l=n("2f62");n("14d9");const m="ADD_ITEMNUM",w="REMBER_ANSWER",h="REMBER_TIME",f="INITIALIZE_DATA";var v={[m](e,t){e.itemNum+=t},[w](e,t){e.answerid.push(t)},[h](e){e.timer=setInterval(()=>{e.allTime++},1e3)},[f](e){e.itemNum=1,e.allTime=0,e.answerid=[]}},b={addNum({commit:e,state:t},n){e("REMBER_ANSWER",n),t.itemNum<t.itemDetail.length&&e("ADD_ITEMNUM",1)},initializeData({commit:e}){e("INITIALIZE_DATA")}};i["a"].use(l["a"]);const g={level:"第一周",itemNum:1,allTime:0,timer:"",itemDetail:[{topic_id:20,active_topic_id:4,type:"ONE",topic_name:"题目一",description:"There is ________ bank across from the hospital.",active_id:1,active_title:"冲刺中考标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:1,topic_id:20,answer_name:"an",is_standard_answer:0},{topic_answer_id:2,topic_id:20,answer_name:"a",is_standard_answer:0},{topic_answer_id:3,topic_id:20,answer_name:"the",is_standard_answer:0},{topic_answer_id:4,topic_id:20,answer_name:"/",is_standard_answer:1}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目二",description:"We must clean up ________ classroom before going home.",active_id:1,active_title:"冲刺中考标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:5,topic_id:21,answer_name:"we",is_standard_answer:1},{topic_answer_id:6,topic_id:21,answer_name:"us",is_standard_answer:0},{topic_answer_id:7,topic_id:21,answer_name:"our",is_standard_answer:0},{topic_answer_id:8,topic_id:21,answer_name:"ours",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目三",description:"This year, the family went camping on ________ Day, June 1st.",active_id:1,active_title:"冲刺中考标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:9,topic_id:21,answer_name:"Child",is_standard_answer:1},{topic_answer_id:10,topic_id:21,answer_name:"Child’s",is_standard_answer:0},{topic_answer_id:11,topic_id:21,answer_name:"Children",is_standard_answer:0},{topic_answer_id:12,topic_id:21,answer_name:"Children’s",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目四",description:"They have been friends ________ they first met.",active_id:1,active_title:"冲刺中考标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:13,topic_id:21,answer_name:"since",is_standard_answer:1},{topic_answer_id:14,topic_id:21,answer_name:"while",is_standard_answer:0},{topic_answer_id:15,topic_id:21,answer_name:"before",is_standard_answer:0},{topic_answer_id:16,topic_id:21,answer_name:"after",is_standard_answer:0}]},{topic_id:21,active_topic_id:4,type:"MORE",topic_name:"题目五",description:"Mr. Brown told his son not ________ the paintings in the museum.",active_id:1,active_title:"冲刺中考标题",active_topic_phase:"第一周",active_start_time:"1479139200",active_end_time:"1482163200",topic_answer:[{topic_answer_id:17,topic_id:21,answer_name:"touch",is_standard_answer:1},{topic_answer_id:18,topic_id:21,answer_name:"to touch",is_standard_answer:0},{topic_answer_id:19,topic_id:21,answer_name:"touching",is_standard_answer:0},{topic_answer_id:20,topic_id:21,answer_name:"touched",is_standard_answer:0}]}],answerid:[]};var y=new l["a"].Store({state:g,actions:b,mutations:v});n("add7"),n("a034");i["a"].use(a["a"]);const E=new a["a"]({routes:u});new i["a"]({router:E,store:y,render:e=>e(p)}).$mount("#app")},a034:function(e,t){(function(e,t){var n=e.documentElement,i="orientationchange"in window?"orientationchange":"resize",a=function(){var e=n.clientWidth;e&&(n.style.fontSize=e/320*20+"px")};e.addEventListener&&(t.addEventListener(i,a,!1),e.addEventListener("DOMContentLoaded",a,!1))})(document,window)},add7:function(e,t,n){}});
//# sourceMappingURL=app.2e58434e.js.map