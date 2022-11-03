import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/request";
import { Cookies } from "react-cookie";

const token = new Cookies().get("token");
// access 토큰 개발자 tool app>cookie 받아오기
const token2 = new Cookies().get("refreshToken");
// refresh 토큰 받아오기

axios.defaults.headers.common["Authorization"] = `${token}`;
axios.defaults.headers.common["Refresh-Token"] = `${token2}`;
// header에 토큰 받은것 담아주기 >> refresh 토큰으로 연장

export const __imgPost = createAsyncThunk(
  "IMG_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const imgPost = await axios({
        method: "post",
        url: "https://coding-kym.shop/bunjang/file",
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${token}`,
          "Refresh-Token": `${token2}`,
        },
        data: payload,
      });
      return thunkAPI.fulfillWithValue(imgPost.data);
    } catch (error) {
      console.log(error);
    }
  }
);

export const __writePost = createAsyncThunk(
  "WRITE_POST",
  async (payload, thunkAPI) => {
    console.log(payload);
    try {
      const post = await instance.post("bunjang/posts", payload);
      return thunkAPI.fulfillWithValue(post.payload);
    } catch (error) {
      console.log(error);
    }
  }
);

export const __mainGet = createAsyncThunk(
  "MAIN_GET",
  async (payload, thunkAPI) => {
    try {
      const getPost = await instance.get("bunjang/posts/get", payload);
      console.log(getPost.data);
      return thunkAPI.fulfillWithValue(getPost.data);
    } catch (error) {
      console.log("메인 get요청 에러");
    }
  }
);
export const __viewGet = createAsyncThunk(
  "VIEW_GET",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const view = await instance.get(`bunjang/posts/get/${payload}`);
      return thunkAPI.fulfillWithValue(view.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const __deletePost = createAsyncThunk(
  "DELETE_POST",
  async (payload, thunkAPI) => {
    try {
      console.log(payload);
      const view = await instance.delete(`bunjang/posts/${payload}`);
      return thunkAPI.fulfillWithValue(view.data);
    } catch (error) {
      console.log(error);
    }
  }
);
export const __mypageGet = createAsyncThunk(
  "MYPAGE_GET",
  async (payload, thunkAPI) => {
    try {
      const mypageView = await instance.get(`bunjang/mypage`);
      console.log(mypageView.data.data);
      return thunkAPI.fulfillWithValue(mypageView.data.data);
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  list: [],
};

const PostSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {},
  extraReducers: {
    [__imgPost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [state.list, action.payload.data];
    },
    [__writePost.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = [state.list, action.payload];
    },
    [__mainGet.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.list = action.payload;
    },
    [__viewGet.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [__mypageGet.fulfilled]: (state, action) => {
      state.list = action.payload;
    },
    [__deletePost.fulfilled]: (state, action) => {
      console.log(state.list);
      state.list = state.list.filter((x) => x.id !== action.payload);
    },
  },
});

export const {} = PostSlice.actions;
export default PostSlice.reducer;
