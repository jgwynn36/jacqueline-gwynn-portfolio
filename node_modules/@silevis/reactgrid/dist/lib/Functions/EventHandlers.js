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
import { PointerEventsController } from './PointerEventsController';
import { recalcVisibleRange } from '.';
var EventHandlers = (function () {
    function EventHandlers(updateState) {
        var _this = this;
        this.updateState = updateState;
        this.pointerEventsController = new PointerEventsController(this.updateState);
        this.pointerDownHandler = function (event) { return _this.updateState(function (state) { return _this.pointerEventsController.handlePointerDown(event, state); }); };
        this.keyDownHandler = function (event) { return _this.updateState(function (state) { return state.currentBehavior.handleKeyDown(event, state); }); };
        this.keyUpHandler = function (event) { return _this.updateState(function (state) { return state.currentBehavior.handleKeyUp(event, state); }); };
        this.copyHandler = function (event) { return _this.updateState(function (state) { return state.currentBehavior.handleCopy(event, state); }); };
        this.pasteHandler = function (event) { return _this.updateState(function (state) { return state.currentBehavior.handlePaste(event, state); }); };
        this.cutHandler = function (event) { return _this.updateState(function (state) { return state.currentBehavior.handleCut(event, state); }); };
        this.handleContextMenu = function (event) { return _this.updateState(function (state) { return state.currentBehavior.handleContextMenu(event, state); }); };
        this.windowResizeHandler = function () { return _this.updateState(recalcVisibleRange); };
        this.viewportElementRefHandler = function (viewportElement) { if (viewportElement)
            _this.updateState(function (state) { return recalcVisibleRange(__assign({}, state, { viewportElement: viewportElement })); }); };
        this.hiddenElementRefHandler = function (hiddenFocusElement) { return _this.updateState(function (state) { state.hiddenFocusElement = hiddenFocusElement; return state; }); };
        this.pasteCaptureHandler = function (event) {
            var htmlData = event.clipboardData.getData('text/html');
            var parsedData = new DOMParser().parseFromString(htmlData, 'text/html');
            if (htmlData && parsedData.body.firstElementChild.getAttribute('data-reactgrid') === 'reactgrid') {
                event.bubbles = false;
            }
        };
        this.scrollHandler = function () {
            return _this.updateState(function (state) {
                var _a = state.viewportElement, scrollTop = _a.scrollTop, scrollLeft = _a.scrollLeft;
                return scrollTop < state.minScrollTop || scrollTop > state.maxScrollTop || scrollLeft < state.minScrollLeft || scrollLeft > state.maxScrollLeft ? recalcVisibleRange(state) : state;
            });
        };
    }
    return EventHandlers;
}());
export { EventHandlers };
