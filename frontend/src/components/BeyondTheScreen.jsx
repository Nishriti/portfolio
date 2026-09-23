import { useState } from "react";
import art1 from "../assets/images/art-1.jpg";
import art2 from "../assets/images/art-2.jpg";
import art3 from "../assets/images/art-3.jpg";

const ARTWORKS = [
  { id: 1, title: "Artwork One", image: art1 },
  { id: 2, title: "Artwork Two", image: art2 },
  { id: 3, title: "Artwork Three", image: art3 },
];

export default function BeyondTheScreen() {
  const [active, setActive] = useState(false);

  return (
    <section id="beyond" className="beyond">
      <h2 className="section-title">Beyond the Screen</h2>
      <p className="section-subtitle">
        A few pieces I make when I step away from the keyboard. Where ideas find a different language.
      </p>

      <div
        className={active ? "fan-stack fan-stack--active" : "fan-stack"}
        onMouseEnter={function () { setActive(true); }}
        onMouseLeave={function () { setActive(false); }}
        onTouchStart={function () { setActive(function (prev) { return !prev; }); }}
      >
        {ARTWORKS.map(function (art, i) {
          return (
            <div className={"fan-card fan-card--" + i} key={art.id}>
              <img src={art.image} alt={art.title} />
              <span className="fan-card-title">{art.title}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}