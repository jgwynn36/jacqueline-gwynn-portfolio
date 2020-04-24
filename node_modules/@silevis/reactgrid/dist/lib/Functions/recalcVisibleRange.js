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
import { Range } from '../Model';
export function recalcVisibleRange(state) {
    var matrix = state.cellMatrix;
    var _a = state.hiddenScrollableElement ? state.hiddenScrollableElement : state.viewportElement, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft, clientWidth = _a.clientWidth, clientHeight = _a.clientHeight;
    var scrollAreaWidth = clientWidth - matrix.frozenLeftRange.width - matrix.frozenRightRange.width;
    var scrollAreaHeight = clientHeight - matrix.frozenTopRange.height - matrix.frozenBottomRange.height;
    var visibleColumns = matrix.scrollableRange.columns.filter(function (col) { return col.right >= scrollLeft && col.left <= scrollLeft + scrollAreaWidth; });
    var visibleRows = matrix.scrollableRange.rows.filter(function (row) { return row.bottom >= scrollTop && row.top <= scrollTop + scrollAreaHeight; });
    var visibleRange = new Range(visibleRows, visibleColumns);
    return __assign({}, state, { minScrollLeft: visibleRange.first.column == undefined ? 0 : visibleRange.first.column.left, maxScrollLeft: visibleRange.last.column == undefined ? 0 : visibleRange.last.column.right - scrollAreaWidth, minScrollTop: visibleRows.length > 0 ? visibleRange.first.row.top : 0, maxScrollTop: visibleColumns.length > 0 ? (visibleRange.last.row == undefined ? 0 : visibleRange.last.row.bottom - scrollAreaHeight) : 0, visibleRange: visibleRange });
}
