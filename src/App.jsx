import React from "react";
import { AppContext } from "./ContextApi/contextApi";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import ShowNavbar from "./components/ShowNavbar";
import VideoPage from "./Pages/VideoPage";
import SearchResultPage from "./Pages/SearchResultPage";
import SearchPage from "./Pages/SearchPage";

function App() {
  return (
    <>
      <AppContext>
        <HashRouter basename="/">
          <ShowNavbar>
            <Header />
            <Sidebar />
          </ShowNavbar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="video/:id" element={<VideoPage />} />
            <Route path="search/:searchQuery" element={<SearchResultPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </HashRouter>
      </AppContext>
    </>
  );
}

export default App;
