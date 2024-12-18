/*
  =======================================================
  ====== Setup Jest test environment for all files ======
  =======================================================
*/

// For jest-mocking (e. g. function-mocking "jest.fn();")
// import { jest } from "@jest/globals";


/*
  Note:
  Mocking the local or session storage is not necessary.
  Simply use e. g. "window.sessionStorage" instead of just "sessionStorage"
  and the tests will work!

  Normally you can leave "window" out.
  However, this is required for Jest Unit Tests.
*/


// Mock location of window-object
Object.defineProperty(window, "location", {
  value: {
    origin: "https://www.christian-schwanse.com"
  },

  // Enable overriding origin because normally you can only get (not set!) this value.
  writable: true
});
