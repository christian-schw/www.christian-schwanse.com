/*
    Note:
    Translation via JSON-Files doesn't work properly.
    Problems with e. g. span-Tags inside of p-Tags.
    Example:

    Original (German):
    Hey. Ich bin Christian. Ein SAP-Entwickler. 👋
    Translation (English):
    Hey. I'm Christian. A SAP Developer.<span class="wobble">👋</span>

    New approach:
    Restructure of Website Folder Structure.
    In Folder "en" are all english HTML-Files.
    In Folder "de" are all german HTML-Files.
*/


/**
 * Return new URL where the language directory has been replaced.
 * Language directory *always* comes directly after the domain!
 * Example URL: http://www.christian-schwanse.com/de/about-me.html
 * @param {string} lang Language of Page
 * @param {string} pageURL URL of Page
 * @param {string} domain Domain of Page
 * @returns {string} New URL of Page
 */
export function getURLWithReplacedLangDir(lang, pageURL, domain) {
    let newURL = pageURL.replace(domain, "");

    newURL = newURL.split("/");

    /*
      Delete first value of array produced by split-method because it's empty.
      Example:
      Before split: /de/about-me.html
      After split: ['', 'de', 'about-me.html']
      Desired value: ['de', 'about-me.html']
    */
    newURL.shift();

    newURL[0] = lang;
    newURL.unshift(domain);
    newURL = newURL.join("/");

    return newURL;
}


/**
 * Set Language of Page.
 * The corresponding URL with the desired language is loaded.
 * @param {any} evt Event
 * @param {string} lang Language of Page
 * @param {string} pageURL URL of Page
 * @returns {void}
 */
export function setLanguagePage(evt, lang, pageURL) {

    // It's good to check if Location object is available to avoid potential pitfalls.
    if (window.location) {
        const domain = window.location.origin;
        const newURL = getURLWithReplacedLangDir(lang, pageURL, domain);

        // URL will not be replaced if default behavior is not deactivated!
        evt.preventDefault();

        window.location.replace(newURL);
    }
}


/**
 * Get Language of Page for translating header text content.
 * @returns {string} Language of Page
 */
export function getLanguagePage() {
    let langPage = "";

    // It's good to check if Location object is available to avoid potential pitfalls.
    if (window.location) {
        const domain = window.location.origin;
        const currentURL = window.location.href;

        let languageDirectory = currentURL.replace(domain, "");

        languageDirectory = languageDirectory.split("/");

        /*
          Delete first value of array produced by split-method because it's empty.
          Example:
          Before split: /de/about-me.html
          After split: ['', 'de', 'about-me.html']
          Desired value: ['de', 'about-me.html']
        */
        languageDirectory.shift();

        langPage = languageDirectory[0];
    }

    return langPage;
}
