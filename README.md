# data-obs  
Lightweigh data observer, no need to load heavy libraries. Just store your data and add some triggers when this data change. If you want to see it working, here is a [dummy demo](http://lmettini.github.io/data-obs-demo/)

## how it works
You can set or observe data using the same data-id, thats the way the triggers are linked to the data
### set data interface
```javascript
// The dataId is the one you will have to use to observe any change in the future, the dataId should be a string/interger and the data could be any Object
dataObs.set(dataId ,data);
```
### observe interface
```javascript
dataObs.observe(dataId ,function(data){
    // here you can work with the data, this function is the triggers that is executed every time the data change. When a trigger is execute in case there is any data already stored.
});
```
### get data interface
```javascript
// Also you can check the value that a dataId have assign
dataObs.get(dataId);
```