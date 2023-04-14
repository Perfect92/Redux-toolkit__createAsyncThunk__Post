import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    return data;
  })

const UsersSlice = createSlice({
    name: "users",
    initialState: {
        users: [],
      },
      extraReducers: (builder) => {
        builder
          .addCase(fetchUsers.fulfilled, (state, action) => {
            state.users = action.payload
          })
      }
    })
    
    export default UsersSlice.reducer
