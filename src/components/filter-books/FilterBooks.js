import React, { useContext } from 'react'
import { Card } from '../home-page/Card'
import { BookContext } from '../../context/BookContext'

export const FilterBooks = () => {
    const {filterBooks} = useContext(BookContext);
    return (
        <section className="home-section">
            <header className="home-header">
                <h1>Welcome to Our Bookstore</h1>
            </header>

            <div className="card-container">
                {filterBooks.length > 0 ? filterBooks.map(book => <Card key={book.id} book={book} />) :
                    <h1>Noo Books In The Data...</h1>}
            </div>
        </section>
    )
}
