/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';

/*
  To test sessionStorage in Jest, you have to mock the sessionStorage
  in unit test to be able to call it.
*/
/* const mockSessionStorage = {
    mockGetItem: jest.fn(),
    mockSetItem: jest.fn(),
    mockRemoveItem: jest.fn()
} */
const mockGetItem = jest.fn();
const mockSetItem = jest.fn();
const mockRemoveItem = jest.fn();

Object.defineProperty(window, 'sessionStorage', {
    value: {
        getItem: (...args) => mockGetItem(...args),
        setItem: (...args) => mockSetItem(...args),
        removeItem: (...args) => mockRemoveItem(...args)
    }
});