import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import instance from "../../shared/request";

export const addMemberThunk = createAsyncThunk(
  "ADD_MEMBER",
  async (payload, thunkAPI) => {

    //console.log(payload);
    try {
      const { data } = await instance.post("bunjang/signup", payload);
      if (data.statusCode == 117 || 118) alert(data.statusMsg);
      // console.log(data);
      // console.log(data.statusCode);
      // console.log(data.statusMsg);

      return thunkAPI.fulfillWithValue(data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const initialState = { member: [], isLoading: false, error: null };

const LoginSlice = createSlice({
  name: "member",
  initialState,
  reducers: {},
  extraReducers: {
    [addMemberThunk.pending]: (state) => {
      state.isLoading = true;
    },
    [addMemberThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.member.push(action.payload);
    },
    [addMemberThunk.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { logout } = LoginSlice.actions;
export default LoginSlice.reducer;
