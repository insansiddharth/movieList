import logo from './logo.svg';
import './App.css';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieItem from './components/MovieItem';

function App() {
  return (
    <div className="App">
      <h1>Movie Lists</h1>
      <MovieList/>
    </div>
  );
}

export default App;
