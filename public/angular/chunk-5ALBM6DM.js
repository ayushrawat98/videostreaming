import{c as i,f as n}from"./chunk-5BHXT2IC.js";import{$ as r,ea as s}from"./chunk-VV3OFZ4G.js";var a=class e{constructor(t){this.http=t}baseUrl=n.baseUrl;getUserVideos(t){return this.http.get(this.baseUrl+"/user/"+t+"/videos")}getUserSubscriptionList(){return this.http.get(this.baseUrl+"/user/subscription")}subscribeToUser(t){return this.http.post(this.baseUrl+"/user/subscribe",t)}getNotifications(t){return this.http.post(this.baseUrl+"/user/notifications",{page:t})}markAsReadNotification(){return this.http.post(this.baseUrl+"/user/notifications/read",{})}getUser(t){return this.http.get(this.baseUrl+"/user/details/"+t)}amISubscribed(t){return this.http.get(this.baseUrl+"/user/amisubscribed/"+t)}searchUser(t){return this.http.post(this.baseUrl+"/user/search",{name:t})}deleteVideoById(t){return this.http.delete(this.baseUrl+"/user/video/"+t)}static \u0275fac=function(o){return new(o||e)(s(i))};static \u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"})};export{a};
