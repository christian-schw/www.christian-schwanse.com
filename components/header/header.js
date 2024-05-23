class Header extends HTMLElement {
  constructor() {
    super();
  }

  // Lifecycle Callback connectedCallback runs 
  // each time custom element is inserted into DOM
  // TODO: Format innerHTML-Code when header done
  connectedCallback() {
    this.innerHTML = `
    <header id="page-header">
    <nav>
        <h2 class="visually-hidden">Navigationsmenü</h2>

        <div id="page-header-flex">
            <ul id="page-header-left">
                <li>
                    <a href="index.html"><span id="header-logo">Christian Schwanse</span>
                    </a>
                </li>
            </ul>

            <ul id="page-header-right">
                <li class="header-button"><a href="about-me.html">Über mich</a></li>
                <li class="header-button"><a href="my-projects.html">Projekte</a></li>
                <li class="header-button"><a href="contact.html">Kontakt</a></li>
                <li>
                    <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="theme-checkbox">
                            <input type="checkbox" name="theme-checkbox" id="theme-checkbox" />
                            <div class="slider round"></div>
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