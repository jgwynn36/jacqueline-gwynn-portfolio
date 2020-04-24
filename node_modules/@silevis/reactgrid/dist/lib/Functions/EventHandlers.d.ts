/// <reference types="react" />
import { StateUpdater } from '../Model';
export declare class EventHandlers {
    private updateState;
    constructor(updateState: StateUpdater);
    private pointerEventsController;
    pointerDownHandler: (event: import("react").PointerEvent<HTMLDivElement>) => void;
    keyDownHandler: (event: import("react").KeyboardEvent<HTMLDivElement>) => void;
    keyUpHandler: (event: import("react").KeyboardEvent<HTMLDivElement>) => void;
    copyHandler: (event: import("react").ClipboardEvent<HTMLDivElement>) => void;
    pasteHandler: (event: import("react").ClipboardEvent<HTMLDivElement>) => void;
    cutHandler: (event: import("react").ClipboardEvent<HTMLDivElement>) => void;
    handleContextMenu: (event: import("react").PointerEvent<HTMLDivElement>) => void;
    windowResizeHandler: () => void;
    viewportElementRefHandler: (viewportElement: HTMLDivElement) => void;
    hiddenElementRefHandler: (hiddenFocusElement: HTMLInputElement) => void;
    pasteCaptureHandler: (event: import("react").ClipboardEvent<HTMLDivElement>) => void;
    scrollHandler: () => void;
}
