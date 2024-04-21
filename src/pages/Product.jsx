import { useEffect } from "react";
import Layout from "@/components/Layout";

const Product = () => {
  const sectionList = [
    { id: "section1", videoSrc: "/images/xlarge_x.mp4" },
    { id: "section2", videoSrc: "/images/xlarge_x.mp4" },
    { id: "section3", videoSrc: "/images/xlarge_x.mp4" },
    { id: "section4", videoSrc: "/images/xlarge_x.mp4" },
    { id: "section5", videoSrc: "/images/xlarge_x.mp4" },
  ];

  useEffect(() => {
    const navLinks = document.querySelectorAll(".tag-list-item a");
    const sections = document.querySelectorAll("section");
    const highlightBg = document.querySelector(".highlight-background");
    const paddingHorizontal = 15; // 左右の余白
    const paddingVertical = 8; // 上下の余白
    let activeLink = null; // 現在アクティブなリンクを追跡

    // ハイライト位置を更新する関数
    const updateHighlightPosition = () => {
      if (activeLink) {
        highlightBg.style.display = "block"; // アクティブなリンクがある場合は表示
        const linkRect = activeLink.getBoundingClientRect();
        const containerRect = activeLink
          .closest(".tag-sub-container")
          .getBoundingClientRect();

        highlightBg.style.width = `${linkRect.width + paddingHorizontal * 2}px`;
        highlightBg.style.height = `${linkRect.height + paddingVertical * 2}px`;
        highlightBg.style.transform = `translate(${
          linkRect.left - containerRect.left - paddingHorizontal
        }px, ${linkRect.top - containerRect.top - paddingVertical}px)`;
      } else {
        highlightBg.style.display = "none"; // アクティブなリンクがない場合は非表示
      }
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        console.log(observer);
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            activeLink = document.querySelector(
              `.tag-list-item a[href="#${id}"]`
            );

            // 他のすべてのリンクから`active`クラスを削除
            navLinks.forEach((link) => {
              link.classList.remove("active");
            });

            // 対応するリンクに`active`クラスを追加
            if (activeLink) {
              activeLink.classList.add("active");
              updateHighlightPosition();
            }
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    // リサイズイベントリスナーを追加
    window.addEventListener("resize", updateHighlightPosition);

    // 初期ハイライト位置を更新（初期アクティブリンクがあるかチェック）
    updateHighlightPosition();
  }, []);

  useEffect(() => {
    const mediaContainers = document.querySelectorAll(".media-sub-container");

    const updateStylesForContainer = (container) => {
      const windowHeight = window.innerHeight;
      const rect = container.getBoundingClientRect();
      const elemTop = rect.top;
      const elemBottom = rect.bottom;

      if (window.matchMedia("(min-width: 768px)").matches) {
        if (elemBottom > 0 && elemTop < windowHeight) {
          const visibleHeight =
            Math.min(windowHeight, elemBottom) - Math.max(0, elemTop);
          const percentageVisible = visibleHeight / windowHeight;
          // 40%から100%への変化を計算
          const widthPercentage = 40 + 60 * percentageVisible;
          const borderRadius = 100 * (1 - percentageVisible); // 30pxから0pxへの変化
          const height = 70 + 0 * percentageVisible; // 40vhから50vhへの変化

          // widthの設定をパーセンテージから直接の値に変更
          container.style.width = `calc(${widthPercentage}vw)`;
          container.style.borderRadius = `${borderRadius}px`;
          container.style.height = `${height}vh`;
        } else {
          // 要素がビューポート外に完全に出たら元のスタイルに戻す
          container.style.width = "40vw"; // 初期値に40vwを設定
          container.style.borderRadius = "30px"; // 初期値に30pxを設定
          container.style.height = "70vh"; // 初期値に40vhを設定
        }
      } else {
        // 768px未満では元のスタイルを適用
        container.style.width = "90vw";
        container.style.borderRadius = "30px";
        container.style.height = "40vh";
      }
    };

    const updateStyles = () => {
      mediaContainers.forEach(updateStylesForContainer);
    };

    // スクロールイベントと初期スタイル設定用の関数を設定・実行
    window.addEventListener("scroll", updateStyles);
    updateStyles(); // 初期表示のためにも実行

    // 画面のリサイズイベントに反応してスタイルを再適用
    window.addEventListener("resize", updateStyles);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          // 要素がビューポートに完全に入るとき
          if (entry.isIntersecting) {
            entry.target.classList.add("slide-up-visible");
            observer.unobserve(entry.target); // 一度表示されたら観測を停止
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.2,
      }
    );

    // スライドアップアニメーションを適用したい要素をすべて選択
    const elements = document.querySelectorAll(".slide-up");
    elements.forEach((el) => {
      observer.observe(el); // 各要素を観測対象に追加
    });
  }, []);

  const handleOnError = (e) => {
    const container = e.currentTarget.closest(".media-sub-container");
    const video = container.querySelector("video");
    const picture = container.querySelector("picture");

    video.style.display = "none";
    picture.style.display = "block";
  };

  return (
    <Layout>
      <div className="container">
        <div className="tag-container slide-up">
          <div className="tag-sub-container">
            <div className="highlight-background"></div>
            <ul className="tag-list">
              <li className="tag-list-item">
                <a href="#section1" className="text-animate">
                  環境試験器
                </a>
              </li>
              <li className="tag-list-item ">
                <a href="#section2" className="text-animate">
                  Weiss Technik
                </a>
              </li>
              <li className="tag-list-item">
                <a href="#section3" className="text-animate">
                  信頼性評価システム
                </a>
              </li>
              <li className="tag-list-item">
                <a href="#section4" className="text-animate">
                  低GWP冷媒
                </a>
              </li>
              <li className="tag-list-item">
                <a href="#section5" className="text-animate">
                  リセール製品
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="title-container">
          <h1 className="title text-animate">製品</h1>
          <p className="copy text-animate">
            特許技術による先進のテクノロジーの結晶
          </p>
        </div>
        {sectionList.map((section) => (
          <section id={section.id} key={section.id}>
            <div className="media-container">
              <div
                className="media-sub-container slide-up"
                style={{ position: "relative" }}
              >
                <video autoPlay loop muted playsInline onError={handleOnError}>
                  <source src={section.videoSrc} type="video/mp4" />
                </video>
                <picture style={{ display: "none" }}>
                  <source
                    media="(min-width: 501px)"
                    srcSet="https://placehold.jp/eeeeee/ffffff/2880x2880.png"
                  />
                  <source
                    media="(max-width: 500px)"
                    srcSet="https://placehold.jp/eeeeee/ffffff/2880x2880.png"
                  />
                  <img
                    src="https://placehold.jp/eeeeee/ffffff/2880x2880.png"
                    alt="Slide 3"
                  />
                </picture>
                <div className="center-button slide-up">
                  <a href="#">全ての製品を見る</a>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </Layout>
  );
};

export default Product;
