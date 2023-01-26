import { createSlice } from '@reduxjs/toolkit';

const initialState: unknown = {};

export const jobsSlice = createSlice({
  name: 'jobs',
  initialState: initialState,
  reducers: {},
});

export default jobsSlice.reducer;
