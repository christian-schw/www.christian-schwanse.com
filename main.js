import * as themeSwitch from '/components/theme-switch/theme-switch.js';
import * as languageSwitch from '/components/language-switch/language-switch.js';

// To be sure that JS Code runs only when DOM is ready -> To prevent errors
window.onload = init();



function init() {
    greetingsConsole();



    // Theme Switching
    const themeCheckbox = document.querySelector('#theme-checkbox');
    themeCheckbox.addEventListener('change', themeSwitch.setTheme, false);

    themeSwitch.initTheme();



    // Language of Page
    //
    // It's good to check if Location object is available to avoid potential pitfalls.
    if (window.location) {
        const currentURL = window.location.href;

        // Create additional handles for language event listener.
        // Otherwise method setLanguagePage is fired endlessly.
        // Reason: setLanguagePage uses command 'window.location.replace(newURL);' which
        //         refreshes page with new URL and event listener is fired again.
        const handleLangDe = function (evt) { languageSwitch.setLanguagePage(evt, 'de', currentURL); };
        const handleLangEn = function (evt) { languageSwitch.setLanguagePage(evt, 'en', currentURL); };

        const btnLangDe = document.querySelector('#btn-lang-de');
        btnLangDe.addEventListener('click', handleLangDe, false);

        const btnLangEn = document.querySelector('#btn-lang-en');
        btnLangEn.addEventListener('click', handleLangEn, false);
    }
}



/**
 * Easter Egg: Welcome visitors who dare to take a look inside the console... ;)
 */
function greetingsConsole() {
    let greetings = 'Hello there!\n';
    greetings += '\n';
    greetings += 'I\'m very pleased that you\'re taking a look at the console ;)\n';
    greetings += '\n';
    greetings += 'An important question:\n';
    greetings += 'Why don’t programmers like nature?\n';
    for (let tensionBuildUp = 0; tensionBuildUp < 3; tensionBuildUp++) {
        greetings += '...\n';
    }
    greetings += 'It has too many bugs.\n';
    greetings += '\n';
    greetings += 'That was a really cool joke, wasn\'t it?\n';
    greetings += '\n';
    greetings += 'If you want to find more Easter Eggs, have a look at my Github account!\n';
    greetings += 'https://github.com/CrazyChair69\n';
    greetings += 'Maybe you\'ll find more...\n';
    greetings += '\n';
    greetings += 'I am open to job offers!\n';
    greetings += 'You can reach me at: christian-schwanse@gmx.net\n';

    console.log(greetings);
}