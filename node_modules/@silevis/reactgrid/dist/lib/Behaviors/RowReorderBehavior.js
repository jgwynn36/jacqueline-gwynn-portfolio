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
var RowReorderBehavior = (function (_super) {
    __extends(RowReorderBehavior, _super);
    function RowReorderBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.autoScrollDirection = 'vertical';
        return _this;
    }
    RowReorderBehavior.prototype.handlePointerDown = function (event, location, state) {
        this.initialRowIdx = location.row.idx;
        this.lastPossibleDropLocation = location;
        var indexes = state.selectedIndexes.sort();
        var rows = indexes.map(function (i) { return state.cellMatrix.rows[i]; });
        var upperIndexes = indexes.filter(function (i) { return i < location.row.idx; });
        var upperRows = upperIndexes.map(function (i) { return state.cellMatrix.rows[i]; });
        var upperRowsHeight = upperRows.reduce(function (sum, row) { return sum + row.height; }, 0);
        this.pointerOffset = upperRowsHeight + location.cellY;
        this.selectedIds = rows.map(function (r) { return r.rowId; });
        return __assign({}, state, { lineOrientation: 'horizontal', shadowSize: rows.reduce(function (sum, col) { return sum + col.height; }, 0), shadowPosition: this.getShadowPosition(location, state) });
    };
    RowReorderBehavior.prototype.handlePointerMove = function (event, location, state) {
        var shadowPosition = this.getShadowPosition(location, state);
        var shadowCursor = '-webkit-grabbing';
        var linePosition = state.linePosition;
        var pointerLocation = location.viewportY + state.viewportElement.scrollTop;
        this.lastPossibleDropLocation = this.getLastPossibleDropLocation(state, location);
        if (this.lastPossibleDropLocation && this.lastPossibleDropLocation.row.idx !== this.initialRowIdx) {
            var drawDown = this.lastPossibleDropLocation.row.idx > this.initialRowIdx;
            linePosition = Math.min(this.lastPossibleDropLocation.viewportY - this.lastPossibleDropLocation.cellY + (drawDown ? this.lastPossibleDropLocation.row.height : 0) + state.viewportElement.scrollTop, state.visibleRange.height + state.cellMatrix.frozenTopRange.height + state.cellMatrix.frozenBottomRange.height + state.viewportElement.scrollTop);
            if (!state.props.canReorderRows) {
                this.position = drawDown ? 'after' : 'before';
            }
            else {
                if (state.props.canReorderRows && state.props.canReorderRows(this.lastPossibleDropLocation.row.rowId, this.selectedIds, this.position)) {
                    if (drawDown) {
                        if (pointerLocation > location.row.top && pointerLocation < location.row.top + location.row.height / 2) {
                            this.position = 'on';
                            shadowCursor = 'move';
                            linePosition = -1;
                        }
                        else {
                            this.position = 'after';
                        }
                    }
                    else {
                        if (pointerLocation > location.row.top + location.row.height / 2 && pointerLocation < location.row.top + location.row.height) {
                            this.position = 'on';
                            shadowCursor = 'move';
                            linePosition = -1;
                        }
                        else {
                            this.position = 'before';
                        }
                    }
                }
                else {
                    linePosition = -1;
                }
            }
        }
        return __assign({}, state, { shadowPosition: shadowPosition,
            linePosition: linePosition,
            shadowCursor: shadowCursor });
    };
    RowReorderBehavior.prototype.getShadowPosition = function (location, state) {
        var y = location.viewportY + state.viewportElement.scrollTop - this.pointerOffset;
        var max = state.cellMatrix.height - state.shadowSize;
        if (y < 0) {
            return 0;
        }
        else if (y > max) {
            return max;
        }
        return y;
    };
    RowReorderBehavior.prototype.getLastPossibleDropLocation = function (state, currentLocation) {
        if (!state.props.canReorderRows || state.props.canReorderRows(currentLocation.row.rowId, this.selectedIds, this.position)) {
            return (currentLocation);
        }
        return this.lastPossibleDropLocation;
    };
    RowReorderBehavior.prototype.handlePointerUp = function (event, location, state) {
        if (location.row.idx !== this.initialRowIdx && this.lastPossibleDropLocation &&
            state.props.onRowsReordered) {
            state.props.onRowsReordered(this.lastPossibleDropLocation.row.rowId, this.selectedIds, this.position);
        }
        return __assign({}, state, { linePosition: -1, shadowPosition: -1, shadowCursor: 'default' });
    };
    return RowReorderBehavior;
}(Behavior));
export { RowReorderBehavior };
