const init = function () {
    let title = new titles("něco");
    createList(".selektor");
    
}
createList = function (selector) {
    let titles = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    console.log(titles);
    let actuall = titles[0].tagName;
    titles.forEach(element => {
        if(actuall == element.tagName) {
            appendTitle(selector, actuall, element.innerText)
        }
        else if(actuall < element.tagName) {
            actuall = element.tagName;
            appendTitleWithUL(selector, actuall, element.innerText);
        }
    });
};
appendTitleWithUL = function(selector, element, text) {
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
appendTitle = function(selector, element, text) {
    let dest = document.querySelector(selector);
    let li = document.createElement("li");
    let title = document.createElement(element);
    let node = document.createTextNode(text);
    title.appendChild(node);
    li.appendChild(title);
    dest.appendChild(li);
}

document.addEventListener("DOMContentLoaded", init);


