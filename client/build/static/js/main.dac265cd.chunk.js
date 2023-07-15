(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{15:function(e,t,a){e.exports={detailContainer:"Detail_detailContainer__3eZBv",containerMain:"Detail_containerMain__1hf12",containerImg:"Detail_containerImg__26naW",containerTextDescrip:"Detail_containerTextDescrip__3x7uK",nameDiv:"Detail_nameDiv__2DgnH",containerGenPlat:"Detail_containerGenPlat__1_ISI",ratingAndReleased:"Detail_ratingAndReleased__2ara4",descriptionText:"Detail_descriptionText__27SOz",containerButton:"Detail_containerButton___ireB",detailButton:"Detail_detailButton__1UAEh"}},18:function(e,t,a){e.exports={cardContainer:"Card_cardContainer__3qb8Q",imageDiv:"Card_imageDiv__1-MiG",textDiv:"Card_textDiv__Ds86X",text:"Card_text__m5lFI",image:"Card_image__2hyGo",deleteButton:"Card_deleteButton__aR_Vm"}},21:function(e,t,a){e.exports={paginateContainer:"Paginate_paginateContainer__a7x02",nums:"Paginate_nums__dqeBR",button:"Paginate_button__3Ne6M"}},22:function(e,t,a){e.exports={header:"Header_header__2fIN1",options:"Header_options__1mnq0"}},23:function(e,t,a){e.exports={backgroundContainer:"Home_backgroundContainer__D4qrU",cards:"Home_cards__3I487",button:"Home_button__2lUxw",filterBar:"Home_filterBar__1miud",detailButton:"Home_detailButton__1hEKd",notFound:"Home_notFound__3qPdf"}},29:function(e,t,a){e.exports={nav:"NavBar_nav__36GYl",menu:"NavBar_menu__21LlG",app:"NavBar_app__M6eem",create:"NavBar_create__PXWVs"}},37:function(e,t,a){e.exports={landingContainer:"LandingPage_landingContainer__1GCx9",text:"LandingPage_text__3pfs_",button:"LandingPage_button__1kci9"}},38:function(e,t,a){e.exports={container:"SearchBar_container__35JZp",inputs:"SearchBar_inputs___K98W",buttons:"SearchBar_buttons__3gGDs"}},44:function(e,t,a){e.exports={cards:"Cards_cards__2bhoP"}},45:function(e,t,a){e.exports={loading:"Loading_loading__2Hk5_"}},53:function(e,t,a){},54:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a.n(n),c=a(31),i=a.n(c),s=(a(53),a(3)),o=a(8),l=a(9),d=(a(54),a(37)),u=a.n(d),j=a(6),b=a(17),m=a(28),p=a(69),O="GET_VIDEOGAMES",g="GET_BY_NAME",h="RESET_VIDEOGAMES",f="GET_DETAIL",v="RESET_DETAIL",x="GET_GENRES",_="CREATE_VIDEOGAME",N="SET_PAGE",y="ORDER_BY_NAME",C="ORDER_BY_RATING",D="DELETE_VIDEOGAME",E=function(){return function(){var e=Object(m.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.get("/videogames");case 3:a=e.sent,t({type:O,payload:a.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()};function A(){return function(e){p.a.get("/genres").then((function(e){return e.data})).then((function(t){e({type:x,payload:t})})).catch((function(e){return console.log(e)}))}}function V(e){return{type:N,payload:e}}var F=function(e){return{type:"FILTER_BY_SOURCE",payload:e}},S=function(e){return{type:"FILTER_BY_GENRES",payload:e}},T=function(){return function(){var e=Object(m.a)(Object(b.a)().mark((function e(t){var a;return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("/platforms");case 2:return a=e.sent,e.abrupt("return",t({type:"GET_PLATFORMS",payload:a.data}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},B=function(e){return function(){var t=Object(m.a)(Object(b.a)().mark((function t(a){var n;return Object(b.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,p.a.delete("/videogame/".concat(e));case 3:return n=t.sent,a({type:D,payload:e}),t.abrupt("return",n.data.message);case 8:throw t.prev=8,t.t0=t.catch(0),console.log(t.t0),Error(t.t0.response.data.message);case 12:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()},G=a(29),I=a.n(G),R=a.p+"static/media/logo.9712dcd2.png",P=a(0);function w(){var e=Object(l.h)(),t=Object(l.g)();return Object(P.jsxs)("nav",{className:I.a.nav,children:[Object(P.jsx)("img",{className:"img",src:R,alt:"Logo Principal"}),Object(P.jsxs)("ul",{className:I.a.menu,children:[Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/home",className:I.a.app,children:"Videogames App"})}),"/"===t.pathname?null:Object(P.jsx)("li",{children:Object(P.jsx)(o.b,{to:"/create",className:I.a.create,children:"Create Videogame"})})]})]},e.id)}function k(){var e=Object(l.h)(),t=Object(j.b)();return Object(n.useEffect)((function(){t(E())}),[t]),Object(P.jsxs)("div",{className:u.a.landingContainer,children:[Object(P.jsx)(w,{}),Object(P.jsx)("h1",{className:u.a.text,children:"Henry Videogames"}),Object(P.jsx)(o.b,{to:"/home",children:Object(P.jsx)("button",{className:u.a.button,children:"Start"})})]},e.id)}var L=a(13),M=a(18),Y=a.n(M);function q(e){var t=e.image,a=e.name,n=e.genres,r=e.rating,c=e.id,i=Object(j.b)(),s=Object(l.h)();return Object(P.jsxs)("div",{className:Y.a.cardContainer,children:[Object(P.jsx)("button",{onClick:function(e){return function(e){console.log(c),e.preventDefault(),i(B(c)).then((function(e){return alert(e)})).catch((function(e){return alert(e)}))}(e)},className:Y.a.deleteButton,value:"delete",children:Object(P.jsx)("span",{children:"X"})}),Object(P.jsxs)(o.b,{className:Y.a.imageDiv,to:"/videogame/".concat(c),children:[Object(P.jsx)("img",{className:Y.a.image,src:t,width:"120",height:"60",alt:"not fount"}),Object(P.jsxs)("div",{className:Y.a.textDiv,children:[Object(P.jsx)("h2",{className:Y.a.text,children:a}),Object(P.jsxs)("h3",{className:Y.a.text,children:[" ",null===n||void 0===n?void 0:n.map((function(e){return"object"===typeof e?e.name:e})).join(" | ")]}),Object(P.jsxs)("h4",{className:Y.a.text,children:["\u2b50 ",r]})]})]})]},s.id)}var H=a(44),Z=a.n(H);function U(e){var t=e.actualVideogames,a=Object(l.h)();return Object(P.jsx)("div",{className:Z.a.cards,children:t.length&&t.map((function(e){return Object(P.jsx)(q,{id:e.id,image:e.image,name:e.name,genres:e.genres,rating:e.rating},e.id)}))},a.id)}var X=a(21),J=a.n(X);function K(e){for(var t=e.gamesPerPage,a=e.allGames,n=e.paginate,r=e.currentPage,c=e.currentGames,i=Object(l.h)(),s=[],o=1;o<=Math.ceil(a/t);o++)s.push(o);return Object(P.jsx)("nav",{className:J.a.paginateContainer,children:Object(P.jsxs)("ul",{className:J.a.nums,children:[Object(P.jsx)("button",{className:J.a.button,disabled:r<=1,onClick:function(){return n(r-1)},children:"\u2b05"}),s&&s.map((function(e){return Object(P.jsx)("li",{children:Object(P.jsx)("button",{className:J.a.button,disabled:r===e,onClick:function(){return n(e)},children:e})},e)})),Object(P.jsx)("button",{className:J.a.button,disabled:c.length<t,onClick:function(){return n(r+1)},children:"\u2b95"})]})},i.id)}var W=a(38),$=a.n(W);function z(){var e=Object(l.h)(),t=Object(n.useState)(""),a=Object(L.a)(t,2),r=a[0],c=a[1],i=Object(j.b)(),s=function(e){var t;e.preventDefault(),c(e.target.value),i((t=e.target.value,function(e){try{e({type:g,payload:t})}catch(a){console.log("Videogame could not be found")}})),i(V(1))};function o(e){e.preventDefault(),c(""),i((function(e){try{e({type:h})}catch(t){console.log(t)}}))}return Object(P.jsxs)("div",{className:$.a.container,children:[Object(P.jsx)("input",{className:$.a.inputs,type:"text",name:"videogame",placeholder:"Search Videogame",value:r,onChange:function(e){return s(e)},onKeyPress:function(e){return"Enter"===e.key&&o(e)}}),Object(P.jsx)("button",{type:"submit",onClick:function(e){return o(e)},className:$.a.buttons,children:"Clear"})]},e.id)}var Q=a(22),ee=a.n(Q);function te(){var e=Object(l.h)(),t=Object(j.b)(),a=Object(j.c)((function(e){return e.allGenres}));function r(e){var a;e.preventDefault(),t((a=e.target.value,{type:C,payload:a})),t(V(1))}function c(e){var a;e.preventDefault(),t((a=e.target.value,{type:y,payload:a})),t(V(1))}return Object(n.useEffect)((function(){t(A())}),[t]),Object(P.jsxs)("div",{children:[Object(P.jsx)(z,{}),Object(P.jsxs)("div",{className:ee.a.header,children:[Object(P.jsxs)("select",{onChange:function(e){return r(e)},className:ee.a.options,defaultValue:"default",children:[Object(P.jsx)("option",{value:"default",hidden:!0,children:"Sort by rating"}),Object(P.jsx)("option",{value:"ASC",children:"From higher to lower"}),Object(P.jsx)("option",{value:"DESC",children:"From lower to higher"})]}),Object(P.jsxs)("select",{onChange:function(e){return c(e)},className:ee.a.options,defaultValue:"default",children:[Object(P.jsx)("option",{value:"default",hidden:!0,children:"Sort by name"}),Object(P.jsx)("option",{value:"A-Z",children:"A-Z"}),Object(P.jsx)("option",{value:"Z-A",children:"Z-A"})]}),Object(P.jsxs)("select",{onChange:function(e){return function(e){t(S(e.target.value)),t(V(1))}(e)},className:ee.a.options,defaultValue:"default",children:[Object(P.jsx)("option",{value:"default",hidden:!0,children:"Filter by genre"}),Object(P.jsx)("option",{value:"All",children:"All genres"}),a&&a.map((function(e){return Object(P.jsx)("option",{value:e.name,children:e.name},e.id)}))]}),Object(P.jsxs)("select",{onChange:function(e){return function(e){e.preventDefault(),t(F(e.target.value)),t(V(1))}(e)},className:ee.a.options,defaultValue:"default",children:[Object(P.jsx)("option",{value:"default",hidden:!0,children:"Filter by source"}),Object(P.jsx)("option",{value:"All",children:"All videogames"}),Object(P.jsx)("option",{value:"Api",children:"Api videogames"}),Object(P.jsx)("option",{value:"Db",children:"Database videogames"})]})]})]},e.id)}var ae=a.p+"static/media/Loading.5d24bd0d.gif",ne=a(45),re=a.n(ne);function ce(){var e=Object(l.h)();return Object(P.jsx)("img",{src:ae,alt:"loading",className:re.a.loading},e.id)}var ie=a(23),se=a.n(ie);function oe(){var e=Object(l.h)(),t=Object(j.b)(),a=Object(n.useState)(!0),r=Object(L.a)(a,2),c=r[0],i=r[1],s=Object(j.c)((function(e){return e.selectedVideogames})),o=Object(j.c)((function(e){return e.currentPage})),d=15*o,u=d-15,b=s.slice(u,d);Object(n.useEffect)((function(){t(E()).then((function(){return i(!1)}))}),[t]);return c?Object(P.jsx)("div",{children:Object(P.jsx)(ce,{})}):Object(P.jsxs)("div",{className:se.a.backgroundContainer,children:[Object(P.jsx)(w,{}),Object(P.jsx)("div",{className:se.a.filterBar,children:Object(P.jsx)(te,{className:se.a.detailButton})}),Object(P.jsx)("div",{children:Object(P.jsx)(K,{gamesPerPage:15,allGames:s.length,currentPage:o,paginate:function(e){t(V(e))},currentGames:b})}),Object(P.jsx)("div",{className:se.a.cards,children:s.length?Object(P.jsx)("div",{children:Object(P.jsx)(U,{actualVideogames:b})}):Object(P.jsx)("div",{className:se.a.notFound,children:Object(P.jsx)("h2",{children:"No videogames found"})})})]},e.id)}var le=a(16),de=a(25),ue=a(7),je=a.n(ue);function be(){var e=Object(l.h)(),t=Object(j.b)(),a=Object(l.f)(),r=Object(j.c)((function(e){return e.allGenres})),c=Object(j.c)((function(e){return e.platforms})),i=Object(j.c)((function(e){return e.allVideogames}));Object(n.useEffect)((function(){t(A()),t(T())}),[t]);var o=Object(n.useState)({name:"",image:"",description:"",released:"",rating:"",genres:[],platforms:[]}),d=Object(L.a)(o,2),u=d[0],O=d[1],g=Object(n.useState)({}),h=Object(L.a)(g,2),f=h[0],v=h[1],x=Object(n.useState)(!0),N=Object(L.a)(x,1)[0];function y(e){var n;e.preventDefault(),i.filter((function(e){return e.name===u.name})).length?(alert("There is already a videogame with that name, please choose another one"),f.name="There is already a videogame with that name"):u.name&&u.genres.length&&u.platforms.length?(t((n=u,function(){var e=Object(m.a)(Object(b.a)().mark((function e(t){return Object(b.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,p.a.post("/videogames",n);case 3:return e.next=5,t({type:_,payload:n});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())),alert("The videogame was created succesfully"),O({name:"",image:"",description:"",released:"",rating:"",genres:[],platforms:[]}),a.push("/home")):alert("Missing info")}function C(e){e.preventDefault(),O((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(de.a)({},e.target.name,e.target.value))})),v(function(e){var t={};return e.name?"string"!==typeof e.name?t.name="The name is not valid":e.name.length>50&&(t.name="The name is too long"):t.name="You need to provide a name",/^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(e.image)||(t.image="invalid URL, must be an image(png, jpg, gif)"),e.description?e.description.length>800&&(t.description="The description is too long (Max = 800 characters)"):t.description="You need to provide a description",e.released?(e.released.length>10||!/^[0-9-]+$/.test(e.released))&&(t.released="You need to provide a valid date (yyyy-mm-dd)"):t.released="You need to provide a released date",e.rating?(isNaN(e.rating)||e.rating<1||e.rating>5)&&(t.rating="The rating must be a number between 1 and 5"):t.rating="You need to provide a rating",0===Object.keys(t).length&&N(!1),t}(Object(s.a)(Object(s.a)({},u),{},Object(de.a)({},e.target.name,[e.target.value]))))}return Object(P.jsxs)("div",{className:je.a.mainContainer,children:[Object(P.jsx)(w,{}),Object(P.jsx)("div",{className:je.a.subContainer,children:Object(P.jsx)("div",{className:je.a.firstContainerForm,children:Object(P.jsxs)("div",{className:je.a.containerForm,children:[Object(P.jsx)("h1",{className:je.a.titulo,children:"Create your own videogame!"}),Object(P.jsxs)("form",{onSubmit:function(e){return y(e)},className:je.a.form,children:[Object(P.jsxs)("div",{className:je.a.text,children:[Object(P.jsx)("label",{children:"Name: "}),Object(P.jsx)("input",{className:je.a.thisInput,type:"text",required:!0,name:"name",value:u.name,onChange:function(e){return C(e)}})," ",Object(P.jsx)("span",{className:"barra"}),f.name&&Object(P.jsx)("p",{className:je.a.danger,children:f.name})]},e.id),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{children:"Description: "}),Object(P.jsx)("textarea",{className:je.a.textArea,required:!0,type:"text",name:"description",value:u.description,onChange:function(e){return C(e)},children:" "}),f.description&&Object(P.jsx)("p",{className:je.a.danger,children:f.description})]},e.id),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{children:"Released date: "}),Object(P.jsx)("input",{className:je.a.thisInput,required:!0,type:"date",name:"released",value:u.released,placeholder:"yyyy-mm-dd",onChange:function(e){return C(e)}})," ",Object(P.jsx)("span",{className:"barra"}),f.released&&Object(P.jsx)("p",{className:"danger",children:f.released})]},e.id),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{children:"Rating: "}),Object(P.jsx)("input",{className:je.a.thisInput,required:!0,type:"text",name:"rating",value:u.rating,onChange:function(e){return C(e)}})," ",Object(P.jsx)("span",{className:"barra"}),f.rating&&Object(P.jsx)("p",{className:je.a.danger,children:f.rating})]},e.id),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{children:"Image URL: "}),Object(P.jsx)("input",{className:je.a.thisInput,type:"text",name:"image",value:u.image,onChange:function(e){return C(e)}})," ",Object(P.jsx)("span",{className:"barra"}),f.image&&Object(P.jsx)("p",{className:je.a.danger,children:f.image})]},e.id),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{children:"Platforms:  "}),Object(P.jsxs)("select",{className:je.a.thisInput,id:"platforms",defaultValue:"",onChange:function(e){return function(e){u.platforms.includes(e.target.value)||O(Object(s.a)(Object(s.a)({},u),{},{platforms:[].concat(Object(le.a)(u.platforms),[e.target.value])}))}(e)},children:[Object(P.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Select platforms..."}),null===c||void 0===c?void 0:c.map((function(e){return Object(P.jsx)("option",{value:e,children:e},e)}))]})]},e.id),Object(P.jsx)("div",{className:je.a.selected,children:u.platforms.map((function(e){return Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{children:e}),Object(P.jsx)("button",{onClick:function(){return t=e,void O(Object(s.a)(Object(s.a)({},u),{},{platforms:u.platforms.filter((function(e){return e!==t}))}));var t},id:e.id,value:e,children:Object(P.jsx)("span",{children:"X"})},e)]},e)}))}),Object(P.jsxs)("div",{children:[Object(P.jsx)("label",{children:"Genres: "}),Object(P.jsxs)("select",{className:je.a.thisInput,id:"genres",defaultValue:"",onChange:function(e){return function(e){u.genres.includes(e.target.value)||O(Object(s.a)(Object(s.a)({},u),{},{genres:[].concat(Object(le.a)(u.genres),[e.target.value])}))}(e)},children:[Object(P.jsx)("option",{value:"",disabled:!0,hidden:!0,children:"Select genres..."}),r.map((function(e){return Object(P.jsx)("option",{value:e.name,children:e.name},e.id)}))]})]},e.id),Object(P.jsx)("div",{className:je.a.selected,children:u.genres.map((function(e){return Object(P.jsxs)("div",{children:[Object(P.jsx)("p",{children:e}),Object(P.jsx)("button",{onClick:function(){return t=e,void O(Object(s.a)(Object(s.a)({},u),{},{genres:u.genres.filter((function(e){return e!==t}))}));var t},id:e.id,value:e,children:Object(P.jsx)("span",{children:"X"})},e)]},e)}))}),Object(P.jsx)("div",{className:je.a.formDiv,children:Object(P.jsx)("button",{type:"submit",className:je.a.buttonForm,children:"CREATE"})},e.id)]})]},e.id)},e.id)},e.id)]},e.id)}var me=a(15),pe=a.n(me);function Oe(){var e,t,a,r=Object(j.b)(),c=Object(l.h)().id;Object(n.useEffect)((function(){return r(function(e){return function(t){p.a.get("/videogame/".concat(e)).then((function(e){return e.data})).then((function(e){t({type:f,payload:e})})).catch((function(e){return console.log(e)}))}}(c)),function(){r((function(e){try{e({type:v})}catch(t){console.log(t)}}))}}),[r,c]);var i=Object(j.c)((function(e){return e.videogameDetail}));return Object(P.jsxs)("div",{className:pe.a.detailContainer,children:[Object(P.jsx)(w,{}),Object(P.jsxs)("div",{className:pe.a.containerMain,children:[Object(P.jsx)("div",{className:pe.a.containerImg,style:{backgroundImage:"url(".concat(i.image?i.image:i.background_image,")")}},i.id),Object(P.jsxs)("div",{className:pe.a.containerTextDescrip,children:[Object(P.jsx)("div",{className:pe.a.nameDiv,children:Object(P.jsx)("h1",{children:i.name})}),Object(P.jsxs)("div",{className:pe.a.containerGenPlat,children:[Object(P.jsxs)("p",{children:["Genres: ",null===(e=i.genres)||void 0===e?void 0:e.map((function(e){return e.name?e.name:e})).join(", "),"."]}),Object(P.jsxs)("p",{children:["Available for: ",null===(t=i.platforms)||void 0===t?void 0:t.join(", "),"."]})]}),Object(P.jsxs)("div",{className:pe.a.ratingAndReleased,children:[Object(P.jsxs)("p",{children:["\u2b50 ",i.rating]}),Object(P.jsxs)("p",{children:["Realeased date: ",i.released]})]}),Object(P.jsx)("div",{className:pe.a.descriptionText,children:Object(P.jsx)("p",{children:null===(a=i.description)||void 0===a?void 0:a.replace(/(<([^#$>]+)>)/gi," ").replace(" "," ")})})]})]}),Object(P.jsx)(o.b,{to:"/home",className:pe.a.containerButton,children:Object(P.jsx)("button",{className:pe.a.detailButton,children:"Back"})})]})}var ge=function(){return Object(P.jsx)(o.a,{children:Object(P.jsx)("div",{className:"App",children:Object(P.jsxs)(l.c,{children:[Object(P.jsx)(l.a,{exact:!0,path:"/",render:function(e){return Object(P.jsx)(k,Object(s.a)({},e))}}),Object(P.jsx)(l.a,{path:"/home",render:function(e){return Object(P.jsx)(oe,Object(s.a)({},e))}}),Object(P.jsx)(l.a,{path:"/create",render:function(e){return Object(P.jsx)(be,Object(s.a)({},e))}}),Object(P.jsx)(l.a,{path:"/videogame/:id",render:function(e){return Object(P.jsx)(Oe,Object(s.a)({},e))}})]})})})},he=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,70)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))},fe=a(35),ve=a(46),xe={allVideogames:[],selectedVideogames:[],videogameDetail:{},allGenres:[],platforms:[],source:"All",genre:"All",currentPage:1};var _e=a(47),Ne=Object(fe.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:xe,t=arguments.length>1?arguments[1]:void 0,a=e.allVideogames;switch(t.type){case O:return Object(s.a)(Object(s.a)({},e),{},{allVideogames:t.payload,selectedVideogames:t.payload});case g:var n=a.filter((function(e){return e.name.toLowerCase().includes(t.payload.toLowerCase())}));return Object(s.a)(Object(s.a)({},e),{},{selectedVideogames:n});case h:return Object(s.a)(Object(s.a)({},e),{},{selectedVideogames:e.allVideogames});case f:return Object(s.a)(Object(s.a)({},e),{},{videogameDetail:t.payload});case v:return Object(s.a)(Object(s.a)({},e),{},{videogameDetail:xe.videogameDetail});case x:return Object(s.a)(Object(s.a)({},e),{},{allGenres:t.payload});case _:return Object(s.a)(Object(s.a)({},e),{},{allVideogames:[].concat(Object(le.a)(e.allVideogames),[t.payload])});case y:var r=[];return"A-Z"===t.payload&&(r=Object(le.a)(e.selectedVideogames).sort((function(e,t){return e.name.localeCompare(t.name)}))),"Z-A"===t.payload&&(r=Object(le.a)(e.selectedVideogames).sort((function(e,t){return t.name.localeCompare(e.name)}))),Object(s.a)(Object(s.a)({},e),{},{selectedVideogames:r});case C:var c=[];return"ASC"===t.payload&&(c=Object(le.a)(e.selectedVideogames).sort((function(e,t){return e.rating-t.rating}))),"DESC"===t.payload&&(c=Object(le.a)(e.selectedVideogames).sort((function(e,t){return t.rating-e.rating}))),Object(s.a)(Object(s.a)({},e),{},{selectedVideogames:c});case"FILTER_BY_SOURCE":var i=[],o="All"===e.genre?a:a.filter((function(t){var a;return null===(a=t.genres)||void 0===a?void 0:a.includes(e.genre)}));return i="Db"===t.payload?o.filter((function(e){return isNaN(e.id)})):"Api"===t.payload?o.filter((function(e){return!isNaN(e.id)})):o,Object(s.a)(Object(s.a)({},e),{},{selectedVideogames:i,source:t.payload});case"FILTER_BY_GENRES":var l=[];l="Db"===e.source?a.filter((function(e){return isNaN(e.id)})):"Api"===e.source?a.filter((function(e){return"number"===typeof e.id})):a;var d="All"===t.payload&&l.length?l:l.filter((function(e){var a;return null===(a=e.genres)||void 0===a?void 0:a.includes(t.payload)}));return Object(s.a)(Object(s.a)({},e),{},{selectedVideogames:d,genre:t.payload});case N:return Object(s.a)(Object(s.a)({},e),{},{currentPage:t.payload});case"GET_PLATFORMS":return Object(s.a)(Object(s.a)({},e),{},{platforms:Object(le.a)(t.payload)});case D:return Object(s.a)(Object(s.a)({},e),{},{allVideogames:e.allVideogames.filter((function(e){return e.id!==t.payload})),selectedVideogames:e.selectedVideogames.filter((function(e){return e.id!==t.payload}))});default:return e}}),Object(ve.composeWithDevTools)(Object(fe.applyMiddleware)(_e.a)));p.a.defaults.baseURL="https://pi-videogames-production-733c.up.railway.app",i.a.render(Object(P.jsx)(r.a.StrictMode,{children:Object(P.jsx)(o.a,{children:Object(P.jsx)(j.a,{store:Ne,children:Object(P.jsx)(ge,{})})})}),document.getElementById("root")),he()},7:function(e,t,a){e.exports={mainContainer:"Form_mainContainer__2cl-o",subContainer:"Form_subContainer__27XSu",red:"Form_red__1qYgJ",form:"Form_form__1xIZT",textArea:"Form_textArea__1TwYb",titulo:"Form_titulo__2OcjI",firstContainerForm:"Form_firstContainerForm__85PLg",formDiv:"Form_formDiv__19JXM",buttonForm:"Form_buttonForm__1wmNo",buttonContainer:"Form_buttonContainer__1zIDK",selected:"Form_selected__1qgco",thisInput:"Form_thisInput__1WQEF",buttonSend:"Form_buttonSend__1qpkR"}}},[[68,1,2]]]);
//# sourceMappingURL=main.dac265cd.chunk.js.map