apphome.js
======

It is not uncommon to `require` modules residing in other directories from deep inside another directory, 
for example,

```javascript
require('../../dir1/module1.js');
require('../../../dir2/module2.js');
```

Keeping track of relative `require` becomes a 
maintenance nightmare when we have a bunch of these and many directories.

*apphome.js* attempts to make relative `require` a little bit easier to maintain. It is a simple 
module that does only one thing - translate the given path relative to a known starting 
point.

install
------

To install the latest official version, use NPM:

```sh
npm install apphome
```

usage
------

*apphome.js* uses the environment variable `APP_HOME` to determine the root of the 
project. If `APP_HOME` is not set, it falls back to current working directory (as 
reported by `process.cwd()`).

```javascript
var apphome = require('apphome');
var moda = require(apphome('moda'));
var modc = require(apphome('moda/modb/modc'));
```

If you prefer to use a different environment variable, say `PROJECT_HOME`, then
```javascript
var apphome = require('apphome');
var modc = require(apphome('moda/modb/modc', 'PROJECT_HOME'));
```

test
-----------

```sh
npm test
```


__Note:__ For when `Proxy` is supported, it will be possible to use property access to
require a module.

```javascript
var apphome = require('apphome');
var modc = require(apphome.moda.modb.modc);  //ERROR maybe in the future
```
