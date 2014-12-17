Storage
=======

Simple localStorage / sessionStorage prototype functions. Even simpler than the simpler fork of jStorage.

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
