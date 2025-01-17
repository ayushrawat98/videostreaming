import{e as N,f as D,k as j,l as P,p as O,s as B}from"./chunk-76NXS2AG.js";import{I as k,J as L,g as u,h as E,i as F,l as m,o as x}from"./chunk-34B3UZU4.js";import{$ as w,Da as v,Fb as S,Hb as y,Vb as A,Za as s,ca as C,ea as p,j as d,ja as g,n as b,nb as H,pa as T,qb as R,za as c}from"./chunk-B7KJVNON.js";var V=F({passive:!0}),z=(()=>{class n{constructor(e,t){this._platform=e,this._ngZone=t,this._monitoredElements=new Map}monitor(e){if(!this._platform.isBrowser)return b;let t=x(e),i=this._monitoredElements.get(t);if(i)return i.subject;let r=new d,o="cdk-text-field-autofilled",h=a=>{a.animationName==="cdk-text-field-autofill-start"&&!t.classList.contains(o)?(t.classList.add(o),this._ngZone.run(()=>r.next({target:a.target,isAutofilled:!0}))):a.animationName==="cdk-text-field-autofill-end"&&t.classList.contains(o)&&(t.classList.remove(o),this._ngZone.run(()=>r.next({target:a.target,isAutofilled:!1})))};return this._ngZone.runOutsideAngular(()=>{t.addEventListener("animationstart",h,V),t.classList.add("cdk-text-field-autofill-monitored")}),this._monitoredElements.set(t,{subject:r,unlisten:()=>{t.removeEventListener("animationstart",h,V)}}),r}stopMonitoring(e){let t=x(e),i=this._monitoredElements.get(t);i&&(i.unlisten(),i.subject.complete(),t.classList.remove("cdk-text-field-autofill-monitored"),t.classList.remove("cdk-text-field-autofilled"),this._monitoredElements.delete(t))}ngOnDestroy(){this._monitoredElements.forEach((e,t)=>this.stopMonitoring(t))}static{this.\u0275fac=function(t){return new(t||n)(p(u),p(c))}}static{this.\u0275prov=w({token:n,factory:n.\u0275fac,providedIn:"root"})}}return n})();var G=new C("MAT_INPUT_VALUE_ACCESSOR"),X=["button","checkbox","file","hidden","image","radio","range","reset","submit"],J=0,He=(()=>{class n{get disabled(){return this._disabled}set disabled(e){this._disabled=m(e),this.focused&&(this.focused=!1,this.stateChanges.next())}get id(){return this._id}set id(e){this._id=e||this._uid}get required(){return this._required??this.ngControl?.control?.hasValidator(j.required)??!1}set required(e){this._required=m(e)}get type(){return this._type}set type(e){this._type=e||"text",this._validateType(),!this._isTextarea&&E().has(this._type)&&(this._elementRef.nativeElement.type=this._type)}get errorStateMatcher(){return this._errorStateTracker.matcher}set errorStateMatcher(e){this._errorStateTracker.matcher=e}get value(){return this._inputValueAccessor.value}set value(e){e!==this.value&&(this._inputValueAccessor.value=e,this.stateChanges.next())}get readonly(){return this._readonly}set readonly(e){this._readonly=m(e)}get errorState(){return this._errorStateTracker.errorState}set errorState(e){this._errorStateTracker.errorState=e}constructor(e,t,i,r,o,h,a,q,U,M){this._elementRef=e,this._platform=t,this.ngControl=i,this._autofillMonitor=q,this._formField=M,this._uid=`mat-input-${J++}`,this.focused=!1,this.stateChanges=new d,this.controlType="mat-input",this.autofilled=!1,this._disabled=!1,this._type="text",this._readonly=!1,this._neverEmptyInputTypes=["date","datetime","datetime-local","month","time","week"].filter(_=>E().has(_)),this._iOSKeyupListener=_=>{let l=_.target;!l.value&&l.selectionStart===0&&l.selectionEnd===0&&(l.setSelectionRange(1,1),l.setSelectionRange(0,0))};let f=this._elementRef.nativeElement,I=f.nodeName.toLowerCase();this._inputValueAccessor=a||f,this._previousNativeValue=this.value,this.id=this.id,t.IOS&&U.runOutsideAngular(()=>{e.nativeElement.addEventListener("keyup",this._iOSKeyupListener)}),this._errorStateTracker=new k(h,i,o,r,this.stateChanges),this._isServer=!this._platform.isBrowser,this._isNativeSelect=I==="select",this._isTextarea=I==="textarea",this._isInFormField=!!M,this._isNativeSelect&&(this.controlType=f.multiple?"mat-native-select-multiple":"mat-native-select")}ngAfterViewInit(){this._platform.isBrowser&&this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(e=>{this.autofilled=e.isAutofilled,this.stateChanges.next()})}ngOnChanges(){this.stateChanges.next()}ngOnDestroy(){this.stateChanges.complete(),this._platform.isBrowser&&this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement),this._platform.IOS&&this._elementRef.nativeElement.removeEventListener("keyup",this._iOSKeyupListener)}ngDoCheck(){this.ngControl&&(this.updateErrorState(),this.ngControl.disabled!==null&&this.ngControl.disabled!==this.disabled&&(this.disabled=this.ngControl.disabled,this.stateChanges.next())),this._dirtyCheckNativeValue(),this._dirtyCheckPlaceholder()}focus(e){this._elementRef.nativeElement.focus(e)}updateErrorState(){this._errorStateTracker.updateErrorState()}_focusChanged(e){e!==this.focused&&(this.focused=e,this.stateChanges.next())}_onInput(){}_dirtyCheckNativeValue(){let e=this._elementRef.nativeElement.value;this._previousNativeValue!==e&&(this._previousNativeValue=e,this.stateChanges.next())}_dirtyCheckPlaceholder(){let e=this._getPlaceholder();if(e!==this._previousPlaceholder){let t=this._elementRef.nativeElement;this._previousPlaceholder=e,e?t.setAttribute("placeholder",e):t.removeAttribute("placeholder")}}_getPlaceholder(){return this.placeholder||null}_validateType(){X.indexOf(this._type)>-1}_isNeverEmpty(){return this._neverEmptyInputTypes.indexOf(this._type)>-1}_isBadInput(){let e=this._elementRef.nativeElement.validity;return e&&e.badInput}get empty(){return!this._isNeverEmpty()&&!this._elementRef.nativeElement.value&&!this._isBadInput()&&!this.autofilled}get shouldLabelFloat(){if(this._isNativeSelect){let e=this._elementRef.nativeElement,t=e.options[0];return this.focused||e.multiple||!this.empty||!!(e.selectedIndex>-1&&t&&t.label)}else return this.focused||!this.empty}setDescribedByIds(e){e.length?this._elementRef.nativeElement.setAttribute("aria-describedby",e.join(" ")):this._elementRef.nativeElement.removeAttribute("aria-describedby")}onContainerClick(){this.focused||this.focus()}_isInlineSelect(){let e=this._elementRef.nativeElement;return this._isNativeSelect&&(e.multiple||e.size>1)}static{this.\u0275fac=function(t){return new(t||n)(s(v),s(u),s(P,10),s(O,8),s(B,8),s(L),s(G,10),s(z),s(c),s(D,8))}}static{this.\u0275dir=g({type:n,selectors:[["input","matInput",""],["textarea","matInput",""],["select","matNativeControl",""],["input","matNativeControl",""],["textarea","matNativeControl",""]],hostAttrs:[1,"mat-mdc-input-element"],hostVars:18,hostBindings:function(t,i){t&1&&y("focus",function(){return i._focusChanged(!0)})("blur",function(){return i._focusChanged(!1)})("input",function(){return i._onInput()}),t&2&&(S("id",i.id)("disabled",i.disabled)("required",i.required),H("name",i.name||null)("readonly",i.readonly&&!i._isNativeSelect||null)("aria-invalid",i.empty&&i.required?null:i.errorState)("aria-required",i.required)("id",i.id),R("mat-input-server",i._isServer)("mat-mdc-form-field-textarea-control",i._isInFormField&&i._isTextarea)("mat-mdc-form-field-input-control",i._isInFormField)("mdc-text-field__input",i._isInFormField)("mat-mdc-native-select-inline",i._isInlineSelect()))},inputs:{disabled:"disabled",id:"id",placeholder:"placeholder",name:"name",required:"required",type:"type",errorStateMatcher:"errorStateMatcher",userAriaDescribedBy:[0,"aria-describedby","userAriaDescribedBy"],value:"value",readonly:"readonly"},exportAs:["matInput"],standalone:!0,features:[A([{provide:N,useExisting:n}]),T]})}}return n})();export{He as a};
