import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import User from './components/User';
import Movie from './components/Movie';
import ReactPlayer from 'react-player';
import { useState } from 'react';

function App() {

  const user = {
    name: "Lisa", 
    age: 29
  }


  const moviesArray = [
    {
      title: "Harry Potter",
      rating: 7.6,
    },
    {
      title: "Stranger Things",
      rating: 8.7,
    },
    {
      title: 'La casa de papel',
      rating: 8.2,
    },
  ];

  const [theme, setTheme] = useState("light");

  const setDarkTheme = () => {
    setTheme("dark");
  }

  return (
    <div className={"App " + theme}>
      <Header title = "My First React App"/>

      <button>Switch to light</button>
      <button onClick={setDarkTheme}>Switch to dark</button>

      <div className="User">
        <User user={user} isLoggedIn>
        
        <div class="favMovies">
                    {moviesArray.map((movie, index) => {
            return <Movie key={index} movie={movie}/>
          })}
        </div>

    
        </User>

        <section className='player'>
          <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing />
        </section>
      </div>

      <Footer/>
    </div>

  );
}

export default App;
