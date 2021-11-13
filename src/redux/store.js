// import { createStore, combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import phonebookReducer from './phoneBook/phonebook-reducer';

// const rootReducer = combineReducers({
//     phonebook: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { contactsReducer, filterReducer } from './phoneBook/phonebook-reducer';
import { combineReducers } from 'redux';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import logger from 'redux-logger';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    contactsReducer,
    filterReducer,
});

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filterReducer'],
};

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    logger,
];

export const store = configureStore({
    reducer: {
        contacts: persistReducer(contactsPersistConfig, rootReducer),
    },
    devTools: process.env.NODE_ENV === 'development',
    middleware,
});

export const persistor = persistStore(store);
