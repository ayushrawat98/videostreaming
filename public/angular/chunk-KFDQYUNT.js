import{a as F}from"./chunk-UW7F4QFY.js";import"./chunk-UVWPODLH.js";import"./chunk-VWCINB25.js";import{a as T}from"./chunk-3NUN5NFM.js";import{b as V,d as I}from"./chunk-VS2NQJWJ.js";import"./chunk-RH7ZN5VZ.js";import"./chunk-QZRAASS4.js";import"./chunk-2OCYWG4R.js";import{$a as f,Ab as o,Bb as s,Cb as y,Lb as L,Mc as x,Nc as m,Qc as a,Sc as l,Tb as c,Ub as g,Yb as h,_a as n,a as u,b as d,ja as b,ob as v,qb as p,vb as C,yb as S,zb as _}from"./chunk-ARRVSJN5.js";var M=(i,e)=>e.id;function O(i,e){if(i&1&&(o(0,"mat-chip-option"),c(1),s()),i&2){let t=e.$implicit;n(),g("@"+t.subscribedto.username)}}function U(i,e){if(i&1&&(o(0,"mat-chip-listbox",1),S(1,O,2,1,"mat-chip-option",null,M),s(),y(3,"app-videolist",2)),i&2){let t=L();n(),_(t.subList),n(2),p("videoList",t.allVideoList)("sortAllowed",!0)("latestFirst",!0)}}function w(i,e){i&1&&(o(0,"p",0),c(1,"No subscriptions! \u2517( T\uFE4FT )\u251B"),s())}var E=class i{constructor(e){this._userService=e}subList;allVideoList;ngOnInit(){this._userService.getUserSubscriptionList().subscribe(e=>{this.subList=e,this.getVideoList(e)})}getVideoList(e){this.allVideoList=e.map(t=>t.subscribedto.Videos.map(r=>d(u({},r),{User:{username:t.subscribedto.username}}))).flat()}static \u0275fac=function(t){return new(t||i)(f(T))};static \u0275cmp=b({type:i,selectors:[["app-subscription"]],standalone:!0,features:[h],decls:3,vars:2,consts:[[1,"center"],["aria-label","subscribed profile"],[3,"videoList","sortAllowed","latestFirst"]],template:function(t,r){t&1&&(o(0,"div"),v(1,U,4,3)(2,w,2,0,"p",0),s()),t&2&&(p("@slideFromTop",void 0),n(),C(r.subList&&r.subList.length>0?1:2))},dependencies:[I,V,F],styles:["p[_ngcontent-%COMP%]{color:#a9a9a9}"],data:{animation:[x("slideFromTop",[l(":enter",[a({opacity:0}),m("500ms ease-out",a({opacity:1}))]),l(":leave",[m("300ms ease-in",a({transform:"translateY(-100%)",opacity:0}))])])]}})};export{E as SubscriptionComponent};
