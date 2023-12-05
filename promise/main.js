let prom = new Promise((resolve, reject) => {
  let xhr = new XMLHttpRequest();
  xhr.open('get', './json.json');
  xhr.send();
  xhr.onload = function () {
    if (xhr.status === 200 && xhr.readyState === 4) {
      resolve(xhr.responseText);
    } else {
      reject(console.log(Error('something bad in the data')));
    }
  };
});
prom
  .then((alldata) => JSON.parse(alldata))
  .then((ten) => {
    ten.length = 5;
    return ten;
  })
  .then((five) => {
    for (let i = 0; i < five.length; i++) {
      let div = document.createElement('div');

      let h3 = document.createElement('h3');
      let h3Node = document.createTextNode(`${five[i].title}`);
      h3.appendChild(h3Node);

      let p = document.createElement('p');
      let pNode = document.createTextNode(`${five[i].description}`);
      p.appendChild(pNode);

      div.append(h3, p);

      document.body.appendChild(div);
    }
  });

fetch('./json.json')
  .then((ten) => ten.json())
  .then((ten) => {
    ten.length = 5;
    return ten;
  })
  .then((five) => {
    for (let i = 0; i < five.length; i++) {
      let div = document.createElement('div');
      let hr = document.createElement('hr');

      let h3 = document.createElement('h3');
      let h3Node = document.createTextNode(`${five[i].title}`);
      h3.appendChild(h3Node);

      let p = document.createElement('p');
      let pNode = document.createTextNode(`${five[i].description}`);
      p.appendChild(pNode);

      div.append(h3, p);

      document.body.appendChild(hr);
      document.body.appendChild(div);
    }
  });
