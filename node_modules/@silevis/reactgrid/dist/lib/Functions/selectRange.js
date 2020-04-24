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
import { newLocation } from './newLocation';
export function selectRange(state, range, incremental) {
    return __assign({}, state, { selectionMode: 'range', selectedRanges: (incremental && state.selectionMode === 'range' ? state.selectedRanges : []).concat([range]), selectedIndexes: [], selectedIds: [], activeSelectedRangeIdx: incremental && state.selectionMode === 'range' ? state.selectedRanges.length : 0 });
}
export function updateActiveSelectedRange(state, range) {
    var _a;
    return __assign({}, state, { selectionMode: 'range', selectedRanges: Object.assign([], state.selectedRanges, (_a = {}, _a[state.activeSelectedRangeIdx] = range, _a)), selectedIndexes: [], selectedIds: [] });
}
export function selectOneColumn(state, col, incremental) {
    return __assign({}, state, { selectionMode: 'column', selectedIndexes: (incremental && state.selectionMode === 'column' ? state.selectedIndexes : []).concat(col.idx), selectedIds: (incremental && state.selectionMode === 'column' ? state.selectedIds : []).concat(col.columnId) });
}
export function unSelectOneColumn(state, col) {
    var updatedIndexes = state.selectedIndexes.filter(function (idx) { return idx !== col.idx; });
    var updatedIds = state.selectedIds.filter(function (id) { return id !== col.columnId; });
    return __assign({}, state, { selectionMode: 'column', selectedIndexes: updatedIndexes, selectedIds: updatedIds });
}
export function selectMultipleColumns(state, firstCol, lastCol, incremental) {
    var firstRow = state.cellMatrix.first.row;
    var lastRow = state.cellMatrix.last.row;
    var range = state.cellMatrix.getRange(newLocation(firstRow, firstCol), newLocation(lastRow, lastCol));
    return __assign({}, state, { selectionMode: 'column', selectedIndexes: incremental ? state.selectedIndexes.concat(range.columns.map(function (col) { return col.idx; })) : range.columns.map(function (col) { return col.idx; }), selectedIds: incremental ? state.selectedIds.concat(range.columns.map(function (col) { return col.columnId; })) : range.columns.map(function (col) { return col.columnId; }) });
}
export function selectOneRow(state, row, incremental) {
    return __assign({}, state, { selectionMode: 'row', selectedIndexes: (incremental && state.selectionMode === 'row' ? state.selectedIndexes : []).concat(row.idx), selectedIds: (incremental && state.selectionMode === 'row' ? state.selectedIds : []).concat(row.rowId) });
}
export function unSelectOneRow(state, row) {
    var updatedIndexes = state.selectedIndexes.filter(function (idx) { return idx !== row.idx; });
    var updatedIds = state.selectedIds.filter(function (id) { return id !== row.rowId; });
    return __assign({}, state, { selectionMode: 'row', selectedIndexes: updatedIndexes, selectedIds: updatedIds });
}
export function selectMultipleRows(state, firstRow, lastRow, incremental) {
    var firstCol = state.cellMatrix.first.column;
    var lastCol = state.cellMatrix.last.column;
    var range = state.cellMatrix.getRange(newLocation(firstRow, firstCol), newLocation(lastRow, lastCol));
    return __assign({}, state, { selectionMode: 'row', selectedIndexes: incremental ? state.selectedIndexes.concat(range.rows.map(function (row) { return row.idx; })) : range.rows.map(function (row) { return row.idx; }), selectedIds: incremental ? state.selectedIds.concat(range.rows.map(function (row) { return row.rowId; })) : range.rows.map(function (row) { return row.rowId; }) });
}
