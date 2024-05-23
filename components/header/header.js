class Header extends HTMLElement {
  constructor() {
    super();
  }

  // Lifecycle Callback connectedCallback runs 
  // each time custom element is inserted into DOM
  connectedCallback() {
    this.innerHTML = `
        <header id="page-header">
          <nav>
            <h2 class="visually-hidden">Navigationsmenü</h2>
            <ul>
                <li><a href="about-me.html">Über mich</a></li>
                <li><a href="my-projects.html">Projekte</a></li>
                <li><a href="contact.html">Kontakt</a></li>
                <li>
                    <div class="theme-switch-wrapper">
                        <label class="theme-switch" for="theme-checkbox">
                            <input type="checkbox" name="theme-checkbox" id="theme-checkbox" />
                            <div class="slider round"></div>
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