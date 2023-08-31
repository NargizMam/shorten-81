import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import AppToolbar from './components/AppToolbar';


function App() {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="xl">

        </Container>
      </main>
    </>
  );
}

export default App;
