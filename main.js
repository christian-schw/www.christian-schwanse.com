import * as themeSwitch from '/components/theme-switch/theme-switch.js';

// To be sure that JS Code runs only when DOM is ready -> To prevent errors
window.onload = init();

function init() {
    console.log('main.js init begins');
    let checkBoxTheme = document.querySelector('#theme-checkbox');
    checkBoxTheme.addEventListener('change', themeSwitch.setTheme, false);
    console.log('main.js init ends');
}