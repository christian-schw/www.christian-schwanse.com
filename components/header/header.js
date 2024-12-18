import * as languageSwitch from "../language-switch/language-switch.js";


// To save the user's scroll position
let lastScrollTop = 0;

const classes = {
    classHamburgerNavOpen: "hamburger-nav--open",
    classPageHeaderNavOpen: "page-header-nav--open"
};

export const logoImage = {
    id: "header-logo-image",
    src: {
        lightTheme: "/assets/images/svg/logo-cs-black.svg",
        darkTheme: "/assets/images/svg/logo-cs-white.svg"
    }
};


/**
 * Create Header-Custom-HTML-Element for reusable Header on each HTML-page.
 */
class Header extends HTMLElement {

    /**
     * Lifecycle Callback connectedCallback runs
     * each time custom element is inserted into DOM.
     * @returns {void}
     */
    connectedCallback() {
        if (languageSwitch.getLanguagePage() === "en") {
            this.innerHTML = `
            <header id="page-header">
                <h2 class="visually-hidden">Page Header - Christian Schwanse</h2>

                <a href="index.html">
                    <img id="header-logo-image" src="${logoImage.src.lightTheme}" alt="Logo" title="Christian Schwanse" role="img" />
                </a>

                <nav id="page-header-nav" tabindex="0">
                    <h2 class="visually-hidden">Navigation menu</h2>
                    <div id="wrapper-menu-nav">
                        <ul id="page-header-nav-list" role="menubar" aria-haspopup="true">
                            <li class="btn-nav btn-nav-normal" role="menuitem" aria-label="About me">
                            <a href="about-me.html">About me</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" role="menuitem" aria-label="Projects">
                            <a href="my-projects.html">Projects</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" role="menuitem" aria-label="Contact">
                            <a href="contact.html">Contact</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" id="btn-lang-de" role="menuitem" aria-label="Deutsche Sprache">
                            <a href="">DE</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" id="btn-lang-en" role="menuitem" aria-label="English Language">
                            <a href="">EN</a>
                            </li>
                            <li role="menuitem" aria-label="Dark-Light-Theme-Switch">
                                <div id="theme-switch-wrapper">
                                    <label id="theme-switch" for="theme-checkbox">
                                        <input type="checkbox" name="theme-checkbox" id="theme-checkbox" />
                                        <div id="theme-slider"></div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>


                <div id="hamburger-nav">
                  <div id="bar-nav-first" class="bar-nav"></div>
                  <div class="bar-nav"></div>
                  <div class="bar-nav"></div>
                </div>
            </header>
            `;
        } else {

            // Use German as default language
            this.innerHTML = `
            <header id="page-header">
                <h2 class="visually-hidden">Page Header - Christian Schwanse</h2>

                <a href="index.html">
                    <img id="header-logo-image" src="${logoImage.src.lightTheme}" alt="Logo" title="Christian Schwanse" role="img" />
                </a>

                <nav id="page-header-nav" tabindex="0">
                    <h2 class="visually-hidden">Navigationsmenü</h2>
                    <div id="wrapper-menu-nav">
                        <ul id="page-header-nav-list" role="menubar" aria-haspopup="true">
                            <li class="btn-nav btn-nav-normal" role="menuitem" aria-label="Über mich">
                            <a href="about-me.html">Über mich</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" role="menuitem" aria-label="Projekte">
                            <a href="my-projects.html">Projekte</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" role="menuitem" aria-label="Kontakt">
                            <a href="contact.html">Kontakt</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" id="btn-lang-de" role="menuitem" aria-label="Deutsche Sprache">
                            <a href="">DE</a>
                            </li>
                            <li class="btn-nav btn-nav-normal" id="btn-lang-en" role="menuitem" aria-label="English Language">
                            <a href="">EN</a>
                            </li>
                            <li role="menuitem" aria-label="Dark-Light-Theme-Switch">
                                <div id="theme-switch-wrapper">
                                    <label id="theme-switch" for="theme-checkbox">
                                        <input type="checkbox" name="theme-checkbox" id="theme-checkbox" />
                                        <div id="theme-slider"></div>
                                    </label>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>

                
                <div id="hamburger-nav">
                  <div id="bar-nav-first" class="bar-nav"></div>
                  <div class="bar-nav"></div>
                  <div class="bar-nav"></div>
                </div>
            </header>
            `;
        }
    }
}

customElements.define("header-component", Header);


/**
 * Classy Scroll Animation of Header:
 * When scrolling down, it should disappear.
 * When scrolling up, it should appear.
 * @param {any} evt Event
 * @returns {void}
 */
export function headerScrollAnimation(evt) {
    const header = document.querySelector("#page-header");

    // Height is not hardcoded so that the animation is responsive.
    const headerHeight = header.offsetHeight;

    /*
      Use both methods (scrollY and scrollTop) to make sure
      that code works in variety of browsers - including older
      browsers that do not support scrollY.
    */
    const currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {

        // Scroll down
        header.style.top = `${-headerHeight}px`;
    } else {

        // Scroll up
        header.style.top = "0px";
    }

    lastScrollTop = currentScrollTop;
}


/**
 * Hamburger Menu Animation:
 * When user clicks on Hamburger Menu on e.g. smartphone,
 * navigation list of header should appear
 * @param {any} evt Event
 * @returns {void}
 */
export function toggleHamburgerMenuNavList(evt) {
    const pageHeaderNav = document.querySelector("#page-header-nav");
    const hamburgerNav = document.querySelector("#hamburger-nav");

    pageHeaderNav.classList.toggle(classes.classPageHeaderNavOpen);
    hamburgerNav.classList.toggle(classes.classHamburgerNavOpen);
}


/**
 * Hide / Reset Hamburger Menu Animation
 *
 * When scrolling, the menu should also be closed automatically
 * - for better user-friendliness.
 *
 * Otherwise you first have to scroll down again to make the menu
 * appear and then click on the hamburger button.
 * @param {any} evt Event
 * @returns {void}
 */
export function hideHamburgerMenuNavList(evt) {
    const pageHeaderNav = document.querySelector("#page-header-nav");
    const hamburgerNav = document.querySelector("#hamburger-nav");

    if (pageHeaderNav.classList.contains(classes.classPageHeaderNavOpen)) {
        pageHeaderNav.classList.remove(classes.classPageHeaderNavOpen);
        hamburgerNav.classList.remove(classes.classHamburgerNavOpen);
    }
}
