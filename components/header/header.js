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


                <nav id="page-header-nav">
                    <h2 class="visually-hidden">Navigation menu</h2>
                    <ul id="page-header-nav-list">
                        <li class="btn-nav btn-nav-normal"><a href="about-me.html">About me</a></li>
                        <li class="btn-nav btn-nav-normal"><a href="my-projects.html">Projects</a></li>
                        <li class="btn-nav btn-nav-normal"><a href="contact.html">Contact</a></li>
                        <li class="btn-nav btn-nav-normal" id="btn-lang-de"><a href="">DE</a></li>
                        <li class="btn-nav btn-nav-normal" id="btn-lang-en"><a href="">EN</a></li>
                        <li>
                            <div id="theme-switch-wrapper">
                                <label id="theme-switch" for="theme-checkbox">
                                    <input type="checkbox" name="theme-checkbox" id="theme-checkbox" />
                                    <div id="theme-slider"></div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
            `;
        }
        else {
            // Use German as default language
            this.innerHTML = `
            <header id="page-header">
                <h2 class="visually-hidden">Page Header - Christian Schwanse</h2>

                <a href="index.html" id="header-logo">Christian Schwanse</a>


                <nav id="page-header-nav">
                    <h2 class="visually-hidden">Navigationsmenü</h2>
                    <ul id="page-header-nav-list">
                        <li class="btn-nav btn-nav-normal"><a href="about-me.html">Über mich</a></li>
                        <li class="btn-nav btn-nav-normal"><a href="my-projects.html">Projekte</a></li>
                        <li class="btn-nav btn-nav-normal"><a href="contact.html">Kontakt</a></li>
                        <li class="btn-nav btn-nav-normal" id="btn-lang-de"><a href="">DE</a></li>
                        <li class="btn-nav btn-nav-normal" id="btn-lang-en"><a href="">EN</a></li>
                        <li>
                            <div id="theme-switch-wrapper">
                                <label id="theme-switch" for="theme-checkbox">
                                    <input type="checkbox" name="theme-checkbox" id="theme-checkbox" />
                                    <div id="theme-slider"></div>
                                </label>
                            </div>
                        </li>
                    </ul>
                </nav>
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