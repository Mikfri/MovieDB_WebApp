import { Routes, Route, Link } from 'react-router-dom';
import HighestRatedMovieList from "./components/highestRatedMoviesList";
import PopularMoviesList from "./components/popularMoviesList";
import MovieImg from './assets/Images/movie_black2.jpg';
import Home from './components/home';
import SearchMovie from './components/searchMovie';
import SearchMovieList from './components/searchMovieList';
import UpcomingMoviesList from './components/upcomingMoviesList';
import PopularPersonsList from './components/popularPersonsList';
import PopularTvList from './components/popularTvList';

function App() {
  return (
    <div>
      <div className="jumbotron pb-3 pt-3">
        <div className="navbar navbar-expand-lg">
          <nav className="nav navbar-nav">
            <Link to='/' className="nav-item nav-link">Home</Link>
            <Link to='/popular-movies' className="nav-item nav-link">Popular</Link>
            <Link to='/highest-rated' className="nav-item nav-link">Highest Rated</Link>
            <Link to='/upcoming' className="nav-item nav-link">Upcoming Movies</Link>
            <Link to='/popular-tvSeries' className="nav-item nav-link">Popular TV-series</Link>
            <Link to='/popular-persons' className="nav-item nav-link">Popular Persons</Link> 
          </nav>
        </div>
        <span className='h1'>React Moviefinder <img class="rounded" alt="MovieLogo" src={MovieImg} width="75" height="75" /></span>
        <span className="d-flex justify-content-between mt-3">This small App demonstrates React, Redux-Toolkit, RTK Query and React-Router <SearchMovie /></span> 
        
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/popular-movies' element={<PopularMoviesList />} />
        <Route path='/highest-rated' element={<HighestRatedMovieList />} />
        <Route path='/searchedMovie' element={<SearchMovieList/>} />
        <Route path='/upcoming' element={<UpcomingMoviesList/>} />
        <Route path='/popular-tvSeries' element={<PopularTvList/>} />
        <Route path='/popular-persons' element={<PopularPersonsList/>} />
      </Routes>
    </div>
  );
}
export default App;