(this.webpackJsonpmatcha=this.webpackJsonpmatcha||[]).push([[4],{136:function(e,t,o){"use strict";o.r(t),o.d(t,"DialogContext",(function(){return re}));var i=o(38),n=o(84),r=o(1),a=o.n(r),s=o(140),c=o(142),l=o(143),d=o(144),x=o(138),u=o(97),b=o(126),h=o(40),p=o(2),m=function(){var e=Object(u.a)(),t=Object(b.a)(e.breakpoints.up("md"));return Object(p.jsx)(s.a,{position:"sticky",color:"transparent",sx:f.Header,children:Object(p.jsxs)(c.a,{disableGutters:!0,children:[Object(p.jsx)(n.a,{sx:{flexGrow:1},children:Object(p.jsxs)(l.a,{sx:{borderRadius:"0"},children:[Object(p.jsx)(h.c,{sx:f.Logo}),Object(p.jsx)(d.a,{sx:f.LogoName,children:"matcha"})]})}),t?Object(p.jsx)(j,{}):Object(p.jsx)(g,{})]})})},j=function(){var e=Object(r.useContext)(re),t=e.DialogStatus,o=e.setDialogStatus;return Object(p.jsx)(x.a,{sx:f.LoginButton,onClick:function(){return o(!t)},children:"Log in"})},g=function(){return Object(p.jsx)(p.Fragment,{})},f={Header:{boxShadow:"inset 0px 44px 29px -17px #000000",px:{xs:".2rem",sm:".5rem",lg:"1rem"}},Logo:{width:{xs:"30px",md:"39.936px"},height:{xs:"40px",md:"52.97355px"},color:"#FFFFFF"},LogoName:{fontFamily:"Gotham",fontSize:{xs:"1.5rem",md:"2.4rem"},color:"white",lightHeight:"0",letterSpacing:"-3px"},LoginButton:{backgroundColor:"#FFFFFF",color:"#d6002f",fontFamily:"'Montserrat', sans-serif",fontSize:"1rem",fontWeight:"600",px:"24px",minHeight:"40px",textTransform:"capitalize","&:hover":{backgroundColor:"#FFFFFF"}}},O=o(129);function F(){var e=Object(r.useRef)(void 0),t=Object(u.a)();return Object(b.a)(t.breakpoints.up("md"))?Object(p.jsx)(y,{opacityRef:e}):Object(p.jsx)(v,{})}var y=function(e){var t=e.opacityRef,o=Object(r.useContext)(re),i=o.DialogStatus,a=o.setDialogStatus;return Object(r.useEffect)((function(){window.addEventListener("scroll",(function(e){t&&null!==t.current&&(0===window.scrollY?t.current.style.opacity=1:window.scrollY>t.current.clientHeight/2?t.current.style.opacity=0:t.current.style.opacity=1/(window.scrollY/50))}))}),[t]),Object(p.jsx)(n.a,{sx:k.InnerHome,ref:t,children:Object(p.jsxs)(O.a,{direction:"column",spacing:4,alignItems:"center",children:[Object(p.jsxs)(d.a,{variant:"h1",sx:k.headTitle,children:["Swipe Right",Object(p.jsx)("sup",{children:"\xae"})]}),Object(p.jsx)(x.a,{sx:k.signUp,onClick:function(){return a(!i)},children:"Create Account"})]})})},v=function(){var e=Object(r.useContext)(re),t=e.DialogStatus,o=e.setDialogStatus;return Object(p.jsxs)(n.a,{sx:k.InnerHome,children:[Object(p.jsxs)(d.a,{variant:"h1",sx:k.MobileheadTitle,children:["Swipe Right",Object(p.jsx)("sup",{children:"\xae"})]}),Object(p.jsxs)(O.a,{direction:"column",spacing:4,alignItems:"center",sx:{width:"80%"},children:[Object(p.jsx)(x.a,{sx:k.MobilesignUp,fullWidth:!0,onClick:function(){return o(!t)},children:"Create Account"}),Object(p.jsx)(x.a,{sx:k.MobileLogin,fullWidth:!0,onClick:function(){return o(!t)},children:"Login"})]})]})},k={InnerHome:{display:"flex",alignItems:"center",justifyContent:"space-evenly",flexDirection:"column",position:"absolute",width:"100%",top:0,bottom:0},headTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontWeight:"900"},signUp:{background:"linear-gradient(225deg,#ff6036,#fd267a)","&:hover":{background:"linear-gradient(225deg,#fd267a,#ff6036)"},color:"#FFFFFF",width:"315px",minHeight:"55px",borderRadius:"12em",fontWeight:"600"},MobilesignUp:{background:"#FFFFFF !important",color:"#000000",minHeight:"55px",borderRadius:"12em",textTransform:"capitalize",fontWeight:"600"},MobileLogin:{background:"transparent",color:"#FFFFFF",minHeight:"55px",borderRadius:"12em",border:"#FFFFFF 2px solid",textTransform:"capitalize",fontWeight:"600"},MobileheadTitle:{color:"#FFFFFF",fontFamily:"'Roboto', sans-serif",letterSpacing:"2px",fontSize:"8vw",fontStyle:"italic"}},w=o.p+"static/media/homebg.5e9cc30c.webp";function S(){return Object(p.jsx)(n.a,{sx:C.HomePage,children:Object(p.jsxs)(n.a,{sx:C.FrontBgColor,children:[Object(p.jsx)(m,{}),Object(p.jsx)(F,{})]})})}var C={HomePage:{height:"100vh",backgroundImage:"url(".concat(w,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundAttachment:"fixed",backgroundPosition:"50%",boxShadow:"0 2px 6px 0 rgb(124 133 145 / 77%)"},FrontBgColor:{backgroundColor:"rgba(0,0,0,.4)",width:"100%",height:"100%",position:"relative",WebkitBoxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",lg:"none"},boxShadow:{xs:"inset 0px -28vh 50vh -16px #000000",md:"none"}}},W=o(145),L=o(139),T=o(146);function R(){return Object(p.jsx)("div",{style:A.root,children:Object(p.jsx)(W.a,{maxWidth:"xl",children:Object(p.jsx)(L.a,{container:!0,spacing:3,children:D.map((function(e,t){return Object(p.jsx)(L.a,{item:!0,xs:12,md:4,children:Object(p.jsx)(I,{feedback:e})},t)}))})})})}var I=function(e){var t=e.feedback;return Object(p.jsxs)(O.a,{direction:"column",spacing:2,sx:A.feedbackBox,children:[Object(p.jsx)(d.a,{sx:A.matchName,children:t.matchName}),Object(p.jsx)(T.a,{}),Object(p.jsx)(d.a,{sx:A.desc,children:t.desc})]})},A={root:{padding:"3rem 0",background:"#FFFFFF",boxShadow:"inset 0px 10px 7px -5px rgb(124 133 145 / 77%)"},feedbackBox:{border:"1px solid #d4d8de",borderRadius:"8px",p:"1rem",boxShadow:"0 2px 6px 0 rgb(101 110 123 / 14%)",overflow:"auto"},matchName:{fontFamily:"Roboto",fontWeight:"900",fontSize:"1.2rem"},desc:{fontFamily:"Roboto",color:"#505965",whiteSpace:"pre-wrap",fontWeight:"300"}},D=[{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."},{matchName:"Biggy & Roberta",desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, ab suscipit quos impedit repellat sed iure explicabo at assumenda aspernatur, nemo rem aperiam quia reprehenderit ipsam quo. Accusantium, magni asperiores."}],z=o(113),B=o.n(z),H=o(110),P=o.n(H),q=o(112),M=o.n(q),G=o(114),N=o.n(G);function U(){return Object(p.jsx)("footer",{style:E.Footer,children:Object(p.jsx)(W.a,{maxWidth:"lg",children:Object(p.jsx)(L.a,{container:!0,children:Y.map((function(e,t){var o;return Object(p.jsxs)(L.a,{item:!0,sx:{flexGrow:1},children:[Object(p.jsx)(d.a,{sx:E.headTitle,paragraph:!0,children:e.head}),Object(p.jsx)(O.a,{direction:e.isIcon?{xs:"column",sm:"row"}:"column",spacing:1,sx:{paddingBottom:{xs:"2rem",sm:0}},children:null===e||void 0===e||null===(o=e.items)||void 0===o?void 0:o.map((function(t,o){return e.isIcon?Object(p.jsx)("a",{href:"/",children:t.label},o):Object(p.jsx)(d.a,{sx:E.links,children:t.label},o)}))})]},t)}))})})})}var E={Footer:{padding:"3rem 0",background:"linear-gradient(225deg,#ff6036,#fd267a)"},headTitle:{fontSize:"1.2rem",fontFamily:"Roboto",fontWeight:"900",textTransform:"uppercase",color:"#FFFFFF"},links:{color:"#FFFFFF",fontFamily:"Montserrat",fontSize:".9rem"},icon:{color:"#FFFFFF",fontSize:"30px"}},Y=[{head:"LEGAL",items:[{label:"Privacy",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]},{head:"Team",items:[{label:"Ayoub FARAGI",link:""},{label:"Omar BOULLAM",link:""}]},{head:"SOCIAL",isIcon:!0,items:[{label:Object(p.jsx)(P.a,{sx:E.icon}),link:""},{label:Object(p.jsx)(M.a,{sx:E.icon}),link:""},{label:Object(p.jsx)(B.a,{sx:E.icon}),link:""},{label:Object(p.jsx)(N.a,{sx:E.icon}),link:""}]},{head:"",items:[{label:"FAQ",link:""},{label:"Terms",link:""},{label:"Cookie Policy",link:""},{label:"Intellectual Property",link:""}]}];function J(){return Object(p.jsx)("div",{style:Q.root,children:Object(p.jsxs)(W.a,{maxWidth:"xl",children:[Object(p.jsx)(T.a,{}),Object(p.jsxs)(n.a,{py:"3rem",children:[Object(p.jsx)(d.a,{sx:Q.motivation,paragraph:!0,children:"Single people, listen up: If you\u2019re looking for love, want to start dating, or just keep it casual, you need to be on Tinder. With over 55 billion matches made, it\u2019s the place to be to meet your next best match. Let\u2019s be real, the dating landscape looks very different today, as most people are meeting online. With Tinder, the world\u2019s most popular free dating app, you have millions of other single people at your fingertips and they\u2019re all ready to meet someone like you. Whether you\u2019re straight or in the LGBTQIA community, Tinder\u2019s here to bring you all the sparks."}),Object(p.jsx)(d.a,{sx:Q.motivation,children:"There really is something for everyone on Tinder. Want to get into a relationship? You got it. Trying to find some new friends? Say no more. New kid on campus and looking to make the most of your college experience? Tinder U\u2019s got you covered. Tinder isn\u2019t your average dating site \u2014 it\u2019s the most diverse dating app, where adults of all backgrounds and experiences are invited to make connections, memories, and everything in between."})]})]})})}var Q={root:{background:"#FFFFFF",boxShadow:"inset 0px -14px 9px -11px  rgb(124 133 145 / 77%)"},motivation:{color:"#505965",fontWeight:"300"}},K=o(116),V=o.n(K),X=o(115),Z=o.n(X),$=o(134),_=o(137);function ee(){var e=Object(r.useContext)(re),t=e.DialogStatus,o=e.setDialogStatus,i=Object(u.a)(),n=Object(b.a)(i.breakpoints.up("md"));return Object(p.jsxs)($.a,{onClose:function(){return o(!1)},open:t,fullScreen:!n,sx:ie.root,children:[Object(p.jsx)(l.a,{sx:ie.close,onClick:function(){return o(!1)},children:Object(p.jsx)(Z.a,{sx:ie.closeIcon})}),Object(p.jsxs)(O.a,{sx:ie.innerDialog,direction:"column",spacing:3,alignItems:"center",children:[Object(p.jsx)(te,{}),Object(p.jsx)(oe,{})]})]})}var te=function(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(h.c,{sx:ie.logo}),Object(p.jsx)(d.a,{variant:"h3",sx:ie.TitleHead,children:"Create Account"}),Object(p.jsxs)(d.a,{sx:ie.desc,children:["By clicking Log in, you agree to our"," ",Object(p.jsx)("span",{style:ie.link,children:"Terms"}),". Learn how we process your data in our ",Object(p.jsx)("span",{style:ie.link,children:"Privacy Policy"})," and"," ",Object(p.jsx)("span",{style:ie.link,children:"Cookie Policy"})]}),Object(p.jsx)(x.a,{sx:ie.LoginButton,fullWidth:!0,children:"Create Account"}),Object(p.jsx)(T.a,{fullWidth:!0,sx:{width:"100%"},children:Object(p.jsx)(d.a,{sx:ie.desc,style:{fontWeight:600},children:"Or"})}),ne.map((function(e,t){return Object(p.jsxs)(x.a,{sx:ie.LoginButton,fullWidth:!0,children:[e.icon,e.label]},t)})),Object(p.jsx)(d.a,{sx:ie.paswd,children:"Forgot Password ?"}),Object(p.jsx)(T.a,{fullWidth:!0,sx:{width:"100%"}}),Object(p.jsx)(d.a,{sx:ie.TitleAvatars,children:"Check Our Githubs"})]})},oe=function(){return Object(p.jsxs)(O.a,{direction:"row",spacing:2,children:[Object(p.jsx)(l.a,{onClick:function(e){e.preventDefault(),window.location.href="https://github.com/biggymarley"},children:Object(p.jsx)(_.a,{alt:"Ayoub FARAGI",src:"https://avatars.githubusercontent.com/u/58108317?v=4",sx:ie.avatar})}),Object(p.jsx)(l.a,{onClick:function(e){e.preventDefault(),window.location.href="https://github.com/oboualla"},children:Object(p.jsx)(_.a,{alt:"Omar BOUALLAM",src:"https://avatars.githubusercontent.com/u/50252979?v=4",sx:ie.avatar})})]})},ie={root:{".MuiDialog-paper":{display:"flex",alignItems:"center",borderRadius:{xs:0,md:"8px"},position:"relative"}},close:{position:"absolute",right:10,top:10,"&:hover":{backgroundColor:"transparent"}},closeIcon:{fontSize:"2rem",color:"#d4d8de",transition:"transform .2s ease","&:hover":{transform:"rotate(90deg)"}},LoginButton:{color:"#191e25",borderRadius:"12em",minHeight:"54px",border:"2px solid #505965",fontWeight:600,fontSize:"1rem",position:"relative",px:{xs:"1.5rem",md:"3rem"}},innerDialog:{maxWidth:"400px",px:"44px",py:"30px",textAlign:"center"},logo:{fontSize:"3rem",color:"#FE3F61"},TitleHead:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.6rem",letterSpacing:"-1px",textTransform:"uppercase"},TitleAvatars:{fontFamily:"Roboto",fontStyle:"italic",fontSize:"1.4rem",letterSpacing:"-1px",textTransform:"uppercase"},desc:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300},paswd:{fontFamily:"Roboto",fontSize:".9rem",fontWeight:300,cursor:"pointer",textDecoration:"underline","&:hover":{textDecoration:"none"}},link:{fontWeight:900,textDecoration:"underline"},icon:{width:{xs:"1rem",md:"1.9rem"},height:{xs:"1rem",md:"1.9rem"},position:"absolute",left:10},avatar:{width:56,height:56}},ne=[{label:"Log In With Google",icon:Object(p.jsx)(h.b,{sx:ie.icon})},{label:"Log In With Facebook",icon:Object(p.jsx)(h.a,{sx:ie.icon})},{label:"Log In With username",icon:Object(p.jsx)(V.a,{sx:ie.icon})}],re=a.a.createContext(!1);t.default=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),o=t[0],a=t[1];return Object(p.jsxs)(re.Provider,{value:{DialogStatus:o,setDialogStatus:a},children:[Object(p.jsxs)("div",{style:{position:"relative"},children:[Object(p.jsx)(S,{}),Object(p.jsxs)(n.a,{sx:ae.sticky,children:[Object(p.jsx)(R,{}),Object(p.jsx)(J,{})]})]}),Object(p.jsx)(U,{}),Object(p.jsx)(ee,{})]})};var ae={sticky:{position:window.innerHeight>=700?{xs:"static",md:"sticky"}:"static",bottom:0,zIndex:-1}}}}]);
//# sourceMappingURL=4.14b26050.chunk.js.map