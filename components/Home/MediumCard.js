import React from "react";
import Image from "next/image";
import s from "./mediumcard.module.scss";

function MediumCard({ img, title }) {
  return (
    <main className={s.medium}>
      <section className={s.images}>
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          alt=""
          className={s.photo}
        />
      </section>
      <section className={s.title}>
        <p>{title}</p>
      </section>
    </main>
  );
}

export default MediumCard;
