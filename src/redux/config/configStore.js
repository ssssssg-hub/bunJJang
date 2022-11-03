import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import member from "../modules/loginSlice";

import postReducer from "../modules/postSlice";
const store = configureStore({
  reducer: { member, postReducer },

  middleware: getDefaultMiddleware({
    serializableCheck: false,
    // 직렬화 오류 없애기. 왜 직렬화 오류 뜨는지?
  }),
});

export default store;
