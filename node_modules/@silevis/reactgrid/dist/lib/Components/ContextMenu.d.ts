import * as React from 'react';
import { MenuOption, Location, State } from '../Model';
interface ContextMenuProps {
    contextMenuPosition: {
        top: number;
        left: number;
    };
    focusedLocation?: Location;
    state: State;
    onContextMenu?: (menuOptions: MenuOption[]) => MenuOption[];
}
export declare class ContextMenu extends React.Component<ContextMenuProps> {
    render(): false | JSX.Element;
}
export {};
