import { configureStore, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import loginReducer from "./slices/loginSlice";

const persistConfig = {
  key: 'root',
  storage,
};

const reducer = combineReducers({
    loginState: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
