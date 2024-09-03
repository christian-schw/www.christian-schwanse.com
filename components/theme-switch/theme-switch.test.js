/**
 * @jest-environment jsdom
 */
import * as themeSwitch from './theme-switch.js';


const themes = {
    darkTheme: '/components/theme-switch/theme-dark-high-contrast.css',
    lightTheme: '/components/theme-switch/theme-light-high-contrast.css'
};

const storageKeyThemePath = 'themePath';



describe('Theme Switch', () => {
    /*
      Improve in future: Unit Tests can be improved 
      when UI-Elements and head-tag data of HTML is tested as well.
      Currently, I don't know how to test that in Jest Test-Framework.
    */


    /*
      Mocking HTML elements to prevent errors with undefined objects 
      within the “real” functions that are tested with Jest.
      E. g. "TypeError: Cannot read properties of null (reading 'setAttribute')."
    */
    document.head.innerHTML += '<link rel="stylesheet" href="/components/theme-switch/theme-light-high-contrast.css" id="theme-link">';
    document.body.innerHTML += '<input type="checkbox" name="theme-checkbox" id="theme-checkbox" />';



    describe('Func initTheme', () => {
        test('DarkTheme in sessionStorage', () => {
            window.sessionStorage.setItem(storageKeyThemePath, themes.darkTheme);
            themeSwitch.initTheme();
            let actualTheme = window.sessionStorage.getItem(storageKeyThemePath);

            expect(actualTheme).toBe(themes.darkTheme);
            expect(document.querySelector('#theme-checkbox').checked).toBe(true);
            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.darkTheme);
        });


        test('LightTheme in sessionStorage', () => {
            window.sessionStorage.setItem(storageKeyThemePath, themes.lightTheme);
            themeSwitch.initTheme();
            let actualTheme = window.sessionStorage.getItem(storageKeyThemePath);

            expect(actualTheme).toBe(themes.lightTheme);
            expect(document.querySelector('#theme-checkbox').checked).toBe(false);
            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.lightTheme);
        });


        test('No theme in sessionStorage', () => {
            themeSwitch.initTheme();
            let actualTheme = window.sessionStorage.getItem(storageKeyThemePath);

            expect(actualTheme).toBe(themes.lightTheme);
            expect(document.querySelector('#theme-checkbox').checked).toBe(false);
            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.lightTheme);
        });
    });



    describe('Func setTheme', () => {
        // TODO: Implement
    });
});