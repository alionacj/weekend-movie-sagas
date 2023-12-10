import { HashRouter as Router, Route } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details'

import { Typography, Container, ThemeProvider } from '@mui/material';

import './App.css';
import theme from '../theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Container
          className="App"
          maxWidth="xl"
          sx={{
            bgcolor: "background.red",
            borderRadius: 2,
            padding: 4
          }}
        >
          <Typography
            variant="h1"
            sx={{
              bgcolor: 'text.gray',
              borderRadius: 4,
              padding: 1
            }}
          >
            The Movies Saga!
          </Typography>
          <Router>

            <Route exact path="/">
              <MovieList />
            </Route>
            
            <Route exact path="/details">
              <Details />
            </Route>
            
          </Router>
        </Container>
      </ThemeProvider>
    </>
  );
}


export default App;
