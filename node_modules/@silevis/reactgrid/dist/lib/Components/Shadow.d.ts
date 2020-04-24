import * as React from 'react';
import { CellMatrix, Orientation } from '../Model';
interface ShadowProps {
    shadowPosition: number;
    orientation: Orientation;
    cellMatrix: CellMatrix;
    shadowSize: number;
    cursor: string;
}
export declare class Shadow extends React.Component<ShadowProps> {
    render(): false | JSX.Element;
}
export {};
