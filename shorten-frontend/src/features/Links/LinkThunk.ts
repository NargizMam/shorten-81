import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';


export const createLink = createAsyncThunk<void, string>(
  'links/create',
  async (linkMutation) => {
    await axiosApi.post('/links', {originalUrl: linkMutation});
  }
);
