webpackJsonp([12],{FqJo:function(t,e){},JSbA:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};n.d(a,"post",function(){return ht}),n.d(a,"like",function(){return pt}),n.d(a,"comment",function(){return gt});var r={};n.d(r,"computedArticles",function(){return bt}),n.d(r,"getArticlesByUid",function(){return wt}),n.d(r,"getArticlesByFilter",function(){return kt});var s=n("Gu7T"),i=n.n(s),o=n("7+uW"),l=n("Dd8w"),c=n.n(l),u=n("NYxO"),d={name:"TheEntry",computed:c()({},Object(u.b)(["auth","user"])),methods:{logout:function(){var t=this;this.$swal({text:"你确定要退出吗?",confirmButtonText:"退出"}).then(function(e){e.value&&t.$store.dispatch("logout")})}}},v={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[n("i",{staticClass:"fa fa-plus text-md"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/articles/create"}},[n("i",{staticClass:"fa fa-paint-brush text-md"}),t._v("\n            创作文章\n          ")])],1)])]),t._v(" "),n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t._v(" "),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),t._v(" "),n("span",{staticClass:"caret"})]),t._v(" "),n("ul",{staticClass:"dropdown-menu"},[t.user?n("li",[n("router-link",{attrs:{to:"/"+t.user.name}},[n("i",{staticClass:"fa fa-list-ul text-md i-middle"}),t._v("\n            个人专栏\n          ")])],1):t._e(),t._v(" "),n("li",[n("router-link",{attrs:{to:"/users/1/edit"}},[n("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v("\n            编辑资料\n          ")])],1),t._v(" "),n("li",[n("a",{attrs:{href:"javascript:;"},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):n("div",{staticClass:"nav navbar-nav github-login"},[n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 登 录\n    ")]),t._v(" "),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user-plus"}),t._v(" 注 册\n    ")])],1)])},staticRenderFns:[]};var f={name:"TheHeader",components:{TheEntry:n("VU/8")(d,v,!1,function(t){n("cNsw")},"data-v-5a07494a",null).exports},data:function(){return{logo:{src:this.uploadsUrl+"logo.png",title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="http://www.coderedu.com/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},m={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"}),t._v(" "),n("span",{staticClass:"icon-bar"})]),t._v(" "),n("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),t._v(" "),n("img",{attrs:{src:t.logo.src,alt:t.logo.title}})])]),t._v(" "),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){t.changeNavIndex(a)}}},[t._v(t._s(e))])])}),0),t._v(" "),n("div",{staticClass:"navbar-right"},[n("TheEntry")],1)])])])},staticRenderFns:[]};function h(t,e){var n=function(){var t=document.querySelector(".title-popover");if(!t){var e=document.createRange().createContextualFragment('\n      <div class="popover title-popover top fade in" style="position:fixed;">\n        <div class="arrow"></div>\n        <div class="popover-content"></div>\n      </div>\n    ');document.body.appendChild(e),t=document.querySelector(".title-popover")}return t}(),a=n.style;if(void 0===e)a.display="none";else{var r=t.getBoundingClientRect(),s=window.getComputedStyle(t,null),i=parseInt(s.getPropertyValue("padding-right"))||0,o=parseInt(s.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",n.querySelector(".popover-content").textContent=e,a.left=r.left-n.offsetWidth/2+(t.offsetWidth-i)/2+"px",a.top=r.top-n.offsetHeight+o+"px",a.display="block",a.visibility="visible"}}var p={bind:function(t,e,n){var a=["mouseenter","mouseleave","click"],r=function(n){"mouseenter"===n.type?h(t,e.value):h()};a.forEach(function(e){t.addEventListener(e,r,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,r,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}},g={name:"TheFooter",directives:{title:p},data:function(){return{description:"码鱼（CoderEdu）社区，交流问题，共同学习，分享知识，传递正能量。有些原本不该丢的东西丢在了大海里，我们像鱼儿一样在大海中寻找",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:1348647935@qq.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com/"},{icon:"weixin",title:"加我微信",link:"https://weixin.com"}],contactStyle:{paddingRight:"8px"},designer:'\n        <span style="font-size:0.9em">技术支持\n          \n          <a href=""target="_blank"style="color:inherit">xingxing</a>\n        </span>\n      ',sponsor:{title:"赞助商",list:[{logo:"http://www.coderedu.com/images/mengdou.png",title:"梦豆网",link:""},{logo:"http://www.coderedu.com/images/xinmeiquan.png",title:"新媒圈",link:""}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"22889"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其他信息",list:[{icon:"thumbs-up",title:"学习知识",link:""},{icon:"globe",title:"推荐网站",link:""}]}}}},y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),t._v(" "),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])}),0),t._v(" "),n("br"),t._v(" "),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),t._v(" "),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}),0)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",[t._v(t._s(e.title)+": "+t._s(e.description))])}),0)]),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),t._v(" "),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",[n("a",{attrs:{href:e.link,title:e.title,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}),0)])])])])])])},staticRenderFns:[]};var j={name:"App",components:{TheHeader:n("VU/8")(f,m,!1,function(t){n("pBVr")},"data-v-28639d7a",null).exports,TheFooter:n("VU/8")(g,y,!1,function(t){n("UH48")},"data-v-51b4921a",null).exports}},b={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"wrap"}},[e("TheHeader"),this._v(" "),e("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[e("router-view")],1),this._v(" "),e("TheFooter")],1)},staticRenderFns:[]};var w=n("VU/8")(j,b,!1,function(t){n("JSbA")},null,null).exports,k=n("/ocq"),_=[{path:"/auth/register",name:"Register",component:function(){return n.e(3).then(n.bind(null,"0jH9"))}},{path:"/",name:"Home",alias:"/topics",component:function(){return n.e(2).then(n.bind(null,"j7e0"))}},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:function(){return n.e(6).then(n.bind(null,"3Jfp"))}},{path:"/users/1/edit",component:function(){return n.e(5).then(n.bind(null,"56Zq"))},children:[{path:"",name:"EditProfile",component:function(){return n.e(9).then(n.bind(null,"Plmk"))},meta:{auth:!0}},{path:"/users/1/edit_avatar",name:"EditAvatar",component:function(){return n.e(10).then(n.bind(null,"o8vE"))},meta:{auth:!0}},{path:"/users/1/edit_password",name:"EditPassword",component:function(){return n.e(4).then(n.bind(null,"6m7U"))},meta:{auth:!0}}]},{path:"/articles/create",name:"Create",component:function(){return n.e(0).then(n.bind(null,"wPjO"))},meta:{auth:!0}},{path:"/articles/:articleId/edit",name:"Edit",component:function(){return n.e(0).then(n.bind(null,"wPjO"))},meta:{auth:!0}},{path:"/:user",component:function(){return n.e(7).then(n.bind(null,"4jfe"))},children:[{path:"",name:"Column",component:function(){return n.e(8).then(n.bind(null,"zln+"))}},{path:"/articles/:articleId/content",name:"Content",component:function(){return n.e(1).then(n.bind(null,"nYJE"))}}]}];o.a.use(k.a);var C=new k.a({mode:"history",linkExactActiveClass:"active",scrollBehavior:function(t,e,n){return t.hash?{selector:t.hash}:n||{x:0,y:0}},routes:_});C.beforeEach(function(t,e,n){var a=C.app,r=a.$options.store,s=r.state.auth,i=t.params.articleId,o=r.state.user&&r.state.user.name,l=t.params.user;a.$message.hide(),s&&-1!==t.path.indexOf("/auth/")||!s&&t.meta.auth||i&&!r.getters.getArticleById(i)||l&&l!==o&&!r.getters.getArticlesByUid(null,l).length?n("/"):n()}),C.afterEach(function(t,e){var n=C.app,a=(n.$options.store,t.params.showMsg);a&&("string"==typeof a?n.$message.show(a):n.$message.show("操作成功"))});var x=C,I=n("W3Iv"),A=n.n(I),E=n("BO1k"),P=n.n(E),U=n("d7EF"),S=n.n(U),T=n("pFYg"),N=n.n(T);function z(t,e,n){n=n&&"object"===(void 0===n?"undefined":N()(n))?n:{};var a="string"==typeof t.value?t.value.trim():"",r=n,s=r.title,i=void 0===s?"该项":s,o=r.error,l="";if(e.required&&""===a)l=i+"不能为空";else if(n.target){var c=document.querySelector(n.target);(c?c.value:null)!==a&&(l="输入的"+i+"不匹配")}else if(n.regex)try{n.regex.test(a)||(l=i+"格式不正确")}catch(t){}l?F(t,void 0===o?l:o):F(t)}function F(t,e){var n=t.parentElement,a=function(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var a=document.createRange().createContextualFragment('<span class="help-block"></span>');e.appendChild(a),n=e.querySelector(".help-block")}return n}(t);void 0===e?(a.style.display="none",n.classList.remove("has-error")):(a.textContent=e,a.style.display="block",n.classList.add("has-error"))}var L={validator:{bind:function(t,e,n){var a=e.value,r=e.arg,s=e.modifiers,i=-1!==["change","blur","input"].indexOf(r)?r:"change",o=function(){F(t)},l=function(){z(t,s,a)};t.addEventListener("input",o,!1),t.addEventListener(i,l,!1),t.destroy=function(){t.removeEventListener("input",o,!1),t.removeEventListener(i,l,!1),t.destroy=null}},inserted:function(t,e,n){var a=e.value,r=e.modifiers,s=t.closest("[data-validator-form]"),i=s?s.querySelector("[type=submit]"):null;if(i){var o=function(){z(t,r,a),s.querySelectorAll(".has-error").length?i.canSubmit=!1:i.canSubmit=!0};i.addEventListener("click",o,!1),t.destroySubmitBtn=function(){i.removeEventListener("click",o,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},dropdown:{bind:function(t,e,n){var a=function(){t.parentElement.classList.toggle("open")},r=function(e){var n=e.target;n.isSameNode(t)||t.contains(n)||t.parentElement.classList.remove("open")};t.addEventListener("click",a,!1),document.addEventListener("click",r,!1),t.destroy=function(){t.removeEventListener("click",a,!1),document.removeEventListener("click",r,!1),t.destroy=null}},unbind:function(t){t.destroy()}},title:p},O=!0,q=!1,R=void 0;try{for(var B,H=P()(A()(L));!(O=(B=H.next()).done);O=!0){var D=B.value,V=S()(D,2),M=V[0],$=V[1];o.a.directive(M,$)}}catch(t){q=!0,R=t}finally{try{!O&&H.return&&H.return()}finally{if(q)throw R}}var J={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},X={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],class:"alert alert-"+this.type+" alert-dismissible"},[e("button",{staticClass:"close",attrs:{type:"button"},on:{click:this.close}},[e("span",[this._v("×")])]),this._v("\n  "+this._s(this.msg)+"\n")])},staticRenderFns:[]};var W=n("VU/8")(J,X,!1,function(t){n("XgwV")},"data-v-493a10ad",null).exports,G={name:"Modal",props:{show:{type:Boolean,default:!1}},methods:{close:function(){this.$emit("update:show",!1)}},watch:{show:function(t){var e=document.body.classList;t?e.add("modal-open"):e.remove("modal-open")}}},K={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("transition",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated fadeOutUp"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal",staticStyle:{display:"block"},on:{click:function(e){return e.target!==e.currentTarget?null:t.close(e)}}},[n("div",{staticClass:"modal-dialog"},[n("div",{staticClass:"modal-content"},[n("div",{staticClass:"modal-header"},[n("button",{staticClass:"close",on:{click:t.close}},[t._v("×")]),t._v(" "),n("h4",{staticClass:"modal-title"},[t._t("title")],2)]),t._v(" "),n("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"modal-footer"},[t._t("footer")],2)])])])]),t._v(" "),n("transition",{attrs:{name:"fade"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"modal-backdrop fade in",on:{click:t.close}})])],1)},staticRenderFns:[]};var Q=n("VU/8")(G,K,!1,function(t){n("U0PO")},"data-v-253465b8",null).exports,Y={name:"Pagination",props:{currentPage:{type:Number,default:1},total:{type:Number,required:!0},pageSize:{type:Number,default:10,validator:function(t){return t>0}},onPageChange:{type:Function,default:function(){}}},data:function(){return{internalCurrentPage:1}},computed:{totalPage:function(){return Math.ceil(this.total/this.pageSize)}},watch:{currentPage:{immediate:!0,handler:function(t){this.internalCurrentPage=t}}},methods:{changePage:function(t){t===this.internalCurrentPage||t<1||t>this.totalPage||this.onPageChange(t)}}},Z={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.totalPage>1?n("ul",{staticClass:"pagination"},[n("li",{class:{disabled:1===t.internalCurrentPage}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.changePage(t.internalCurrentPage-1)}}},[t._v("«")])]),t._v(" "),t._l(t.totalPage,function(e){return n("li",{class:{active:t.internalCurrentPage===e}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(n){t.changePage(e)}}},[t._v(t._s(e))])])}),t._v(" "),n("li",{class:{disabled:t.internalCurrentPage===t.totalPage}},[n("a",{attrs:{href:"javascript:;"},on:{click:function(e){t.changePage(t.internalCurrentPage+1)}}},[t._v("»")])])],2):t._e()},staticRenderFns:[]};var tt=n("VU/8")(Y,Z,!1,function(t){n("xmEA")},"data-v-158eb694",null).exports,et={name:"Slider",props:{slides:{type:Object,default:function(){return{}}},autoplay:{type:Boolean,default:!0},delay:{type:Number,default:3e3}},data:function(){return{currentIndex:0,show:!0}},computed:{currentSlide:function(){return this.slides[this.currentIndex]},nextIndex:function(){return this.currentIndex===this.slides.length-1?0:this.currentIndex+1}},mounted:function(){this.autoplay&&this.play()},methods:{play:function(){var t=this;this.autoplay&&(this.interval=setInterval(function(){t.playTo(t.nextIndex)},this.delay))},stop:function(){this.interval&&clearInterval(this.interval)},playTo:function(t){var e=this;this.currentIndex!==t&&(this.show=!1,setTimeout(function(){e.currentIndex=t,e.show=!0},0))}}},nt={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.slides.length?n("div",{staticClass:"carousel slide",on:{mouseover:t.stop,mouseout:t.play}},[n("div",{staticClass:"carousel-inner"},[n("transition",{attrs:{"enter-active-class":"animated slideInRight","leave-active-class":"animated slideOutLeft"}},[t.show?n("div",{key:"current"},[t._t("default",null,{currentSlide:t.currentSlide})],2):n("div",{key:"next",staticClass:"item next"},[t._t("default",null,{currentSlide:t.currentSlide})],2)])],1),t._v(" "),n("div",{staticClass:"carousel-indicators"},t._l(t.slides.length,function(e){return n("li",{class:{active:e-1===t.currentIndex},on:{click:function(n){t.playTo(e-1)}}})}),0)]):t._e()},staticRenderFns:[]};var at=n("VU/8")(et,nt,!1,function(t){n("FqJo")},"data-v-5a884137",null).exports,rt={Message:W,Modal:Q,Pagination:tt,Slider:at},st=!0,it=!1,ot=void 0;try{for(var lt,ct=P()(A()(rt));!(st=(lt=ct.next()).done);st=!0){var ut=lt.value,dt=S()(ut,2),vt=dt[0],ft=dt[1];o.a.component(vt,ft)}}catch(t){it=!0,ot=t}finally{try{!st&&ct.return&&ct.return()}finally{if(it)throw ot}}var mt=n("ssT3"),ht=function(t,e){var n=t.commit,a=t.state,r=e.article,s=e.articleId,i=a.articles;if(Array.isArray(i)||(i=[]),r){var o=r.title,l=r.content,c=new Date;if(void 0===s){var u=i[i.length-1];s=u?parseInt(u.articleId)+1:i.length+1,i.push({uid:1,articleId:s,title:o,content:l,date:c})}var d=!0,v=!1,f=void 0;try{for(var m,h=P()(i);!(d=(m=h.next()).done);d=!0){var p=m.value;if(parseInt(p.articleId)===parseInt(s)){p.title=o,p.content=l;break}}}catch(t){v=!0,f=t}finally{try{!d&&h.return&&h.return()}finally{if(v)throw f}}n("UPDATE_ARTICLES",i),x.push({name:"Content",params:{articleId:s,showMsg:!0}})}else{var g=!0,y=!1,j=void 0;try{for(var b,w=P()(i);!(g=(b=w.next()).done);g=!0){var k=b.value;if(parseInt(k.articleId)===parseInt(s)){i.splice(i.indexOf(k),1);break}}}catch(t){y=!0,j=t}finally{try{!g&&w.return&&w.return()}finally{if(y)throw j}}n("UPDATE_ARTICLES",i),x.push({name:"Home",params:{showMsg:!0}})}},pt=function(t,e){var n=t.commit,a=t.state,r=e.articleId,s=e.isAdd,i=a.articles,o=[];Array.isArray(i)||(i=[]);var l=!0,c=!1,u=void 0;try{for(var d,v=P()(i);!(l=(d=v.next()).done);l=!0){var f=d.value;if(parseInt(f.articleId)===parseInt(r)){if(o=Array.isArray(f.likeUsers)?f.likeUsers:o,s){o.some(function(t){return 1===parseInt(t.uid)})||o.push({uid:1})}else{var m=!0,h=!1,p=void 0;try{for(var g,y=P()(o);!(m=(g=y.next()).done);m=!0){var j=g.value;if(1===parseInt(j.uid)){o.splice(o.indexOf(j),1);break}}}catch(t){h=!0,p=t}finally{try{!m&&y.return&&y.return()}finally{if(h)throw p}}}f.likeUsers=o;break}}}catch(t){c=!0,u=t}finally{try{!l&&v.return&&v.return()}finally{if(c)throw u}}return n("UPDATE_ARTICLES",i),o},gt=function(t,e){var n=t.commit,a=t.state,r=e.articleId,s=e.comment,i=e.commentId,o=a.articles,l=[];Array.isArray(o)||(o=[]);var c=!0,u=!1,d=void 0;try{for(var v,f=P()(o);!(c=(v=f.next()).done);c=!0){var m=v.value;if(parseInt(m.articleId)===parseInt(r)){if(l=Array.isArray(m.comments)?m.comments:l,s){var h=s.uid,p=void 0===h?1:h,g=s.content,y=new Date;if(void 0===i){var j=l[l.length-1];i=j?parseInt(j.commentId)+1:l.length+1,l.push({uid:p,commentId:i,content:g,date:y})}else{var b=!0,w=!1,k=void 0;try{for(var _,C=P()(l);!(b=(_=C.next()).done);b=!0){var x=_.value;if(parseInt(x.commentId)===parseInt(i)){x.content=g;break}}}catch(t){w=!0,k=t}finally{try{!b&&C.return&&C.return()}finally{if(w)throw k}}}}else{var I=!0,A=!1,E=void 0;try{for(var U,S=P()(l);!(I=(U=S.next()).done);I=!0){var T=U.value;if(parseInt(T.commentId)===parseInt(i)){l.splice(l.indexOf(T),1);break}}}catch(t){A=!0,E=t}finally{try{!I&&S.return&&S.return()}finally{if(A)throw E}}}m.comments=l;break}}}catch(t){u=!0,d=t}finally{try{!c&&f.return&&f.return()}finally{if(u)throw d}}return n("UPDATE_ARTICLES",o),l},yt=n("mvHQ"),jt=n.n(yt),bt=function(t){var e=t.articles,n=[],a=function(e){var n=t.user&&t.user.name,a=t.user&&t.user.avatar;e?(this.uname=n,this.uavatar=a):this.uavatar="https://api.adorable.io/avatars/200/"+this.uname};return Array.isArray(e)&&(n=JSON.parse(jt()(e))).forEach(function(t){var e=t.comments,n=t.likeUsers;1===t.uid?a.call(t,!0):a.call(t),Array.isArray(e)&&e.forEach(function(t){1===t.uid?a.call(t,!0):a.call(t)}),Array.isArray(n)&&n.forEach(function(t){1===t.uid?a.call(t,!0):a.call(t)})}),n},wt=function(t,e){return function(t,n){var a=e.computedArticles;if(Array.isArray(a)){if(n){var r=!0,s=!1,i=void 0;try{for(var o,l=P()(a);!(r=(o=l.next()).done);r=!0){var c=o.value;if(c.uname===n){t=c.uid;break}}}catch(t){s=!0,i=t}finally{try{!r&&l.return&&l.return()}finally{if(s)throw i}}}a=a.filter(function(e){return parseInt(t)===parseInt(e.uid)})}else a=[];return a}},kt=function(t,e){return function(t){var n=e.computedArticles,a=[];if(Array.isArray(n))switch(a=n.map(function(t){return c()({},t)}),t){case"excellent":a=e.getArticlesByUid(1);break;case"vote":a.sort(function(t,e){var n=Array.isArray(t.likeUsers)?t.likeUsers:[];return(Array.isArray(e.likeUsers)?e.likeUsers:[]).length-n.length});break;case"recent":a.reverse();break;case"noreply":a.sort(function(t,e){var n=Array.isArray(t.comments)?t.comments:[],a=Array.isArray(e.comments)?e.comments:[];return n.length-a.length});break;default:a.sort(function(t,e){var n=Array.isArray(t.comments)?t.comments:[],a=Array.isArray(e.comments)?e.comments:[],r=n.length,s=a.length;return r>0?s>0?new Date(a[s-1].date)-new Date(n[r-1].date):-1:1})}return a}};o.a.use(u.a);var _t={user:mt.a.getItem("user"),auth:mt.a.getItem("auth"),articles:mt.a.getItem("articles")},Ct={UPDATE_USER:function(t,e){t.user=e,mt.a.setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,mt.a.setItem("auth",e)},UPDATE_ARTICLES:function(t,e){t.articles=e,mt.a.setItem("articles",e)}},xt=c()({login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),x.push("/")},logout:function(t){(0,t.commit)("UPDATE_AUTH",!1),x.push({name:"Home",params:{logout:!0}})},updateUser:function(t,e){var n=t.state,a=t.commit,r=n.user;r&&"object"===(void 0===r?"undefined":N()(r))&&(e=c()({},r,e)),a("UPDATE_USER",e)}},a),It=c()({getArticleById:function(t,e){return function(t){var n=e.computedArticles;return Array.isArray(n)&&(n=n.filter(function(e){return parseInt(t)===parseInt(e.articleId)})).length?n[0]:null}}},r),At=new u.a.Store({state:_t,getters:It,mutations:Ct,actions:xt}),Et=n("e7x4"),Pt=n.n(Et),Ut={install:function(t){Pt.a.setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=Pt.a,t.prototype.$swal=Pt.a}},St={install:function(t){var e=new(t.extend(W)),n=e.$mount().$el;t.nextTick(function(){document.querySelector("#main-container").prepend(n)}),e.$on("update:show",function(t){e.show=t});var a={show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"success";e.msg=n,e.type=a,e.show=!1,t.nextTick(function(){e.show=!0})},hide:function(){t.nextTick(function(){e.show=!1})}};t.prototype.$message=a}},Tt=n("PJh5"),Nt=n.n(Tt);Nt.a.locale("zh-cn");o.a.filter("moment",function(t){var e=t;if(Nt()(e).isValid()){for(var n=arguments.length,a=Array(n>1?n-1:0),r=1;r<n;r++)a[r-1]=arguments[r];var s=a.shift();if("string"==typeof s)switch(s){case"from":t=Nt()(e).from();var i=a.shift();i&&"object"===(void 0===i?"undefined":N()(i))&&(t=Nt()(e).startOf(i.startOf).from());break;default:t=Nt()(e).format(s)}}return t});var zt=n("lHA8"),Ft=n.n(zt),Lt=n("zNUS"),Ot=n.n(Lt),qt=Ot.a.Random,Rt=mt.a.getItem("articles"),Bt=mt.a.getItem("user"),Ht=Bt?Bt.name:void 0,Dt=1;Array.isArray(Rt)&&Rt.length&&(Dt=parseInt(Rt[Rt.length-1].articleId)+1);function Vt(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,n=Math.floor(Math.random()*e+1),a=[].concat(i()(Array(n))).map(function(){return t[Math.floor(Math.random()*t.length)]});return[].concat(i()(new Ft.a(a)))}Ot.a.mock("/users/active","get",function(){var t,e=[],n=[];At.getters.computedArticles.map(function(t){var n=Array.isArray(t.comments)?t.comments:[];e=[].concat(i()(e),i()(n))}),t=e.reduce(function(t,e){return t[e.uname]=t[e.uname]||{},t[e.uname].avatar=e.uavatar,t[e.uname].num=++t[e.uname].num||1,t},{});var a=!0,r=!1,s=void 0;try{for(var o,l=P()(A()(t));!(a=(o=l.next()).done);a=!0){var c=o.value,u=S()(c,2),d=u[0],v=u[1];n.push({name:d,avatar:v.avatar,num:v.num})}}catch(t){r=!0,s=t}finally{try{!a&&l.return&&l.return()}finally{if(r)throw s}}return n.sort(function(t,e){return e.num-t.num}),n=n.slice(0,8)}),Ot.a.mock("/articles/hot","post",function(t){var e=At.getters.getArticlesByFilter("noreply").reverse().filter(function(t){return new Date-new Date(t.date)<6048e5}),n=void 0;if(t.body)try{n=JSON.parse(t.body).num}catch(t){}return e=e.slice(0,n||10)});var Mt=n("mtWM"),$t=n.n(Mt);o.a.prototype.$axios=$t.a,o.a.use(Ut),o.a.use(St),o.a.config.productionTip=!1;var Jt;Jt=mt.a.getItem("articles"),Jt=Array.isArray(Jt)?Jt.filter(function(t){return 1===parseInt(t.uid)}):[],At.commit("UPDATE_ARTICLES",[].concat(i()(Jt),i()(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=[Ht,"topics"],n=[],a=[];return t=t>60?60:t,[].concat(i()(Array(t))).forEach(function(t,r){for(var s=qt.first();-1!==a.indexOf(s)||-1!==e.indexOf(s);)s=qt.first();a.push(s),n.push({uid:r+2,articleId:Dt+r,title:qt.ctitle(10,20),content:qt.cparagraph(3,5),date:new Date,likeUsers:[],comments:[],uname:s})}),n.forEach(function(t,e){var a=[],r=[],s=Vt(n);s.forEach(function(t,e){a.push({uid:t.uid,uname:t.uname})}),(s=Vt(n)).forEach(function(t,e){r.push({uid:t.uid,commentId:e+1,content:qt.csentence(5,10),date:t.date,uname:t.uname})}),t.likeUsers=a,t.comments=r}),n}(60))));new o.a({el:"#app",router:x,store:At,components:{App:w},template:"<App/>"})},U0PO:function(t,e){},UH48:function(t,e){},XgwV:function(t,e){},cNsw:function(t,e){},pBVr:function(t,e){},ssT3:function(t,e,n){"use strict";var a=n("mvHQ"),r=n.n(a),s=localStorage;e.a={setItem:function(t,e){s.setItem(t,r()(e))},getItem:function(t){try{return JSON.parse(s.getItem(t))}catch(t){return null}},removeItem:function(t){s.removeItem(t)}}},uslO:function(t,e,n){var a={"./af":"3CJN","./af.js":"3CJN","./ar":"3MVc","./ar-dz":"tkWw","./ar-dz.js":"tkWw","./ar-kw":"j8cJ","./ar-kw.js":"j8cJ","./ar-ly":"wPpW","./ar-ly.js":"wPpW","./ar-ma":"dURR","./ar-ma.js":"dURR","./ar-sa":"7OnE","./ar-sa.js":"7OnE","./ar-tn":"BEem","./ar-tn.js":"BEem","./ar.js":"3MVc","./az":"eHwN","./az.js":"eHwN","./be":"3hfc","./be.js":"3hfc","./bg":"lOED","./bg.js":"lOED","./bm":"hng5","./bm.js":"hng5","./bn":"aM0x","./bn.js":"aM0x","./bo":"w2Hs","./bo.js":"w2Hs","./br":"OSsP","./br.js":"OSsP","./bs":"aqvp","./bs.js":"aqvp","./ca":"wIgY","./ca.js":"wIgY","./cs":"ssxj","./cs.js":"ssxj","./cv":"N3vo","./cv.js":"N3vo","./cy":"ZFGz","./cy.js":"ZFGz","./da":"YBA/","./da.js":"YBA/","./de":"DOkx","./de-at":"8v14","./de-at.js":"8v14","./de-ch":"Frex","./de-ch.js":"Frex","./de.js":"DOkx","./dv":"rIuo","./dv.js":"rIuo","./el":"CFqe","./el.js":"CFqe","./en-au":"Sjoy","./en-au.js":"Sjoy","./en-ca":"Tqun","./en-ca.js":"Tqun","./en-gb":"hPuz","./en-gb.js":"hPuz","./en-ie":"ALEw","./en-ie.js":"ALEw","./en-il":"QZk1","./en-il.js":"QZk1","./en-nz":"dyB6","./en-nz.js":"dyB6","./eo":"Nd3h","./eo.js":"Nd3h","./es":"LT9G","./es-do":"7MHZ","./es-do.js":"7MHZ","./es-us":"INcR","./es-us.js":"INcR","./es.js":"LT9G","./et":"XlWM","./et.js":"XlWM","./eu":"sqLM","./eu.js":"sqLM","./fa":"2pmY","./fa.js":"2pmY","./fi":"nS2h","./fi.js":"nS2h","./fo":"OVPi","./fo.js":"OVPi","./fr":"tzHd","./fr-ca":"bXQP","./fr-ca.js":"bXQP","./fr-ch":"VK9h","./fr-ch.js":"VK9h","./fr.js":"tzHd","./fy":"g7KF","./fy.js":"g7KF","./gd":"nLOz","./gd.js":"nLOz","./gl":"FuaP","./gl.js":"FuaP","./gom-latn":"+27R","./gom-latn.js":"+27R","./gu":"rtsW","./gu.js":"rtsW","./he":"Nzt2","./he.js":"Nzt2","./hi":"ETHv","./hi.js":"ETHv","./hr":"V4qH","./hr.js":"V4qH","./hu":"xne+","./hu.js":"xne+","./hy-am":"GrS7","./hy-am.js":"GrS7","./id":"yRTJ","./id.js":"yRTJ","./is":"upln","./is.js":"upln","./it":"FKXc","./it.js":"FKXc","./ja":"ORgI","./ja.js":"ORgI","./jv":"JwiF","./jv.js":"JwiF","./ka":"RnJI","./ka.js":"RnJI","./kk":"j+vx","./kk.js":"j+vx","./km":"5j66","./km.js":"5j66","./kn":"gEQe","./kn.js":"gEQe","./ko":"eBB/","./ko.js":"eBB/","./ku":"kI9l","./ku.js":"kI9l","./ky":"6cf8","./ky.js":"6cf8","./lb":"z3hR","./lb.js":"z3hR","./lo":"nE8X","./lo.js":"nE8X","./lt":"/6P1","./lt.js":"/6P1","./lv":"jxEH","./lv.js":"jxEH","./me":"svD2","./me.js":"svD2","./mi":"gEU3","./mi.js":"gEU3","./mk":"Ab7C","./mk.js":"Ab7C","./ml":"oo1B","./ml.js":"oo1B","./mn":"CqHt","./mn.js":"CqHt","./mr":"5vPg","./mr.js":"5vPg","./ms":"ooba","./ms-my":"G++c","./ms-my.js":"G++c","./ms.js":"ooba","./mt":"oCzW","./mt.js":"oCzW","./my":"F+2e","./my.js":"F+2e","./nb":"FlzV","./nb.js":"FlzV","./ne":"/mhn","./ne.js":"/mhn","./nl":"3K28","./nl-be":"Bp2f","./nl-be.js":"Bp2f","./nl.js":"3K28","./nn":"C7av","./nn.js":"C7av","./pa-in":"pfs9","./pa-in.js":"pfs9","./pl":"7LV+","./pl.js":"7LV+","./pt":"ZoSI","./pt-br":"AoDM","./pt-br.js":"AoDM","./pt.js":"ZoSI","./ro":"wT5f","./ro.js":"wT5f","./ru":"ulq9","./ru.js":"ulq9","./sd":"fW1y","./sd.js":"fW1y","./se":"5Omq","./se.js":"5Omq","./si":"Lgqo","./si.js":"Lgqo","./sk":"OUMt","./sk.js":"OUMt","./sl":"2s1U","./sl.js":"2s1U","./sq":"V0td","./sq.js":"V0td","./sr":"f4W3","./sr-cyrl":"c1x4","./sr-cyrl.js":"c1x4","./sr.js":"f4W3","./ss":"7Q8x","./ss.js":"7Q8x","./sv":"Fpqq","./sv.js":"Fpqq","./sw":"DSXN","./sw.js":"DSXN","./ta":"+7/x","./ta.js":"+7/x","./te":"Nlnz","./te.js":"Nlnz","./tet":"gUgh","./tet.js":"gUgh","./tg":"5SNd","./tg.js":"5SNd","./th":"XzD+","./th.js":"XzD+","./tl-ph":"3LKG","./tl-ph.js":"3LKG","./tlh":"m7yE","./tlh.js":"m7yE","./tr":"k+5o","./tr.js":"k+5o","./tzl":"iNtv","./tzl.js":"iNtv","./tzm":"FRPF","./tzm-latn":"krPU","./tzm-latn.js":"krPU","./tzm.js":"FRPF","./ug-cn":"To0v","./ug-cn.js":"To0v","./uk":"ntHu","./uk.js":"ntHu","./ur":"uSe8","./ur.js":"uSe8","./uz":"XU1s","./uz-latn":"/bsm","./uz-latn.js":"/bsm","./uz.js":"XU1s","./vi":"0X8Q","./vi.js":"0X8Q","./x-pseudo":"e/KL","./x-pseudo.js":"e/KL","./yo":"YXlc","./yo.js":"YXlc","./zh-cn":"Vz2w","./zh-cn.js":"Vz2w","./zh-hk":"ZUyn","./zh-hk.js":"ZUyn","./zh-tw":"BbgG","./zh-tw.js":"BbgG"};function r(t){return n(s(t))}function s(t){var e=a[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}r.keys=function(){return Object.keys(a)},r.resolve=s,t.exports=r,r.id="uslO"},xmEA:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d23ae1a331eb9af16deb.js.map