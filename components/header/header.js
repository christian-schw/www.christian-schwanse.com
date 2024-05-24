class Header extends HTMLElement {
    constructor() {
        super();
    }

    // Lifecycle Callback connectedCallback runs 
    // each time custom element is inserted into DOM
    connectedCallback() {
        // TODO: Format innerHTML-Code when header done
        this.innerHTML = `
    <header id="page-header">
        <nav>
            <h2 class="visually-hidden">Navigationsmenü</h2>

            <div id="page-header-flex">
                <ul id="page-header-left">
                    <li>
                        <a href="index.html" id="header-logo">Christian Schwanse
                        </a>
                    </li>
                </ul>

                <ul id="page-header-right">
                    <li class="header-button"><a href="about-me.html">Über mich</a></li>
                    <li class="header-button"><a href="my-projects.html">Projekte</a></li>
                    <li class="header-button"><a href="contact.html">Kontakt</a></li>
                    <li>
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
    </header>
    `;
    }
}

customElements.define('header-component', Header);