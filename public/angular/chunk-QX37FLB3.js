import{a as w}from"./chunk-6LTARJE7.js";import{a as S}from"./chunk-2TNVUOWO.js";import"./chunk-WKNI7WHX.js";import"./chunk-VBE3IEDN.js";import"./chunk-VN6LWNMF.js";import"./chunk-UYQAHJAI.js";import{Ab as p,Bb as l,Cb as d,Gb as _,Jb as C,K as c,Lb as i,Tb as x,Ya as a,Yb as D,Za as f,ha as m,mb as r,nb as b,ob as h,qa as g,qb as s,ra as u,vb as v}from"./chunk-LRPHIVML.js";var V=()=>[import("./chunk-MFIUX453.js").then(t=>t.VideolistComponent)];function F(t,o){if(t&1&&d(0,"app-videolist",0),t&2){let e=i();s("videoList",e.allvideo.rows)("sortAllowed",!1)("latestFirst",!0)}}function P(t,o){if(t&1){let e=_();d(0,"br"),p(1,"mat-paginator",1),C("page",function(I){g(e);let O=i();return u(O.goToPage(I))}),l()}if(t&2){let e=i();a(),s("length",e.allvideo.count)("pageIndex",e.pageNumber)("pageSize",8)}}var y=class t{constructor(o){this._uploadService=o}allvideo={count:0,rows:[]};fileUpdateSubscription;pageNumber=0;ngOnInit(){this.fileUpdateSubscription=this._uploadService.fileUploaded.pipe(c(3e3)).subscribe(o=>{this.getVideos()}),this.getVideos()}getVideos(){this._uploadService.getFile(this.pageNumber).subscribe({next:o=>{this.allvideo=o}})}goToPage(o){this.pageNumber=o.pageIndex,this.getVideos()}ngOnDestroy(){this.fileUpdateSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||t)(f(w))};static \u0275cmp=m({type:t,selectors:[["app-dashboard"]],standalone:!0,features:[D],decls:6,vars:1,consts:[[3,"videoList","sortAllowed","latestFirst"],["showFirstLastButtons","true",3,"page","length","pageIndex","pageSize"]],template:function(e,n){e&1&&(p(0,"h2"),x(1,"Latest"),l(),r(2,F,1,3),b(3,2,V),h(),r(5,P,2,3)),e&2&&(a(5),v(n.allvideo.rows&&n.allvideo.rows.length>0?5:-1))},dependencies:[S],styles:["h2[_ngcontent-%COMP%]{text-align:center;color:orange}"]})};export{y as DashboardComponent};