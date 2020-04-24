import * as React from 'react';
import { CellMatrix, Orientation } from '../Model';
interface LineProps {
    linePosition: number;
    orientation: Orientation;
    cellMatrix: CellMatrix;
}
export declare const Line: React.FunctionComponent<LineProps>;
export {};
