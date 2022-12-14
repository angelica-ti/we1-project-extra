
const w = document.querySelector('#width-div'),
    h = document.querySelector('#height-div'),
    r = document.querySelector('#red-div'),
    b = document.querySelector('#green-div'),
    g = document.querySelector('#blue-div'),
    t = document.querySelector('#top-div'),
    l = document.querySelector('#left-div'),
    box = document.querySelector('#box');


function eventInput(e){
    let elem = e.id.split('-')[0];
    lbl = document.getElementById(`${elem}-output`);
    lbl.textContent = e.value;
}

w.addEventListener('input', function () {
    eventInput(this);
    box.style.width = w.value+"px";
}, false);

h.addEventListener('input', function () {
    eventInput(this);
    box.style.height = h.value+"px";
}, false);

t.addEventListener('input', function () {
    eventInput(this);
    box.style.top = t.value+"px";
}, false);

l.addEventListener('input', function () {
    eventInput(this);
    box.style.left = l.value+"px";
}, false);

r.addEventListener('input', function () {
    eventInput(this);
    box.style.backgroundColor = `rgb(${r.value},${g.value}, ${b.value})`;
}, false);

g.addEventListener('input', function () {  
    eventInput(this);
    box.style.backgroundColor = `rgb(${r.value},${g.value}, ${b.value})`;
}, false);

b.addEventListener('input', function () {
    eventInput(this);
    box.style.backgroundColor = `rgb(${r.value},${g.value}, ${b.value})`;
}, false);
