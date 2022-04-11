import React from "react";
import MediumCard from "./MediumCard";
import s from "./live.module.scss";

function Live({ liveAnywhere }) {
  return (
    <main className={s.live}>
      <h1>Live Anywhere</h1>
      <section className={s.cardsContainer}>
        {liveAnywhere?.map((item) => (
          <MediumCard key={item.img} img={item.img} title={item.title} />
        ))}
      </section>
    </main>
  );
}

export default Live;
