(this["webpackJsonpgmail-clone"]=this["webpackJsonpgmail-clone"]||[]).push([[0],{102:function(e,s,c){},103:function(e,s,c){},105:function(e,s,c){},107:function(e,s,c){},108:function(e,s,c){},109:function(e,s,c){},110:function(e,s,c){},112:function(e,s,c){"use strict";c.r(s);var t=c(1),a=c(0),n=c.n(a),i=c(23),j=c.n(i),r=(c(95),c(96),c(97),c(52)),l=c.n(r),d=c(127),b=c(130),o=c(53),O=c.n(o),x=c(39),h=c.n(x),m=c(54),u=c.n(m),_=c(55),p=c.n(_);var v=function(){return Object(t.jsxs)("div",{className:"header",children:[Object(t.jsxs)("div",{className:"header__left",children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(l.a,{})}),Object(t.jsx)("img",{src:"https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_dark_1x_r2.png",alt:""})]}),Object(t.jsxs)("div",{className:"header__middle",children:[Object(t.jsx)(O.a,{}),Object(t.jsx)("input",{placeholder:"Search mail",type:"text"}),Object(t.jsx)(h.a,{className:"header__inputCaret"})]}),Object(t.jsxs)("div",{className:"header__right",children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(u.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(p.a,{})}),Object(t.jsx)(b.a,{})]})]})},f=c(128),N=(c(102),c(57)),g=c.n(N),M=c(40),I=c.n(M),S=c(58),w=c.n(S),y=c(59),R=c.n(y);c(103);var k=function(e){var s=e.Icon,c=e.title,a=e.number,n=e.selected;return Object(t.jsxs)("div",{className:"sidebarOption ".concat(n&&"sidebarOption--active"),children:[Object(t.jsx)(s,{}),Object(t.jsx)("h3",{children:c}),Object(t.jsx)("p",{children:a})]})},C=c(26),L=c.n(C),q=c(60),T=c.n(q),B=c(61),E=c.n(B),H=c(62),J=c.n(H),P=c(63),z=c.n(P),A=c(64),D=c.n(A),G=c(65),U=c.n(G),W=c(24),X=c(42),$=Object(X.b)({name:"mail",initialState:{sendMessageIsOpen:!1},reducers:{openSendMessage:function(e){e.sendMessageIsOpen=!0},closeSendMessage:function(e){e.sendMessageIsOpen=!1}}}),F=$.actions,K=F.openSendMessage,Q=F.closeSendMessage,V=function(e){return e.mail.sendMessageIsOpen},Y=$.reducer;var Z=function(){var e=Object(W.b)();return Object(t.jsxs)("div",{className:"sidebar",children:[Object(t.jsx)(f.a,{startIcon:Object(t.jsx)(g.a,{fontSize:"large"}),className:"sidebar__compose",onClick:function(){return e(K())},children:"Compose"}),Object(t.jsx)(k,{Icon:I.a,title:"Inbox",number:54,selected:!0}),Object(t.jsx)(k,{Icon:w.a,title:"Starred",number:54}),Object(t.jsx)(k,{Icon:R.a,title:"Snoozed",number:54}),Object(t.jsx)(k,{Icon:L.a,title:"Important",number:54}),Object(t.jsx)(k,{Icon:T.a,title:"Sent",number:54}),Object(t.jsx)(k,{Icon:E.a,title:"Drafts",number:54}),Object(t.jsx)(k,{Icon:J.a,title:"More",number:54}),Object(t.jsx)("div",{className:"sidebar__footer",children:Object(t.jsxs)("div",{className:"sidebar__footerIcons",children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(z.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(D.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(U.a,{})})]})})]})},ee=(c(105),c(66)),se=c.n(ee),ce=c(71),te=c.n(ce),ae=c(70),ne=c.n(ae),ie=c(69),je=c.n(ie),re=c(68),le=c.n(re),de=c(67),be=c.n(de),oe=c(41),Oe=c.n(oe),xe=c(72),he=c.n(xe),me=c(8),ue=c(73),_e=c.n(ue),pe=c(75),ve=c.n(pe),fe=c(74),Ne=c.n(fe);var ge=function(){var e=Object(me.f)();return Object(t.jsxs)("div",{className:"mail",children:[Object(t.jsxs)("div",{className:"mail__tools",children:[Object(t.jsxs)("div",{className:"mail__toolsLeft",children:[Object(t.jsx)(d.a,{onClick:function(){return e.push("/")},children:Object(t.jsx)(se.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(be.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(le.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(je.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(ne.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(te.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(he.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(L.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(Oe.a,{})})]}),Object(t.jsxs)("div",{className:"mail__toolsRight",children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(_e.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(Ne.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(ve.a,{})})]})]}),Object(t.jsxs)("div",{className:"mail__body",children:[Object(t.jsxs)("div",{className:"mail__bodyHeader",children:[Object(t.jsx)("h2",{children:"Subject"}),Object(t.jsx)(L.a,{className:"mail__important"}),Object(t.jsx)("p",{children:"Title"}),Object(t.jsx)("p",{className:"mail__time",children:"10PM"})]}),Object(t.jsx)("div",{className:"mail__message",children:Object(t.jsx)("p",{children:"this is a message"})})]})]})},Me=(c(107),c(129)),Ie=c(77),Se=c.n(Ie),we=c(79),ye=c.n(we),Re=c(78),ke=c.n(Re),Ce=c(80),Le=c.n(Ce),qe=c(81),Te=c.n(qe),Be=c(82),Ee=c.n(Be),He=c(83),Je=c.n(He);c(108);var Pe=function(e){var s=e.Icon,c=e.title,a=e.color,n=e.selected;return Object(t.jsx)("div",{className:"section",children:Object(t.jsxs)("div",{className:"section ".concat(n&&"section--selected"),style:{borderBottom:"3px solid ".concat(a),color:"".concat(n&&a)},children:[Object(t.jsx)(s,{}),Object(t.jsx)("h4",{children:c})]})})},ze=(c(109),c(76)),Ae=c.n(ze);var De=function(e){e.id;var s=e.title,c=e.subject,a=e.description,n=e.time,i=Object(me.f)();return Object(t.jsxs)("div",{onClick:function(){return i.push("/mail")},className:"emailRow",children:[Object(t.jsxs)("div",{className:"emailRow__options",children:[Object(t.jsx)(Me.a,{}),Object(t.jsx)(d.a,{children:Object(t.jsx)(Ae.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(L.a,{})})]}),Object(t.jsx)("h3",{className:"emailRow__title",children:s}),Object(t.jsx)("div",{className:"emailRow__message",children:Object(t.jsxs)("h4",{children:[c," - ","   ",Object(t.jsx)("span",{className:"emailRow_description",children:a})]})}),Object(t.jsx)("p",{className:"emailRow__time",children:n})]})};var Ge=function(){return Object(t.jsxs)("div",{className:"emailList",children:[Object(t.jsxs)("div",{className:"emailList__settings",children:[Object(t.jsxs)("div",{className:"emailList__settingsLeft",children:[Object(t.jsx)(Me.a,{}),Object(t.jsx)(d.a,{children:Object(t.jsx)(h.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(Se.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(Oe.a,{})})]}),Object(t.jsxs)("div",{className:"emailList__settingsRight",children:[Object(t.jsx)(d.a,{children:Object(t.jsx)(ke.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(ye.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(Le.a,{})}),Object(t.jsx)(d.a,{children:Object(t.jsx)(Te.a,{})})]})]}),Object(t.jsxs)("div",{className:"emailList__sections",children:[Object(t.jsx)(Pe,{Icon:I.a,title:"Primary",color:"red",selected:!0}),Object(t.jsx)(Pe,{Icon:Ee.a,title:"Social",color:"#1A73E8"}),Object(t.jsx)(Pe,{Icon:Je.a,title:"Pormotions",color:"green"})]}),Object(t.jsxs)("div",{className:"emailList__list",children:[Object(t.jsx)(De,{id:1,title:"Robert",subject:"Hey man this is a remainder",description:"This is a Gmail Clone all built with ReactJS, REDUX, Material-UI",time:"23h39"}),Object(t.jsx)(De,{id:1,title:"Robert",subject:"Hey man don't forget this",description:"This is a Gmail Clone",time:"23h39"})]})]})},Ue=(c(110),c(84)),We=c.n(Ue),Xe=c(85);var $e=function(){var e=Object(Xe.a)(),s=e.register,c=e.handleSubmit,a=(e.watch,e.errors),n=Object(W.b)();return Object(t.jsxs)("div",{className:"sendMail",children:[Object(t.jsxs)("div",{className:"sendMail__header",children:[Object(t.jsx)("h3",{children:"New Message"}),Object(t.jsx)(We.a,{className:"sendMail__close",onClick:function(){return n(Q())}})]}),Object(t.jsxs)("form",{onSubmit:c((function(e){console.log(e)})),children:[Object(t.jsx)("input",{name:"to",placeholder:"To",type:"email",ref:s({required:!0})}),a.to&&Object(t.jsx)("p",{className:"sendMail__error",children:"To is required"}),Object(t.jsx)("input",{name:"subject",placeholder:"Subject",type:"text",ref:s({required:!0})}),a.subject&&Object(t.jsx)("p",{className:"sendMail__error",children:"Subject is required"}),Object(t.jsx)("input",{name:"message",placeholder:"Message...",type:"text",className:"sendMail__message",ref:s({required:!0})}),a.message&&Object(t.jsx)("p",{className:"sendMail__error",children:"Message is required"}),Object(t.jsx)("div",{className:"sendMail__options",children:Object(t.jsx)(f.a,{variant:"contained",color:"primary",type:"submit",children:"Send"})})]})]})},Fe=c(37);var Ke=function(){var e=Object(W.c)(V);return Object(t.jsx)(Fe.a,{children:Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(v,{}),Object(t.jsxs)("div",{className:"app__body",children:[Object(t.jsx)(Z,{}),Object(t.jsxs)(me.c,{children:[Object(t.jsx)(me.a,{path:"/mail",children:Object(t.jsx)(ge,{})}),Object(t.jsx)(me.a,{path:"/",children:Object(t.jsx)(Ge,{})})]})]}),e&&Object(t.jsx)($e,{})]})})},Qe=Object(X.a)({reducer:{mail:Y}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));j.a.render(Object(t.jsx)(n.a.StrictMode,{children:Object(t.jsx)(W.a,{store:Qe,children:Object(t.jsx)(Ke,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},95:function(e,s,c){},96:function(e,s,c){},97:function(e,s,c){}},[[112,1,2]]]);
//# sourceMappingURL=main.ae043f7b.chunk.js.map