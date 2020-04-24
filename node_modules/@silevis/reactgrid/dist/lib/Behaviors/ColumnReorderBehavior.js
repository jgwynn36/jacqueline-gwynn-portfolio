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
var ColumnReorderBehavior = (function (_super) {
    __extends(ColumnReorderBehavior, _super);
    function ColumnReorderBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoScrollDirection = 'horizontal';
        return _this;
    }
    ColumnReorderBehavior.prototype.handlePointerDown = function (event, location, state) {
        this.initialColumnIdx = location.column.idx;
        this.lastPossibleDropLocation = location;
        this.selectedIdxs = state.selectedIndexes.sort();
        var columns = this.selectedIdxs.map(function (i) { return state.cellMatrix.columns[i]; });
        var leftIndexes = this.selectedIdxs.filter(function (i) { return i < location.column.idx; });
        var leftColumns = leftIndexes.map(function (i) { return state.cellMatrix.columns[i]; });
        var leftColumnsWidth = leftColumns.reduce(function (sum, col) { return sum + col.width; }, 0);
        this.pointerOffset = leftColumnsWidth + location.cellX;
        return __assign({}, state, { lineOrientation: 'vertical', shadowSize: columns.reduce(function (sum, col) { return sum + col.width; }, 0), shadowPosition: this.getShadowPosition(location, state) });
    };
    ColumnReorderBehavior.prototype.handlePointerMove = function (event, location, state) {
        return __assign({}, state, { shadowPosition: this.getShadowPosition(location, state) });
    };
    ColumnReorderBehavior.prototype.getShadowPosition = function (location, state) {
        var x = location.viewportX + state.viewportElement.scrollLeft - this.pointerOffset;
        var max = state.cellMatrix.width - state.shadowSize;
        if (x < 0) {
            return 0;
        }
        else if (x > max) {
            return max;
        }
        return x;
    };
    ColumnReorderBehavior.prototype.handlePointerEnter = function (event, location, state) {
        var dropLocation = this.getLastPossibleDropLocation(location, state);
        if (!dropLocation)
            return state;
        var drawRight = dropLocation.column.idx > this.initialColumnIdx;
        var linePosition = Math.min(dropLocation.viewportX - dropLocation.cellX + (drawRight ? dropLocation.column.width : 0) + state.viewportElement.scrollLeft, state.visibleRange.width + state.cellMatrix.frozenLeftRange.width + state.cellMatrix.frozenRightRange.width + state.viewportElement.scrollLeft);
        this.lastPossibleDropLocation = dropLocation;
        return __assign({}, state, { linePosition: linePosition });
    };
    ColumnReorderBehavior.prototype.getLastPossibleDropLocation = function (currentLocation, state) {
        var position = currentLocation.column.idx <= this.initialColumnIdx ? 'before' : 'after';
        var columnIds = this.selectedIdxs.map(function (i) { return state.cellMatrix.columns[i].columnId; });
        if (!state.props.canReorderColumns || state.props.canReorderColumns(currentLocation.column.columnId, columnIds, position)) {
            return currentLocation;
        }
        return this.lastPossibleDropLocation;
    };
    ColumnReorderBehavior.prototype.handlePointerUp = function (event, location, state) {
        if (this.initialColumnIdx !== location.column.idx && this.lastPossibleDropLocation && state.props.onColumnsReordered) {
            var isBefore = this.lastPossibleDropLocation.column.idx <= this.initialColumnIdx;
            var columnIds = this.selectedIdxs.map(function (i) { return state.cellMatrix.columns[i].columnId; });
            state.props.onColumnsReordered(this.lastPossibleDropLocation.column.columnId, columnIds, isBefore ? 'before' : 'after');
        }
        return __assign({}, state, { linePosition: -1, shadowPosition: -1 });
    };
    return ColumnReorderBehavior;
}(Behavior));
export { ColumnReorderBehavior };
