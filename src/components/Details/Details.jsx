import { useSelector } from "react-redux"

function Details() {

    const detailsId = useSelector(store => store.detailsId)
    const movies = useSelector(store => store.movies)

    // finds clicked movie from movie store
    let selectedMovie
    for (let movie of movies) {
        if (movie.id === detailsId) {
            selectedMovie = movie
        }
    }

    return (
        <div>
            <h1>{selectedMovie.title}</h1>
            <img src={selectedMovie.poster} />
            <p>{selectedMovie.description}</p>
        </div>
    )
}

export default Details