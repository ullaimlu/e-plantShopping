import { configureStore } from '@reduxjs/toolkit';
import cartReducer from "./components/CreateSlice";

 const store = configureStore({
    reducer: {
        cart : cartReducer
    },
});
export default store