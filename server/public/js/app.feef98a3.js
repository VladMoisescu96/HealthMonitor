(function(e){function t(t){for(var n,i,o=t[0],u=t[1],c=t[2],p=0,m=[];p<o.length;p++)i=o[p],a[i]&&m.push(a[i][0]),a[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);l&&l(t);while(m.length)m.shift()();return s.push.apply(s,c||[]),r()}function r(){for(var e,t=0;t<s.length;t++){for(var r=s[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==a[u]&&(n=!1)}n&&(s.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=u;s.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("64a9"),a=r.n(n);a.a},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:r("cf05")}}),n("AuthComponent")],1)},s=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",[e._v("Login")]),r("div",{staticClass:"container"},[r("h1",[e._v("User text")]),r("p",{staticClass:"text"},[e._v(e._s(e.users)+" ")])]),r("form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"username"}},[e._v("Username")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&!e.username},attrs:{type:"text",name:"username"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted&&!e.username,expression:"submitted && !username"}],staticClass:"invalid-feedback"},[e._v("Username is required")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{htmlFor:"email"}},[e._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&!e.username},attrs:{type:"text",name:"email"},domProps:{value:e.email},on:{input:function(t){t.target.composing||(e.email=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted&&!e.email,expression:"submitted && !email"}],staticClass:"invalid-feedback"},[e._v("Email is required")])]),r("div",{staticClass:"form-group"},[r("label",{attrs:{htmlFor:"password"}},[e._v("Password")]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],staticClass:"form-control",class:{"is-invalid":e.submitted&&!e.password},attrs:{type:"password",name:"password"},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.submitted&&!e.password,expression:"submitted && !password"}],staticClass:"invalid-feedback"},[e._v("Password is required")])]),r("div",{staticClass:"form-group"},[r("button",{staticClass:"btn btn-primary",on:{click:e.createUser}},[e._v("Register")])])])])},o=[],u=(r("96cf"),r("3b8d")),c=r("d225"),l=r("b0b4"),p=r("bc3a"),m=r.n(p),d="api/auth",f=function(){function e(){Object(c["a"])(this,e)}return Object(l["a"])(e,null,[{key:"getUsers",value:function(){return new Promise(function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(t,r){var n,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get(d);case 3:n=e.sent,a=n.data,t(a),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),r(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(t,r){return e.apply(this,arguments)}}())}},{key:"insertUser",value:function(e,t,r){return m.a.post(d,{username:e,email:t,password:r})}}]),e}(),v=f,b={data:function(){return{username:"",email:"",password:"",submitted:!1,users:String}},created:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.getUsers();case 3:this.users=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.err=e.t0.message;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}(),computed:{},methods:{createUser:function(){var e=Object(u["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.insertUser(this.username,this.email,this.password);case 2:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}()}},h=b,w=r("2877"),g=Object(w["a"])(h,i,o,!1,null,"364e5a4a",null),x=g.exports,y={name:"app",components:{AuthComponent:x}},_=y,O=(r("034f"),Object(w["a"])(_,a,s,!1,null,null,null)),j=O.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(j)}}).$mount("#app")},"64a9":function(e,t,r){},cf05:function(e,t,r){e.exports=r.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.feef98a3.js.map