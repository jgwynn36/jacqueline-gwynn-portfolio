import * as React from 'react';
export var Line = function (props) {
    var cellMatrix = props.cellMatrix, linePosition = props.linePosition;
    var isVertical = !!(props.orientation === 'vertical');
    var lineStyles = Object.assign({}, isVertical
        ? { left: props.linePosition, height: cellMatrix.height }
        : { top: props.linePosition, width: cellMatrix.width });
    return (React.createElement(React.Fragment, null, linePosition !== -1 &&
        React.createElement("div", { className: "rg-line " + (isVertical ? 'rg-line-vertical' : 'rg-line-horizontal'), style: lineStyles })));
};
