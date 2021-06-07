import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.js";
import movieReducer from '../features/movies/movieSlice';

export default configureStore ({
  reducer:{
    user:userReducer,
    movie: movieReducer,

  },
  middleware:getDefaultMiddleware({
    serializablecheck: false,

  })
});
