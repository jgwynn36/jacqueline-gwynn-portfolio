import * as React from 'react';
import { Range } from '../Model';
export interface PartialAreaProps {
    range: Range;
    pane: Range;
    style: React.CSSProperties;
    class?: string;
}
export declare const PartialArea: React.FunctionComponent<PartialAreaProps>;
