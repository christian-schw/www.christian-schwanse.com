/**
 * @jest-environment jsdom
 */
import * as languageSwitch from './language-switch.js';


describe('Language Switch', () => {

    describe('Func setLanguagePage', () => {
        // TODO: Implement
    });


    describe('Func getURLWithReplacedLangDir', () => {
        test('Lang = En, pageURL = https://www.christian-schwanse.com/de/index.html, domain = https://www.christian-schwanse.com', () => {
            let lang = 'en';
            let pageURL = 'https://www.christian-schwanse.com/de/index.html';
            let domain = 'https://www.christian-schwanse.com';
            let expectedOutput = 'https://www.christian-schwanse.com/en/index.html';

            expect(languageSwitch.getURLWithReplacedLangDir(lang, pageURL, domain)).toBe(expectedOutput);
        });


        test('Lang = de, pageURL = https://www.christian-schwanse.com/en/about-me.html, domain = https://www.christian-schwanse.com', () => {
            let lang = 'de';
            let pageURL = 'https://www.christian-schwanse.com/en/about-me.html';
            let domain = 'https://www.christian-schwanse.com';
            let expectedOutput = 'https://www.christian-schwanse.com/de/about-me.html';

            expect(languageSwitch.getURLWithReplacedLangDir(lang, pageURL, domain)).toBe(expectedOutput);
        });


        test('Lang = en, pageURL = https://127.0.0.1:5000/de/contact.html, domain = https://127.0.0.1:5000', () => {
            let lang = 'en';
            let pageURL = 'https://127.0.0.1:5000/de/contact.html';
            let domain = 'https://127.0.0.1:5000';
            let expectedOutput = 'https://127.0.0.1:5000/en/contact.html';

            expect(languageSwitch.getURLWithReplacedLangDir(lang, pageURL, domain)).toBe(expectedOutput);
        });
    });


    describe('Func getLanguagePage', () => {
        // TODO: Implement
    });
});