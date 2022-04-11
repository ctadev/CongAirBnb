import React from "react";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import StarIcon from "@mui/icons-material/Star";
import s from "./cards.module.scss";

function Cards({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  long,
  lat,
}) {
  return (
    <main className={s.cards}>
      <section className={s.images}>
        <Image src={img} layout="fill" objectFit="cover" alt="" className={s.photo}/>
      </section>

      <section className={s.info}>
        <div className={s.location}>
          <p>{location}</p>
          <FavoriteBorderIcon />
        </div>
        <h1>{title}</h1>
        <h6>{description}</h6>
        <div className={s.starPrice}>
          <div className={s.star}>
            <StarIcon className={s.icon}/>
            <p>{star}</p>
          </div>
          <div className={s.price}>
            <h1>{price}</h1>
            <p>{total}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Cards;
