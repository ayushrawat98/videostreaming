import{a as v}from"./chunk-XGVRN2MF.js";import{a as b}from"./chunk-ZK4ZVU7H.js";import"./chunk-66Y57P4H.js";import{a as f}from"./chunk-UCWA33QB.js";import"./chunk-FKLT2GNY.js";import"./chunk-56PE2EOK.js";import"./chunk-ZKUKGSZU.js";import"./chunk-BXXMRR3V.js";import"./chunk-3LVO7KZI.js";import"./chunk-6XXA7HXI.js";import{$a as d,Ab as a,Bb as r,Cb as m,Jb as c,L as p,Tb as g,Yb as u,_a as o,ja as l,qb as n}from"./chunk-LCQMFSVS.js";var h=class s{constructor(e){this._uploadService=e}allvideo={count:0,rows:[]};fileUpdateSubscription;pageNumber=0;ngOnInit(){this.fileUpdateSubscription=this._uploadService.fileUploaded.pipe(p(3e3)).subscribe(e=>{this.getVideos()}),this.getVideos()}getVideos(){this._uploadService.getFile(this.pageNumber).subscribe({next:e=>{this.allvideo=e}})}goToPage(e){this.pageNumber=e.pageIndex,this.getVideos()}ngOnDestroy(){this.fileUpdateSubscription.unsubscribe()}static \u0275fac=function(t){return new(t||s)(d(v))};static \u0275cmp=l({type:s,selectors:[["app-dashboard"]],standalone:!0,features:[u],decls:4,vars:6,consts:[[3,"videoList","sortAllowed","latestFirst"],[3,"page","length","pageIndex","pageSize"]],template:function(t,i){t&1&&(a(0,"h2"),g(1,"Latest"),r(),m(2,"app-videolist",0),a(3,"mat-paginator",1),c("page",function(S){return i.goToPage(S)}),r()),t&2&&(o(2),n("videoList",i.allvideo.rows)("sortAllowed",!1)("latestFirst",!0),o(),n("length",i.allvideo.count)("pageIndex",i.pageNumber)("pageSize",8))},dependencies:[f,b],styles:["h2[_ngcontent-%COMP%]{text-align:center;color:#673ab7}"]})};export{h as DashboardComponent};
