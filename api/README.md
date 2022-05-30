You can call any function defined in any service directly from any component / page / action without importing anything.

This is called dependancy injection.

Usage:

To call methods `doSomething` of `xyzService`, use this,

```Javascript
this.$engine.xyzService.doSomething(...params)
```

