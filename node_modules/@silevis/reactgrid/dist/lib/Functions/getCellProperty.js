export var getCellProperty = function (uncertainCell, propName, expectedType) {
    var prop = uncertainCell[propName];
    if (typeof prop === 'undefined' || prop === null)
        throw "Cell is missing property '" + propName + "'";
    if (typeof prop !== expectedType)
        throw "Property '" + propName + "' expected to be of type '" + expectedType + "' but is '" + typeof prop + "'";
    return prop;
};
