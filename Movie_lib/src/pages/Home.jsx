import {useState, useEffect} from "react";

//import TMBD
const moviesURL = import.meta.env.VITE_API;

const apiKey =  import.meta.env.VITE_API_KEY;

//url:
//key:

const Home = () => {

  //const{topMovies, setTopMovies} = useState {()};

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated${apiKey}`;
    console.log(topRatedUrl);
    getTopRatedMovies(topRatedMoviesUrl);
  },[]);

  console.log(topMovies);

  return (
    
    <div className="container">
      <h2 className="title">Melhores Filmes</h2>
      <div className="movies-container">
        {topMovies.lenght > 0 && topMovies.map((movie) => <p>{movie.title}</p>)}
      </div>
    </div>
  );
}

export default Home