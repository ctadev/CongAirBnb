import React from "react";
import Image from "next/image";
import s from "./largecard.module.scss";

function LargeCard() {
    return (
      <main className={s.large}>
            <Image src="https://links.papareact.com/4cj" layout="fill" objectFit="cover" alt="" className={s.photo}/>
            <div className={s.text}>
                <p>The Greatest Outdoors</p>
                <p>Wishlists curated by Airbnb</p>
                <p>Get Inspired</p>
            </div>
      </main>
    );
}

export default LargeCard;
