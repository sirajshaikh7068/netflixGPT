import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    nowPlyingVideo: null,
    popularMovies: null,
    toprated: null,
    upComing: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },

    addTopRated: (state, action) => {
      state.toprated = action.payload;
    },

    addUpComing: (state, action) => {
      state.upComing = action.payload;
    },
    addNowPlayingVideo: (state, action) => {
      state.nowPlyingVideo = action.payload;
    },
  },
});

export default moviesSlice.reducer;

export const {
  addNowPlayingMovies,
  addNowPlayingVideo,
  addPopularMovies,
  addTopRated,
  addUpComing,
} = moviesSlice.actions;
