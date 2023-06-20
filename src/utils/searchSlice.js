import { createSlice } from "@reduxjs/toolkit";

const searchslice = createSlice({
  name: "search",
  initialState: {
    cache: {},
    searchstr: "",
  },
  reducers: {
    cacheResults: (state, action) => {
      state.cache = Object.assign(state.cache, action.payload);
    },
    LRUCache: (state, action) => {
      delete state.cache[action.payload];
    },

      searchString: (state, action) => {
        state.searchstr=action.payload
    },
  },
});

export const { cacheResults, LRUCache,searchString } = searchslice.actions;
export default searchslice.reducer;
