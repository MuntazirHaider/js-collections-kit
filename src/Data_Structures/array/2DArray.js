export default class Matrix {

    constructor(row = 10, col = 10, value = 0) {
        const martix = new Array(row).fill().map(() => new Array(col).fill(value));
    }

    add(row, col, value) {
        if (this.isValidRow(row) && this.isValidCol(col)) {
            this.martix[row][col] = value;
        }
    }

    update(row, col, value) {
        if (this.isValidRow(row) && this.isValidCol(col)) {
            this.martix[row][col] += value;
        }
    }

    get(row, col) {
        if (this.isValidRow(row) && this.isValidCol(col)) {
            return this.martix[row][col];
        }
        return null;
    }

    search(value) {
        if (this.isValidRow(row) && this.isValidCol(col)) {
            return null;
        }
        const result = [];
        for (let i = 0; i < this.martix.length; i++) {
            for (let j = 0; j < this.martix[i].length; j++) {
                if (this.martix[i][j] === value) {
                    return { row: i, col: i };
                }
            }
        }
        return null;
    }

    searchAll(value) {
        const result = [];
        for (let i = 0; i < this.martix.length; i++) {
            for (let j = 0; j < this.martix[i].length; j++) {
                if (this.martix[i][j] === value) {
                    result.push({ row: i, col: j });
                }
            }
        }
        return result;
    }

    replaceAll(val1, val2) {
        for (let i = 0; i < this.martix.length; i++) {
            for (let j = 0; j < this.martix[i].length; j++) {
                if (this.martix[i][j] === val1) {
                    this.martix[i][j] === val2;
                }
            }
        }
        return true;
    }

    isValidRow(row) {
        return row >= 0 && row < this.martix.length;
    }

    isValidCol(col) {
        return col >= 0 && col < this.martix[0].length;
    }

    transpose() {
        const rowCount = this.martix.length;
        const colCount = this.martix[0].length;
        const transposed = new Array(colCount).fill().map(() => new Array(rowCount).fill(0));

        for (let i = 0; i < rowCount; i++) {
            for (let j = 0; j < colCount; j++) {
                transposed[j][i] = this.martix[i][j];
            }
        }
        this.martix = transposed;
    }

    print() {
        return this.martix.map(row => row.join(' ')).join(' ');
    }

    multiply(matrixB) {
        const rowCountA = this.martix.length;
        const colCountA = this.martix[0].length;
        const rowCountB = matrixB.length;
        const colCountB = matrixB[0].length;

        if (colCountA !== rowCountB) {
            return false;
        }

        const result = new Array(rowCountA).fill().map(() => new Array(colCountB).fill(0));

        for (let i = 0; i < rowCountA; i++) {
            for (let j = 0; j < colCountB; j++) {
                for (let k = 0; k < colCountA; k++) {
                    result[i][j] += this.martix[i][k] * matrixB[k][j];
                }
            }
        }

        this.martix = result;
        return true;
    }

    fill(value) {
        for (let i = 0; i < this.martix.length; i++) {
            this.martix[i].fill(value);
        }
    }

    clear(value = null) {
        this.fill(value);
    }

    getRow(row) {
        if (this.isValidRow(row)) {
            return this.martix[row];
        }
        return null;
    }

    getColumn(col) {
        if (this.isValidCol(col)) {
            return this.martix.map(row => row[col]);
        }
        return null;
    }

    sum() {
        let total = 0;
        for (let row of this.martix) {
            total += row.reduce((a, b) => a + b, 0);
        }
        return total;
    }

    max() {
        return Math.max(...this.martix.flat());
    }

    min() {
        return Math.min(...this.martix.flat());
    }

}