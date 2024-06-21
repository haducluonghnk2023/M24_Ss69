import { combineReducers, createStore } from "redux";
import productReducer from "./reducers/productReducer";

const rootReducer = combineReducers({
    productReducer
})
const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;
export default store;