import React, { useState } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import GifContainer from "./components/GifContainer";
import { GifLoader } from "./components/Loader";

function App() {
  const [search, setSearch] = useState("");
  const [gifs, setGifs] = useState([]);
  const [isLoading, setLoadingState] = useState(false);
  const { log } = console;
  const { REACT_APP_GIPHY_API_KEY } = process.env;

  const handleInputChange = (event) => {
    setSearch(event.target.value);
    if (event.target.value === "") {
      setGifs([]);
    }
  };

  const KEYS = {
    ENTER: 13,
    ESCAPE: 27,
  };

  const handleKeyDown = (event) => {
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${REACT_APP_GIPHY_API_KEY}&q=${search}&limit=${10}&offset=0&rating=g&lang=en`;
    switch (event.keyCode) {
      case KEYS.ENTER:
        setLoadingState(true);
        fetch(url)
          .then((res) => res.json())
          .then((resObj) => {
            setGifs(resObj.data);
            setLoadingState(false);
          })
          .catch((err) => log("error fetching gifs", err));
        break;
      case KEYS.ESCAPE:
        event.target.value = null;
        setSearch("");
        setLoadingState(false);
        setGifs([]);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <div>
        <h1>TxT to Giphy <span role="img" aria-label="funny">😁</span></h1>
      </div>
      <SearchBar onChange={handleInputChange} onKeyDown={handleKeyDown} />
      <div className="container">
        <GifContainer onKeyDown={handleKeyDown}>
          {!isLoading ? (
            gifs.map((gif) => (
              <div className="gifDiv" key={gif.id}>
                <img src={gif.images.downsized.url} alt={gif.title} />
              </div>
            ))
          ) : (
            <GifLoader />
          )}
        </GifContainer>
      </div>
      <footer>
        <h3>Made with ❤ by <a href="https://github.com/mubarakshow/" target="_blank" rel="noopener noreferrer">Mubarak Showole</a></h3>
      </footer>
    </div>
  );
}

export default App;
