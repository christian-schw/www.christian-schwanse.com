// Create Header-Custom-HTML-Element for reusable Header on each HTML-page
class Header extends HTMLElement {
    constructor() {
        super();
    }

    // Lifecycle Callback connectedCallback runs 
    // each time custom element is inserted into DOM
    connectedCallback() {
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

customElements.define('header-component', Header);

// TODO: Implement header-component-de and header-component-en in this file
// TODO: Same goes with footer.