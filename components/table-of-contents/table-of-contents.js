/**
 * Close all details-summaries.
 * Useful e. g. for a-Tag Jumps.
 *
 * When a details-summary is open,
 * it can happen that the a-Tag
 * jumps to the wrong position (not always the case).
 *
 * --> Result: Annoyed user.
 * @param {any} evt Event
 * @returns {void}
 */
export function closeAllDetailsSummaries(evt) {
    const allDetails = document.querySelectorAll("details");

    allDetails.forEach(details => {
        details.open = false;
    });
}
