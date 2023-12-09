import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import './MovieList.css'

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
    <main>
      <h1>MovieList</h1>
      <section className="movies">
        {movies.map(movie => {
          return (
            <div
              data-testid="movieItem"
              key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                data-testid="toDetails"
                src={movie.poster}
                alt={movie.title}
                onClick={() => {handleDetails(movie.id)}}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
