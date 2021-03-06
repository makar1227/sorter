class Sorter {
    constructor() {
        this.arr = [];
    }

    add(element) {
        this.arr.push(element);
    }

    at(index) {
        return this.arr[index];
    }

    get length() {
        return this.arr.length;
    }

    toArray() {
        return this.arr;
    }

    sort(indices) {
        indices.sort();
        for (var i = 0; i < indices.length - 1; i++) {
            for (var j = i + 1; j < indices.length; j++) {
                if (this.comparator === undefined) {
                    if (this.arr[indices[i]] > this.arr[indices[j]]) {
                        let temp = this.arr[indices[i]];
                        this.arr[indices[i]] = this.arr[indices[j]];
                        this.arr[indices[j]] = temp;
                    }
                }
                else {
                    let a = [];
                    a.push(this.arr[indices[i]]);
                    a.push(this.arr[indices[j]]);

                    a = a.sort(this.comparator);
                    this.arr[indices[i]] = a[0];
                    this.arr[indices[j]] = a[1];
                }
            }
        }
        return this.arr;
    }

    setComparator(compareFunction) {
        this.comparator = compareFunction;
    }
}

module.exports = Sorter;
