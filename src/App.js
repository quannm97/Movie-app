import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                <div className="container">
                    <Header />

                    <Routes>
                        <Route exact path="/" element={<Home />}></Route>
                        <Route path='*' element ={<PageNotFound/>} ></Route>
                        <Route
                            path="/movie/:movieId"
                            element={<MovieDetail />}
                        ></Route>
                    </Routes>
                    <Footer />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;
