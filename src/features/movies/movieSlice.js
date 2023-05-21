import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async () => {
        const response = await movieApi.get(`/titles/?list=top_rated_english_250`);
        return response.data;
    }
);

export const fetchAsyncShows = createAsyncThunk(
    "shows/fetchAsyncShows",
    async () => {
        const response = await movieApi.get(`/titles/?list=top_rated_250`);
        return response.data;
    }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const response = await movieApi.get(`/titles/${id}`);
        return response.data;
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectMovieOrShow: {}
};

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("pending");
        },
        [fetchAsyncMovies.fulfilled]: (state, payload) => {
            console.log("Successfully!");
            return { ...state, movies: payload };
        },
        [fetchAsyncMovies.rejected]: (state, payload) => {
            console.log("Rejected!");
        },
        
        [fetchAsyncShows.fulfilled]: (state, payload) => {
            console.log("Successfully!");
            return { ...state, shows: payload };
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, payload) => {
            console.log("Successfully!");
            return { ...state, selectMovieOrShow: payload };
        },
        
    },
});

export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export default movieSlice.reducer;
