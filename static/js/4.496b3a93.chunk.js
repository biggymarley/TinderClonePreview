(this.webpackJsonpmatcha=this.webpackJsonpmatcha||[]).push([[4],{136:function(e,t,o){"use strict";o.r(t),o.d(t,"DialogContext",(function(){return se}));var i=o(38),n=o(84),a=o(1),r=o.n(a),s=o(110),c=o.n(s),l=o(140),d=o(142),x=o(143),u=o(144),b=o(138),p=o(97),h=o(126),m=o(40),j=o(2),g=function(){var e=Object(p.a)(),t=Object(h.a)(e.breakpoints.up("md"));return Object(j.jsx)(l.a,{position:"sticky",color:"transparent",sx:O.Header,children:Object(j.jsxs)(d.a,{disableGutters:!0,children:[Object(j.jsx)(n.a,{sx:{flexGrow:1},children:Object(j.jsxs)(x.a,{sx:{borderRadius:"0"},children:[Object(j.jsx)(m.c,{sx:O.Logo}),Object(j.jsx)(u.a,{sx:O.LogoName,children:"matcha"})]})}),t?Object(j.jsx)(f,{}):Object(j.jsx)(F,{})]})})},f=function(){var e=Object(a.useContext)(se),t=e.DialogStatus,o=e.setDialogStatus;return Object(j.jsx)(b.a,{sx:O.LoginButton,onClick:function(){return o(!t)},children:"Log in"})},F=function(){return Object(j.jsx)(x.a,{children:Object(j.jsx)(c.a,{sx:{color:"#FFFFFF"}})})},O={Header:{boxShadow:"inset 0px 44px 29px -17px #000000",px:{xs:".2rem",sm:".5rem",lg:"1rem"}},Logo:{width:{xs:"30px",md:"39.936px"},height:{xs:"40px",md:"52.97355px"},color:"#FFFFFF"},LogoName:{fontFamily:"Gotham",fontSize:{xs:"1.5rem",md:"2.4rem"},color:"white",lightHeight:"0",letterSpacing:"-3px"},LoginButton:{backgroundColor:"#FFFFFF",color:"#d6002f",fontFamily:"'Montserrat', sans-serif",fontSize:"1rem",fontWeight:"600",px:"24px",minHeight:"40px",textTransform:"capitalize","&:hover":{backgroundColor:"#FFFFFF"}}},y=o(132);function v(){var e=Object(a.useRef)(void 0),t=Object(p.a)();return Object(h.a)(t.breakpoints.up("md"))?Object(j.jsx)(k,{opacityRef:e}):Object(j.jsx)(w,{})}var k=function(e){var t=e.opacityRef,o=Object(a.useContext)(se),i=o.DialogStatus,r=o.setDialogStatus;return Object(a.useEffect)((function(){window.addEventListener("scroll",(function(e){t&&null!==t.current&&(0===window.scrollY?t.current.style.opacity=1:window.scrollY>t.current.clientHeight/2?t.current.style.opacity=0:t.current.style.opacity=1/(window.scrollY/50))}))}),[t]),Object(j.jsx)(n.a,{sx:S.InnerHome,ref:t,children:Object(j.jsxs)(y.a,{direction:"column",spacing:4,alignItems:"center",children:[Object(j.jsx)(u.a,{variant:"h1",sx:S.headTitle,children:"Swipe Right\xae"}),Object(j.jsx)(b.a,{sx:S.signUp,onClick:function(){return r(!i)},children:"Create Account"})]})})},w=function(){var e=Object(a.useContext)(se),t=e.DialogStatus,o=e.setDialogStatus;return Object(j.jsxs)(n.a,{sx:S.InnerHome,children:[Object(j.jsx)(u.a,{variant:"h1",sx:S.MobileheadTitle,children:"Swipe Right\xae"}),Object(j.jsxs)(y.a,{direction:"column",spacing:4,alignItems:"center",sx:{width:"80%"},children:[Object(j.jsx)(b.a,{sx:S.MobilesignUp,fullWidth:!0,onClick:function(){return o(!t)},children:"Create Account"}),Object(j.jsx)(b.a,{sx:S.MobileLogin,fullWidth:!0,onClick:function(){return o(!t)},children:"Login"})]})]})},S={InnerHome:{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",position:"absolute",width:"100%",top:0,bottom:0},headTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontWeight:"900"},signUp:{background:"linear-gradient(225deg,#ff6036,#fd267a)","&:hover":{background:"linear-gradient(225deg,#fd267a,#ff6036)"},color:"#FFFFFF",width:"315px",minHeight:"55px",borderRadius:"12em",fontWeight:"600"},MobilesignUp:{background:"#FFFFFF !important",color:"#000000",minHeight:"55px",borderRadius:"12em",textTransform:"capitalize",fontWeight:"600"},MobileLogin:{background:"transparent",color:"#FFFFFF",minHeight:"55px",borderRadius:"12em",border:"#FFFFFF 2px solid",textTransform:"capitalize",fontWeight:"600"},MobileheadTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontSize:"8vw",fontStyle:"italic"}},C=o.p+"static/media/homebg.5e9cc30c.webp";function L(){return Object(j.jsx)(n.a,{sx:T.HomePage,children:Object(j.jsxs)(n.a,{sx:T.FrontBgColor,children:[Object(j.jsx)(g,{}),Object(j.jsx)(v,{})]})})}var T={HomePage:{height:"100vh",backgroundImage:"url(".concat(C,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50%",boxShadow:"0 2px 6px 0 rgb(124 133 145 / 77%)",backgroundAttachment:"fixed"},FrontBgColor:{backgroundColor:"rgba(0,0,0,.4)",width:"100%",height:"100%",position:"relative",WebkitBoxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",lg:"none"},boxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",md:"none"}}},W=o(145),R=o(139),I=o(146);function A(){return Object(j.jsx)("div",{style:z.root,children:Object(j.jsx)(W.a,{maxWidth:"xl",children:Object(j.jsx)(R.a,{container:!0,spacing:3,children:B.map((function(e,t){return Object(j.jsx)(R.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(D,{feedback:e})},t)}))})})})}var D=function(e){var t=e.feedback;return Object(j.jsxs)(y.a,{direction:"column",spacing:2,sx:z.feedbackBox,children:[Object(j.jsx)(u.a,{sx:z.matchName,children:t.matchName}),Object(j.jsx)(I.a,{}),Object(j.jsx)(u.a,{sx:z.desc,children:t.desc})]})},z={root:{padding:"3rem 0",background:"#FFFFFF",boxShadow:"inset 0px 10px 7px -5px rgb(124 133 145 / 77%)"},feedbackBox:{border:"1px solid #d4d8de",borderRadius:"8px",p:"1rem",boxShadow:"0 2px 6px 0 rgb(101 110 123 / 14%)",overflow:"auto"},matchName:{fontFamily:"Roboto",fontWeight:"900",fontSize:"1.2rem"},desc:{fontFamily:"Roboto",color:"#505965",whiteSpace:"pre-wrap",fontWeight:"300"}},B=[{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."}],H=o(114),P=o.n(H),q=o(112),M=o.n(q),G=o(113),N=o.n(G),U=o(115),E=o.n(U);function Y(){return Object(j.jsx)("footer",{style:J.Footer,children:Object(j.jsx)(W.a,{maxWidth:"lg",children:Object(j.jsx)(R.a,{container:!0,children:Q.map((function(e,t){var o;return Object(j.jsxs)(R.a,{item:!0,sx:{flexGrow:1},children:[Object(j.jsx)(u.a,{sx:J.headTitle,paragraph:!0,children:e.head}),Object(j.jsx)(y.a,{direction:e.isIcon?"row":"column",spacing:1,sx:{paddingBottom:{xs:"2rem",sm:0}},children:null===e||void 0===e||null===(o=e.items)||void 0===o?void 0:o.map((function(t,o){return e.isIcon?Object(j.jsx)("a",{href:"/",children:t.label},o):Object(j.jsx)(u.a,{sx:J.links,children:t.label},o)}))})]},t)}))})})})}var J={Footer:{padding:"3rem 0",background:"linear-gradient(225deg,#ff6036,#fd267a)"},headTitle:{fontSize:"1.2rem",fontFamily:"Roboto",fontWeight:"900",textTransform:"uppercase",color:"#FFFFFF"},links:{color:"#FFFFFF",fontFamily:"Montserrat",fontSize:".9rem"},icon:{color:"#FFFFFF",fontSize:"30px"}},Q=[{head:"LEGAL",items:[{label:"Privacy",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]},{head:"Team",items:[{label:"Ayoub FARAGI",link:""},{label:"Omar BOULLAM",link:""}]},{head:"SOCIAL",isIcon:!0,items:[{label:Object(j.jsx)(M.a,{sx:J.icon}),link:""},{label:Object(j.jsx)(N.a,{sx:J.icon}),link:""},{label:Object(j.jsx)(P.a,{sx:J.icon}),link:""},{label:Object(j.jsx)(E.a,{sx:J.icon}),link:""}]},{head:"",items:[{label:"FAQ",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]}];function K(){return Object(j.jsx)("div",{style:V.root,children:Object(j.jsxs)(W.a,{maxWidth:"xl",children:[Object(j.jsx)(I.a,{}),Object(j.jsxs)(n.a,{py:"3rem",children:[Object(j.jsx)(u.a,{sx:V.motivation,paragraph:!0,children:"Single people, listen up: If you\u2019re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it\u2019s the place to be to meet your next best match. Let\u2019s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world\u2019s most popular free dating app, you have millions of other single people at your fingertips and they\u2019re all ready to meet someone like you. Whether you\u2019re straight or in the LGBTQIA community, Tinder\u2019s here to bring you all the sparks."}),Object(j.jsx)(u.a,{sx:V.motivation,children:"There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U\u2019s got you covered. Tinder isn\u2019t your average dating site \u2014 it\u2019s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between."})]})]})})}var V={root:{background:"#FFFFFF",boxShadow:"inset 0px -14px 9px -11px  rgb(124 133 145 / 77%)"},motivation:{color:"#505965",fontWeight:"300"}},X=o(117),Z=o.n(X),$=o(116),_=o.n($),ee=o(134),te=o(137);function oe(){var e=Object(a.useContext)(se),t=e.DialogStatus,o=e.setDialogStatus,i=Object(p.a)(),n=Object(h.a)(i.breakpoints.up("md"));return Object(j.jsxs)(ee.a,{onClose:function(){return o(!1)},open:t,fullScreen:!n,sx:ae.root,children:[Object(j.jsx)(x.a,{sx:ae.close,onClick:function(){return o(!1)},children:Object(j.jsx)(_.a,{sx:ae.closeIcon})}),Object(j.jsxs)(y.a,{sx:ae.innerDialog,direction:"column",spacing:3,alignItems:"center",children:[Object(j.jsx)(ie,{}),Object(j.jsx)(ne,{})]})]})}var ie=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(m.c,{sx:ae.logo}),Object(j.jsx)(u.a,{variant:"h3",sx:ae.TitleHead,children:"Create Account"}),Object(j.jsxs)(u.a,{sx:ae.desc,children:["By clicking Log in, you agree to our"," ",Object(j.jsx)("span",{style:ae.link,children:"Terms"}),". Learn how we process your data in our ",Object(j.jsx)("span",{style:ae.link,children:"Privacy Policy"})," and"," ",Object(j.jsx)("span",{style:ae.link,children:"Cookie Policy"})]}),re.map((function(e,t){return Object(j.jsxs)(b.a,{sx:ae.LoginButton,fullWidth:!0,children:[e.icon,e.label]},t)})),Object(j.jsx)(u.a,{sx:ae.paswd,children:"Forgot Password ?"}),Object(j.jsx)(I.a,{fullWidth:!0,sx:{width:"100%"}}),Object(j.jsx)(u.a,{sx:ae.TitleAvatars,children:"Check Our Githubs"})]})},ne=function(){return Object(j.jsxs)(y.a,{direction:"row",spacing:2,children:[Object(j.jsx)(x.a,{onClick:function(e){e.preventDefault(),window.location.href="https://github.com/biggymarley"},children:Object(j.jsx)(te.a,{alt:"Ayoub FARAGI",src:"https://avatars.githubusercontent.com/u/58108317?v=4",sx:ae.avatar})}),Object(j.jsx)(x.a,{onClick:function(e){e.preventDefault(),window.location.href="https://github.com/oboualla"},children:Object(j.jsx)(te.a,{alt:"Omar BOUALLAM",src:"https://avatars.githubusercontent.com/u/50252979?v=4",sx:ae.avatar})})]})},ae={root:{".MuiDialog-paper":{display:"flex",alignItems:"center",borderRadius:{xs:0,md:"8px"},position:"relative"}},close:{position:"absolute",right:10,top:10,"&:hover":{backgroundColor:"transparent"}},closeIcon:{fontSize:"2rem",color:"#d4d8de",transition:"transform .2s ease","&:hover":{transform:"rotate(90deg)"}},LoginButton:{color:"#191e25",borderRadius:"12em",minHeight:"54px",border:"2px solid #505965",fontWeight:600,fontSize:"1rem",position:"relative",px:{xs:"1.5rem",md:"3rem"}},innerDialog:{maxWidth:"400px",px:"44px",py:"30px",textAlign:"center"},logo:{fontSize:"3rem",color:"#FE3F61"},TitleHead:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.6rem",letterSpacing:"-1px",textTransform:"uppercase"},TitleAvatars:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.4rem",letterSpacing:"-1px",textTransform:"uppercase"},desc:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300},paswd:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300,cursor:"pointer",textDecoration:"underline","&:hover":{textDecoration:"none"}},link:{fontWeight:900,textDecoration:"underline"},icon:{width:{xs:"1rem",md:"1.9rem"},height:{xs:"1rem",md:"1.9rem"},position:"absolute",left:10},avatar:{width:56,height:56}},re=[{label:"Log In With Google",icon:Object(j.jsx)(m.b,{sx:ae.icon})},{label:"Log In With Facebook",icon:Object(j.jsx)(m.a,{sx:ae.icon})},{label:"Log In With Email",icon:Object(j.jsx)(Z.a,{sx:ae.icon})}],se=r.a.createContext(!1);t.default=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),o=t[0],r=t[1];return Object(j.jsxs)(se.Provider,{value:{DialogStatus:o,setDialogStatus:r},children:[Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)(L,{}),Object(j.jsxs)(n.a,{sx:ce.sticky,children:[Object(j.jsx)(A,{}),Object(j.jsx)(K,{})]})]}),Object(j.jsx)(Y,{}),Object(j.jsx)(oe,{})]})};var ce={sticky:{position:window.innerHeight>=700?{xs:"static",md:"sticky"}:"static",bottom:0,zIndex:-1}}}}]);
//# sourceMappingURL=4.496b3a93.chunk.js.map