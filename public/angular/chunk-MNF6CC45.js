import{a as w}from"./chunk-UGHVQWKT.js";import{a as x}from"./chunk-IWGY4M5H.js";import"./chunk-ON2JRT6O.js";import{a as C}from"./chunk-WDW7MSJ3.js";import"./chunk-A4P7TVVA.js";import"./chunk-IBZKKFIW.js";import"./chunk-LPBAIIL6.js";import"./chunk-OEUGY4VQ.js";import"./chunk-TAT732FB.js";import{Ab as v,Eb as b,Hb as h,Jb as p,K as l,Rb as _,Wb as S,Ya as n,Za as g,ha as d,mb as u,ob as a,qa as m,ra as c,tb as f,yb as r,zb as s}from"./chunk-J7P67657.js";function V(i,t){if(i&1){let e=b();r(0,"mat-paginator",2),h("page",function(y){m(e);let I=p();return c(I.goToPage(y))}),s()}if(i&2){let e=p();a("length",e.allvideo.count)("pageIndex",e.pageNumber)("pageSize",8)}}var D=class i{constructor(t){this._uploadService=t}allvideo={count:0,rows:[]};fileUpdateSubscription;pageNumber=0;ngOnInit(){this.fileUpdateSubscription=this._uploadService.fileUploaded.pipe(l(3e3)).subscribe(t=>{this.getVideos()}),this.getVideos()}getVideos(){this._uploadService.getFile(this.pageNumber).subscribe({next:t=>{this.allvideo=t}})}goToPage(t){this.pageNumber=t.pageIndex,this.getVideos()}ngOnDestroy(){this.fileUpdateSubscription.unsubscribe()}static \u0275fac=function(e){return new(e||i)(g(w))};static \u0275cmp=d({type:i,selectors:[["app-dashboard"]],standalone:!0,features:[S],decls:4,vars:4,consts:[[3,"videoList","sortAllowed","latestFirst"],[3,"length","pageIndex","pageSize"],[3,"page","length","pageIndex","pageSize"]],template:function(e,o){e&1&&(r(0,"h2"),_(1,"Latest"),s(),v(2,"app-videolist",0),u(3,V,1,3,"mat-paginator",1)),e&2&&(n(2),a("videoList",o.allvideo.rows)("sortAllowed",!1)("latestFirst",!0),n(),f(o.allvideo.rows&&o.allvideo.rows.length>0?3:-1))},dependencies:[C,x],styles:["h2[_ngcontent-%COMP%]{text-align:center;color:orange}"]})};export{D as DashboardComponent};
