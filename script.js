let h2 = document.createElement('h2')
h2.innerHTML='Новая Таблица'
h2.classList='h2'
document.body.prepend(h2)
let  img1 = document.createElement('img')
img1.src='noo.png'
img1.classList='no'
h2.append(img1)
let img2 = document.createElement('img')
img2.src='go.png'
img2.classList='go'
h2.append(img2)
let hr = document.createElement('hr')
h2.append(hr)
let left = document.createElement("img")
left.src="left.png"
left.classList='left'
document.body.append(left)
let center = document.createElement("img")
center.src="center.png"
center.classList="center"
document.body.append(center)
let right = document.createElement("img")
right.src="right.png"
right.classList="right"
document.body.append(right)
let b = document.createElement("img")
b.src="b2.png"
b.classList="b"
document.body.append(b)
let l = document.createElement("img")
l.src="i.png"
l.classList="l"
document.body.append(l)
let u = document.createElement("img")
u.src="u.png"
u.classList="u"
document.body.append(u)
let hr2 = document.createElement('hr')
document.body.append(hr2)
let f = document.createElement("img")
f.src="f.png"
f.classList="f"
document.body.append(f)
// let hr3 = document.createElement('hr')
// document.body.append(hr3)

// -------------------------------------------------------------------------------------------------------------------
let table = document.createElement('table')
table.classList="table"
document.body.append(table)
for (let i=0; i<101; i++) {
    let row = document.querySelector("table").insertRow(-1);
    for (let j=0; j<15; j++) {
        let letter = String.fromCharCode("A".charCodeAt(0)+j-1);
        row.insertCell(-1).innerHTML = i&&j ? "<input id='"+ letter+i +"'/>" : i||letter;
    }
}

let DATA={}, INPUTS=[].slice.call(document.querySelectorAll("input"));
INPUTS.forEach(function(elm) {
    elm.onfocus = function(e) {
        e.target.value = localStorage[e.target.id] || "";
    };
    elm.onblur = function(e) {
        localStorage[e.target.id] = e.target.value;
        computeAll();
    };
    let red = function() {
        let value = localStorage[elm.id] || "";
        if (value.charAt(0) == "=") {
            with (DATA) return eval(value.substring(1));
        } else { return isNaN(parseFloat(value)) ? value : parseFloat(value); }
    };
    Object.defineProperty(DATA, elm.id, {get:red});
    Object.defineProperty(DATA, elm.id.toLowerCase(), {get:red});
});
(window.computeAll = function() {
    INPUTS.forEach(function(elm) { try { elm.value = DATA[elm.id]; } catch(e) {} });
})();

