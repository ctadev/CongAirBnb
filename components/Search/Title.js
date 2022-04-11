import React from "react";
import s from "./title.module.scss";

function Title({location, guess, range}) {
  return (
    <div className={s.title}>
      <p>300+ stays - {range} - {guess} Guests</p>
      <h1>Stays in {location}</h1>
      <div>
        <button>Cancellation Flexibility</button>
        <button>Type of place</button>
        <button>Price</button>
        <button>Rooms and Beds</button>
        <button>More filters</button>
      </div>
    </div>
  );
}

export default Title;
