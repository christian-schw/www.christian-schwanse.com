/**
 * @jest-environment jsdom
 */
import { jest } from '@jest/globals';

/*
  To test sessionStorage in Jest, you have to mock the sessionStorage
  in unit test to be able to call it.
  Also jsdom is needed for window-Object.
*/
const mockSessionStorage = {
    mockGetItem: jest.fn(),
    mockSetItem: jest.fn(),
    mockRemoveItem: jest.fn()
}

Object.defineProperty(window, 'sessionStorage', {
    value: {
        getItem: (...args) => mockSessionStorage.mockGetItem(...args),
        setItem: (...args) => mockSessionStorage.mockSetItem(...args),
        removeItem: (...args) => mockSessionStorage.mockRemoveItem(...args)
    }
});