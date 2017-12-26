class Field {

    constructor(x, y) {
        this._x = x;
        this._y = y;
        this._f = [];
        for (let i = 0; i < x; i++) {
            this._f[i] = [];
        }
    }

    setCell(x, y, cell) {
        this._f[x][y] = cell;
    }

    getCell(x, y) {
        if (x >= 0 && x < this._x && y >= 0 && y < this._y) {
            return this._f[x][y];
        }
    }

    getCells() {
        return this._f;
    }

    render() {
        for (let i = 0; i < this._x; i++) {
            for (let j = 0; j < this._y; j++) {
                this.getCell(i, j).render();
            }
        }
    }
}

const x = 11, y = 11;

export default new Field(x, y);