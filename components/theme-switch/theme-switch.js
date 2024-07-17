const darkTheme = '/components/theme-switch/theme-dark-high-contrast.css';
const lightTheme = '/components/theme-switch/theme-light-high-contrast.css';
let themePath = sessionStorage.getItem("themePath");


export function initTheme() {
    // Use theme which was set by the user in the past.
    // themePath should have a correct value / theme CSS path when the website is loaded!

    const themeLink = document.querySelector('#theme-link');

    // If nothing or an invalid value has been set, use default theme ==> lightTheme
    if (themePath !== darkTheme) {
        themePath = lightTheme;
    }

    sessionStorage.setItem("themePath", themePath);
    themeLink.setAttribute('href', themePath);
}


export function setTheme(evt) {
    console.log("Start js-File theme-switch. Value of themePath in sessionStorage: ", sessionStorage.getItem("themePath"));
    const themeLink = document.querySelector('#theme-link');

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



