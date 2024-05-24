export function setTheme(evt) {
    const themeLink = document.querySelector('#theme-link');
    let themePath;

    if (evt.target.checked) {
        // Dark Theme
        themePath = '/components/theme-switch/theme-dark-high-contrast.css';
    }
    else {
        // Light Theme
        themePath = '/components/theme-switch/theme-light-high-contrast.css';
    }

    // Important: Naming Convention for Themes must be followed
    themeLink.setAttribute('href', themePath);
}




