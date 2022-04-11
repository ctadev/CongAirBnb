import React from 'react'
import s from './footer.module.scss';

function Footer() {
  return (
    <main className={s.footer}>
      <section>
        <h3>ABOUT</h3>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </section>

      <section className={s.com}>
        <h3>COMMUNITY</h3>
        <p>Accessibility</p>
        <p>This is not a real site</p>
        <p>a pretty awesome clone</p>
        <p>Referals accepted</p>
        <p>Papafam</p>
      </section>

      <section className={s.host}>
        <h3>HOST</h3>
        <p>Papa React</p>
        <p>Presents</p>
        <p>Zeto to full Stack Hero</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </section>

      <section>
        <h3>SUPPORT</h3>
        <p>Help Centre</p>
        <p>Trust & Safety</p>
        <p>Say Hi YouTube</p>
        <p>Contact Us</p>
        <p>For the Win</p>
      </section>
    </main>
  );
}

export default Footer