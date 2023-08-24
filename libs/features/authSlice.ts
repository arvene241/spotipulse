import { createSlice } from "@reduxjs/toolkit";

interface authState {
  user: string;
  accessToken: string;
}

const initialState: authState = {
  user: "",
  accessToken: "",
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.accessToken = accessToken;
    },
    logout: (state, action) => {
      state.user = "";
      state.accessToken = "";
    },
  },
})

export const { setCredentials, logout } = authSlice.actions;

export const authReducer = authSlice.reducer;

// export const selectCurrentUser = (state) => state.auth.user;
// export const selectCurrentToken = (state) => state.auth.token;