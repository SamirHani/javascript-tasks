let num = document.querySelector("[name='elements']");
let form = document.forms;
let text = document.querySelector("[name='texts']");
let type = document.querySelector("[name='type']");
let results = document.querySelector('.results');

form[0].onsubmit = function (stop) {
  stop.preventDefault();
  document.querySelectorAll('.box').forEach((el) => el.remove());

  for (let i = 1; i <= num.value; i++) {
    let cards = document.createElement(type.value);
    let cont = document.createTextNode(text.value);
    cards.setAttribute('id', `id-${i}`);
    cards.setAttribute('class', `box`);
    cards.setAttribute('title', `Element`);
    cards.appendChild(cont);
    results.appendChild(cards);
  }
};


