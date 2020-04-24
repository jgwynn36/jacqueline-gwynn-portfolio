var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
import { Behavior } from '../Model';
var ResizeColumnBehavior = (function (_super) {
    __extends(ResizeColumnBehavior, _super);
    function ResizeColumnBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.minColumnWidth = 40;
        _this.autoScrollDirection = 'horizontal';
        return _this;
    }
    ResizeColumnBehavior.prototype.handlePointerDown = function (event, location, state) {
        this.initialLocation = location;
        this.resizedColumn = location.column;
        return state;
    };
    ResizeColumnBehavior.prototype.handlePointerMove = function (event, location, state) {
        var linePosition;
        if (location.column.idx == this.resizedColumn.idx && location.cellX > this.minColumnWidth || location.column.idx > this.resizedColumn.idx) {
            linePosition = location.viewportX + state.viewportElement.scrollLeft;
        }
        else if (location.viewportX > state.cellMatrix.width - state.viewportElement.scrollLeft) {
            linePosition = location.viewportX;
        }
        else {
            var offset = 0;
            if (state.cellMatrix.scrollableRange.columns.map(function (c) { return c.idx; }).includes(this.resizedColumn.idx)) {
                offset = state.cellMatrix.frozenLeftRange.width;
            }
            else if (state.cellMatrix.frozenRightRange.columns.map(function (c) { return c.idx; }).includes(this.resizedColumn.idx)) {
                offset = Math.min(state.viewportElement.clientWidth, state.cellMatrix.width) - state.cellMatrix.frozenRightRange.width;
            }
            linePosition = this.resizedColumn.left + this.minColumnWidth + offset + state.viewportElement.scrollLeft;
        }
        return __assign({}, state, { linePosition: linePosition, lineOrientation: 'vertical' });
    };
    ResizeColumnBehavior.prototype.handlePointerUp = function (event, location, state) {
        var newWidth = this.resizedColumn.width + location.viewportX - this.initialLocation.viewportX;
        if (state.props.onColumnResized && newWidth >= this.minColumnWidth) {
            state.props.onColumnResized(this.initialLocation.column.columnId, newWidth);
        }
        else if (state.props.onColumnResized) {
            state.props.onColumnResized(this.resizedColumn.columnId, this.minColumnWidth + state.viewportElement.scrollLeft);
        }
        var focusedLocation = state.focusedLocation;
        if (focusedLocation !== undefined && this.resizedColumn.columnId === focusedLocation.column.idx) {
            var column = __assign({}, focusedLocation.column, { width: newWidth });
            focusedLocation = __assign({}, focusedLocation, { column: column });
        }
        return __assign({}, state, { linePosition: -1, focusedLocation: focusedLocation });
    };
    return ResizeColumnBehavior;
}(Behavior));
export { ResizeColumnBehavior };
