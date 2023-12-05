let xhr = new XMLHttpRequest();
xhr.open('get', 'articles.json');
xhr.send();
xhr.onload = function () {
  console.log(xhr.responseText)
  let mainData = JSON.parse(xhr.responseText);
  console.log(mainData);
  console.log('data Loaded');
  for (let i = 0; i < mainData.length; i++) {
    mainData[i].category = 'all';
  }
  console.log(mainData);
  let UpdatedData = JSON.stringify(mainData);
  console.log(UpdatedData);
  let maindiv = document.createElement('div');
  maindiv.setAttribute('id', 'data');
  for (let i = 0; i < mainData.length; i++) {
    let div = document.createElement('div');

    let h2 = document.createElement('h2');
    let h2Node = document.createTextNode(mainData[i].title);
    h2.appendChild(h2Node);

    let p1 = document.createElement('p');
    let p1Node = document.createTextNode(mainData[i].body);
    p1.appendChild(p1Node);

    let p2 = document.createElement('p');
    let p2Node = document.createTextNode(`Author: ${mainData[i].author}`);
    p2.appendChild(p2Node);

    let p3 = document.createElement('p');
    let p3Node = document.createTextNode(`category: ${mainData[i].category}`);
    p3.appendChild(p3Node);

    div.append(h2, p1, p2, p3);

    maindiv.appendChild(div);
  }
  document.body.appendChild(maindiv);
};
