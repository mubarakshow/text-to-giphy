import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import GifContainer from "./components/GifContainer";
import { GifLoader } from "./components/Loader";

function App() {
  const [search, setSearch] = useState("");
  const log = console.log

  const handleInputChange = (event) => {
    setSearch(event.target.value)
    log(search)
  };

  return (
    <div className="App">
      <h1>TxT to Giphy</h1>
      <SearchBar
        onChange={handleInputChange}
      />
      <GifContainer />
    </div>
  );
}

export default App;
