(this.webpackJsonpmatcha=this.webpackJsonpmatcha||[]).push([[4],{131:function(e,t,i){"use strict";i.r(t),i.d(t,"DialogContext",(function(){return re}));var o=i(36),n=i(81),a=i(2),r=i.n(a),s=i(105),c=i.n(s),l=i(135),d=i(137),x=i(138),b=i(139),u=i(133),h=i(94),m=i(121),p=i(38),j=i(3),g=function(){var e=Object(h.a)(),t=Object(m.a)(e.breakpoints.up("md"));return Object(j.jsx)(l.a,{position:"sticky",color:"transparent",sx:O.Header,children:Object(j.jsxs)(d.a,{disableGutters:!0,children:[Object(j.jsx)(n.a,{sx:{flexGrow:1},children:Object(j.jsxs)(x.a,{sx:{borderRadius:"0"},children:[Object(j.jsx)(p.c,{sx:O.Logo}),Object(j.jsx)(b.a,{sx:O.LogoName,children:"matcha"})]})}),t?Object(j.jsx)(f,{}):Object(j.jsx)(F,{})]})})},f=function(){var e=Object(a.useContext)(re),t=e.DialogStatus,i=e.setDialogStatus;return Object(j.jsx)(u.a,{sx:O.LoginButton,onClick:function(){return i(!t)},children:"Log in"})},F=function(){return Object(j.jsx)(x.a,{children:Object(j.jsx)(c.a,{sx:{color:"#FFFFFF"}})})},O={Header:{boxShadow:"inset 0px 44px 29px -17px #000000",px:{xs:".2rem",sm:".5rem",lg:"1rem"}},Logo:{width:{xs:"30px",md:"39.936px"},height:{xs:"40px",md:"52.97355px"},color:"#FFFFFF"},LogoName:{fontFamily:"Gotham",fontSize:{xs:"1.5rem",md:"2.4rem"},color:"white",lightHeight:"0",letterSpacing:"-3px"},LoginButton:{backgroundColor:"#FFFFFF",color:"#d6002f",fontFamily:"'Montserrat', sans-serif",fontSize:"1rem",fontWeight:"600",px:"24px",minHeight:"40px",textTransform:"capitalize","&:hover":{backgroundColor:"#FFFFFF"}}},k=i(127);function v(){var e=Object(h.a)();return Object(m.a)(e.breakpoints.up("md"))?Object(j.jsx)(y,{}):Object(j.jsx)(S,{})}var y=function(){var e=Object(a.useContext)(re),t=e.DialogStatus,i=e.setDialogStatus;return Object(j.jsx)(n.a,{sx:w.InnerHome,children:Object(j.jsxs)(k.a,{direction:"column",spacing:4,alignItems:"center",children:[Object(j.jsx)(b.a,{variant:"h1",sx:w.headTitle,children:"Swipe Right\xae"}),Object(j.jsx)(u.a,{sx:w.signUp,onClick:function(){return i(!t)},children:"Create Account"})]})})},S=function(){var e=Object(a.useContext)(re),t=e.DialogStatus,i=e.setDialogStatus;return Object(j.jsxs)(n.a,{sx:w.InnerHome,children:[Object(j.jsx)(b.a,{variant:"h1",sx:w.MobileheadTitle,children:"Swipe Right\xae"}),Object(j.jsxs)(k.a,{direction:"column",spacing:4,alignItems:"center",sx:{width:"80%"},children:[Object(j.jsx)(u.a,{sx:w.MobilesignUp,fullWidth:!0,onClick:function(){return i(!t)},children:"Create Account"}),Object(j.jsx)(u.a,{sx:w.MobileLogin,fullWidth:!0,onClick:function(){return i(!t)},children:"Login"})]})]})},w={InnerHome:{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",position:"absolute",width:"100%",top:0,bottom:0},headTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontWeight:"900"},signUp:{background:"linear-gradient(225deg,#ff6036,#fd267a)","&:hover":{background:"linear-gradient(225deg,#fd267a,#ff6036)"},color:"#FFFFFF",width:"315px",minHeight:"55px",borderRadius:"12em",fontWeight:"600"},MobilesignUp:{background:"#FFFFFF !important",color:"#000000",minHeight:"55px",borderRadius:"12em",textTransform:"capitalize",fontWeight:"600"},MobileLogin:{background:"transparent",color:"#FFFFFF",minHeight:"55px",borderRadius:"12em",border:"#FFFFFF 2px solid",textTransform:"capitalize",fontWeight:"600"},MobileheadTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontSize:"8vw",fontStyle:"italic"}};function C(){return Object(j.jsx)(n.a,{sx:T.HomePage,children:Object(j.jsxs)(n.a,{sx:T.FrontBgColor,children:[Object(j.jsx)(g,{}),Object(j.jsx)(v,{})]})})}var T={HomePage:{height:"100vh",backgroundImage:"url(/TinderClonePreview/imgs/homebg.webp)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"50%",boxShadow:"0 2px 6px 0 rgb(124 133 145 / 77%)",backgroundAttachment:"fixed"},FrontBgColor:{backgroundColor:"rgba(0,0,0,.4)",width:"100%",height:"100%",position:"relative",WebkitBoxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",lg:"none"},boxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",md:"none"}}},L=i(140),W=i(134),I=i(141);function R(){return Object(j.jsx)("div",{style:D.root,children:Object(j.jsx)(L.a,{maxWidth:"xl",children:Object(j.jsx)(W.a,{container:!0,spacing:3,children:z.map((function(e,t){return Object(j.jsx)(W.a,{item:!0,xs:12,md:4,children:Object(j.jsx)(A,{feedback:e})},t)}))})})})}var A=function(e){var t=e.feedback;return Object(j.jsxs)(k.a,{direction:"column",spacing:2,sx:D.feedbackBox,children:[Object(j.jsx)(b.a,{sx:D.matchName,children:t.matchName}),Object(j.jsx)(I.a,{}),Object(j.jsx)(b.a,{sx:D.desc,children:t.desc})]})},D={root:{padding:"3rem 0",background:"#FFFFFF",boxShadow:"inset 0px 10px 7px -5px rgb(124 133 145 / 77%)"},feedbackBox:{border:"1px solid #d4d8de",borderRadius:"8px",p:"1rem",boxShadow:"0 2px 6px 0 rgb(101 110 123 / 14%)",overflow:"auto"},matchName:{fontFamily:"Roboto",fontWeight:"900",fontSize:"1.2rem"},desc:{fontFamily:"Roboto",color:"#505965",whiteSpace:"pre-wrap",fontWeight:"300"}},z=[{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."}],B=i(109),H=i.n(B),P=i(107),q=i.n(P),M=i(108),G=i.n(M),N=i(110),U=i.n(N);function E(){return Object(j.jsx)("footer",{style:J.Footer,children:Object(j.jsx)(L.a,{maxWidth:"lg",children:Object(j.jsx)(W.a,{container:!0,children:Q.map((function(e,t){var i;return Object(j.jsxs)(W.a,{item:!0,sx:{flexGrow:1},children:[Object(j.jsx)(b.a,{sx:J.headTitle,paragraph:!0,children:e.head}),Object(j.jsx)(k.a,{direction:e.isIcon?"row":"column",spacing:1,sx:{paddingBottom:{xs:"2rem",sm:0}},children:null===e||void 0===e||null===(i=e.items)||void 0===i?void 0:i.map((function(t,i){return e.isIcon?Object(j.jsx)("a",{href:"/",children:t.label},i):Object(j.jsx)(b.a,{sx:J.links,children:t.label},i)}))})]},t)}))})})})}var J={Footer:{padding:"3rem 0",background:"linear-gradient(225deg,#ff6036,#fd267a)"},headTitle:{fontSize:"1.2rem",fontFamily:"Roboto",fontWeight:"900",textTransform:"uppercase",color:"#FFFFFF"},links:{color:"#FFFFFF",fontFamily:"Montserrat",fontSize:".9rem"},icon:{color:"#FFFFFF",fontSize:"30px"}},Q=[{head:"LEGAL",items:[{label:"Privacy",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]},{head:"Team",items:[{label:"Ayoub FARAGI",link:""},{label:"Omar BOULLAM",link:""}]},{head:"SOCIAL",isIcon:!0,items:[{label:Object(j.jsx)(q.a,{sx:J.icon}),link:""},{label:Object(j.jsx)(G.a,{sx:J.icon}),link:""},{label:Object(j.jsx)(H.a,{sx:J.icon}),link:""},{label:Object(j.jsx)(U.a,{sx:J.icon}),link:""}]},{head:"",items:[{label:"FAQ",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]}];function Y(){return Object(j.jsx)("div",{style:K.root,children:Object(j.jsxs)(L.a,{maxWidth:"xl",children:[Object(j.jsx)(I.a,{}),Object(j.jsxs)(n.a,{py:"3rem",children:[Object(j.jsx)(b.a,{sx:K.motivation,paragraph:!0,children:"Single people, listen up: If you\u2019re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it\u2019s the place to be to meet your next best match. Let\u2019s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world\u2019s most popular free dating app, you have millions of other single people at your fingertips and they\u2019re all ready to meet someone like you. Whether you\u2019re straight or in the LGBTQIA community, Tinder\u2019s here to bring you all the sparks."}),Object(j.jsx)(b.a,{sx:K.motivation,children:"There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U\u2019s got you covered. Tinder isn\u2019t your average dating site \u2014 it\u2019s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between."})]})]})})}var K={root:{background:"#FFFFFF",boxShadow:"inset 0px -14px 9px -11px  rgb(124 133 145 / 77%)"},motivation:{color:"#505965",fontWeight:"300"}},V=i(112),X=i.n(V),Z=i(111),$=i.n(Z),_=i(129),ee=i(132);function te(){var e=Object(a.useContext)(re),t=e.DialogStatus,i=e.setDialogStatus,o=Object(h.a)(),n=Object(m.a)(o.breakpoints.up("md"));return Object(j.jsxs)(_.a,{onClose:function(){return i(!1)},open:t,fullScreen:!n,sx:ne.root,children:[Object(j.jsx)(x.a,{sx:ne.close,onClick:function(){return i(!1)},children:Object(j.jsx)($.a,{sx:ne.closeIcon})}),Object(j.jsxs)(k.a,{sx:ne.innerDialog,direction:"column",spacing:3,alignItems:"center",children:[Object(j.jsx)(ie,{}),Object(j.jsx)(oe,{})]})]})}var ie=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p.c,{sx:ne.logo}),Object(j.jsx)(b.a,{variant:"h3",sx:ne.TitleHead,children:"Create Account"}),Object(j.jsxs)(b.a,{sx:ne.desc,children:["By clicking Log in, you agree to our"," ",Object(j.jsx)("span",{style:ne.link,children:"Terms"}),". Learn how we process your data in our ",Object(j.jsx)("span",{style:ne.link,children:"Privacy Policy"})," and"," ",Object(j.jsx)("span",{style:ne.link,children:"Cookie Policy"})]}),ae.map((function(e,t){return Object(j.jsxs)(u.a,{sx:ne.LoginButton,fullWidth:!0,children:[e.icon,e.label]},t)})),Object(j.jsx)(b.a,{sx:ne.paswd,children:"Forgot Password ?"}),Object(j.jsx)(I.a,{fullWidth:!0,sx:{width:"100%"}}),Object(j.jsx)(b.a,{sx:ne.TitleAvatars,children:"Check Our Githubs"})]})},oe=function(){return Object(j.jsxs)(k.a,{direction:"row",spacing:2,children:[Object(j.jsx)(x.a,{onClick:function(e){e.preventDefault(),window.location.href="https://github.com/biggymarley"},children:Object(j.jsx)(ee.a,{alt:"Ayoub FARAGI",src:"https://avatars.githubusercontent.com/u/58108317?v=4",sx:ne.avatar})}),Object(j.jsx)(x.a,{onClick:function(e){e.preventDefault(),window.location.href="https://github.com/oboualla"},children:Object(j.jsx)(ee.a,{alt:"Omar BOUALLAM",src:"https://avatars.githubusercontent.com/u/50252979?v=4",sx:ne.avatar})})]})},ne={root:{".MuiDialog-paper":{display:"flex",alignItems:"center",borderRadius:{xs:0,md:"8px"},position:"relative"}},close:{position:"absolute",right:10,top:10},closeIcon:{fontSize:"2rem",color:"#d4d8de"},LoginButton:{color:"#191e25",borderRadius:"12em",minHeight:"54px",border:"2px solid #505965",fontWeight:600,fontSize:"1rem",position:"relative",px:{xs:"1.5rem",md:"3rem"}},innerDialog:{maxWidth:"400px",px:"44px",py:"30px",textAlign:"center"},logo:{fontSize:"3rem",color:"#FE3F61"},TitleHead:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.6rem",letterSpacing:"-1px",textTransform:"uppercase"},TitleAvatars:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.4rem",letterSpacing:"-1px",textTransform:"uppercase"},desc:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300},paswd:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300,cursor:"pointer",textDecoration:"underline","&:hover":{textDecoration:"none"}},link:{fontWeight:900,textDecoration:"underline"},icon:{width:{xs:"1rem",md:"1.9rem"},height:{xs:"1rem",md:"1.9rem"},position:"absolute",left:10},avatar:{width:56,height:56}},ae=[{label:"Log In With Google",icon:Object(j.jsx)(p.b,{sx:ne.icon})},{label:"Log In With Facebook",icon:Object(j.jsx)(p.a,{sx:ne.icon})},{label:"Log In With Email",icon:Object(j.jsx)(X.a,{sx:ne.icon})}],re=r.a.createContext(!1);t.default=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),i=t[0],r=t[1];return Object(j.jsxs)(re.Provider,{value:{DialogStatus:i,setDialogStatus:r},children:[Object(j.jsxs)("div",{style:{position:"relative"},children:[Object(j.jsx)(C,{}),Object(j.jsxs)(n.a,{sx:se.sticky,children:[Object(j.jsx)(R,{}),Object(j.jsx)(Y,{})]})]}),Object(j.jsx)(E,{}),Object(j.jsx)(te,{})]})};var se={sticky:{position:window.innerHeight>=700?{xs:"static",md:"sticky"}:"static",bottom:0,zIndex:-1}}}}]);
//# sourceMappingURL=4.f35fea71.chunk.js.map