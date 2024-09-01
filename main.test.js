// TODO: main.test.js => Add Unit Test debounce-func.
// TODO: header.js => Add Unit Tests
// TODO: language-switch.js => Add Unit Tests
// TODO: table-of-contents.js => Add Unit Tests
// TODO: theme-switch.js => Add Unit Tests

// TODO: Finish watching the video before tests are created (https://www.youtube.com/watch?v=x6NUZ8dc9Qg).

/* const main = require('./main'); */
import { testBrrrrr } from './main';

test('Brrr brrr', () => {
    expect(testBrrrrr(1, 4)).toBe(5);
});