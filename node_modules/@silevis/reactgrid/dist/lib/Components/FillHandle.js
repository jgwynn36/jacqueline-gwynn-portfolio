var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useRef, useLayoutEffect, useState } from 'react';
import { FillHandleBehavior } from '../Behaviors/FillHandleBehavior';
export var FillHandle = function (props) {
    var targetRef = useRef();
    var _a = useState({ width: 0, height: 0 }), dimensions = _a[0], setDimensions = _a[1];
    useLayoutEffect(function () {
        if (targetRef.current) {
            setDimensions({
                width: targetRef.current.offsetWidth,
                height: targetRef.current.offsetHeight
            });
        }
    }, []);
    return (React.createElement("div", { className: "rg-touch-fill-handle", ref: targetRef, style: {
            top: props.location.row.bottom - (dimensions.width / 2),
            left: props.location.column.right - (dimensions.height / 2),
        }, "data-cy": "rg-touch-fill-handle", onPointerDown: function (event) {
            if (event.pointerType !== 'mouse' && event.pointerType !== undefined) {
                props.state.update(function (state) { return (__assign({}, state, { currentBehavior: new FillHandleBehavior() })); });
            }
        } },
        React.createElement("div", { className: "rg-fill-handle", "data-cy": "rg-fill-handle" })));
};
