function inheritPrototype(Derived, Base) {
    function F() { }
    F.prototype = Base.prototype;
    Derived.prototype = new F();
    Derived.prototype.constructor = Derived;
}