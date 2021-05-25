import { appInfo } from '../configs/appInfo';

const getStorageKey = (key: string) => {
  return `@${appInfo.name}:${key}`;
};

export const storage = {
  setItem: (key: string, value: string) => {
    const storageKey = getStorageKey(key);
    localStorage.setItem(storageKey, value);
  },

  getItem: (key: string) => {
    const storageKey = getStorageKey(key);
    return localStorage.getItem(storageKey);
  },

  removeItem: (key: string) => {
    const storageKey = getStorageKey(key);
    localStorage.removeItem(storageKey);
  },
};
