(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,n,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4960)}])},4960:function(e,n,i){"use strict";i.r(n),i.d(n,{default:function(){return w}});var r=i(5893),s=i(9008),t=i.n(s),o=i(7160),a=i.n(o),c=i(1664),l=i.n(c);function d(e){let n=[];for(let i=0;i<e.numArticles;i++)n.push((0,r.jsxs)("li",{className:a().li,children:["Update ",i+1]},i));return(0,r.jsx)("ol",{className:a().ol,children:n})}function h(e){let n=[];for(let e=0;e<5;e++)n.push((0,r.jsxs)("li",{className:a().li,children:["Something interesting coming here: ",e+1]},e));return(0,r.jsx)("ul",{className:a().ol,children:n})}var m=i(682),u=i(8340),_=i(5316);function j(e){return(0,r.jsx)(_.Z,{className:a().navBar,variant:"dark",fixed:"top",children:(0,r.jsxs)(m.Z,{children:[(0,r.jsx)(_.Z.Brand,{href:"#home",children:e.username}),(0,r.jsxs)(u.Z,{className:"me-auto",children:[(0,r.jsx)(u.Z.Link,{href:"#R_Blog",children:"R-Blog"})," ",(0,r.jsx)(u.Z.Link,{href:"#funStuff",children:"funStuff"}),(0,r.jsx)(u.Z.Link,{href:"#projects",children:"Projects"})]})]})})}var f=i(7294),p=i(9920);function g(e,n,i,r){this.title=e,this.desc=n,this.banner=i,this.URL=r}var x=[new g("Project 1","Project description goes here","IMG.url","ProjectRepo.url"),new g("Project 2","Project description goes here","IMG.url","ProjectRepo.url"),new g("Project 3","Project description goes here","IMG.url","ProjectRepo.url"),new g("Project 4","Project description goes here","IMG.url","ProjectRepo.url"),new g("Project 5","Project description goes here","IMG.url","ProjectRepo.url"),new g("Project 6","Project description goes here","IMG.url","ProjectRepo.url")];let v=()=>{let[e,n]=(0,f.useState)({width:void 0,height:void 0});return(0,f.useEffect)(()=>{function e(){n({width:window.innerWidth,height:window.innerHeight})}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),e},P="Moxenseya",N=["Game Development","Cooking","Art"];function w(){function e(){i(()=>Math.floor(Math.random()*N.length))}let[n,i]=(0,f.useState)(0);(0,f.useEffect)(()=>{e()},[]);var s=N[n];let[o,c]=(0,f.useState)(!1),[m,u]=(0,f.useState)("Software Engineer"),{width:_,height:g}=v();function w(){c(e=>!e),u(e=>o?"Software Engineer":"Game Developer")}let k=(0,p.useSpringRef)(),H=(0,p.useSpring)({ref:k,from:{transform:"scale(0.4)",opacity:0},to:{transform:"scale(1.0)",opacity:1}}),S=(0,p.useSpringRef)(),E=(0,p.useSpring)({ref:S,from:{y:-100,opacity:0},to:{y:0,opacity:1}});return(0,p.useChain)([k,S],[0,1],300),(0,r.jsxs)("div",{className:a().container,id:"home",children:[(0,r.jsxs)(t(),{children:[(0,r.jsxs)("title",{children:[P,"'s Homepage"]}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsx)(j,{username:P}),(0,r.jsxs)("div",{className:a().mainPage,children:[(0,r.jsx)("div",{children:(0,r.jsx)(p.animated.div,{style:{...H},children:(0,r.jsx)("img",{src:"./mainLogo.jpg",alt:"MainLogo",className:a().mainLogo})})}),(0,r.jsx)(p.animated.div,{style:{...E},children:(0,r.jsxs)("h1",{className:a().title,children:["Hello, It's ",(0,r.jsxs)("a",{children:[P,"!"]})]})})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{className:a().description,children:["I'm a ",(0,r.jsx)("code",{className:a().code,onMouseEnter:w,onMouseLeave:w,children:m}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("p",{className:a().description,children:["I love making fun things, and making things fun.",(0,r.jsx)("br",{}),'Other than programming, I spend my time experimenting with " ',(0,r.jsxs)("a",{onClick:e,children:[s,' "']})]})]}),(0,r.jsxs)("div",{className:a().sneakPeek,id:"R_Blog",children:[(0,r.jsxs)("h1",{children:["What's on my ",(0,r.jsx)(l(),{href:"/r_blog",children:"Mind"}),":"]}),(0,r.jsx)(d,{numArticles:8})]}),(0,r.jsx)("div",{className:a().gapping}),(0,r.jsxs)("div",{className:a().funStuff,id:"funStuff",children:[(0,r.jsx)("h1",{children:"Here's something cool:"}),(0,r.jsx)(h,{})]}),(0,r.jsx)("div",{className:a().gapping}),(0,r.jsx)("div",{className:a().gapping,id:"projects"}),(0,r.jsx)("h1",{children:"What I've been up to:"}),(0,r.jsx)("div",{className:a().grid,children:x.map(e=>(0,r.jsxs)("a",{className:a().card,children:[" ",(0,r.jsxs)("h2",{children:[e.title," → (",e.banner,")"]}),(0,r.jsxs)("p",{children:[e.desc," , (",e.URL,")"]})]},e.title))}),(0,r.jsx)("form",{children:(0,r.jsx)("input",{type:"text",name:"Code",placeholder:"Enter Code",className:a().hiddenBar})})]}),(0,r.jsx)("footer",{className:a().footer,children:(0,r.jsxs)(l(),{href:"/references",target:"_self",children:["Made with ❤"," "," by ",P]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",hiddenBar:"Home_hiddenBar__kWI39",sneakPeek:"Home_sneakPeek__M5TDD",gapping:"Home_gapping__30G_g",funStuff:"Home_funStuff__81kGT",ol:"Home_ol__kpTPv",li:"Home_li__2GCYU",mainPage:"Home_mainPage__EC3Ox",mainLogo:"Home_mainLogo__6nS3s",navBar:"Home_navBar__DtDJB",puzzleEntries:"Home_puzzleEntries__zuIbg"}}},function(e){e.O(0,[920,664,611,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);