/** TODO: Remove / Update function descrp if necessary
* @param {boolean} isLight - If true, then light theme is used. If false, then dark theme.
*/
export function setTheme(evt) {
    let themeLink = document.querySelector('#theme-link');
    let themePath;

    // TODO: Remove console.logs after everything OK
    console.log('setTheme begins. Value of themeLink: ', themeLink, ' and themePath: ', themePath);

    if (evt.target.checked) {
        // Dark Theme
        themePath = '/components/theme-switch/theme-dark-high-contrast.css';
    }
    else {
        // Light Theme
        themePath = '/components/theme-switch/theme-light-high-contrast.css';
    }

    console.log('setTheme ends. Value of themeLink: ', themeLink, ' and themePath: ', themePath);

    // Important: Naming Convention for Themes must be followed
    themeLink.setAttribute('href', themePath);
    console.log('Value of themeLink Attribute: ', themeLink);
}




