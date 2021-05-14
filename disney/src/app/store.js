import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice.js";


export default configureStore ({
  reducer:{
    user:userReducer,

  },
  middleware:getDefaultMiddleware({
    serializablecheck: false,

  })
});
