import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AllReducers from './AllReducers';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, AllReducers);

const store = createStore(persistedReducer, {}, applyMiddleware(thunk));

const persistor = persistStore(store);

export { store, persistor };
