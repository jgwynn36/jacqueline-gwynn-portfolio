import { State, Location, Behavior, Direction, GridColumn } from '../Model';
import { PointerEvent } from '../Functions/domEvents';
export declare class ColumnSelectionBehavior extends Behavior {
    autoScrollDirection: Direction;
    initialColumn: GridColumn;
    handlePointerDown(event: PointerEvent, location: Location, state: State): State;
    handlePointerEnter(event: PointerEvent, location: Location, state: State): State;
}
