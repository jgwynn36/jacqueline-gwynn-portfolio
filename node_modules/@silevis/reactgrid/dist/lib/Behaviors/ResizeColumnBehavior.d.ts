import { Behavior, PointerLocation, State, PointerEvent, Direction } from '../Model';
export declare class ResizeColumnBehavior extends Behavior {
    private minColumnWidth;
    private resizedColumn;
    private initialLocation;
    autoScrollDirection: Direction;
    handlePointerDown(event: PointerEvent, location: PointerLocation, state: State): State;
    handlePointerMove(event: PointerEvent, location: PointerLocation, state: State): State;
    handlePointerUp(event: PointerEvent, location: PointerLocation, state: State): State;
}
