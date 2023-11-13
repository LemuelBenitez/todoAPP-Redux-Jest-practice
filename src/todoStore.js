import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSLice.js'

const store= configureStore({
    reducer:{
        todos: todoReducer,
    },
});

export default store;