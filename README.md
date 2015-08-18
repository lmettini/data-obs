# data-obs  
Lightweigh data observer, no need to load heavy libraries. Just store your data and add some triggers when this data change. If you want to see it working, here is a [dummy demo](http://lmettini.github.io/data-obs-demo/)

## how it works
You can set or observe data using the same data-id, thats the way the triggers are linked to the data
### set data interface
The dataId is an unique string/interger that will be use to observe any change in the future of the data stored in it, the data could be any type of Object
```javascript
dataObs.set(dataId ,data);
```
### observe interface
To observe the changes of a dataId you need to create a function with one parameter, this function is the trigger that is executed every time the data change. When a trigger is execute in case there is any data already stored.
```javascript
dataObs.observe(dataId ,function(data){
    // do your stuff here :)
});
```
### get data interface
Also you can check the value that a dataId have assign
```javascript
dataObs.get(dataId);
```