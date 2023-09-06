function hideSelf() {
  let btn = document.querySelector('button.hide-self-button');

  btn.onclick = function () {
    btn.hidden = true;
  };
}
