simpleWebstorage
================

A clean interface for localStorage / sessionStorage in <20 lines of code.

Even simpler than [simpleStorage](https://github.com/andris9/simpleStorage) the simpler fork of [jStorage](https://github.com/andris9/jStorage).


Usage
-----

    localStorage.set('myKey',{a:[1,2,5], b: 'ok'});
    localStorage.has('myKey');   // --> true
    localStorage.get('myKey');   // --> {a:[1,2,5], b: 'ok'}
    localStorage.size('myKey');  // --> 22
    localStorage.keys();         // --> ['myKey']
    localStorage.remove('myKey');

of course you can use native

    localStorage.clear();
    localStorage.length;

works as well with sessionStorage.
