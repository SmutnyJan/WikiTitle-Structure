const init = function () {
    createList(".selektor");
    
}
createList = function (selector) { //samotná funkce na vytvoření listu
    let titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6"); //list s nadpisy
    console.log(titles);
    //tělo programu
    //potřebuji tedy udělat ten objekt s polem potomků
};
appendTitleWithUL = function(selector, element, text) { //přidávání <ul> a <li> (hodí se, když chci udělat další úroveň)
    let dest = document.querySelector(selector);
    let ul = document.createElement("ul");
    let li = document.createElement("li");
    let title = document.createElement(element);
    let node = document.createTextNode(text);
    title.appendChild(node);
    ul.appendChild(li);
    li.appendChild(title);
    dest.appendChild(ul);
}
appendTitle = function(selector, element, text) { //přidávání <li> (hodí se, když chci udělat další prvek s seznamu => nepotřebuji vytvářet ul)
    let dest = document.querySelector(selector);
    let li = document.createElement("li");
    let title = document.createElement(element);
    let node = document.createTextNode(text);
    title.appendChild(node);
    li.appendChild(title);
    dest.appendChild(li);
}

document.addEventListener("DOMContentLoaded", init);


