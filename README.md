simpleWebstorage
================

A clean interface for localStorage / sessionStorage in <20 lines of code.

Even simpler than [simpleStorage](https://github.com/andris9/simpleStorage) the simpler fork of [jStorage](https://github.com/andris9/jStorage).

Installs with `bower install simple-webstorage --save`


Usage
-----

    localStorage.set('myKey',{a:[1,2,5], b: 'ok'}); //can set a json Object
    localStorage.assign('myKey',{a:[6], c:42});     //shallow merge using Object.assign
    localStorage.has('myKey');                      // --> true
    localStorage.get('myKey');                      // --> {a:[6], b: 'ok', c:42}
    localStorage.keys();                            // --> ['myKey']
    localStorage.remove('myKey');                   // -

of course you can use native

    localStorage.clear();
    localStorage.length;

works as well with sessionStorage.
