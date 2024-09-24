import{getExtendedSettings as t}from"./defaults.js";import{autoInitialize as o}from"./autoInitialize.js";import{load as s}from"./load.js";import{setObserver as i,updateObserver as e}from"./intersectionObserver.js";import{runningOnBrowser as r,isBot as n}from"./environment.js";import{shouldUseNative as m,loadAllNative as h}from"./native.js";import{setOnlineCheck as l,resetOnlineCheck as a}from"./online.js";import{getElementsToLoad as d,queryElements as f}from"./dom.js";import{resetStatus as p}from"./data.js";import{setToLoadCount as c}from"./counters.js";import{unobserve as u}from"./unobserve.js";import{restore as j}from"./restore.js";import{deleteOriginalAttrs as _}from"./originalAttributes.js";const g=function(o,s){const e=t(o);this._settings=e,this.loadingCount=0,i(e,this),l(e,this),this.update(s)};g.prototype={update:function(t){const o=this._settings,s=d(t,o);c(this,s.length),n?this.loadAll(s):m(o)?h(s,o,this):e(this._observer,s)},destroy:function(){this._observer&&this._observer.disconnect(),a(this),f(this._settings).forEach((t=>{_(t)})),delete this._observer,delete this._settings,delete this._onlineHandler,delete this.loadingCount,delete this.toLoadCount},loadAll:function(t){const o=this._settings;d(t,o).forEach((t=>{u(t,this),s(t,o,this)}))},restoreAll:function(){const t=this._settings;f(t).forEach((o=>{j(o,t)}))}},g.load=(o,i)=>{const e=t(i);s(o,e)},g.resetStatus=t=>{p(t)},r&&o(g,window.lazyLoadOptions);export{g as default};