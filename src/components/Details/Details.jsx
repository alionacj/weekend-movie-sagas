import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom"
import Button from '@mui/material/Button'

function Details() {

    const history = useHistory()

    const movies = useSelector(store => store.movies)
    const details = useSelector(store => store.details)
    let genres = details.genres

    // finds clicked movie from movie store
    let selectedMovie
    for (let movie of movies) {
        if (movie.id === details.id) {
            selectedMovie = movie
        }
    }

    const returnHome = () => {
        history.push('/')
    }

    return (
        selectedMovie && genres && (
            <div data-testid="movieDetails">
                <h1>{selectedMovie.title}</h1>
                <img src={selectedMovie.poster} />
                <p>Genres:</p>
                <ul>
                    {genres.map((genre) => <li key={genres.indexOf(genre)}>{genre.name}</li>)}
                </ul>
                <p>{selectedMovie.description}</p>
                <Button
                    data-testid="toList"
                    variant="contained"
                    onClick={returnHome}>
                    Back
                </Button>
            </div>
        )
    )
}

export default Details