import {
  UpdateProfileEmailParams,
  ProfileState,
  UpdateProfilePasswordParams,
} from "@/types/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState: ProfileState = {
  res: "",
  loading: false,
  error: "",
};
export const updateProfileEmail = createAsyncThunk(
  "user/updateProfile",
  async (
    {  newEmail, token }: UpdateProfileEmailParams,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}profile/email`,
        {  newEmail },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const updateProfilePassword = createAsyncThunk(
  "user/secondAPICall",
  async (
    { currentPassword, newPassword, token }: UpdateProfilePasswordParams,
    { rejectWithValue }
  ) => {
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}profile/password`,
        { currentPassword, newPassword },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const userSlice = createSlice({
  name: "updateProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateProfileEmail.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateProfileEmail.fulfilled, (state, action) => {
        state.res = action.payload;
        state.loading = false;
        state.error = "";
        toast.success(action.payload.message);
      })
      .addCase(updateProfileEmail.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload as string);
      })
      .addCase(updateProfilePassword.pending, (state) => {
        state.loading = true;
        state.error = "";
      })
      .addCase(updateProfilePassword.fulfilled, (state, action) => {
        state.res = action.payload;
        state.loading = false;
        state.error = "";
        toast.success(action.payload);
      })
      .addCase(updateProfilePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error(action.payload as string);
      });
  },
});

export default userSlice.reducer;
