import{a as le}from"./chunk-HFYZZQNA.js";import{a as N,b as de}from"./chunk-N4VFZLZX.js";import{a as x}from"./chunk-L46DTZLZ.js";import{b as D,e as T,i as U,j as A,m as E,n as B,p as P,s as R,t as j}from"./chunk-IDP2DSHV.js";import{a as ve}from"./chunk-5SOMMM57.js";import{a as L,b as $}from"./chunk-PAXCY5C7.js";import{a as pe}from"./chunk-IVNLITVP.js";import{a as ue}from"./chunk-5TEMFPTZ.js";import"./chunk-3VQ2NDW6.js";import"./chunk-CARY4E7O.js";import{R as ce,S as se,T as O,U as I}from"./chunk-M4UXLRGQ.js";import{d as re,g as ae}from"./chunk-AG3CWWVW.js";import{c as me,f as F}from"./chunk-3YPF7WJ4.js";import{Aa as Y,Ba as w,C as J,Db as C,Gb as v,Ib as c,Qb as s,Rb as g,Sb as ee,T as Q,Tb as te,Ua as Z,Vb as h,Xa as i,Xb as oe,Ya as d,Yb as ne,Z as W,ca as X,ha as S,lb as b,mb as V,nb as l,o as G,pa as p,qa as u,sb as _,vb as y,vc as ie,wb as k,xb as r,yb as a,zb as f}from"./chunk-EMB2SP6L.js";var M=class o{constructor(t){this.http=t}baseUrl=F.baseUrl;getCommentOnVideo(t){return this.http.get(this.baseUrl+"comment/video/"+t)}postCommentOnVideo(t){return this.http.post(this.baseUrl+"comment/video/"+t.VideoId,t)}getSubcommentOnComment(t){return this.http.get(this.baseUrl+"comment/"+t)}postSubcommentOnComment(t){return this.http.post(this.baseUrl+"comment/"+t.id,t)}static \u0275fac=function(e){return new(e||o)(X(me))};static \u0275prov=W({token:o,factory:o.\u0275fac,providedIn:"root"})};var Ie=(o,t)=>t.id;function Me(o,t){if(o&1){let e=C();r(0,"a",2),v("click",function(){p(e);let m=c();return u(m.showSubcomment=!m.showSubcomment)}),s(1),a()}if(o&2){let e,n=c();i(),ee("",(e=n.comment().subcomment)==null?null:e.length," replies")}}function we(o,t){if(o&1){let e=C();r(0,"a",2),v("click",function(){p(e);let m=c();return u([m.addUserName(),m.showReply=!m.showReply])}),s(1),a()}if(o&2){let e=c();i(),g(e.showReply?"Cancel":"Reply")}}function Ve(o,t){if(o&1){let e=C();f(0,"br"),r(1,"mat-form-field",3)(2,"mat-label"),s(3,"Leave a comment"),a(),f(4,"input",4),r(5,"button",5),v("click",function(){p(e);let m=c();return u(m.postComment())}),r(6,"mat-icon"),s(7,"send"),a()()()}if(o&2){let e=c();i(),l("subscriptSizing","dynamic"),i(3),l("formControl",e.commentFormControl),i(),l("disabled",e.commentFormControl.value.trim().length==0),V("aria-label","send")}}function ye(o,t){if(o&1){let e=C();r(0,"app-comment-subcomment",7),v("updateComments",function(){p(e);let m=c(2);return u(m.updateTopComments())}),a()}if(o&2){let e=t.$implicit,n=c(2);l("comment",e)("videoId",n.videoId())}}function ke(o,t){if(o&1&&y(0,ye,1,2,"app-comment-subcomment",6,Ie),o&2){let e=c();k(e.comment().subcomment)}}var z=class o{constructor(t,e){this._authService=t;this._commentService=e;this.loggedIn=this._authService.loggedIn,console.log(this.loggedIn())}comment=w.required();videoId=w.required();updateComments=Y();loggedIn;showReply=!1;showSubcomment=!1;commentFormControl=new U("",{nonNullable:!0});postComment(){let t={id:this.comment().parentcommentid||this.comment().id,VideoId:this.videoId(),comment:this.commentFormControl.value};this._commentService.postSubcommentOnComment(t).subscribe({next:e=>{console.log(e),this.updateComments.emit(!0),this.commentFormControl.reset(),this.showReply=!1}})}addUserName(){this.commentFormControl.setValue(`@${this.comment().User?.username} `)}updateTopComments(){this.updateComments.emit(!0)}static \u0275fac=function(e){return new(e||o)(d(x),d(M))};static \u0275cmp=S({type:o,selectors:[["app-comment-subcomment"]],inputs:{comment:[1,"comment"],videoId:[1,"videoId"]},outputs:{updateComments:"updateComments"},standalone:!0,features:[h],decls:7,vars:5,consts:[[1,"p"],["mat-button",""],["mat-button","",3,"click"],["appearance","outline",3,"subscriptSizing"],["rows","3","matInput","",3,"formControl"],["mat-icon-button","","matSuffix","",3,"click","disabled"],[3,"comment","videoId"],[3,"updateComments","comment","videoId"]],template:function(e,n){if(e&1&&(r(0,"div",0)(1,"div"),s(2),a(),b(3,Me,2,1,"a",1)(4,we,2,1,"a",1)(5,Ve,8,4)(6,ke,2,0),a()),e&2){let m,q;i(2),g("@"+((m=n.comment().User)==null?null:m.username)+" : "+n.comment().comment),i(),_(n.comment().subcomment&&((q=n.comment().subcomment)!=null&&q.length)?3:-1),i(),_(n.loggedIn()?4:-1),i(),_(n.showReply?5:-1),i(),_(n.showSubcomment?6:-1)}},dependencies:[o,j,R,B,P,de,N,$,L,I,se,O,E,D,T,A],styles:[".p[_ngcontent-%COMP%]{border:1px solid gray;padding:8px;border-radius:1%;margin-bottom:8px}"]})};var Fe=(o,t)=>t.id;function Oe(o,t){if(o&1){let e=C();r(0,"app-comment-subcomment",4),v("updateComments",function(){p(e);let m=c();return u(m.getComments())}),a()}if(o&2){let e=t.$implicit,n=c();l("comment",e)("videoId",n.videoId())}}function De(o,t){if(o&1){let e=C();r(0,"div",2)(1,"mat-form-field",5)(2,"mat-label"),s(3,"Leave a comment"),a(),f(4,"textarea",6),r(5,"button",7),v("click",function(){p(e);let m=c();return u(m.postComment())}),r(6,"mat-icon"),s(7,"send"),a()()()()}if(o&2){let e=c();i(),l("subscriptSizing","dynamic"),i(3),l("formControl",e.commentFormControl),i(),l("disabled",e.commentFormControl.value.trim().length==0),V("aria-label","send")}}function Te(o,t){o&1&&(r(0,"p",3),s(1,"Login to comment"),a())}var K=class o{constructor(t,e){this._commentService=t;this._authService=e;this.loggedIn=this._authService.loggedIn}videoId=w.required();comments=[];loggedIn;commentFormControl=new U("",{nonNullable:!0});ngOnInit(){this.getComments()}getComments(){this._commentService.getCommentOnVideo(this.videoId()).subscribe({next:t=>{console.log(t),this.comments=t},error:t=>{console.log(t)}})}postComment(){let t={comment:this.commentFormControl.value.trim(),VideoId:this.videoId()};console.log(this.commentFormControl.value),this._commentService.postCommentOnVideo(t).subscribe({next:e=>{console.log(e),this.getComments(),this.commentFormControl.reset()}})}getSubcomment(){}postSubcomment(){}static \u0275fac=function(e){return new(e||o)(d(M),d(x))};static \u0275cmp=S({type:o,selectors:[["app-comment"]],inputs:{videoId:[1,"videoId"]},standalone:!0,features:[h],decls:5,vars:1,consts:[[1,"comments"],[3,"comment","videoId"],[1,"commentsinput"],[1,"nologincommentsinput"],[3,"updateComments","comment","videoId"],["appearance","outline",3,"subscriptSizing"],["rows","3","matInput","",3,"formControl"],["mat-icon-button","","matSuffix","",3,"click","disabled"]],template:function(e,n){e&1&&(r(0,"div",0),y(1,Oe,1,2,"app-comment-subcomment",1,Fe),b(3,De,8,4,"div",2)(4,Te,2,0,"p",3),a()),e&2&&(i(),k(n.comments),i(2),_(n.loggedIn()?3:4))},dependencies:[j,R,B,P,N,I,O,$,L,E,D,T,A,z],styles:[".comments[_ngcontent-%COMP%]{height:400px;overflow-y:scroll;padding-top:16px}.comments[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}.commentsinput[_ngcontent-%COMP%]{position:sticky;bottom:0;margin-top:8px;width:100%;background-color:#fff}.commentsinput[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}@media (min-width: 1200px){.comments[_ngcontent-%COMP%]{height:500px}}.nologincommentsinput[_ngcontent-%COMP%]{text-align:center}"]})};function Ue(o,t){if(o&1){let e=C();r(0,"button",10),v("click",function(){p(e);let m=c(2);return u(m.deleteVideo())}),s(1,"Delete this video"),a()}}function Ae(o,t){if(o&1){let e=C();r(0,"div",2)(1,"div",4)(2,"h1",5),s(3),a(),r(4,"div")(5,"button",6),v("click",function(){p(e);let m=c();return u(m.report())}),s(6,"Report"),a(),s(7," \xA0 "),r(8,"button",7),v("click",function(){p(e);let m=c();return u(m.subscribe())}),s(9,"Subscribe"),a()()(),r(10,"h4",8),s(11),a(),r(12,"h5",8),s(13),oe(14,"date"),a(),r(15,"h5",8)(16,"a",9),s(17),a()(),b(18,Ue,2,0,"button"),a()}if(o&2){let e=c();i(3),g(e.videoDetail.title),i(8),g(e.videoDetail.description),i(2),te(" ",e.videoDetail.views," views | ",ne(14,7,e.videoDetail.createdAt,"d MMM y , h:mm a"),""),i(3),l("routerLink","/user/"+e.videoDetail.UserId),i(),g("@"+(e.videoDetail.User==null?null:e.videoDetail.User.username)),i(),_(e.isAdmin()?18:-1)}}var ge=class o{constructor(t,e,n,m,q,Ee){this._route=t;this._videoService=e;this._userService=n;this._matSnackBar=m;this._authService=q;this._adminService=Ee;this.isAdmin=this._authService.isAdmin,this.isLoggedIn=this._authService.loggedIn}baseUrl=`${F.baseUrl}video/`;videoId;videoDetail;isAdmin;isLoggedIn;ngOnInit(){this._route.paramMap.pipe(Q(t=>(this.videoId=Number(t.get("VideoId")),this._videoService.getVideoDetails(this.videoId))),J(t=>G(t))).subscribe({next:t=>{this.videoDetail=t,console.log(t)},error:t=>{console.log(t)}})}subscribe(){this._userService.subscribeToUser({UserId:this.videoDetail.UserId}).subscribe({next:t=>{this._matSnackBar.open("Subscribed","OK",{duration:2e3}),console.log("subscribed")},error:t=>{this._matSnackBar.open(t.error.message,"OK",{duration:2e3})}})}deleteVideo(){this._adminService.deleteVideoById(this.videoId).subscribe(t=>{this._matSnackBar.open("Deleted","OK",{duration:2e3})})}report(){this._videoService.reportVideo(this.videoId).subscribe(t=>{this._matSnackBar.open("Reported","OK",{duration:2e3})})}static \u0275fac=function(e){return new(e||o)(d(re),d(le),d(ue),d(pe),d(x),d(ve))};static \u0275cmp=S({type:o,selectors:[["app-video"]],standalone:!0,features:[h],decls:4,vars:3,consts:[[1,"videocontainer"],["controls","",3,"src"],[1,"videodetailcontainer"],[3,"videoId"],[2,"display","flex","justify-content","space-between","align-items","center","margin-bottom","8px"],[2,"margin-bottom","0px"],["mat-flat-button","","color","warn",3,"click"],["mat-flat-button","","color","accent",3,"click"],[2,"margin-bottom","8px"],[3,"routerLink"],[3,"click"]],template:function(e,n){e&1&&(r(0,"div",0),f(1,"video",1),b(2,Ae,19,10,"div",2),f(3,"app-comment",3),a()),e&2&&(i(),l("src",n.baseUrl+n.videoId,Z),i(),_(n.videoDetail?2:-1),i(),l("videoId",n.videoId))},dependencies:[K,ie,I,ce,ae],styles:["video[_ngcontent-%COMP%]{border-radius:1%;width:100%}.videocontainer[_ngcontent-%COMP%]{width:80%;margin:auto}.videodetailcontainer[_ngcontent-%COMP%]{border:1px solid black;border-radius:1%;padding:8px}@media (min-width: 1200px){.videocontainer[_ngcontent-%COMP%]{display:flex;gap:10px;flex-wrap:wrap}video[_ngcontent-%COMP%]{width:70%}app-comment[_ngcontent-%COMP%]{flex-grow:1}.videodetailcontainer[_ngcontent-%COMP%]{order:3;width:70%}}"]})};export{ge as VideoComponent};
