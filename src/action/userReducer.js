import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import  Swal from 'sweetalert2';


// Async thunk for user login
export const loginUser = createAsyncThunk(
  'user/loginUser',
  async ({ email, password, rememberMe }, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/api/v1/user/login", { email, password });
      if (response.status === 200) {
        const token = response.data.body.token;
        rememberMe ? localStorage.setItem("token", token) : sessionStorage.setItem("token", token);
        return;
      } else {
        localStorage.removeItem("token");
        sessionStorage.removeItem("token");
        if (response.status === 401) {
          throw new Error("Incorrect credentials"); // Throw an error for incorrect credentials
        }
        if (response.status === 400) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
        }
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

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
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
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
