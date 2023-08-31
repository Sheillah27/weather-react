import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCloud,
  faCloudSun,
  faCloudRain,
} from "@fortawesome/free-solid-svg-icons";

export default function Days() {
  return (
    <div className="container">
      <span className="day-container">
        <div className="day">
          Mon <FontAwesomeIcon icon={faSun} />
        </div>
        <div className="temperature">25°C</div>
      </span>
      <span className="day-container">
        <div className="day">
          Tue <FontAwesomeIcon icon={faCloud} />
        </div>
        <div className="temperature">22°C</div>
      </span>
      <span className="day-container">
        <div className="day">
          Wed <FontAwesomeIcon icon={faCloudSun} />
        </div>
        <div className="temperature">28°C</div>
      </span>
      <span className="day-container">
        <div className="day">
          Thur <FontAwesomeIcon icon={faCloudRain} />
        </div>
        <div className="temperature">24°C</div>
      </span>
      <span className="day-container">
        <div className="day">
          Fri <FontAwesomeIcon icon={faCloud} />
        </div>
        <div className="temperature">21°C</div>
      </span>
    </div>
  );
}
