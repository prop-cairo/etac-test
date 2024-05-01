import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home";
import Product from "@/pages/Product";
import Division from "@/pages/Division";
import Privacy from "@/pages/Privacy";
import Form from "@/pages/Form";
import Csc from "@/pages/Csc";
import Commitment from "@/pages/Commitment";
import Blog from "@/pages/Blog";
import News from "@/pages/News";
import TestingRental from "@/pages/TestingRental";
import Contact from "@/pages/Contact";

const App = () => {
  const smoothScrollTo = (endX, endY, duration) => {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    const animateScroll = () => {
      const currentTime = new Date().getTime();
      const time = Math.min(1, (currentTime - startTime) / duration);
      const easedT = easeInOutQuad(time, 0, 1, 1);

      window.scrollTo(startX + distanceX * easedT, startY + distanceY * easedT);

      if (time < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    animateScroll();
  };

  useEffect(() => {
    const handleAnchorClick = (event) => {
      const { target } = event;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        event.preventDefault();
        const element = document.getElementById(href.slice(1));
        if (element) {
          const headerOffset = 110; // ヘッダーの高さなどのオフセット
          const elementPosition = element.offsetTop;
          const offsetPosition = elementPosition - headerOffset;
          smoothScrollTo(0, offsetPosition, 1000);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <>
      {/* <BrowserRouter basename={import.meta.env.VITE_APP_BASE_URL}> */}
      <BrowserRouter>
        {/* <BrowserRouter> */}
        <Routes>
          <Route path={`/`} element={<Home />} />
          <Route path={`/product`} element={<Product />} /> {/* 製品 */}
          {/* 子ページを追記 */}
          <Route path={`/division`} element={<Division />} />
          {/* 事業概要 */}
          <Route path={`/privacy`} element={<Privacy />} />
          {/* 個人情報保護方針 */}
          <Route path={`/contact`} element={<Contact />} />
          <Route path={`/form`} element={<Form />} />
          {/* 問い合わせ */}
          <Route path={`/csc`} element={<Csc />} />
          {/* カスタマーサポート */}
          <Route path={`/commitment`} element={<Commitment />} />
          {/* エタックのこだわり */}
          <Route path={`/blog`} element={<Blog />} />
          {/* ブログ */}
          <Route path={`/news`} element={<News />} />
          {/* お知らせ */}
          <Route path={`/testing-rental`} element={<TestingRental />} />
          {/* 受託 */}
          {/* todo /category/newsと/jutaku pathname変更して良いか確認する */}
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
