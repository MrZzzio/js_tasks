var liList;
var activeLi;

function select(ctx) {
    liList = document.getElementById("list").getElementsByTagName('li');
    for(i=0; i<liList.length; i++) {
        liList[i].style.outline = 'none';
    }
    ctx.style.outline = '2px solid #285473';
    activeLi = ctx;
}

function change() {
    var props = getProps();
    setProps(activeLi, props);
}

function create() {
    var ul = document.getElementById("list");
    var props = getProps();
    var newLi = document.createElement("li");
    setProps(newLi, props);
    newLi.setAttribute("onclick", "select(this)");
    ul.appendChild(newLi);
}

function deleteCur() {
    var ul = document.getElementById("list");
    ul.removeChild(activeLi);
}

function getProps() {
    return {
        text: document.getElementById("text").value,
        color: document.getElementById("color").value,
        type: document.getElementById("marker").value
    };
}

function setProps(li, props) {
    li.innerText = props.text;
    li.style.color = props.color;
    li.style.listStyleType = props.type;
}
