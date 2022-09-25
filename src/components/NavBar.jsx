import React from "react";
import { Helmet } from "react-helmet";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { MisReviews } from "./MisReviews.jsx";
import { PublicarReview } from "./PublicarReview.jsx";
import { TodasReviews } from "./TodasReviews.jsx";
import { MdLocalMovies } from "react-icons/md";

export const NavBar = () => {
  return (
    <BrowserRouter>
      <Helmet>
        <title>Home | SeriesReview</title>
      </Helmet>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid container">
          <NavLink to="/" className="navbar-brand">
            <MdLocalMovies /> Series Review
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/mis-reviews" className="nav-link">
                  Mis Reviews
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/publicar-review" className="nav-link">
                  Publicar Review
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<TodasReviews />}></Route>
        <Route path="/mis-reviews" element={<MisReviews />}></Route>
        <Route path="/publicar-review" element={<PublicarReview />}></Route>
        <Route
          path="*"
          element={<h1 className="mt-5 text-center">ERROR 404 :(</h1>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};
