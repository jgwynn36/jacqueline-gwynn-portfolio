import * as React from 'react';
import { State, Borders, Range } from '../Model';
export interface PaneRowProps {
    id: string;
    class?: string;
    state: State;
    style: React.CSSProperties;
    range: Range;
    borders: Borders;
    zIndex: number;
}
export declare const PaneRow: React.FunctionComponent<PaneRowProps>;
