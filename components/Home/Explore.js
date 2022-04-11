import React from "react";
import s from "./explore.module.scss";
import SmallCard from "./SmallCard";

function Explore({ exploreData }) {
  return (
    <main className={s.explore}>
      <h1>Explore Nearby</h1>
      <section className={s.smallCards}>
        {exploreData.map((item) => (
          <SmallCard
            key={item.img}
            img={item.img}
            location={item.location}
            distance={item.distance}
          />
        ))}
      </section>
    </main>
  );
}

export default Explore;
