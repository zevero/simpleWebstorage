/*
Wonder how this works?
Storage is the Prototype of both localStorage and sessionStorage.
Got it?
*/

(function() {
  'use strict';

  function extend(){
    for(var i=1; i<arguments.length; i++)
        for(var key in arguments[i])
            if(arguments[i].hasOwnProperty(key)) { 
                if (typeof arguments[0][key] === 'object'
                    && typeof arguments[i][key] === 'object')
             				extend(arguments[0][key], arguments[i][key]);
                else
                   arguments[0][key] = arguments[i][key];
             }
    return arguments[0];
  }
  
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
  Storage.prototype.extend = function(key, obj_merge) {
    this.set(key,extend(this.get(key),obj_merge);
  };
  
  Storage.prototype.has = window.hasOwnProperty;
  Storage.prototype.remove = window.removeItem;

  Storage.prototype.keys = function(){
    return Object.keys(this.valueOf());
  };

})();
