(this["webpackJsonpproject-demo"]=this["webpackJsonpproject-demo"]||[]).push([[0],{164:function(e,t,c){},189:function(e,t,c){},228:function(e,t,c){},230:function(e,t,c){},241:function(e,t,c){},242:function(e,t,c){},245:function(e,t,c){},275:function(e,t,c){},293:function(e,t,c){},402:function(e,t,c){},405:function(e,t,c){},406:function(e,t,c){},409:function(e,t,c){"use strict";c.r(t);var n=c(2),a=c(0),r=c.n(a),i=c(31),s=c.n(i),l=(c(228),c(61)),o=c.n(l),u=c(75),d=(c(229),c(99)),j=c(66),b=(c(230),c(46)),h=c(34),p=function(){var e=Object(h.c)((function(e){return e.userReducer.user.cart}));return Object(n.jsx)("div",{className:"header",children:Object(n.jsx)("div",{className:"header__content",children:Object(n.jsxs)(d.a,{children:[Object(n.jsx)(j.a,{span:5,offset:1,className:"login",children:Object(n.jsx)(b.b,{to:"#",children:"\u0110\u0103ng Nh\u1eadp"})}),Object(n.jsx)(j.a,{span:12,className:"logo",children:Object(n.jsx)("p",{children:"Logo"})}),Object(n.jsx)(j.a,{span:5,className:"cart",children:Object(n.jsx)(b.b,{to:"/cart",children:Object(n.jsx)("i",{className:"fas fa-shopping-cart",children:Object(n.jsx)("span",{children:e?e.length:"0"})})})})]})})})},O=(c(241),c(164),function e(t){var c=t.dataChildren;return Object(n.jsx)(n.Fragment,{children:c.map((function(t,c){return Object(n.jsxs)("li",{className:"nav-item",children:[Object(n.jsx)(b.c,{activeClassName:"active",exact:"/"===t.path,className:"nav-link",to:t.path,children:t.title}),t.children&&Object(n.jsx)("ul",{className:"list__menu__children animate__fadeInUp",children:Object(n.jsx)(e,{dataChildren:t.children})})]},c)}))})}),m=c(36),f=(c(242),"GETPRODUCT"),x="ADDCART",v="DECREMENTCOUNTPAY",g="DECREMENTCOUNTPAYPROFILE",y="DECREMENTCOUNTPAYBYCART",N="INCREMENTCOUNTPAYBYCART",C="INCREMENTPROJECT",E="DECREMENTPROJECT",_="DELETEITEMCART",P="DELETELISTITEMCART",T="NUMBERINPUT",S="PAYCART",k="KEYWORDSORT",R="ADDCARTBYPROFILE",I="ONCHANGENUMBERINPUTBYCART",w="SETEVALUATE",A="PAYCARTNOUSER",D=function(){var e=Object(h.b)(),t=Object(a.useState)(""),c=Object(m.a)(t,2),r=c[0],i=c[1],s=Object(h.c)((function(e){return e.productReducer}));return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("input",{type:"text",name:"search",placeholder:"t\xean s\u1ea3n ph\u1ea9m ...",onChange:function(e){var t=e.target.value;i(t)},value:r}),Object(n.jsx)(b.b,{to:"/searchProducts",onClick:function(){var t=s.filter((function(e){return-1!==e.name.toLowerCase().indexOf(r)}));e({type:k,payload:t}),i("")},children:Object(n.jsx)("i",{className:"fas fa-search"})})]})},F=c(420),B=function(){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(F.a,{offsetTop:0,children:Object(n.jsx)("div",{className:"list__menu",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-6 col-sm-6 col-xl-10",children:Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light ",children:[Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("i",{className:"fas fa-bars"})}),Object(n.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(n.jsx)("ul",{className:"nav",children:Object(n.jsx)(O,{dataChildren:[{title:"Trang ch\u1ee7",path:"/"},{title:"S\u1ea3n Ph\u1ea9m",path:"/products",children:[{title:"Rau xanh",path:"/vegetable"},{title:"C\u1ee7",path:"/tubers",children:[{title:"Qu\u1ea3 t\u01b0\u01a1i",path:"/"},{title:"Qu\u1ea3 kh\xf4",path:"/"}]},{title:"Qu\u1ea3",path:"/fruit",children:[{title:"Qu\u1ea3 t\u01b0\u01a1i",path:"/"},{title:"Qu\u1ea3 kh\xf4",path:"/"}]},{title:"N\u1ea5m",path:"/mushroom",children:[{title:"Qu\u1ea3 t\u01b0\u01a1i",path:"/"},{title:"Qu\u1ea3 kh\xf4",path:"/"}]}]},{title:"Tin t\u1ee9c",path:"/vegetable"},{title:"Gi\u1edbi thi\u1ec7u",path:"/tubers"},{title:"Li\xean h\u1ec7",path:"/fruit"},{title:"Ch\u1ec9 \u0111\u01b0\u1eddng",path:"/mushroom"}]})})})]})}),Object(n.jsxs)("div",{className:"col-6 col-sm-6 col-xl-2",children:[" ",Object(n.jsx)(D,{})," "]})]})})})})},M=c(412),U=c(37),L=(c(245),c(192)),V=c.n(L),Y=c(193),H=c.n(Y),Q=V.a.create({baseURL:"https://5ff81fd710778b0017042d79.mockapi.io/api",paramsSerializer:function(e){return H.a.stringify(e)}});Q.interceptors.response.use((function(e){return e&&e.data?e.data:e}),(function(e){throw e}));var X=Q,q={getAll:function(){return X.get("/products")},getById:function(e){var t="/products/?id=".concat(e);return X.get(t)},getSlide:function(){return X.get("/slide")}},G=(c(275),function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],r=t[1],i=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,q.getSlide();case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){i()}),[]),Object(n.jsx)("div",{className:"list-slide",children:Object(n.jsxs)("div",{id:"carouselExampleControls",className:"carousel slide","data-ride":"carousel",children:[Object(n.jsx)("div",{className:"carousel-inner",children:c.map((function(e){return Object(n.jsx)("div",{className:"1"===e.id?"carousel-item active":"carousel-item",children:Object(n.jsx)("img",{className:"d-block",src:e.img,alt:"First slide"})},e.id)}))}),Object(n.jsxs)("a",{className:"carousel-control-prev",href:"#carouselExampleControls",role:"button","data-slide":"prev",children:[Object(n.jsx)("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),Object(n.jsx)("span",{className:"sr-only",children:"Previous"})]}),Object(n.jsxs)("a",{className:"carousel-control-next",href:"#carouselExampleControls",role:"button","data-slide":"next",children:[Object(n.jsx)("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),Object(n.jsx)("span",{className:"sr-only",children:"Next"})]})]})})}),J=c(220),z=c(419),K=function(e){return{type:"GETUSERS",payload:e}},Z=function(e){var t=e.item,c=Object(h.b)();return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)(z.a,{className:"item__card",hoverable:!0,cover:Object(n.jsx)("img",{alt:"example",src:t.img}),children:[Object(n.jsx)("p",{children:t.name}),Object(n.jsxs)("h3",{children:[t.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," VND"]}),Object(n.jsx)(b.b,{to:"/products/".concat(t.id),children:Object(n.jsx)("button",{className:"item__card--seeMore",children:"Xem th\xeam"})}),Object(n.jsx)(b.b,{to:"#",children:Object(n.jsx)("button",{className:t.countPay>0?"item__card--buy":"item__card--disabledBuy",disabled:!(t.countPay>0),onClick:function(){c({type:x,payload:t}),c(function(e){return{type:v,payload:e}}(t)),function(e){J.a.open({message:"",description:"B\u1ea1n \u0111\xe3 th\xeam th\xe0nh c\xf4ng m\u1ed9t s\u1ea3n ph\u1ea9m ".concat(e.name," v\xe0o gi\u1ecf h\xe0ng"),icon:Object(n.jsx)("i",{className:"fad fa-alicorn",style:{fontSize:"40px",color:"#fe9705"}})})}(t)},children:"Mua Ngay"})})]})})},$=function(){var e=Object(h.c)((function(e){return e.productReducer}));return Object(n.jsx)("div",{className:"product",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)(G,{})}),e.map((function(e,t){return Object(n.jsx)("div",{className:"col-12 col-sm-6 col-lg-3 item",children:Object(n.jsx)(Z,{item:e})},t)}))]})})},W=function(){return Object(n.jsx)("div",{className:"product",children:Object(n.jsx)("h1",{children:"404 - kh\xf4ng tim th\u1ea5y trang"})})},ee=c(414),te=c(52),ce=c(413),ne=c(415),ae=c(416),re=(c(293),function(){var e=Object(h.b)(),t=ee.a.useForm(),c=Object(m.a)(t,1)[0],r=Object(h.c)((function(e){return e.userReducer.user})),i=Object(h.c)((function(e){return e.productReducer})),s=Object(h.c)((function(e){return e.userReducer.user.cart})),l=Object(a.useState)([]),o=Object(m.a)(l,2),u=o[0],d=o[1],j=Object(a.useState)(!1),b=Object(m.a)(j,2),p=b[0],O=b[1],f=Object(a.useState)(1),x=Object(m.a)(f,2),v=x[0],g=x[1],k=Object(a.useRef)(v),R=Object(a.useState)(!1),w=Object(m.a)(R,2),D=w[0],F=w[1],B=0;s.forEach((function(e){B+=e.price*e.count}));var M=[{title:"S\u1ea3n ph\u1ea9m",dataIndex:"img",render:function(e){return Object(n.jsx)("div",{className:"cart__box-img",children:Object(n.jsx)("img",{src:e,alt:""})})}},{title:"T\xean S\u1ea3n Ph\u1ea9m",dataIndex:"name",render:function(e){return Object(n.jsx)("div",{className:"cart__box-text",children:Object(n.jsx)("p",{children:e})})}},{title:"Gi\xe1 s\u1ea3n ph\u1ea9m",dataIndex:"price",render:function(e){return Object(n.jsx)("div",{className:"cart__box-text",children:Object(n.jsxs)("p",{children:[e," VND"]})})}},{title:"S\u1ed1 l\u01b0\u1ee3ng",dataIndex:"count",render:function(e,t){return Object(n.jsxs)("div",{className:"cart__box-count",children:[Object(n.jsx)("button",{className:"cart__box-text--minus",onClick:function(){return H(t.id)},disabled:1===t.count,children:"-"}),Object(n.jsx)("input",{type:"text",value:e,id:t.id,onChange:V,onClick:L}),Object(n.jsx)("button",{className:"cart__box-text--plus",onClick:function(){return Y(t.id)},disabled:t.count>t.countPay,children:"+"})]})}},{title:"\u0110VT",dataIndex:"dvt",render:function(e,t){return Object(n.jsx)("div",{children:e})}},{title:"Th\xe0nh ti\u1ec1n",dataIndex:"thanhtien",render:function(e,t){return Object(n.jsx)("div",{className:"cart__box-text",children:Object(n.jsxs)("p",{children:[t.price*t.count," VND"]})})}},{title:"Xo\xe1",dataIndex:"delete",render:function(e,t){return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(te.a,{danger:!0,onClick:function(){return Q(t.id)},children:"Xo\xe1"})})}}],U={selectedRowKeys:u,onChange:function(e){console.log("selectedRowKeys changed: ",e),d(e)}},L=function(e){g(e.target.value)};Object(a.useEffect)((function(){""===k.current?k.current=0:k.current=v}),[v]);var V=function(t){var c=i.findIndex((function(e){return e.id===Number(t.target.id)})),n=0;""===t.target.value||isNaN(t.target.value)?g(0):(n=t.target.value,t.target.value>i[c].countPay&&(n=i[c].countPay),g(n));var a={value:n,numberCurrent:Number(v),id:Number(t.target.id)};e({type:T,payload:a}),e(function(e){return{type:I,payload:e}}(a))},Y=function(t){e({type:C,payload:t}),e(function(e){return{type:N,payload:e}}(t))},H=function(t){e({type:E,payload:t}),e(function(e){return{type:y,payload:e}}(t))},Q=function(t){e({type:_,payload:t})},X=function(){var t=[];u.forEach((function(e){t.push(i[e-1].id)})),O(!0),e({type:P,payload:t}),setTimeout((function(){d([]),O(!1)}),500)},q=function(){c.resetFields(),F(!1)},G=u.length>0;return Object(n.jsxs)("div",{className:"cart",children:[Object(n.jsx)(ce.a,{rowKey:"id",rowSelection:U,columns:M,dataSource:s}),Object(n.jsxs)("h2",{children:["T\u1ed5ng ti\u1ec1n: ",Object(n.jsx)("span",{children:B})," VND"]}),Object(n.jsxs)("div",{className:"cart__button",children:[Object(n.jsx)(te.a,{type:"primary",onClick:X,disabled:!G,loading:p,children:"Xo\xe1"}),Object(n.jsx)(te.a,{className:"cart__button--pay",type:"primary",onClick:function(){if(r.id){var t=[];u.forEach((function(e){t.push(i[e-1].id)})),e({type:S,payload:t}),setTimeout((function(){e(function(e){return{type:y,payload:e}}(t))}),500)}else F(!0)},disabled:!G,loading:p,children:"Ti\u1ebfn h\xe0nh thanh To\xe1n"})]}),Object(n.jsx)("div",{className:"cart__mymodel",children:Object(n.jsx)("div",{className:"cart__mymodal__body",children:Object(n.jsx)(ne.a,{visible:D,title:"\u0110i\u1ec1n th\xf4ng tin",onOk:function(){F(!1)},onCancel:function(){F(!1)},children:Object(n.jsxs)(ee.a,{name:"basic",form:c,initialValues:{remember:!0},onFinish:function(t){if(console.log(t),void 0!==t.username&&void 0!==t.phone&&void 0!==t.email&&void 0!==t.address){var c=[];u.forEach((function(e){c.push(i[e-1].id)})),e({type:A,payload:{listId:c,profile:t}}),setTimeout((function(){X()}),500),q()}},onFinishFailed:function(e){},children:[Object(n.jsx)("label",{children:"H\u1ecd t\xean:"}),Object(n.jsx)(ee.a.Item,{name:"username",rules:[{required:!0,message:"Please input your username!"},function(e){e.getFieldValue;return{validator:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=/^[a-zA-Z]+$/;return t.length>0&&!c.test(t)?Promise.reject("Minimum 10 characters"):Promise.resolve()}}}],children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)("label",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i:"}),Object(n.jsx)(ee.a.Item,{name:"phone",rules:[{required:!0,message:"Please input your phone!"},function(e){e.getFieldValue;return{validator:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=/((09|03|07|08|05)+([0-9]{8})\b)/g;return t.length>0&&!c.test(t)?Promise.reject("Minimum 10 characters"):Promise.resolve()}}}],children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)("label",{children:"Email:"}),Object(n.jsx)(ee.a.Item,{name:"email",rules:[{required:!0,message:"Please input your email!"},function(e){e.getFieldValue;return{validator:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",c=/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;return t.length>0&&!c.test(t)?Promise.reject("Minimum 10 characters"):Promise.resolve()}}}],children:Object(n.jsx)(ae.a,{})}),Object(n.jsx)("label",{children:"\u0110\u1ecba ch\u1ec9:"}),Object(n.jsx)(ee.a.Item,{name:"address",rules:[{required:!0,message:"Please input your address!"},function(e){e.getFieldValue;return{validator:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return t.length>0&&t.length<10?Promise.reject("Minimum 10 characters"):Promise.resolve()}}}],children:Object(n.jsx)(ae.a,{})}),Object(n.jsxs)(ee.a.Item,{className:"groupButton",children:[Object(n.jsx)(te.a,{className:"btnSubmit",type:"primary",danger:!0,onClick:q,children:"Hu\u1ef7"}),Object(n.jsx)(te.a,{className:"btnSubmit",type:"primary",htmlType:"submit",children:"\u0110\u1eb7t h\xe0ng"})]})]})})})})]})}),ie=(c(402),c(159)),se=c(418),le=ie.a.TabPane,oe=function(){var e=Object(U.f)(),t=Object(h.c)((function(e){return e.userReducer.user})),c=["terrible","bad","normal","good","wonderful"],r=Object(h.b)(),i=Object(a.useState)(null),s=Object(m.a)(i,2),l=s[0],d=s[1],j=Object(a.useState)(1),b=Object(m.a)(j,2),p=b[0],O=b[1],f=Object(a.useState)(0),x=Object(m.a)(f,2),v=x[0],y=x[1],N=Object(a.useState)(0),C=Object(m.a)(N,2),E=C[0],_=C[1],P=Object(a.useState)(!1),T=Object(m.a)(P,2),S=T[0],k=T[1],I=function(){var t=Object(u.a)(o.a.mark((function t(){var c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.getById(e.id);case 3:c=t.sent,d(c),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();Object(a.useEffect)((function(){I()}),[]);var A=function(e){y(e)},D=function(){k(!1);var e={id:l[0].id,evaluate:v};r({type:w,payload:e})},F=function(){k(!1)};return Object(n.jsx)(n.Fragment,{children:l&&Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-3",children:Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"search__title",children:Object(n.jsx)("p",{children:"S\u1ea2N PH\u1ea8M N\u1ed4I B\u1eacT"})}),Object(n.jsx)("div",{className:"search__content",children:Object(n.jsx)("h1",{children:"danh s\xe1ch s\u1ea3n ph\u1ea9m n\u1ed5i b\u1eadt "})})]})}),Object(n.jsx)("div",{className:"col-lg-9 profile",children:Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-md-7",children:Object(n.jsx)("img",{src:l[0].img,alt:"img"})}),Object(n.jsxs)("div",{className:"col-md-5 profile__content",children:[Object(n.jsx)("h2",{className:"title",children:l[0].name}),Object(n.jsxs)("p",{className:"status",children:["Tr\u1ea1ng Th\xe1i:",l[0].countPay>0?Object(n.jsxs)("span",{className:"status--stocking",children:[" ",Object(n.jsx)("i",{className:"fas fa-check"})," C\xf2n h\xe0ng"]}):Object(n.jsxs)("span",{className:"status--OutOfStock",children:[" ",Object(n.jsx)("i",{className:"fas fa-times"})," H\u1ebft h\xe0ng"]})]}),Object(n.jsxs)("h2",{className:"price",children:[l[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")," VND"]}),Object(n.jsx)("div",{className:"nutrition",children:"gi\xe1 tr\u1ecb dinh d\u01b0\u1ee1ng"}),Object(n.jsxs)("div",{className:"profile__addCart",children:[Object(n.jsx)("label",{children:"S\u1ed1 l\u01b0\u1ee3ng: "}),Object(n.jsxs)("div",{className:"addNumber",children:[Object(n.jsx)("button",{className:"minus",onClick:function(){O(p-1===0?1:p-1)},children:"-"}),Object(n.jsx)("input",{type:"text",value:p,onChange:function(e){var t=e.target.value;t>l[0].countPay?O(l[0].countPay):O(t)}}),Object(n.jsx)("button",{className:"plus",onClick:function(){p+1>=l[0].countPay?O(l[0].countPay):O(p+1)},children:"+"})]}),Object(n.jsx)("button",{className:l[0].countPay>0?"buy":"disabledBuy",onClick:function(){var e,t={product:l[0],number:p};r({type:R,payload:t}),r(function(e){return{type:g,payload:e}}(t)),O(1),e=l[0],J.a.open({message:"",description:"B\u1ea1n \u0111\xe3 th\xeam th\xe0nh c\xf4ng m\u1ed9t s\u1ea3n ph\u1ea9m ".concat(e.name," v\xe0o gi\u1ecf h\xe0ng"),icon:Object(n.jsx)("i",{className:"fad fa-alicorn",style:{fontSize:"40px",color:"#fe9705"}})})},disabled:!(l[0].countPay>0),children:"Mua h\xe0ng"})]}),Object(n.jsxs)("p",{children:["\u0110\u1ecba ch\u1ec9: ",Object(n.jsx)("span",{children:"aaaaa"})]})]})]})})]}),Object(n.jsxs)(ie.a,{defaultActiveKey:"1",type:"card",onChange:function(e){var t=0;if("3"===e){l[0].evaluates.forEach((function(e,c){t+=e.point}));var c=t/l[0].evaluates.length;_(c)}},children:[Object(n.jsx)(le,{tab:"M\xf4 t\u1ea3",children:"m\xf4 t\u1ea3 s\u1ea3n ph\u1ea9m"},"1"),Object(n.jsx)(le,{tab:"Th\xf4ng tin",children:"th\xf4ng tin s\u1ea3n ph\u1ea9m"},"2"),Object(n.jsxs)(le,{tab:"\u0110\xe1nh gi\xe1",children:[Object(n.jsx)("h3",{children:"\u0110\xe1nh gi\xe1 s\u1ea3n ph\u1ea9m"}),Object(n.jsxs)("span",{children:[Object(n.jsx)(se.a,{allowHalf:!0,disabled:!0,tooltips:c,onChange:A,value:E}),E?Object(n.jsx)("span",{className:"ant-rate-text",children:c[E-1]}):""]}),Object(n.jsxs)("span",{className:void 0===t.id?"evaluateDisable":"evaluate",children:[Object(n.jsx)("button",{onClick:function(){k(!0)},disabled:void 0===t.id,children:"\u0110\xe1nh gi\xe1 s\u1ea3n ph\u1ea9m"}),Object(n.jsx)("span",{style:{display:void 0===t.id?"block":"none"},children:"( \u0110\u1eb1ng nh\u1eadp \u0111\u1ec3 g\u1eedi \u0111\xe1nh gi\xe1 c\u1ee7a b\u1ea1n )"})]}),Object(n.jsx)("div",{children:Object(n.jsxs)(ne.a,{visible:S,title:"\u0110\xe1nh gi\xe1 s\u1ea3n ph\u1ea9m",onOk:D,onCancel:F,footer:[Object(n.jsx)(te.a,{onClick:F,children:"Cancel"},"back"),Object(n.jsx)(te.a,{type:"primary",onClick:D,children:"G\u1eedi \u0111\xe1nh gi\xe1"},"submit")],children:[Object(n.jsx)("span",{children:"\u0110\xe1nh gi\xe1 c\u1ee7a b\u1ea1n v\u1ec1 s\u1ea3n ph\u1ea9m: "}),Object(n.jsx)(se.a,{allowHalf:!0,onChange:A,value:v})]})})]},"3"),Object(n.jsx)(le,{tab:"B\xecnh lu\u1eadn",children:"b\xecnh lu\u1eadn"},"4")]})]})})},ue=c(35),de=(c(405),function(e){var t=[{price1:"",price2:1e5},{price1:1e5,price2:2e5},{price1:2e5,price2:3e5},{price1:3e5,price2:5e5},{price1:5e5,price2:1e6},{price1:1e6,price2:""}],c=function(t){e.searchByPrice(t)};return Object(n.jsxs)("div",{className:"search",children:[Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"search__title",children:Object(n.jsx)("p",{children:"Lo\u1ea1i s\u1ea3n ph\u1ea9m"})}),Object(n.jsx)("div",{className:"search__content",children:Object(n.jsx)("ul",{children:[{type:"rau",name:"Rau"},{type:"cu",name:"C\u1ee7"},{type:"qua",name:"Qu\u1ea3"},{type:"nam",name:"N\u1ea5m"}].map((function(e,t){return Object(n.jsx)("li",{children:e.name},t)}))})})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"search__title",children:Object(n.jsx)("p",{children:"GI\xc1 S\u1ea2N PH\u1ea8M"})}),Object(n.jsx)("div",{className:"search__content",children:Object(n.jsx)("ul",{children:t.map((function(e,a){return 0===a?Object(n.jsx)("li",{onClick:function(){return c({item:e})},children:Object(n.jsxs)("p",{children:["D\u01b0\u1edbi ",e.price2]})},a):a===t.length-1?Object(n.jsx)("li",{onClick:function(){return c({item:e})},children:Object(n.jsxs)("p",{children:["Tr\xean ",e.price1]})},a):Object(n.jsx)("li",{onClick:function(){return c({item:e})},children:Object(n.jsxs)("p",{children:[e.price1," -> ",e.price2]})},a)}))})})]}),Object(n.jsxs)("div",{className:"box",children:[Object(n.jsx)("div",{className:"search__title",children:Object(n.jsx)("p",{children:"qu\u1ed1c gia"})}),Object(n.jsx)("div",{className:"search__content",children:Object(n.jsx)("ul",{children:["canada","Hoa k\u1ef3","Vi\u1ec7t Nam","\xdac"].map((function(e,t){return Object(n.jsx)("li",{children:e},t)}))})})]})]})}),je=c(89),be=c(137),he=c(417),pe=(c(406),function(e){var t=Object(n.jsxs)(je.a,{onClick:function(t){e.sortProduct(t.key)},children:[Object(n.jsx)(je.a.Item,{children:"gi\xe1 t\u1eeb ph\u1ea5p \u0111\u1ebfn cao"},"1"),Object(n.jsx)(je.a.Item,{children:"gi\xe1 t\u1eeb cao \u0111\u1ebfn th\u1ea5p"},"2"),Object(n.jsx)(je.a.Item,{children:"T\u1eeb A - Z"},"3"),Object(n.jsx)(je.a.Item,{children:"T\u1eeb Z - A"},"4")]});return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(be.a,{overlay:t,children:Object(n.jsxs)(te.a,{children:["S\u1eafp x\u1ebfp ",Object(n.jsx)(he.a,{})]})})})}),Oe=(c(189),function(e){var t=e.type,c=Object(a.useState)([]),r=Object(m.a)(c,2),i=r[0],s=r[1],l=Object(a.useState)([]),d=Object(m.a)(l,2),j=d[0],h=d[1],p=function(){var e=Object(u.a)(o.a.mark((function e(){var c,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c={type:""},""!==t&&(c.type=t),e.prev=2,e.next=5,q.getAll(c);case 5:n=e.sent,s(n),h(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){p()}),[]);return Object(n.jsxs)("div",{className:"products",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsxs)("span",{children:[Object(n.jsx)(b.b,{to:"/",children:"trang ch\u1ee7"})," ",Object(n.jsx)("i",{className:"fas fa-chevron-right"})," ",Object(n.jsx)(b.b,{to:"/products",children:"s\u1ea3n ph\u1ea9m"})," "]})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-3",children:Object(n.jsx)(de,{searchByPrice:function(e){if(""===e.item.price1){var t=i.filter((function(t){return t.price<e.item.price2}));h(t)}else if(""===e.item.price2){var c=i.filter((function(t){return t.price>e.item.price1}));h(c)}else{var n=i.filter((function(t){return t.price>e.item.price1&&t.price<e.item.price2}));h(n)}}})}),Object(n.jsxs)("div",{className:"col-lg-9",children:[Object(n.jsx)("div",{className:"col-12 sort",children:Object(n.jsx)(pe,{sortProduct:function(e){if("1"===e){var t=Object(ue.a)(j);t.sort((function(e,t){if(e.price<t.price)return-1})),h(t)}if("2"===e){var c=Object(ue.a)(j);c.sort((function(e,t){if(e.price>t.price)return-1})),h(c)}if("3"===e){var n=Object(ue.a)(j);n.sort((function(e,t){if(e.name<t.name)return-1})),h(n)}if("4"===e){var a=Object(ue.a)(j);a.sort((function(e,t){if(e.name>t.name)return-1})),h(a)}}})}),Object(n.jsx)("div",{className:"row",children:j.map((function(e,t){return Object(n.jsx)("div",{className:"col-sm-12 col-lg-4 item",children:Object(n.jsx)(Z,{item:e})},t)}))})]})]})]})}),me=[{path:"/",exact:!0,Component:$},{path:"/vegetable",exact:!0,type:"rau",Component:Oe},{path:"/tubers",exact:!0,type:"cu",Component:Oe},{path:"/mushroom",exact:!0,type:"nam",Component:Oe},{path:"/fruit",exact:!0,type:"qua",Component:Oe},{path:"/cart",exact:!0,Component:re},{path:"/products/:id",exact:!0,Component:oe},{path:"/products",exact:!0,type:"",Component:Oe},{path:"/searchProducts",exact:!0,type:"",Component:function(e){e.type;var t=Object(h.c)((function(e){return e.searchProduct}));console.log(t);var c=Object(a.useState)(t),r=Object(m.a)(c,2),i=r[0],s=r[1],l=Object(a.useState)(t),o=Object(m.a)(l,2),u=o[0],d=o[1];Object(a.useEffect)((function(){d(t),s(t)}),[t]);return Object(n.jsxs)("div",{className:"products",children:[Object(n.jsx)("div",{className:"col-12",children:Object(n.jsx)("h2",{children:"link"})}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-lg-3",children:Object(n.jsx)(de,{searchByPrice:function(e){if(""===e.item.price1){var t=i.filter((function(t){return t.price<e.item.price2}));d(t)}else if(""===e.item.price2){var c=i.filter((function(t){return t.price>e.item.price1}));d(c)}else{var n=i.filter((function(t){return t.price>e.item.price1&&t.price<e.item.price2}));d(n)}}})}),Object(n.jsxs)("div",{className:"col-lg-9",children:[Object(n.jsx)("div",{className:"col-12 sort",children:Object(n.jsx)(pe,{sortProduct:function(e){if("1"===e){var t=Object(ue.a)(u);t.sort((function(e,t){if(e.price<t.price)return-1})),d(t)}if("2"===e){var c=Object(ue.a)(u);c.sort((function(e,t){if(e.price>t.price)return-1})),d(c)}if("3"===e){var n=Object(ue.a)(u);n.sort((function(e,t){if(e.name<t.name)return-1})),d(n)}if("4"===e){var a=Object(ue.a)(u);a.sort((function(e,t){if(e.name>t.name)return-1})),d(a)}}})}),Object(n.jsx)("div",{className:"row",children:u.map((function(e,t){return Object(n.jsx)("div",{className:"col-sm-12 col-lg-4 item",children:Object(n.jsx)(Z,{item:e})},t)}))})]})]})]})}},{path:"",exact:!0,Component:W}],fe={getUser:function(){return X.get("/users")}},xe={height:40,width:40,lineHeight:"40px",borderRadius:4,backgroundColor:"#80bb35",color:"#fff",textAlign:"center",fontSize:14},ve=function(){var e=Object(h.b)(),t=function(){var t=Object(u.a)(o.a.mark((function t(){var c,n;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,q.getAll();case 3:return c=t.sent,console.log(c),t.next=7,fe.getUser("");case 7:n=t.sent,e({type:f,payload:c}),e(K(n)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return Object(a.useEffect)((function(){t()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)(b.a,{children:[Object(n.jsx)(p,{}),Object(n.jsxs)(d.a,{children:[Object(n.jsx)(j.a,{span:24,className:"menu",children:Object(n.jsx)(B,{})}),Object(n.jsx)("div",{className:"content",children:Object(n.jsx)(j.a,{span:24,children:Object(n.jsx)(U.c,{children:me.map((function(e,t){var c=e.Component;return Object(n.jsx)(U.a,{path:e.path,exact:e.exact,children:Object(n.jsx)(c,{type:e.type})},t)}))})})})]})]}),Object(n.jsx)(M.a,{children:Object(n.jsx)("div",{style:xe,children:Object(n.jsx)("i",{className:"fas fa-arrow-up"})})})]})},ge=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,421)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))},ye=c(81),Ne=[],Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return t.payload;case v:var c=Object(ue.a)(e);return c.forEach((function(e){e.id===t.payload.id&&(e.countPay=e.countPay-1)})),Object(ue.a)(c);case g:var n=Object(ue.a)(e);return n.forEach((function(e){e.id===t.payload.product.id&&(e.countPay=e.countPay-t.payload.number)})),console.log(n),Object(ue.a)(n);case y:var a=Object(ue.a)(e);return a.forEach((function(e){e.id===t.payload&&(e.countPay=e.countPay+1)})),Object(ue.a)(a);case N:var r=Object(ue.a)(e);return r.forEach((function(e){e.id===t.payload&&(e.countPay=e.countPay-1)})),console.log(r),Object(ue.a)(r);case I:var i=Object(ue.a)(e);return i.forEach((function(e){e.id===t.payload.id&&(e.countPay=e.countPay+t.payload.numberCurrent,e.countPay=e.countPay-Number(t.payload.value))})),Object(ue.a)(i);case w:var s=Object(ue.a)(e);return s.forEach((function(e){e.id===t.payload.id&&e.evaluates.forEach((function(e){e.id===t.payload.id&&(e.point=t.payload.evaluate)}))})),Object(ue.a)(s);default:return e}},Ee=c(28),_e={user:{name:"dai",age:22,cart:[],oder:[]}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_e,t=arguments.length>1?arguments[1]:void 0,c=JSON.parse(JSON.stringify(e.user)),n=c.cart,a=c.oder;switch(t.type){case x:var r=c.cart,i={};if(r.length>=0){var s=r.findIndex((function(e){return e.id===t.payload.id}));return-1!==s?(i=Object(Ee.a)(Object(Ee.a)({},r[s]),{},{count:r[s].count+1}),r.splice(s,1,i),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c})):(i={id:t.payload.id,name:t.payload.name,img:t.payload.img,price:t.payload.price,count:1},r.push(i),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c}))}case R:var l=c.cart,o={},u=l.findIndex((function(e){return e.id===t.payload.product.id}));return-1!==u?(o=Object(Ee.a)(Object(Ee.a)({},l[u]),{},{count:l[u].count+t.payload.number}),l.splice(u,1,o),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c})):(o={id:t.payload.product.id,name:t.payload.product.name,img:t.payload.product.img,price:t.payload.product.price,count:t.payload.number},l.push(o),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c}));case C:var d=n.findIndex((function(e){return e.id===t.payload}));return-1!==d&&(n[d].count+1>n[d].countPay?n[d].count=n[d].countPay+1:n[d].count=n[d].count+1),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});case E:var j=n.findIndex((function(e){return e.id===t.payload}));return-1!==j&&(n[j].count-1===0?n[j].count=1:n[j].count=n[j].count-1),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});case T:if(isNaN(t.payload.value)||t.payload.value<0){var b=n.findIndex((function(e){return e.id===t.payload.id}));return-1!==b&&(n[b].count=1),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c})}var h=n.findIndex((function(e){return e.id===t.payload.id}));return-1!==h&&(Number(t.payload.value)>n[h].countPay?n[h].count=n[h].countPay:n[h].count=Number(t.payload.value)),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});case _:return c.cart=c.cart.filter((function(e){return e.id!==t.payload})),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});case P:return t.payload.forEach((function(e){c.cart=c.cart.filter((function(t){return t.id!==e}))})),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});case S:return t.payload.forEach((function(e){n.forEach((function(t){e===t.id&&0!==t.count&&a.push(t)}))})),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});case A:return console.log(t.payload),t.payload.listId.forEach((function(e){n.forEach((function(t){e===t.id&&0!==t.count&&a.push(t)}))})),c.profile=t.payload.profile,Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});case y:return t.payload.forEach((function(e){n.forEach((function(t){e===t.id&&0!==t.count&&(c.cart=c.cart.filter((function(t){return t.id!==e})))}))})),Object(Ee.a)(Object(Ee.a)({},e),{},{user:c});default:return e}},Te=[],Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return t.payload;default:return e}},ke=Object(ye.c)({productReducer:Ce,userReducer:Pe,searchProduct:Se}),Re=c(213),Ie=Object(ye.a)(Re.a),we=Object(ye.d)(Ie,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),Ae=Object(ye.e)(ke,we);s.a.render(Object(n.jsx)(h.a,{store:Ae,children:Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(ve,{})})}),document.getElementById("root")),ge()}},[[409,1,2]]]);
//# sourceMappingURL=main.dcfa240f.chunk.js.map