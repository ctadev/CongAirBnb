import React from "react";
import s from "./smallcard.module.scss";
import Image from "next/image";

function SmallCard({ img, location, distance }) {
  return (
    <main className={s.smallcard}>
      <section className={s.images}>
              <Image src={img} layout="fill" objectFit="cover" alt="" className={s.photo}/>
      </section>
      <section className={s.info}>
        <p>{location}</p>
        <p>{distance}</p>
      </section>
    </main>
  );
}

export default SmallCard;
