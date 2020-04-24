var Behavior = (function () {
    function Behavior() {
        this.autoScrollDirection = 'both';
    }
    Behavior.prototype.handleKeyDown = function (event, state) {
        return state;
    };
    Behavior.prototype.handleKeyUp = function (event, state) {
        return state;
    };
    Behavior.prototype.handleCopy = function (event, state) {
        return state;
    };
    Behavior.prototype.handlePaste = function (event, state) {
        return state;
    };
    Behavior.prototype.handleCut = function (event, state) {
        return state;
    };
    Behavior.prototype.handlePointerDown = function (event, location, state) {
        return state;
    };
    Behavior.prototype.handlePointerEnter = function (event, location, state) {
        return state;
    };
    Behavior.prototype.handlePointerMove = function (event, location, state) {
        return state;
    };
    Behavior.prototype.handlePointerUp = function (event, location, state) {
        return state;
    };
    Behavior.prototype.handleDoubleClick = function (event, location, state) {
        return state;
    };
    Behavior.prototype.handleContextMenu = function (event, state) {
        return state;
    };
    Behavior.prototype.renderPanePart = function (state, pane) {
        return undefined;
    };
    return Behavior;
}());
export { Behavior };
