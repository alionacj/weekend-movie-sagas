import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

import theme from '../theme';

import { Card, CardContent, CardHeader, Grid, ThemeProvider, Typography } from '@mui/material';

function MovieList() {

  const movies = useSelector(store => store.movies);

  const dispatch = useDispatch();
  const history = useHistory()

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
    <>
    <ThemeProvider theme={theme}>
      <Typography variant="h3" sx={{ mt: 5, mb: 5}}>Showings</Typography>
      <Grid
        className="movies"
        container
        spacing={6}
      >
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
                onClick={() => {handleDetails(movie.id)}}>
                <CardHeader
                  title={movie.title}
                  sx={{
                    height: 60
                  }}
                />
                <CardContent>
                  <img
                    data-testid="toDetails"
                    src={movie.poster}
                    alt={movie.title}
                    />
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
