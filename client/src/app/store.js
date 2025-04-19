import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// import rootReducer from '../features/rootReducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: false
    })
});

export const persistor = persistStore(store);