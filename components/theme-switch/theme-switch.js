import { logoImage } from '../header/header.js';


const themes = {
    darkTheme: '/components/theme-switch/theme-dark-high-contrast.css',
    lightTheme: '/components/theme-switch/theme-light-high-contrast.css'
};

const storageKeyThemePath = 'themePath';



/**
 * Initialize theme when page is loaded.
 * 
 * Use theme which was set by the user in the past.
 * Otherwise use the default theme (light theme).
 */
export function initTheme() {
    // themePath should have a correct value / theme CSS path when the website is loaded!
    let themePath = sessionStorage.getItem(storageKeyThemePath);

    const themeLink = document.querySelector('#theme-link');


    if (themePath === themes.darkTheme) {
        // Set appearance of theme switch as well.
        // Otherwise it can happen that Dark Theme is 
        // displayed but the theme switch is still set to Light Theme.
        document.querySelector('#theme-checkbox').checked = true;
        setLogoImageTheme(themePath);
    }
    else {
        // If nothing or an invalid value has been set, use default theme (lightTheme)
        // and default appearance of theme switch as well.
        themePath = themes.lightTheme;

        document.querySelector('#theme-checkbox').checked = false;
        setLogoImageTheme(themePath);
    }


    sessionStorage.setItem(storageKeyThemePath, themePath);

    // Important: Naming Convention for Themes must be followed
    themeLink.setAttribute('href', themePath);
}



/**
 * Set the theme requested by the user.
 * @param {*} evt 
 */
export function setTheme(evt) {
    let themePath = sessionStorage.getItem(storageKeyThemePath);
    const themeLink = document.querySelector('#theme-link');


    if (evt.target.checked) {
        // Dark Theme
        themePath = themes.darkTheme;
        setLogoImageTheme(themePath);
    }
    else {
        // Light Theme
        themePath = themes.lightTheme;
        setLogoImageTheme(themePath);
    }


    sessionStorage.setItem(storageKeyThemePath, themePath);

    // Important: Naming Convention for Themes must be followed
    themeLink.setAttribute('href', themePath);
}



/**
 * Set the theme of the logo image requested by the user.
 * Light Theme is the default theme.
 * @param {string} themePath
 */
export function setLogoImageTheme(themePath) {
    let headerLogoImage = document.querySelector('#header-logo-image');

    if (themePath == themes.darkTheme) {
        headerLogoImage.src = logoImage.src.darkTheme
    }
    else {
        // Default: Light Theme
        headerLogoImage.src = logoImage.src.lightTheme
    }
}



