import React from 'react'
import { Button, Card } from 'react-bootstrap'
import "./MovieCard.css"
import MovieRating from "./Rating";

const MovieCard = ({ movie }) => {
    return (
        <div className='movieCard'>
            <Card style={{ width: '18rem' }}>
                <Card.Img className='imgCard' variant="top" src={movie.posterUrl} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text className='desc'>{movie.description} </Card.Text>
                    <MovieRating isMovieRating={true} movieRating={movie.rate} />
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default MovieCard
