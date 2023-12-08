import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom"

function Details() {

    const history = useHistory()

    const detailsId = useSelector(store => store.detailsId)
    const movies = useSelector(store => store.movies)

    // finds clicked movie from movie store
    let selectedMovie
    for (let movie of movies) {
        if (movie.id === detailsId) {
            selectedMovie = movie
        }
    }

    const returnHome = () => {
        history.push('/')
    }

    return (
        <div>
            <h1>{selectedMovie.title}</h1>
            <img src={selectedMovie.poster} />
            <p>{selectedMovie.description}</p>
            <button onClick={returnHome}>Back</button>
        </div>
    )
}

export default Details