let inputDo = document.querySelector('[name="dollar"]');
let inputEg = document.querySelector('[name="egp"]');

inputDo.oninput = function () {
  let eg = (inputDo.value * 15.6).toFixed(2);
  inputEg.value = eg;
};

inputEg.oninput = function () {
  let doo = (inputEg.value / 15.6).toFixed(2);
  inputDo.value = doo;
};
