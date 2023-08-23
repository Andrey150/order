const range = document.querySelector('#range');
let value = document.querySelector('.input__value');

value.innerHTML = `${range.value}&nbsp;%`

range.addEventListener("input", function() {
  value.innerHTML = `${this.value}&nbsp;%`
});

