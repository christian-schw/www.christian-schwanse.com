class Footer extends HTMLElement {
    constructor() {
        super();
    }

    // Lifecycle Callback connectedCallback runs 
    // each time custom element is inserted into DOM
    connectedCallback() {
        this.innerHTML = `
        <footer id="page-footer">
            <p>pageFooter</p>
        </footer>
        `;
    }
}

customElements.define('footer-component', Footer);