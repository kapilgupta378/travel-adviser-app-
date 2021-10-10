import React, { useEffect, useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import logo from "./logo.png";
import "./styles.scss";
import MenuIcon from "@material-ui/icons/Menu";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import { Humbergur } from "./Humbergur/Humbergur";

const Header = ({ onPlaceChanged, onLoad }) => {
  const [slider, setSlider] = useState({
    home: true,
    blog: false,
    code: false,
    help: false,
    about: false,
  });
  const [openhambergur, setOpenhambergur] = useState(false);
  return (
    <header class="container">
      <input type="radio" name="s" id="home" checked={slider.home} />
      <input type="radio" name="s" id="blog" checked={slider.blog} />
      <input type="radio" name="s" id="code" checked={slider.code} />
      <input type="radio" name="s" id="help" checked={slider.help} />
      <input type="radio" name="s" id="about" checked={slider.about} />
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Travel advisor</h3>
      </div>
      <nav>
        <div className="slider"></div>
        <label className="home" onClick={() => setSlider({ home: true })}>
          <i className="fas fa-home"></i>Hotel
        </label>
        <label className="blog" onClick={() => setSlider({ blog: true })}>
          <i className="fas fa-blog"></i>Holiday Homes
        </label>
        <label className="code" onClick={() => setSlider({ code: true })}>
          <i className="fas fa-code"></i>Restaurants
        </label>
        <label className="help" onClick={() => setSlider({ help: true })}>
          <i className="fas fa-envelope"></i>Travel forums
        </label>
        <label className="about" onClick={() => setSlider({ about: true })}>
          <i className="fas fa-user"></i>Things To Do
        </label>
      </nav>

      <div className="search-wrap">
        <div class="search-container">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            class="search-input"
          />

          <a href="#" class="search-btn">
            <i class="fas fa-search">
              <SearchIcon />
            </i>
          </a>
        </div>
      </div>

      <div className="hambergur">
        {openhambergur ? (
          <MenuOpenIcon onClick={() => setOpenhambergur(!openhambergur)} />
        ) : (
          <MenuIcon onClick={() => setOpenhambergur(!openhambergur)} />
        )}
      </div>
      {openhambergur && (
        <Humbergur onPlaceChanged={onPlaceChanged} onLoad={onLoad} />
      )}
    </header>
  );
};

export default Header;
