import * as languageSwitch from "../language-switch/language-switch.js";


/**
 * Create Footer-Custom-HTML-Element for reusable Footer on each HTML-page.
 */
class Footer extends HTMLElement {

    /**
     * Lifecycle Callback connectedCallback runs
     * each time custom element is inserted into DOM.
     * @returns {void}
     */
    connectedCallback() {
        if (languageSwitch.getLanguagePage() === "en") {
            this.innerHTML = `
            <footer id="page-footer">
                <div id="page-footer-left">
                    <p>&#169; 2024 Christian Schwanse</p>
                </div>
            
                <div id="page-footer-right">
                    <div class="btn-nav btn-nav-small">
                        <a href="#page-headline">To top of page &uarr;</a>
                    </div>
                </div>
            </footer>
            `;
        } else {

            // Use German as default language
            this.innerHTML = `
            <footer id="page-footer">
                <div id="page-footer-left">
                    <p>&#169; 2024 Christian Schwanse</p>
                </div>
            
                <div id="page-footer-right">
                    <div class="btn-nav btn-nav-small">
                        <a href="#page-headline">Zum Seitenanfang &uarr;</a>
                    </div>
                </div>
            </footer>
            `;
        }
    }
}

customElements.define("footer-component", Footer);
