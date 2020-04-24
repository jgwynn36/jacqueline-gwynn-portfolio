import * as React from 'react';
import { ReactGridProps, GridRendererProps, State } from '../Model';
export declare class ReactGrid extends React.Component<ReactGridProps, State> {
    private stateUpdater;
    private eventHandlers;
    state: State;
    static getDerivedStateFromProps(props: ReactGridProps, state: State): State;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.FunctionComponentElement<GridRendererProps>;
    private handleStateUpdate;
}
