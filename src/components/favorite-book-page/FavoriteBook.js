import './favoriteBook.css'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { Card } from '../home-page/Card';
import { FavoriteCard } from './FavoriteCard';

export const FavoriteBook = () => {
    const { user } = useContext(AuthContext);

    
    return (
        <div className="favotite-books">
            <h1>Favorite Books</h1>
            <div className="favorite-card-container">
                {user.favoriteBook.length > 0 ? user.favoriteBook.map(book => <FavoriteCard key={book.id} book={book} user={user}/>) :
                    <h1>Noo Books In The Data...</h1>}
            </div>
        </div>
    )
}
