
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export const FavoriteCard = ({ book, user }) => {
    const { deleteFavoriteBook } = useContext(AuthContext);
    return (
        <div className="favorite-book-card">
            <img className="favorite-book-cover" src={book.image} alt="Book Cover" />
            <div className="favorite-book-info">
                <div className="favorite-book-title">{book.title}</div>
                <div className="favorite-book-author">{book.author}</div>
                <div className="action">

                    <Link to={`/details/${book.id}`}>
                        <button className="button-12" role="button">See more</button>
                    </Link>
                    <button onClick={() => deleteFavoriteBook(user.id, book.id, book.title)} className="delete-btn">Delete</button>
                </div>
            </div>
        </div>
    )
}
