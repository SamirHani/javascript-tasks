let first = document.querySelector('.one');
let sec = document.querySelector('.two');

first.title= first.className;
first.innerHTML = first.className;
sec.innerHTML = `${sec.className} ${sec.attributes.length}`;
sec.title = sec.className;



