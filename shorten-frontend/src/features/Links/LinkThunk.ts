import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { Link } from '../../types';


export const createLink = createAsyncThunk<void, string>(
  'links/create',
  async (linkMutation) => {
    await axiosApi.post('/links', {originalUrl: linkMutation});
  }
);
export const getLinkByShortUrl = createAsyncThunk<Link, void>(
  'links/:shortUrl',
  async () => {
    const link = await axiosApi.get<Link>('/links/:shortUrl')
    return link.data;
  }
);