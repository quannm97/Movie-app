import  moviesReducer  from "./movies/movieSlice.js";

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {movies:moviesReducer},
})