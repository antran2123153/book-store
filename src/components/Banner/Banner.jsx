import React from "react";
import { BANNER_HOME } from "utils/static";
import "./Banner.scss";

function Banner(props) {
  return (
    <section>
      <div
        className="banner"
        style={{
          backgroundImage: `url('${BANNER_HOME.background}')`,
        }}
      >
        <h3 className="banner__header">{BANNER_HOME.title}</h3>
        <p className="banner__text">{BANNER_HOME.text}</p>
        <div className="banner__search">
          <h5 className="">{BANNER_HOME.searchTitle}</h5>
          <input
            type="text"
            className="banner__search-input"
            placeholder={BANNER_HOME.searchInput}
          />
          <button className="banner__search-btn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Banner;
