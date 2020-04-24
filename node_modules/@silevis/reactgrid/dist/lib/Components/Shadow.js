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
import * as React from 'react';
var Shadow = (function (_super) {
    __extends(Shadow, _super);
    function Shadow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shadow.prototype.render = function () {
        var _a = this.props, shadowSize = _a.shadowSize, shadowPosition = _a.shadowPosition, cellMatrix = _a.cellMatrix, cursor = _a.cursor;
        var isVertical = this.props.orientation == 'vertical' ? true : false;
        return (this.props.shadowPosition !== -1 &&
            React.createElement("div", { className: "rg-shadow", style: {
                    cursor: cursor,
                    top: (isVertical ? 0 : shadowPosition),
                    left: (isVertical ? shadowPosition : 0),
                    width: isVertical ? shadowSize : cellMatrix.width,
                    height: isVertical ? cellMatrix.height : shadowSize,
                } }));
    };
    return Shadow;
}(React.Component));
export { Shadow };
