import React from "react";
import Explore from './Explore';
import s from './main.module.scss';
import Live from './Live';
import LargeCard from "./LargeCard";

function Main({exploreData, liveAnywhere}) {
  return (
    <main className={s.main}>
      <Explore exploreData={exploreData} />
      <Live liveAnywhere={liveAnywhere} />
      <LargeCard />
    </main>
  );
}

export default Main;
