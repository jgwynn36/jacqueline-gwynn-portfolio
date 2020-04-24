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
import { State } from '../Model';
import { DefaultGridRenderer } from './DefaultGridRenderer';
import { LegacyBrowserGridRenderer } from './LegacyBrowserGridRenderer';
import { EventHandlers } from '../Functions/EventHandlers';
import { getDerivedStateFromProps } from '../Functions/getDerivedStateFromProps';
var ReactGrid = (function (_super) {
    __extends(ReactGrid, _super);
    function ReactGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.stateUpdater = function (modifier) { return _this.handleStateUpdate(modifier(_this.state)); };
        _this.eventHandlers = new EventHandlers(_this.stateUpdater);
        _this.state = new State(_this.stateUpdater);
        return _this;
    }
    ReactGrid.getDerivedStateFromProps = function (props, state) {
        return getDerivedStateFromProps(props, state);
    };
    ReactGrid.prototype.componentDidMount = function () {
        window.addEventListener('resize', this.eventHandlers.windowResizeHandler);
    };
    ReactGrid.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.eventHandlers.windowResizeHandler);
    };
    ReactGrid.prototype.render = function () {
        var grid = this.state.legacyBrowserMode ? LegacyBrowserGridRenderer : DefaultGridRenderer;
        return React.createElement(grid, { state: this.state, eventHandlers: this.eventHandlers });
    };
    ReactGrid.prototype.handleStateUpdate = function (state) {
        var changes = state.queuedCellChanges.slice();
        if (changes.length > 0) {
            if (this.props.onCellsChanged) {
                this.props.onCellsChanged(changes.slice());
            }
            ;
            changes.forEach(function () { return state.queuedCellChanges.pop(); });
        }
        if (state !== this.state) {
            this.setState(state);
        }
    };
    return ReactGrid;
}(React.Component));
export { ReactGrid };
;
