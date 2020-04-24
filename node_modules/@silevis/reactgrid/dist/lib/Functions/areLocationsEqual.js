export function areLocationsEqual(location1, location2) {
    return location2 && location1.column.idx === location2.column.idx && location1.row.idx === location2.row.idx;
}
