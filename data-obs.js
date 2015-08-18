window.dataObs = (function () {
    "use strict";
    /*jslint plusplus: true */
    var expose = {},
        storage = [];

    function find(collection, lookKey) {
        var i, total;
        for (i = 0, total = collection.length; i < total; i++) {
            if (collection[i].key === lookKey) {
                return collection[i];
            }
        }
        return null;
    }

    function each(collection, value) {
        var i, total;
        for (i = 0, total = collection.length; i < total; i++) {
            collection[i](value);
        }
        return null;
    }

    function getDataFromStorage(key) {
        return find(storage, key);
    }

    function generateGenericDataStorage(key) {
        return {
            key: key,
            value: null,
            triggers: []
        };
    }
    function notifyObservers(obj) {
        each(obj.triggers, obj.value);
    }
    expose.set = function (key, value) {
        var dataObj = getDataFromStorage(key);
        if (!dataObj) {
            dataObj = generateGenericDataStorage(key);
            storage.push(dataObj);
        }
        dataObj.value = value;
        notifyObservers(dataObj);
    };
    expose.observe = function (key, trigger) {
        var dataObj = getDataFromStorage(key);
        if (!dataObj) {
            dataObj = generateGenericDataStorage(key);
            storage.push(dataObj);
        }
        dataObj.triggers.push(trigger);
        if (dataObj.value !== undefined && trigger !== undefined && dataObj.value !== null) {
            trigger(dataObj.value);
        }
    };
    expose.get = function (key) {
        return getDataFromStorage(key);
    };
    return expose;
}());