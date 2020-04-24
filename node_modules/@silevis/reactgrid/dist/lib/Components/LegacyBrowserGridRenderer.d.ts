import * as React from 'react';
import { State, GridRendererProps } from '../Model';
export declare class LegacyBrowserGridRenderer extends React.Component<GridRendererProps> {
    private frozenTopScrollableElement;
    private frozenRightScrollableElement;
    private frozenBottomScrollableElement;
    private frozenLeftScrollableElement;
    render(): JSX.Element;
    private hiddenScrollableElementRefHandler;
    private frozenTopScrollableElementRefHandler;
    private frozenRightScrollableElementRefHandler;
    private frozenBottomScrollableElementRefHandler;
    private frozenLeftScrollableElementRefHandler;
    private scrollHandler;
    private isClickedOutOfGrid;
    private isHorizontalScrollbarVisible;
    private isVerticalScrollbarVisible;
}
export declare function copySelectedRangeToClipboardInIE(state: State, removeValues?: boolean): void;
