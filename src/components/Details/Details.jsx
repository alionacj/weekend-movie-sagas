import { useSelector } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom"

import { Typography, Card, CardContent, ThemeProvider, Box } from "@mui/material"
import Button from '@mui/material/Button'
import theme from "../theme"

function Details() {

    // reducers/tools
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

    // nav
    const returnHome = () => {
        history.push('/')
    }

    return (

        // ensures rending not attempted before data is retrieved
        selectedMovie && genres && (

            // container
            <div data-testid="movieDetails">
                <ThemeProvider theme={theme}>

                    {/* title */}
                    <Typography
                        variant="h3"
                        sx={{ mt: 5, mb: 5 }}
                    >
                        {selectedMovie.title}
                    </Typography>

                    {/* movie card */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Card
                            sx={{
                                borderRadius: 2,
                                bgcolor: 'error.main',
                                boxShadow: 20,
                                height: 425,
                                width: 1 / 4,
                            }}>
                            <CardContent>
                                <img src={selectedMovie.poster} />
                                <p>Genres:</p>
                                <ul>
                                    {genres.map((genre) => <li key={genres.indexOf(genre)}>{genre.name}</li>)}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>

                    {/* description */}
                    <Box
                        margin="auto"
                        sx={{
                            width: 3 / 4,
                            py: 5
                        }}>
                        <Typography
                            variant="body1"
                            sx={{ mx: 1 / 4 }}>
                            {selectedMovie.description}
                        </Typography>
                    </Box>

                    {/* back button */}
                    <Button
                        data-testid="toList"
                        onClick={returnHome}
                        variant="contained"
                        color="error">
                        Back
                    </Button>

                </ThemeProvider>
            </div>
        )
    )
}

export default Details