import "@testing-library/jest-dom";
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
  "JSON.parse": jest.fn(),
};
global.localStorage = localStorageMock;
