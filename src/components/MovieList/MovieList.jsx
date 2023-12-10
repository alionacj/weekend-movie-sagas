import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

import theme from '../theme';

import { Card, CardContent, CardHeader, Grid, ThemeProvider } from '@mui/material';

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
      <h1>MovieList</h1>
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
                }}>
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
                    onClick={() => {handleDetails(movie.id)}}/>
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
