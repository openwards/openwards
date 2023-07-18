import { MMKV } from "react-native-mmkv";

export const storage = new MMKV();

export const MMVKStoreAdapter = {
  getItem: (key: string) => {
    return storage.getString(key);    
  },
  setItem: (key: string, value: string) => {
    return storage.set(key, value);
  },
  removeItem: (key: string) => {
    return storage.delete(key);
  }
};
