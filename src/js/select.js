const selectWrapper = document.querySelector('.select-wrapper');
const selectValue = selectWrapper.querySelector('.select-value');
const selectOptions = selectWrapper.querySelector('.select-options');
const selectOptionItems = Array.from(selectOptions.querySelectorAll('.select-option'));

selectValue.addEventListener('click', function() {
  selectOptions.classList.toggle('show');
  selectValue.classList.toggle('show');
});

selectOptionItems.forEach(function(option) {
  option.addEventListener('click', function() {
    const value = this.getAttribute('data-value');
    selectValue.textContent = this.textContent;
    selectOptions.classList.remove('show');
    selectValue.classList.remove('show');
  });
});

document.addEventListener('click', function(e) {
  if (!selectWrapper.contains(e.target)) {
    selectOptions.classList.remove('show');
    selectValue.classList.remove('show');
  }
});