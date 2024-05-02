import { useEffect, useRef } from "react";
import Splide from "@splidejs/splide";
import SlideUpButton from "./SlideUpButton";

const slidesData = [
  {
    videoSrc: "/images/product_01.mp4",
    imgSrc: "https://placehold.jp/eeeeee/ffffff/1880x1880.png",
    altText: "Slide 1",
    link: "#link1",
    label: "製品ページを見る",
  },
  {
    videoSrc: "", // 空文字列の場合はビデオが存在しないと仮定
    imgSrc: "/images/resale.png",
    altText: "Slide 2",
    link: "#link2",
    label: "リセール製品を見る",
  },
  {
    videoSrc: "", // 空文字列の場合はビデオが存在しないと仮定
    imgSrc: "/images/refrigerant.png",
    altText: "Slide 3",
    link: "#link3",
    label: "特設ページを見る",
  },
];

const Slide = () => {
  const splideRef = useRef(null);
  const videoRefs = useRef([]);

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
      gap: 40,
      padding: "calc(12vw - 24px)",
    };
    const splide = new Splide(".splide", options);
    splide.mount();
    splideRef.current = splide;
  }, []);

  // 自動再生用のIntersectionObserver設定
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoIndex = parseInt(
            entry.target.getAttribute("data-index"),
            10
          );
          const video = videoRefs.current[videoIndex];
          if (video && entry.isIntersecting && entry.intersectionRatio === 1) {
            video.play();
          }
        });
      },
      { threshold: 1.0 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="splide" id="top-slider" aria-label="top-slide">
      <div className="splide__track">
        <ul className="splide__list top-slider-list">
          {slidesData.map((slide, index) => (
            <li className="splide__slide top-slider-list-item" key={index}>
              <div className="top-slider-list-item-container">
                {slide.videoSrc ? (
                  <video
                    loop
                    muted
                    playsInline
                    ref={(el) => (videoRefs.current[index] = el)}
                    data-index={index}
                  >
                    <source src={slide.videoSrc} type="video/mp4" />
                  </video>
                ) : (
                  <picture>
                    <img src={slide.imgSrc} alt={slide.altText} />
                  </picture>
                )}
              </div>
              <SlideUpButton link={slide.link}>製品ページを見る</SlideUpButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Slide;
