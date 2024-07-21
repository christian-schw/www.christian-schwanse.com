import * as languageSwitch from '/components/language-switch/language-switch.js';


/**
 * Create Footer-Custom-HTML-Element for reusable Footer on each HTML-page.
 */
class Footer extends HTMLElement {
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
            <footer id="page-footer">
                <div id="page-footer-left">
                    <!-- Insert more information if needed -->
                </div>
                
                <div id="page-footer-middle">
                    <p>&#169; 2024 Christian Schwanse</p>
                </div>
            
                <div id="page-footer-right">
                    <div class="btn-nav btn-nav-small">
                        <a href="#page-header">Go to top of page &uarr;</a>
                    </div>
                </div>
            </footer>
            `;
        }
        else {
            // Use German as default language
            this.innerHTML = `
            <footer id="page-footer">
                <div id="page-footer-left">
                    <!-- Insert more information if needed -->
                </div>
                
                <div id="page-footer-middle">
                    <p>&#169; 2024 Christian Schwanse</p>
                </div>
            
                <div id="page-footer-right">
                    <div class="btn-nav btn-nav-small">
                        <a href="#page-header">Gehe zum Seitenanfang &uarr;</a>
                    </div>
                </div>
            </footer>
            `;
        }
    }
}

customElements.define('footer-component', Footer);