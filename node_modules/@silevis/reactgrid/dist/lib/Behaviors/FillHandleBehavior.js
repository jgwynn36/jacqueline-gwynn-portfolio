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
import * as React from 'react';
import { Behavior } from '../Model';
import { getActiveSelectedRange } from '../Functions/getActiveSelectedRange';
import { tryAppendChange } from '../Functions';
import { getCompatibleCellAndTemplate } from '../Functions/getCompatibleCellAndTemplate';
import { newLocation } from '../Functions/newLocation';
import { PartialArea } from '../Components/PartialArea';
var FillHandleBehavior = (function (_super) {
    __extends(FillHandleBehavior, _super);
    function FillHandleBehavior() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.fillDirection = '';
        return _this;
    }
    FillHandleBehavior.prototype.handlePointerEnter = function (event, location, state) {
        var selectedRange = getActiveSelectedRange(state);
        this.fillDirection = this.getFillDirection(selectedRange, location);
        this.fillRange = this.getFillRange(state.cellMatrix, selectedRange, location, this.fillDirection);
        return __assign({}, state);
    };
    FillHandleBehavior.prototype.getFillDirection = function (selectedRange, pointerLocation) {
        var differences = [];
        differences.push({ direction: '', value: 0 });
        differences.push({
            direction: 'up',
            value: pointerLocation.row.idx < selectedRange.first.row.idx ? selectedRange.first.row.idx - pointerLocation.row.idx : 0
        });
        differences.push({
            direction: 'down',
            value: pointerLocation.row.idx > selectedRange.last.row.idx ? pointerLocation.row.idx - selectedRange.last.row.idx : 0
        });
        differences.push({
            direction: 'left',
            value: pointerLocation.column.idx < selectedRange.first.column.idx ? selectedRange.first.column.idx - pointerLocation.column.idx : 0
        });
        differences.push({
            direction: 'right',
            value: pointerLocation.column.idx > selectedRange.last.column.idx ? pointerLocation.column.idx - selectedRange.last.column.idx : 0
        });
        return differences.reduce(function (prev, current) { return (prev.value >= current.value ? prev : current); }).direction;
    };
    FillHandleBehavior.prototype.getFillRange = function (cellMatrix, selectedRange, location, fillDirection) {
        switch (fillDirection) {
            case 'right':
                return cellMatrix.getRange(cellMatrix.getLocation(selectedRange.first.row.idx, cellMatrix.last.column.idx < selectedRange.last.column.idx + 1 ?
                    cellMatrix.last.column.idx :
                    selectedRange.last.column.idx + 1), newLocation(selectedRange.last.row, location.column));
            case 'left':
                return cellMatrix.getRange(newLocation(selectedRange.first.row, location.column), cellMatrix.getLocation(selectedRange.last.row.idx, cellMatrix.first.column.idx > selectedRange.first.column.idx - 1 ?
                    cellMatrix.first.column.idx :
                    selectedRange.first.column.idx - 1));
            case 'up':
                return cellMatrix.getRange(newLocation(location.row, selectedRange.first.column), cellMatrix.getLocation(cellMatrix.first.row.idx > selectedRange.first.row.idx - 1 ?
                    cellMatrix.first.row.idx :
                    selectedRange.first.row.idx - 1, selectedRange.last.column.idx));
            case 'down':
                return cellMatrix.getRange(cellMatrix.getLocation(cellMatrix.last.row.idx < selectedRange.last.row.idx + 1 ?
                    cellMatrix.last.row.idx : selectedRange.last.row.idx + 1, selectedRange.first.column.idx), newLocation(location.row, selectedRange.last.column));
        }
        return undefined;
    };
    FillHandleBehavior.prototype.handlePointerUp = function (event, location, state) {
        var activeSelectedRange = getActiveSelectedRange(state);
        var cellMatrix = state.cellMatrix;
        var values;
        if (!activeSelectedRange || this.fillRange === undefined) {
            return state;
        }
        this.fillRange = state.cellMatrix.validateRange(this.fillRange);
        var getCompatibleCell = function (location) { return getCompatibleCellAndTemplate(state, location).cell; };
        switch (this.fillDirection) {
            case 'right':
                values = activeSelectedRange.rows.map(function (row) { return getCompatibleCell(newLocation(row, activeSelectedRange.last.column)); });
                state = this.fillRows(state, values);
                state = __assign({}, state, { selectedRanges: [cellMatrix.getRange(activeSelectedRange.first, newLocation(activeSelectedRange.last.row, location.column))], selectedIds: activeSelectedRange.columns.map(function (col) { return col.columnId; }).concat(this.fillRange.columns.map(function (col) { return col.columnId; })) });
                break;
            case 'left':
                values = activeSelectedRange.rows.map(function (row) { return getCompatibleCell(newLocation(row, activeSelectedRange.last.column)); });
                state = this.fillRows(state, values);
                state = __assign({}, state, { selectedRanges: [cellMatrix.getRange(activeSelectedRange.last, newLocation(activeSelectedRange.first.row, location.column))], selectedIds: activeSelectedRange.columns.map(function (col) { return col.columnId; }).concat(this.fillRange.columns.map(function (col) { return col.columnId; })) });
                break;
            case 'up':
                values = activeSelectedRange.columns.map(function (column) { return getCompatibleCell(newLocation(activeSelectedRange.last.row, column)); });
                state = this.fillColumns(state, values);
                state = __assign({}, state, { selectedRanges: [cellMatrix.getRange(activeSelectedRange.last, { row: location.row, column: activeSelectedRange.first.column })], selectedIds: activeSelectedRange.rows.map(function (row) { return row.rowId; }).concat(this.fillRange.rows.map(function (row) { return row.rowId; })) });
                break;
            case 'down':
                values = activeSelectedRange.columns.map(function (column) { return getCompatibleCell(newLocation(activeSelectedRange.last.row, column)); });
                state = this.fillColumns(state, values);
                state = __assign({}, state, { selectedRanges: [cellMatrix.getRange(activeSelectedRange.first, newLocation(location.row, activeSelectedRange.last.column))], selectedIds: activeSelectedRange.rows.map(function (row) { return row.rowId; }).concat(this.fillRange.rows.map(function (row) { return row.rowId; })) });
                break;
        }
        return state;
    };
    FillHandleBehavior.prototype.fillRows = function (state, values) {
        var _this = this;
        this.fillRange &&
            this.fillRange.rows.forEach(function (row, i) {
                return _this.fillRange.columns.forEach(function (col) {
                    state = tryAppendChange(state, newLocation(row, col), values[i]);
                });
            });
        return state;
    };
    FillHandleBehavior.prototype.fillColumns = function (state, values) {
        var _this = this;
        this.fillRange &&
            this.fillRange.rows.forEach(function (row) {
                return _this.fillRange.columns.forEach(function (col, i) {
                    state = tryAppendChange(state, newLocation(row, col), values[i]);
                });
            });
        return state;
    };
    FillHandleBehavior.prototype.renderPanePart = function (state, pane) {
        return this.fillDirection && this.fillRange && pane.intersectsWith(this.fillRange) &&
            React.createElement(PartialArea, { range: state.cellMatrix.validateRange(this.fillRange), class: "rg-partial-area-part", pane: pane, style: {
                    backgroundColor: '',
                    borderTop: this.fillDirection === 'down' ? '0px solid transparent' : '',
                    borderBottom: this.fillDirection === 'up' ? '0px solid transparent' : '',
                    borderLeft: this.fillDirection === 'right' ? '0px solid transparent' : '',
                    borderRight: this.fillDirection === 'left' ? '0px solid transparent' : ''
                } });
    };
    return FillHandleBehavior;
}(Behavior));
export { FillHandleBehavior };
