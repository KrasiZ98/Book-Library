import { Link } from 'react-router-dom'
import './home.css'
import React, { useContext } from 'react'

import { Card } from './Card'
import { BookContext } from '../../context/BookContext'

export const Home = () => {

  const { books, loading, fetchError } = useContext(BookContext);

  if (loading) {
    return <h1>Loading...</h1>
  }

  if (fetchError) {
    return <h1>{fetchError}</h1>
  }

  return (
    <section className="home-section">
      <header className="home-header">
        <h1>Welcome to Our Bookstore</h1>
      </header>

      <div className="card-container">
        {books.length > 0 ? books.map(book => <Card key={book.id} book={book} />) :
          <h1>Noo Books In The Data...</h1>}
      </div>
    </section>
  )
}
