import{a as h}from"./chunk-DUKFUFLP.js";import{a as I}from"./chunk-F3F7ORAT.js";import"./chunk-GZZEAWPY.js";import"./chunk-L3Y6N4D2.js";import"./chunk-V4AQGE42.js";import"./chunk-7A36RTCW.js";import{g as y}from"./chunk-LPBAIIL6.js";import"./chunk-GSLM447E.js";import"./chunk-E6M6JL5Y.js";import"./chunk-4UMS5QRT.js";import{Ab as o,Eb as v,Hb as c,Jb as w,Qb as b,Rb as i,Tb as f,Wb as A,Ya as _,Za as S,ha as C,ob as k,qa as d,ra as s,ub as x,wb as V,xb as g,yb as n,zb as r}from"./chunk-J7P67657.js";function T(a,t){if(a&1){let e=v();n(0,"a",4),i(1),r(),n(2,"p"),i(3),r(),n(4,"button",3),c("click",function(){let m=d(e).$implicit,p=w();return s(p.deletevideo(m.id))}),i(5,"delete"),r()}if(a&2){let e=t.$implicit;k("routerLink","/video/"+e.id),_(),f("video id : ",e.id,""),_(2),f("reports : ",e.reportCount,"")}}var E=class a{constructor(t){this._adminService=t}reportList;ngOnInit(){this.getReport()}deleteuser(t){this._adminService.deleteUserById(t).subscribe(e=>{alert("deleted")})}deletevideo(t){this._adminService.deleteVideoById(t).subscribe(e=>{alert("deleted")})}deletecomment(t){this._adminService.deleteCommentById(t).subscribe(e=>{alert("deleted")})}getReport(){this._adminService.getAllReportedVideos().subscribe(t=>{this.reportList=t})}static \u0275fac=function(e){return new(e||a)(S(h))};static \u0275cmp=C({type:a,selectors:[["app-admin"]],standalone:!0,features:[A],decls:25,vars:0,consts:[["userid",""],["videoid",""],["commentid",""],[3,"click"],[3,"routerLink"]],template:function(e,l){if(e&1){let m=v();i(0,`delete user by id
`),o(1,"input",null,0),n(3,"button",3),c("click",function(){d(m);let u=b(2);return s(l.deleteuser(u.value))}),i(4,"delete"),r(),o(5,"br"),i(6,` delete video by id
`),o(7,"input",null,1),n(9,"button",3),c("click",function(){d(m);let u=b(8);return s(l.deletevideo(u.value))}),i(10,"delete"),r(),o(11,"br"),i(12,` delete comment by id
`),o(13,"input",null,2),n(15,"button",3),c("click",function(){d(m);let u=b(14);return s(l.deletecomment(u.value))}),i(16,"delete"),r(),o(17,"br"),n(18,"h2"),i(19,"report list"),r(),n(20,"button",3),c("click",function(){return d(m),s(l.getReport())}),i(21,"refresh"),r(),V(22,T,6,3,null,null,x),o(24,"app-livechat")}e&2&&(_(22),g(l.reportList))},dependencies:[y,I]})};export{E as AdminComponent};
