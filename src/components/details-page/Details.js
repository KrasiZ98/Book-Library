import './details.css'
import { useParams } from 'react-router-dom'
import useGetBookId from '../../custom-hooks/hooks-requests/useGetBookId'
import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'


export const Details = () => {
    const { id } = useParams();

    const { addFavoriteBooks } = useContext(AuthContext)
    const { user } = useContext(AuthContext);
    const { book, setBook, loading, fetchError } = useGetBookId(id, []);



    if (loading) {
        return <h1>Loading...</h1>
    }

    if (fetchError) {
        return <h1>{fetchError}</h1>
    }


    return (
        <div className="details-page">

            <div className="details-info">

                <div className="image">
                    <img src={book.image} alt="Book Image" />
                </div>

                <div className="info">


                    <h2>{book.title}</h2>

                    <p>Author: {book.author}</p>
                    <p>Date: {book.release_date}</p>
                    <p>Genre: {book.genre}</p>
                    <p>Rating: {book.rating}</p>

                    <div className="description">
                        <p>{book.description}</p>
                    </div>



                    {user.email && user.favoriteBook?.find(x => x.id === book.id) == undefined &&
                        <div className="action-btn">
                            <button
                                onClick={() => addFavoriteBooks(user.id, book)}
                                className="button-18"
                                role="button">
                                Add to CARD
                            </button>
                        </div>
                     }

                    {user.favoriteBook !== undefined &&  user.favoriteBook.find(x => x.id === book.id) !== undefined &&
                        <button className="already-add">You Are Already Add The Book</button>}

                    {/* {user.email && user.favoriteBook.length > 0 && user.favoriteBook.find(x => x.id === book.id) !== undefined ?
                        <button className="already-add">You Are Already Add The Book</button> :
                        <div className="action-btn">
                            <button
                                onClick={() => addFavoriteBooks(user.id, book)}
                                className="button-18"
                                role="button">
                                Add to CARD
                            </button>
                        </div>}
                  */}


                </div>
            </div>

        </div>
    )
}

// author
// release_date
// genre
// rating
// description