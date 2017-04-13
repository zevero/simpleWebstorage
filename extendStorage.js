/*
Wonder how this works?
Storage is the Prototype of both localStorage and sessionStorage.
Got it?
*/

(function() {
  'use strict';
  
  Storage.prototype.set = function(key, obj) {
    var t = typeof obj;
    if (t==='undefined' || obj===null ) this.removeItem(key);
    this.setItem(key, (t==='object')?JSON.stringify(obj):obj);
    return obj;
  };
  Storage.prototype.get = function(key) {
    var obj = this.getItem(key);
    try {
       var j = JSON.parse(obj);
       if (j && typeof j === "object") return j;
     } catch (e) { }
     return obj;
  };
  Storage.prototype.assign = function(key, obj_merge) {
    var obj = this.get(key);
    if (typeof obj !== "object" || typeof obj_merge !== "object") return null;
    Object.assign(obj, obj_merge);
    return this.set(key,obj);
  };
  
  Storage.prototype.has = window.hasOwnProperty;
  Storage.prototype.remove = window.removeItem;

  Storage.prototype.keys = function(){
    return Object.keys(this.valueOf());
  };

})();
