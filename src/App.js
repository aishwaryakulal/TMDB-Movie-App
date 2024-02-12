
import './App.css';
import Header from './components/header/Header'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/home';
import MovieList from './components/movieList/movieList';
import Movie  from './pages/home/movieDetail/movie';

function App() {
    return (
        <div className='App'>
      <Router>
        <Header />
        <Routes>
            <Route index element={<Home />}></Route>
            <Route path="movie/:id" element={<Movie />}></Route>
            <Route path='movies/:type' element={<MovieList/>}></Route>
<Route path='/*' element={<h1>error page</h1>}></Route>
        </Routes>
      </Router>
        </div>
    )
}

export default App;
