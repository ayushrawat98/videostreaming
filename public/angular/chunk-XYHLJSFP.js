import{a as S}from"./chunk-AUKDFHZX.js";import"./chunk-5BHXT2IC.js";import{Ab as n,Eb as v,Hb as d,Qb as u,Rb as t,Wb as C,Za as f,ha as b,qa as l,ra as s,yb as r,zb as o}from"./chunk-VV3OFZ4G.js";var g=class _{constructor(e){this._adminService=e}reportList;ngOnInit(){this.getReport()}deleteuser(e){this._adminService.deleteUserById(e).subscribe(i=>{alert("deleted")},i=>{alert(i)})}deletevideo(e){this._adminService.deleteVideoById(e).subscribe(i=>{alert("deleted")})}deletecomment(e){this._adminService.deleteCommentById(e).subscribe(i=>{alert("deleted")})}getReport(){this._adminService.getAllReportedVideos().subscribe(e=>{this.reportList=e})}static \u0275fac=function(i){return new(i||_)(f(S))};static \u0275cmp=b({type:_,selectors:[["app-admin"]],standalone:!0,features:[C],decls:22,vars:0,consts:[["userid",""],["videoid",""],["commentid",""],[3,"click"]],template:function(i,c){if(i&1){let a=v();t(0,`delete user by id
`),n(1,"input",null,0),r(3,"button",3),d("click",function(){l(a);let m=u(2);return s(c.deleteuser(m.value))}),t(4,"delete"),o(),n(5,"br"),t(6,` delete video by id
`),n(7,"input",null,1),r(9,"button",3),d("click",function(){l(a);let m=u(8);return s(c.deletevideo(m.value))}),t(10,"delete"),o(),n(11,"br"),t(12,` delete comment by id
`),n(13,"input",null,2),r(15,"button",3),d("click",function(){l(a);let m=u(14);return s(c.deletecomment(m.value))}),t(16,"delete"),o(),n(17,"br"),r(18,"h2"),t(19,"report list"),o(),r(20,"button",3),d("click",function(){return l(a),s(c.getReport())}),t(21,"refresh"),o()}}})};export{g as AdminComponent};
