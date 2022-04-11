import React from "react";
import s from "./banner.module.scss";
import Image from "next/image";

function Banner() {
  return (
    <main className={s.banner}>
      <Image
        src="https://a0.muscache.com/im/pictures/57b9f708-bb12-498c-bc33-769f8fc43e63.jpg"
        layout="fill"
        objectFit="cover"
        alt="banner"
      />
      <div className={s.text}>
        <p>Not sure where to go? Perfect.</p>
        <button>I&apos;m flexible</button>
      </div>
    </main>
  );
}

export default Banner;
