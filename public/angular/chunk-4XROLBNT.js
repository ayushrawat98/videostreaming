import{c as s,f as o}from"./chunk-4UMS5QRT.js";import{$ as i,ea as e}from"./chunk-J7P67657.js";var n=class r{constructor(t){this.http=t}baseUrl=o.baseUrl;getUserVideos(t){return this.http.get(this.baseUrl+"/user/"+t+"/videos")}getUserSubscriptionList(){return this.http.get(this.baseUrl+"/user/subscription")}subscribeToUser(t){return this.http.post(this.baseUrl+"/user/subscribe",t)}getNotifications(t){return this.http.post(this.baseUrl+"/user/notifications",{page:t})}markAsReadNotification(){return this.http.post(this.baseUrl+"/user/notifications/read",{})}static \u0275fac=function(a){return new(a||r)(e(s))};static \u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"})};export{n as a};
