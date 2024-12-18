/**
 * Check if an URL is valid
 * to avoid an Open Redirect Vulnerability.
 * @param {string} pageURL URL of Page
 * @returns {boolean} Is URL valid or not
 */
export function isURLValid(pageURL) {

    // Add 'http://127.0.0.1:5500' to use Local LiveServer Extension in Visual Studio
    const localLiveServerDomain = "http://127.0.0.1:5500";

    const allowedRedirects = ["https://www.christian-schwanse.com", "http://www.christian-schwanse.com", localLiveServerDomain];
    let isValid = false;

    for (const redirect of allowedRedirects) {
        if (pageURL.includes(redirect)) {
            isValid = true;
            break;
        }
    }

    return isValid;
}
