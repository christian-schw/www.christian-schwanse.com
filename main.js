import * as header from './components/header/header.js';
import * as themeSwitch from './components/theme-switch/theme-switch.js';
import * as languageSwitch from './components/language-switch/language-switch.js';
import * as debounce from './utilities/debounce.js';
import * as greetings from './utilities/greetings.js';


/*
  To be sure that JS Code runs only when DOM is ready.
  -> To prevent errors when accessing DOM-objects.
*/
window.onload = init();



function init() {
    greetings.greetingsConsole();


    // ========= Hamburger Menu for Mobile Responsiveness =========
    const hamburgerNav = document.querySelector('#hamburger-nav');
    hamburgerNav.addEventListener('click', header.toggleHamburgerMenuNavList, false);

    /*
      Use debouncing to improve performance of scroll-event (if needed)
      Currently, it's set to 0 to provide smooth user experience.
    */
    const debounceHideHamburgerNavList = debounce.debounce(header.hideHamburgerMenuNavList, 0);
    window.addEventListener('scroll', debounceHideHamburgerNavList, false);




    // ========= Theme Switching =========
    const themeCheckbox = document.querySelector('#theme-checkbox');
    themeCheckbox.addEventListener('change', themeSwitch.setTheme, false);

    themeSwitch.initTheme();




    // ========= Language of Page =========
    // It's good to check if Location object is available to avoid potential pitfalls
    if (window.location) {
        const currentURL = window.location.href;

        /*
          Create additional handles for language event listener.
          Otherwise method setLanguagePage is fired endlessly.

          Reason: setLanguagePage uses command 'window.location.replace(newURL);' which
          refreshes page with new URL and event listener is fired again.
        */
        const handleLangDe = function (evt) { languageSwitch.setLanguagePage(evt, 'de', currentURL); };
        const handleLangEn = function (evt) { languageSwitch.setLanguagePage(evt, 'en', currentURL); };

        const btnLangDe = document.querySelector('#btn-lang-de');
        btnLangDe.addEventListener('click', handleLangDe, false);

        const btnLangEn = document.querySelector('#btn-lang-en');
        btnLangEn.addEventListener('click', handleLangEn, false);
    }
}