import React, { useState } from 'react';
import { selectCreating, selectShortUrl } from './LinksSlice';
import { Grid, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { createLink } from './LinkThunk';
import { apiURL } from '../../constants';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

const Links = () => {
  const dispatch = useAppDispatch();
  const [state, setState] = useState<string>('');
  const shortUrl = useAppSelector(selectShortUrl);
  const creating = useAppSelector(selectCreating);
  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {value} = e.target;
    setState(value);
  };

  const submitFormHandler = (event: React.FormEvent) => {
    event.preventDefault();
    if(state){
      dispatch(createLink(state));
    }
  };
  return (
    <div className="App">
      <h2>Shorten Your link</h2>
      <form
        autoComplete="off"
        onSubmit={submitFormHandler}
      >
        <Grid container direction="column" spacing={2}>
          <Grid item xs>
            <TextField
              sx={{width: 500}}
              id="URL" label="URL"
              onChange={inputChangeHandler}
              defaultValue={state}
            />
          </Grid>
          <Grid item xs>
            <LoadingButton type="submit"
                           color="primary"
                           variant="contained"
                           disabled={state === ''}
                           loading={creating}
            >Shorten</LoadingButton>
          </Grid>
        </Grid>
      </form>
      {shortUrl ? <div className="result">
        <p>Your Link Now looks like this: </p>
        <div className="url_div"><h3><a href={apiURL+"/"+ shortUrl}>{apiURL+"/"+shortUrl}</a></h3></div>
      </div> : null}
    </div>
  );
};
export default Links;