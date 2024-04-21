import { useEffect } from "react";
import Splide from "@splidejs/splide";

const Slide = () => {
  useEffect(() => {
    const options = {
      perMove: 1,
      type: "loop",
      focus: "center",
      cover: true,
      drag: true,
      arrows: true,
      autoplay: true,
      pauseOnHover: true,
      speed: 1000,
      interval: 5000,
      easing: "cubic-bezier(0.65, 0, 0.35, 1)",
      gap: 8,
      padding: "calc(12vw - 24px)",
    };
    new Splide(".splide", options).mount();
  }, []);

  return (
    <section className="splide" aria-label="top-slide">
      <div className="splide__track">
        <ul className="splide__list">
          <li className="splide__slide">
            <div className="slide-content">
              <picture>
                <source
                  media="(min-width: 501px)"
                  srcSet="https://placehold.jp/e0e0e0/ffffff/1138x640.png"
                />
                <source
                  media="(max-width: 500px)"
                  srcSet="https://placehold.jp/e0e0e0/ffffff/360x600.png"
                />
                <img src="https://placehold.jp/1138x640.png" alt="Slide 1" />
              </picture>
              <div className="slide-button">
                <a href="">全ての製品を見る</a>
              </div>
            </div>
          </li>
          <li className="splide__slide">
            <div className="slide-content">
              <picture>
                <source
                  media="(min-width: 501px)"
                  srcSet="https://placehold.jp/bdbdbd/ffffff/1138x640.png"
                />
                <source
                  media="(max-width: 500px)"
                  srcSet="https://placehold.jp/bdbdbd/ffffff/360x600.png"
                />
                <img src="https://placehold.jp/1138x640.png" alt="Slide 2" />
              </picture>
              <div className="slide-button">
                <a href="">全ての製品を見る</a>
              </div>
            </div>
          </li>
          <li className="splide__slide">
            <div className="slide-content">
              <picture>
                <source
                  media="(min-width: 501px)"
                  srcSet="https://placehold.jp/eeeeee/ffffff/1138x640.png"
                />
                <source
                  media="(max-width: 500px)"
                  srcSet="https://placehold.jp/eeeeee/ffffff/360x600.png"
                />
                <img src="https://placehold.jp/1138x640.png" alt="Slide 3" />
              </picture>
              <div className="slide-button">
                <a href="">全ての製品を見る</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Slide;
