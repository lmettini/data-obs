# data-obs  
Lightweigh data observer, no need to load heavy libraries. Just store your data and add some triggers when this data change. If you want to see it working, here is a [dummy demo](http://lmettini.github.io/data-obs-demo/)

## how it works
You set or observe data using a same data-id, that's the way the triggers are linked to the data
### set data interface
The data-id is an unique string/interger that will be use to observe any change in the future of the data stored in the dataObs, the data could be any type of Object
```javascript
dataObs.set(dataId ,data);
```
### observe interface
To observe the changes of a data-id you need to create a function that will recieve one parameter, that function is the trigger that is executed every time the data change. When a trigger is set to observer is going to be executed in the case when some data already stored with the same data-id.
```javascript
dataObs.observe(dataId ,function(data){
    // do your stuff here ;)
});
```
### get data interface
Also you can check the value that a data-id have assigned
```javascript
dataObs.get(dataId);
```