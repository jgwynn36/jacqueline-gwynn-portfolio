import * as React from 'react';
import { PointerLocation, State, Direction } from '.';
import { KeyboardEvent, ClipboardEvent, PointerEvent } from '../Functions/domEvents';
import { Range } from './Range';
export declare abstract class Behavior {
    handleKeyDown(event: KeyboardEvent, state: State): State;
    handleKeyUp(event: KeyboardEvent, state: State): State;
    handleCopy(event: ClipboardEvent, state: State): State;
    handlePaste(event: ClipboardEvent, state: State): State;
    handleCut(event: ClipboardEvent, state: State): State;
    handlePointerDown(event: PointerEvent, location: PointerLocation, state: State): State;
    handlePointerEnter(event: PointerEvent, location: PointerLocation, state: State): State;
    handlePointerMove(event: PointerEvent, location: PointerLocation, state: State): State;
    handlePointerUp(event: PointerEvent, location: PointerLocation, state: State): State;
    handleDoubleClick(event: PointerEvent, location: PointerLocation, state: State): State;
    handleContextMenu(event: PointerEvent, state: State): State;
    renderPanePart(state: State, pane: Range): React.ReactNode;
    autoScrollDirection: Direction;
}
