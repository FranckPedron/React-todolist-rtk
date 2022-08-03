import { configureStore} from "@reduxjs/toolkit";
import todoReducer from "../slices/redux"

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
})
