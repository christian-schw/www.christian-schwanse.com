// TODO: main.test.js => Add Unit Test debounce-func.
// TODO: header.js => Add Unit Tests
// TODO: language-switch.js => Add Unit Tests
// TODO: table-of-contents.js => Add Unit Tests
// TODO: theme-switch.js => Add Unit Tests

// TODO: Finish watching the video before tests are created (https://www.youtube.com/watch?v=x6NUZ8dc9Qg).

/* const main = require('./main'); */

// TODO: Rewrite whole import structure etc. as I can't find another way.
//       Add "./" instead of just "/" to all modules 
//       and if it works => test page with local server.
//       If that doesn't work, remove ESM Support & rewrite whole imports and test it.
import { testBrrrrr } from './main';

test('Brrr brrr', () => {
    expect(testBrrrrr(1, 4)).toBe(5);
});