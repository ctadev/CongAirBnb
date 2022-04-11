import React from "react";
import Title from "./Title";
import s from "./main.module.scss";
import Cards from "./Cards";
import Maps from "./Maps";

function Main({ location, range, guess, searchResult }) {
  return (
    <main className={s.main}>
      <section className={s.content}>
        <Title location={location} range={range} guess={guess} />
        <div className={s.resultContent}>
          <div>
            {searchResult.map((res) => (
              <Cards
                key={res.img}
                img={res.img}
                location={res.location}
                title={res.title}
                description={res.description}
                star={res.star}
                price={res.price}
                total={res.total}
                long={res.long}
                lat={res.lat}
              />
            ))}
          </div>
          <div className={s.maps}>
            <Maps searchResult={searchResult}/>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
