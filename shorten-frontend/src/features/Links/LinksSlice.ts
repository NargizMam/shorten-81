import { Link } from '../../types';
import { createLink, getLinkByShortUrl } from './LinkThunk';
import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

interface LinksState {
  link: Link | null,
  shortUrl: string,
  creating: boolean,
  fetching: boolean
}
const initialState: LinksState = {
  link: null,
  shortUrl: '',
  creating: false,
  fetching: false
}

export const linksSlice = createSlice({
  name: "links",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createLink.pending, (state) => {
      state.creating = true;
    });
    builder.addCase(createLink.fulfilled, (state) => {
      state.creating = false;
    });
    builder.addCase(createLink.rejected, state => {
      state.creating = false;
    });
  }
});

export const linksReducer = linksSlice.reducer;
export const selectShortUrl = (state: RootState) => state.links.link;
export const selectCreating = (state: RootState) => state.links.creating;
