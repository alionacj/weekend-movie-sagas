import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Card, CardContent, CardHeader, Grid, ThemeProvider, Typography } from '@mui/material';
import theme from '../theme';

import './MovieList.css';

function MovieList() {

  // reducers/tools
  const movies = useSelector(store => store.movies);
  const dispatch = useDispatch();
  const history = useHistory()

  // on launch
  useEffect(() => {
    dispatch({ type: 'FETCH_MOVIES' });
  }, []);

  // sets details in reducer upon click
  const handleDetails = (id) => {
    dispatch({
      type: 'FETCH_DETAILS',
      payload: id
    })
    history.push('/details')
  }

  return (

    // container
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h3" sx={{ mt: 5, mb: 5 }}>Showings</Typography>

        {/* movies grid */}
        <Grid
          className="movies"
          container
          spacing={6}>

          {/* map of all movies into cards */}
          {movies.map(movie => {
            return (
              <Grid item xs={3}>
                <Card
                  data-testid="movieItem"
                  key={movie.id}
                  sx={{
                    borderRadius: 2,
                    bgcolor: 'error.main',
                    boxShadow: 20,
                    height: 425
                  }}
                  onClick={() => { handleDetails(movie.id) }}>
                  <CardHeader
                    title={movie.title}
                    sx={{
                      height: 60
                    }}/>
                  <CardContent>
                    <img
                      data-testid="toDetails"
                      src={movie.poster}
                      alt={movie.title}/>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}

        </Grid>
      </ThemeProvider>
    </>
  );
}


export default MovieList;
