
class Kek extends Lol{
    /**
     *
     * @param {String} a
     * @param b
     * @param c
     */
    constructor(a, b, c){
        super();

        this._a = 2;
    }

    get a(){
        return this._a;
    }

    set a(a){
        this._a = a;
    }

    makeItNew(arg){

    }

    static makeGreatAgain(){

    }


}

export default Kek;

var a = new Kek(2, 1,1);