import { configureStore } from '@reduxjs/toolkit'
import shofyReducer from './shofySlice'
import { persistStore, persistReducer } from 'redux-persist'
import createWebStorage from 'redux-persist/es/storage/createWebStorage';

// Function to handle server-side storage fallback
export function createPersistStore () {
  const isServer = typeof window === 'undefined';
  if (isServer) {
    return {
      getItem: () => Promise.resolve(null),
      setItem: () => Promise.resolve(),
      removeItem: () => Promise.resolve(),
    };
  } else {
    return createWebStorage('local');
  }
}

// Conditionally setting the storage
const storage = createPersistStore();

// Persist configuration
const persistConfig = {
  key: 'root',
  version: 1,
  storage, // use the storage object
};

// Persist the reducer
const persistedReducer = persistReducer(persistConfig, shofyReducer);

// Store configuration
export const store = configureStore({
  reducer: {
    shofy: persistedReducer,
  },
});

// Persistor
export const persistor = persistStore(store);
