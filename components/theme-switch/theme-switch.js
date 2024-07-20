const darkTheme = '/components/theme-switch/theme-dark-high-contrast.css';
const lightTheme = '/components/theme-switch/theme-light-high-contrast.css';
let themePath = sessionStorage.getItem("themePath");


export function initTheme() {
    // Use theme which was set by the user in the past.
    // themePath should have a correct value / theme CSS path when the website is loaded!


    let themeLink = document.querySelector('#theme-link');


    if (themePath === darkTheme) {
        // Set appearance of theme switch as well
        // Otherwise it can happen that Dark Theme is 
        // displayed but the theme switch is still set to Light Theme.
        //
        // Note: 
        // Pseudoelements like ::after and ::before are not part of DOM!
        // Therefore, cannot be manipulated directly
        let themeSlider = document.querySelector('#theme-slider');
        // TODO: Bugfix when initTheme -> set css-pseudoclass night when night theme activated
    }
    else {
        // If nothing or an invalid value has been set, use default theme ==> lightTheme
        themePath = lightTheme;
    }

    sessionStorage.setItem("themePath", themePath);
    themeLink.setAttribute('href', themePath);
}


export function setTheme(evt) {
    console.log("Start js-File theme-switch. Value of themePath in sessionStorage: ", sessionStorage.getItem("themePath"));
    let themeLink = document.querySelector('#theme-link');

    if (evt.target.checked) {
        // Dark Theme
        themePath = darkTheme;
    }
    else {
        // Light Theme
        themePath = lightTheme;
    }

    // Important: Naming Convention for Themes must be followed
    themeLink.setAttribute('href', themePath);

    sessionStorage.setItem("themePath", themePath);
    console.log("End js-File theme-switch. Value of themePath: ", sessionStorage.getItem("themePath"));
}



