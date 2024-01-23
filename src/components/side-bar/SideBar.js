import { Link } from 'react-router-dom';
import { BookContext } from '../../context/BookContext';
import './sidebar.css'
import React, { useContext, useState } from 'react'

export const SideBar = () => {

    const { books, searchCategory } = useContext(BookContext);

    const allAuthors = [...new Set(books.map(book => book.author))];
    const allRating = [...new Set(books.map(book => book.rating))];
    const allGenre = [...new Set(books.map(book => book.genre))];



    const [searchValue, setSearchValue] = useState({
        search: "",
        author: "",
        rating: "",
        genre: ""
    });

    function onChange(e) {
        setSearchValue(oldValue => ({
            ...oldValue,
            [e.target.name]: e.target.value
        }))
    }

    function onSearch() {
        const { search, author, rating, genre } = searchValue;

        if (search || author || rating || genre) {
            const searchTerm = search || author || rating || genre;

            searchCategory(searchTerm);

            setSearchValue({
                search: "",
                author: "",
                rating: "",
                genre: ""
            });
        }
    }

    return (
        <div className="sideBar">

            <input
                type="text"
                placeholder="search book..."
                name="search"
                onChange={onChange}
                value={searchValue.search}
            />

            <div className="group-select">
                <select name="author" id="author" onChange={onChange} value={searchValue.author}>
                    <option disabled value="">Author</option>
                    {allAuthors.map((author, index) => (
                        <option key={index} value={author}>{author}</option>
                    ))}

                </select>
            </div>


            <div className="group-select">
                <select name="rating" id="rating" onChange={onChange} value={searchValue.rating}>
                    <option disabled value="">Rating</option>
                    {allRating.map((rating, index) => (
                        <option key={index} value={rating}>{rating}</option>
                    ))}

                </select>
            </div>

            <div className="group-select">
                <select name="genre" id="genre" onChange={onChange} value={searchValue.genre}>
                    <option disabled value="">Genre</option>
                    {allGenre.map((genre, index) => (
                        <option key={index} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <Link to="/filter-books">
                <button onClick={onSearch} className="button-17">Search</button>
            </Link>
        </div>
    )
}
