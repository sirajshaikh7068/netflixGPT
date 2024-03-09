import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlyingVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addNowPlayingVideo: (state, action) => {
      state.nowPlyingVideo = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const { addNowPlayingMovies, addNowPlayingVideo } = moviesSlice.actions;
