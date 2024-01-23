import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navigation } from './components/navigation/Navigation';
import { Login } from './components/login-page/Login';
import { Register } from './components/register-page/Register';
import { Home } from './components/home-page/Home';
import AuthContextProvider from './context/AuthContext';
import { Footer } from './components/footer/Footer';
import BookContextProvider from './context/BookContext';
import { Details } from './components/details-page/Details';
import { Profile } from './components/peofile-page/Profile';
import { UpdateUser } from './components/update-user/UpdateUser';
import { FavoriteBook } from './components/favorite-book-page/FavoriteBook';
import RouteGards from './util/RouteGards';
import AuthGards from './util/AuthGards';
import { FilterBooks } from './components/filter-books/FilterBooks';

function App() {
  return (
    <>
      <AuthContextProvider>
        <BookContextProvider>
        <Navigation />
          <Routes >
            <Route path='/' element={<Home />} />
            <Route path='/filter-books' element={<FilterBooks />} />
            <Route path='/login' element={<AuthGards > <Login /></AuthGards> } />
            <Route path='/profile' element={<RouteGards> <Profile /></RouteGards> } />
            <Route path='/favorite' element={<RouteGards> <FavoriteBook /></RouteGards>} />
            <Route path='/register' element={<AuthGards > <Register /></AuthGards> } />
            <Route path='/user-update' element={<RouteGards> <UpdateUser /></RouteGards>} />
            <Route path='/details/:id' element={<Details />} />
          </Routes>
        </BookContextProvider>
      </AuthContextProvider>
     

    </>
  );
}

export default App;
