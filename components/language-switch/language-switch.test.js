/**
 * @jest-environment jsdom
 */
import * as languageSwitch from "./language-switch.js";


describe("Language Switch", () => {

    /*
      Mocking HTML elements to prevent errors with undefined objects
      within the “real” functions that are tested with Jest.
      E. g. "TypeError: Cannot read properties of null (reading 'setAttribute')."
    */
    document.body.innerHTML += `
        <ul>
            <li class="btn-nav btn-nav-normal" id="btn-lang-de" role="menuitem" aria-label="Deutsche Sprache">
            <a href="">DE</a>
            </li>
            <li class="btn-nav btn-nav-normal" id="btn-lang-en" role="menuitem" aria-label="English Language">
            <a href="">EN</a>
            </li>
        </ul>`;


    describe("Func setLanguagePage", () => {

        // TODO: Implement Unit Tests.
        // Haven't done it yet because I don't know how to mock window.location.replace().

        /*         test('Set EN-Language, currentURL = https://www.christian-schwanse.com/de/index.html', () => {
                    const currentURL = 'https://www.christian-schwanse.com/de/index.html';
                    const expectedOutput = 'https://www.christian-schwanse.com/en/index.html';
                    const btnLangEN = document.querySelector('#btn-lang-de');

                    btnLangEN.addEventListener('click', function (evt) {
                        languageSwitch.setLanguagePage(evt, 'en', currentURL)
                    });

                    btnLangEN.dispatchEvent(new Event('click'));

                    expect(window.location.href).toBe(expectedOutput);
                }); */
    });


    describe("Func getURLWithReplacedLangDir", () => {
        test("Lang = En, pageURL = https://www.christian-schwanse.com/de/index.html, domain = https://www.christian-schwanse.com", () => {
            const lang = "en";
            const pageURL = "https://www.christian-schwanse.com/de/index.html";
            const domain = "https://www.christian-schwanse.com";
            const expectedOutput = "https://www.christian-schwanse.com/en/index.html";

            expect(languageSwitch.getURLWithReplacedLangDir(lang, pageURL, domain)).toBe(expectedOutput);
        });


        test("Lang = de, pageURL = https://www.christian-schwanse.com/en/about-me.html, domain = https://www.christian-schwanse.com", () => {
            const lang = "de";
            const pageURL = "https://www.christian-schwanse.com/en/about-me.html";
            const domain = "https://www.christian-schwanse.com";
            const expectedOutput = "https://www.christian-schwanse.com/de/about-me.html";

            expect(languageSwitch.getURLWithReplacedLangDir(lang, pageURL, domain)).toBe(expectedOutput);
        });


        test("Lang = en, pageURL = https://127.0.0.1:5000/de/contact.html, domain = https://127.0.0.1:5000", () => {
            const lang = "en";
            const pageURL = "https://127.0.0.1:5000/de/contact.html";
            const domain = "https://127.0.0.1:5000";
            const expectedOutput = "https://127.0.0.1:5000/en/contact.html";

            expect(languageSwitch.getURLWithReplacedLangDir(lang, pageURL, domain)).toBe(expectedOutput);
        });
    });


    describe("Func getLanguagePage", () => {
        test("Get lang = de, pageURL = https://127.0.0.1:5000/de/contact.html", () => {
            window.location.href = "https://127.0.0.1:5000/de/contact.html";
            window.location.origin = "https://127.0.0.1:5000";
            const expectedOutput = "de";

            expect(languageSwitch.getLanguagePage()).toBe(expectedOutput);
        });


        test("Get lang = en, pageURL = https://www.christian-schwanse.com/en/my-projects.html", () => {
            window.location.href = "https://www.christian-schwanse.com/en/my-projects.html";
            window.location.origin = "https://www.christian-schwanse.com";
            const expectedOutput = "en";

            expect(languageSwitch.getLanguagePage()).toBe(expectedOutput);
        });


        test("Get lang = de, pageURL = https://www.christian-schwanse.com/de/about-me.html", () => {
            window.location.href = "https://www.christian-schwanse.com/de/about-me.html";
            window.location.origin = "https://www.christian-schwanse.com";
            const expectedOutput = "de";

            expect(languageSwitch.getLanguagePage()).toBe(expectedOutput);
        });
    });
});
