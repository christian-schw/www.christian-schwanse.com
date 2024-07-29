import * as languageSwitch from '/components/language-switch/language-switch.js';


/**
 * Create Header-Custom-HTML-Element for reusable Header on each HTML-page.
 */
class Header extends HTMLElement {
    constructor() {
        super();
    }



    /**
     * Lifecycle Callback connectedCallback runs 
     * each time custom element is inserted into DOM.
     */
    connectedCallback() {
        if (languageSwitch.getLanguagePage() === 'en') {
            this.innerHTML = `
            <header id="page-header">
                <h2 class="visually-hidden">Page Header - Christian Schwanse</h2>

                <a href="index.html" id="header-logo">Christian Schwanse</a>


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
                  <div class="bar-nav"></div>
                  <div class="bar-nav"></div>
                  <div class="bar-nav"></div>
                </div>
            </header>
            `;
        }
        else {
            // Use German as default language
            this.innerHTML = `
            <header id="page-header">
                <h2 class="visually-hidden">Page Header - Christian Schwanse</h2>

                <a href="index.html" id="header-logo">Christian Schwanse</a>


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
                  <div class="bar-nav"></div>
                  <div class="bar-nav"></div>
                  <div class="bar-nav"></div>
                </div>
            </header>
            `;
        }
    }
}

customElements.define('header-component', Header);



// To save the user's scroll position
let lastScrollTop = 0;

/**
 * Classy Scroll Animation of Header:
 * When scrolling down, it should disappear.
 * When scrolling up, it should appear.
 * @param {*} evt 
 */
export function headerScrollAnimation(evt) {
    const header = document.querySelector('#page-header');

    // Height is not hardcoded so that the animation is responsive.
    const headerHeight = header.offsetHeight;

    /*
      Use both methods (scrollY and scrollTop) to make sure
      that code works in variety of browsers - including older
      browsers that do not support scrollY.
    */
    let currentScrollTop = window.scrollY || document.documentElement.scrollTop;

    if (currentScrollTop > lastScrollTop) {
        // Scroll down
        header.style.top = -headerHeight + "px";
    }
    else {
        // Scroll up
        header.style.top = "0px";
    }

    lastScrollTop = currentScrollTop;
}


/**
 * Hamburger Menu Animation:
 * When user clicks on Hamburger Menu on e.g. smartphone,
 * navigation list of header should appear
 * @param {*} evt 
 */
export function showHamburgerMenuNavList(evt) {
    const pageHeaderNav = document.querySelector('#page-header-nav');
    const hamburgerNav = document.querySelector('#hamburger-nav');

    pageHeaderNav.classList.toggle('page-header-nav--open');
    hamburgerNav.classList.toggle('hamburger-nav--open');
}
