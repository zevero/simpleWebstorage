/*
Wonder how this works?
Storage is the Prototype of both localStorage and sessionStorage.
Got it?
*/
Storage.prototype.set = function(key, obj) {
  var t = typeof obj;
  if (t==='undefined' || obj===null ) this.removeItem(key);
  this.setItem(key, (t==='object')?JSON.stringify(obj):obj);
}
Storage.prototype.get = function(key) {
    var obj = this.getItem(key);
    return obj && JSON.parse(obj);
}
Storage.prototype.has = this.hasOwnProperty;
Storage.prototype.remove = this.removeItem;

Storage.prototype.size = function(key){
  var obj = this.getItem(key);
  return obj?obj.length:0;
}
Storage.prototype.keys = function(){
  Object.keys(this.valueOf());
}
