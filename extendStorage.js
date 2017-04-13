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
    this.set(key,Object.assign(this.get(key), obj_merge));
  };
  
  Storage.prototype.has = window.hasOwnProperty;
  Storage.prototype.remove = window.removeItem;

  Storage.prototype.keys = function(){
    return Object.keys(this.valueOf());
  };

})();
