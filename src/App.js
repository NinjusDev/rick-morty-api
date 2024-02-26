import React from "react";
import { Route, Routes } from "react-router-dom";
import CharacterList from "./components/Characters/CharacterList.jsx";
import Home from "./components/Home/Home.js";
import Loading from "./components/LoadCharacters/Loading.js";
import Navbar from "./components/Navigator/Navbar.js";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharacterList />} />
      </Routes>
      <Loading />
    </div>
  );
}

export default App;
