let myNodelist = document.getElementsByTagName("li");
for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7"); 
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function addElemento() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("tarefa").value;
    let data = new Date(); 
    let dia = data.getDate(); 
    let mes = data.getMonth() + 1; 
    let ano = data.getFullYear();
    let t = document.createTextNode(`[${dia}/${mes}/${ano}] ${inputValue.toUpperCase()}`); 
    li.appendChild(t);
    if (inputValue === '') {
        alert("Você precisa descrever a tarefa");
    } else {
        document.getElementById("itemLista").appendChild(li);
    }
    document.getElementById("tarefa").value = "";
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    for (let i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

function limparLista() {
    let lista = document.getElementById("itemLista");
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
}

list.addEventListener('dblclick', function(ev) {
    if (ev.target.tagName === 'LI') {
        let textoAtual = ev.target.textContent;
        let novoTexto = prompt('Editar tarefa:', textoAtual);
        if (novoTexto !== null && novoTexto !== '') {
            ev.target.textContent = novoTexto;
        }
    }
}, false);
