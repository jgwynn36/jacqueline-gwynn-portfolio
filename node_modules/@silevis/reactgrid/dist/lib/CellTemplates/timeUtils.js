export var getTimestamp = function (time, defaultDate) {
    if (defaultDate === void 0) { defaultDate = '01-01-1970'; }
    return Date.parse(defaultDate + " " + time);
};
export var getFormattedTimeUnit = function (timeUnit) { return timeUnit.toString().padStart(2, '0'); };
