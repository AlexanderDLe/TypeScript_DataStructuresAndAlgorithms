"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SnapshotArray {
    constructor(length) {
        this.history = [];
        for (let i = 0; i < length; i++) {
            this.history.push([0]);
        }
        this.snapID = 0;
    }
    set(index, val) {
        this.history[index][this.snapID] = val;
        console.log(this.history);
    }
    snap() {
        let prev = this.snapID;
        this.snapID++;
        return prev;
    }
    get(index, snap_id) {
        let curr = this.history[index];
        if (curr[snap_id] !== undefined)
            return curr[snap_id];
        while (snap_id >= 0) {
            snap_id--;
            if (curr[snap_id] !== undefined)
                return curr[snap_id];
        }
    }
}
exports.default = () => {
    const snapshotArr = new SnapshotArray(3); // set the length to be 3
    snapshotArr.set(0, 5); // Set array[0] = 5
    console.log(snapshotArr.snap()); // Take a snapshot, return snap_id = 0
    snapshotArr.set(0, 6);
    snapshotArr.set(1, 2);
    console.log(snapshotArr.get(0, 0)); // Get the value of array[0] with snap_id = 0, return 5
    console.log(snapshotArr.snap());
    console.log(snapshotArr.get(1, 0));
    console.log(snapshotArr.snap());
    snapshotArr.set(2, 5);
    snapshotArr.set(0, 8);
    console.log(snapshotArr.get(2, 0));
};
