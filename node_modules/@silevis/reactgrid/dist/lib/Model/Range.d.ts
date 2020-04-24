import { GridColumn, GridRow, Location } from '.';
export declare class Range {
    readonly rows: GridRow[];
    readonly columns: GridColumn[];
    readonly width: number;
    readonly height: number;
    readonly first: Location;
    readonly last: Location;
    constructor(rows: GridRow[], columns: GridColumn[]);
    contains(location: Location): boolean;
    containsRange(range: Range): boolean;
    intersectsWith(range: Range): boolean;
    slice(range: Range, direction: 'columns' | 'rows' | 'both'): Range;
}
