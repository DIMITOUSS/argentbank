import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';




// Async thunk for fetching user profile
export const fetchUserProfile = createAsyncThunk(
  'user/fetchUserProfile',
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token") || sessionStorage.getItem("token");
    if (!token) return;
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/profile", {}, { headers: { Authorization: `Bearer ${token}` } });
      if (response.status === 200) {
        return response.data.body;
      }
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue("Error fetching user profile");
    }
  }
);

// Create user slice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    loading: false,
    error: null,
    userProfile: ''
  },
  reducers: {
    updateUserName(state, action) {
      state.userProfile.userName = action.payload;
    },
    logoutUser(state) {
      localStorage.removeItem("token");
      sessionStorage.removeItem("token");
      state.userProfile = '';
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserProfile.fulfilled, (state, action) => {
        state.userProfile = action.payload;
      })
      .addCase(fetchUserProfile.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Export actions and reducer
export const { updateUserName, logoutUser } = userSlice.actions;
export default userSlice.reducer;
