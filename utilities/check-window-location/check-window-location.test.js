/**
 * @jest-environment jsdom
 */
import * as checkWindowLocation from "./check-window-location.js";


describe("Check Window Location", () => {
    describe("Func isURLValid", () => {
        test("Invalid URL: pageURL = http://www.evil-website.com", () => {
            const pageURL = "http://www.evil-website.com";

            expect(checkWindowLocation.isURLValid(pageURL)).toBe(false);
        });

        test("Invalid URL: pageURL = ''", () => {
            const pageURL = "";

            expect(checkWindowLocation.isURLValid(pageURL)).toBe(false);
        });

        test("Valid URL: pageURL = https://www.christian-schwanse.com", () => {
            const pageURL = "https://www.christian-schwanse.com";

            expect(checkWindowLocation.isURLValid(pageURL)).toBe(true);
        });

        test("Valid URL: pageURL = http://www.christian-schwanse.com", () => {
            const pageURL = "http://www.christian-schwanse.com";

            expect(checkWindowLocation.isURLValid(pageURL)).toBe(true);
        });
    });
});
