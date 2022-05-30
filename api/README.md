You can call any function defined in any service directly from any component / page / action without importing anything.

This is called dependancy injection.

Usage:

To call methods `doSomething` of `xyzService`, use this,

```Javascript
this.$engine.xyzService.doSomething(...params)
```

Every function's last two parameters are callback functions.

callback(data: JSON) - will receive JSON response received from API
errorHandler(message: String) - will receive message which is to be displayed. If you don't want pass any errorHandler, pass null. In this case, we will define a default behaviour (Toast maybe.)