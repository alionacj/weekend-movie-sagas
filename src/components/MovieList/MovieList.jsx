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
  
  const navToDetails = (id) => {
    dispatch({
      type: 'SELECT_DETAILS_ID',
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
              data-testid='movieItem'
              key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                data-testid="movieItem"
                src={movie.poster}
                alt={movie.title}
                onClick={() => {navToDetails(movie.id)}}/>
            </div>
          );
        })}
      </section>
    </main>

  );
}


export default MovieList;
