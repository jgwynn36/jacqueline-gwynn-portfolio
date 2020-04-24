import * as React from 'react';
import { State, Range, PointerEvent, Behavior, Location } from '../Model';
export declare class FillHandleBehavior extends Behavior {
    private fillDirection;
    private fillRange?;
    handlePointerEnter(event: PointerEvent, location: Location, state: State): State;
    private getFillDirection;
    private getFillRange;
    handlePointerUp(event: PointerEvent, location: Location, state: State): State;
    private fillRows;
    private fillColumns;
    renderPanePart(state: State, pane: Range): React.ReactNode;
}
