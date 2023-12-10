import { HashRouter as Router, Route } from 'react-router-dom';

import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details'

import { Typography, Container } from '@mui/material';

import './App.css';

function App() {
  return (
    <Container
      className="App"
      maxWidth="xl"
    >
      <Typography variant="h1">The Movies Saga!</Typography>
      <Router>

        <Route exact path="/">
          <MovieList />
        </Route>
        
        <Route exact path="/details">
          <Details />
        </Route>

        {/* Add Movie page */}
        
      </Router>
    </Container>
  );
}


export default App;
