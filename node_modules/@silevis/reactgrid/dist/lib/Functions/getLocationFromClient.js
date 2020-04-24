export function getLocationFromClient(state, clientX, clientY, favorScrollableContent) {
    var viewportX = clientX - state.viewportElement.getBoundingClientRect().left;
    var viewportY = clientY - state.viewportElement.getBoundingClientRect().top;
    var _a = getRow(state, viewportY, favorScrollableContent === 'vertical' || favorScrollableContent === 'both'), cellY = _a.cellY, row = _a.row;
    var _b = getColumn(state, viewportX, favorScrollableContent === 'horizontal' || favorScrollableContent === 'both'), cellX = _b.cellX, column = _b.column;
    return { row: row, column: column, viewportX: viewportX, viewportY: viewportY, cellX: cellX, cellY: cellY };
}
function getRow(state, viewportY, favorScrollableContent) {
    var cellMatrix = state.cellMatrix;
    var visibleContentHeight = Math.min(state.viewportElement.clientHeight, cellMatrix.height);
    var bottomPaneTop = visibleContentHeight - cellMatrix.frozenBottomRange.height;
    var scrollTop = state.viewportElement.scrollTop;
    var maxScrollTop = cellMatrix.scrollableRange.height - visibleContentHeight + cellMatrix.frozenTopRange.height + cellMatrix.frozenBottomRange.height - 1;
    if (cellMatrix.frozenTopRange.rows.find(function (row) { return row.bottom > viewportY; }) && viewportY < cellMatrix.frozenTopRange.height && !(favorScrollableContent && scrollTop > 0)) {
        var row = cellMatrix.frozenTopRange.rows.find(function (row) { return row.bottom > viewportY; });
        return { cellY: viewportY - row.top, row: row };
    }
    else if (cellMatrix.frozenBottomRange.rows && viewportY >= bottomPaneTop && !(favorScrollableContent && scrollTop < maxScrollTop)) {
        var row = cellMatrix.frozenBottomRange.rows.find(function (row) { return row.bottom > viewportY - bottomPaneTop; }) || cellMatrix.last.row;
        return { cellY: viewportY - bottomPaneTop - row.top, row: row };
    }
    else {
        var scrollableContentY_1 = viewportY - cellMatrix.frozenTopRange.height + state.viewportElement.scrollTop;
        var row = cellMatrix.scrollableRange.rows.find(function (row) { return row.bottom >= scrollableContentY_1; }) || cellMatrix.scrollableRange.last.row;
        return { cellY: scrollableContentY_1 - row.top, row: row };
    }
}
function getColumn(state, viewportX, favorScrollableContent) {
    var cellMatrix = state.cellMatrix;
    var visibleContentWidth = Math.min(state.viewportElement.clientWidth, cellMatrix.width);
    var rightPaneLeft = visibleContentWidth - cellMatrix.frozenRightRange.width;
    var scrollLeft = state.viewportElement.scrollLeft;
    var maxScrollLeft = cellMatrix.scrollableRange.width - visibleContentWidth + cellMatrix.frozenLeftRange.width + cellMatrix.frozenRightRange.width - 1;
    if (cellMatrix.frozenLeftRange.columns.find(function (col) { return col.right > viewportX; }) && viewportX < cellMatrix.frozenLeftRange.width && !(favorScrollableContent && scrollLeft > 0)) {
        var column = cellMatrix.frozenLeftRange.columns.find(function (col) { return col.right > viewportX; });
        return { cellX: viewportX - column.left, column: column };
    }
    else if (cellMatrix.frozenRightRange.columns && viewportX >= rightPaneLeft && !(favorScrollableContent && scrollLeft < maxScrollLeft)) {
        var column = cellMatrix.frozenRightRange.columns.find(function (col) { return col.right > viewportX - rightPaneLeft; }) || cellMatrix.last.column;
        return { cellX: viewportX - rightPaneLeft - column.left, column: column };
    }
    else {
        var scrollableContentX_1 = viewportX - cellMatrix.frozenLeftRange.width + scrollLeft;
        var column = cellMatrix.scrollableRange.columns.find(function (col) { return col.right >= scrollableContentX_1; }) || cellMatrix.scrollableRange.last.column;
        return { cellX: scrollableContentX_1 - column.left, column: column };
    }
}
