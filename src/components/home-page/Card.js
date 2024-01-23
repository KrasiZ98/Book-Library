import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ book }) => {
    
    return (
        <div className="book-card">
            <img className="book-cover" src={book.image} alt="Book Cover" />
            <div className="book-info">
                <div className="book-title">{book.title}</div>
                <div className="book-author">{book.author}</div>
                <Link to={`/details/${book.id}`}>
                <button className="button-12" role="button">See more</button>
                </Link>
            </div>
        </div>
    )
}
