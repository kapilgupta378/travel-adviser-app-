import { useState } from "react";
import "./humbergur.scss";
import SearchIcon from "@material-ui/icons/Search";
import Slide from "react-reveal/Fade";
import { Autocomplete } from "@react-google-maps/api";

export const Humbergur = ({ onPlaceChanged, onLoad }) => {
  const [humSlider, setHumSlider] = useState({
    home: true,
    blog: false,
    code: false,
    help: false,
    about: false,
  });

  return (
    <Slide right>
      <div className="hum_bergur_wrap">
        <div className="hum_search_wrap">
          <div class="hum_search_container">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              class="hum_search_input"
            />

            <a href="#" class="hum_search_btn">
              <i class="hum_fas fa-search">
                <SearchIcon />
              </i>
            </a>
          </div>
        </div>
        <input type="radio" name="ss" id="Hum_home" checked={humSlider.home} />
        <input type="radio" name="ss" id="Hum_blog" checked={humSlider.blog} />
        <input type="radio" name="ss" id="Hum_code" checked={humSlider.code} />
        <input type="radio" name="ss" id="Hum_help" checked={humSlider.help} />
        <input
          type="radio"
          name="ss"
          id="Hum_about"
          checked={humSlider.about}
        />

        <nav className="hum_nav">
          <div className="hum_slider"></div>
          <label
            className="hum_home"
            onClick={() => setHumSlider({ home: true })}
          >
            <i className="hum_fas fa-home"></i>Hotel
          </label>
          <label
            className="hum_blog"
            onClick={() => setHumSlider({ blog: true })}
          >
            <i className="hum_fas fa-blog"></i>Holiday Homes
          </label>
          <label
            className="hum_code"
            onClick={() => setHumSlider({ code: true })}
          >
            <i className="hum_fas fa-code"></i>Restaurants
          </label>
          <label
            className="hum_help"
            onClick={() => setHumSlider({ help: true })}
          >
            <i className="hum_fas fa-envelope"></i>Travel forums
          </label>
          <label
            className="hum_about"
            onClick={() => setHumSlider({ about: true })}
          >
            <i className="hum_fas fa-user"></i>Things To Do
          </label>
        </nav>
      </div>
    </Slide>
  );
};
