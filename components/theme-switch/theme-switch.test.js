/**
 * @jest-environment jsdom
 */
import { logoImage, logoImageSRC } from '../header/header.js';
import * as themeSwitch from './theme-switch.js';



describe('Theme Switch', () => {
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
        test('Switch from LightTheme to DarkTheme', () => {
            let themeCheckbox = document.querySelector('#theme-checkbox');

            // Light Theme
            themeCheckbox.checked = false;

            themeCheckbox.addEventListener('change', themeSwitch.setTheme, false);

            // Dark Theme
            themeCheckbox.checked = true;

            themeCheckbox.dispatchEvent(new Event('change'));

            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.darkTheme);
        });


        test('Switch from DarkTheme to LightTheme', () => {
            let themeCheckbox = document.querySelector('#theme-checkbox');

            // Dark Theme
            themeCheckbox.checked = true;

            themeCheckbox.addEventListener('change', themeSwitch.setTheme, false);

            // Light Theme
            themeCheckbox.checked = false;

            themeCheckbox.dispatchEvent(new Event('change'));

            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.lightTheme);
        });
    });


    describe('Func setLogoImageTheme', () => {
        test('DarkTheme in sessionStorage', () => {
            window.sessionStorage.setItem(storageKeyThemePath, themes.darkTheme);
            themeSwitch.initTheme();
            let actualTheme = window.sessionStorage.getItem(storageKeyThemePath);

            expect(actualTheme).toBe(themes.darkTheme);
            expect(document.querySelector('#' + logoImage.id).src).toBe(logoImage.src.darkTheme);
            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.darkTheme);
        });


        test('LightTheme in sessionStorage', () => {
            window.sessionStorage.setItem(storageKeyThemePath, themes.lightTheme);
            themeSwitch.initTheme();
            let actualTheme = window.sessionStorage.getItem(storageKeyThemePath);

            expect(actualTheme).toBe(themes.lightTheme);
            expect(document.querySelector('#' + logoImage.id).src).toBe(logoImage.src.lightTheme);
            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.lightTheme);
        });


        test('No theme in sessionStorage', () => {
            themeSwitch.initTheme();
            let actualTheme = window.sessionStorage.getItem(storageKeyThemePath);

            expect(actualTheme).toBe(themes.lightTheme);
            expect(document.querySelector('#' + logoImage.id).src).toBe(logoImage.src.lightTheme);
            expect(document.querySelector('#theme-link').getAttribute('href')).toBe(themes.lightTheme);
        });
    });
});