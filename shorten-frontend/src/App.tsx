import React from 'react';
import { Container, CssBaseline } from '@mui/material';
import AppToolbar from './components/AppToolbar';
import Links from './features/Links/Links';


function App() {
  return (
    <>
      <CssBaseline/>
      <header>
        <AppToolbar/>
      </header>
      <main>
        <Container maxWidth="xl">
          <Links/>
        </Container>
      </main>
    </>
  );
}

export default App;
