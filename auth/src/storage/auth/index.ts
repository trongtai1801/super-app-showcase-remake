import {createSlice} from '@reduxjs/toolkit';
import {AuthPayload, AuthState} from './types';
const slice = createSlice({
  name: 'auth',
  initialState: {
    token: '',
    loading: false,
    error: '',
  } as AuthState,
  reducers: {
    updateAuth: (state, {payload: {token}}: AuthPayload) => {
      state.token = token || '';
    },
  },
});

export const {updateAuth} = slice.actions;
export default slice.reducer;
