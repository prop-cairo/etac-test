// script.js

// スムーズスクロール//////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelectorAll('main a').forEach(anchor => {
//     anchor.addEventListener('click', function(e) {
//       e.preventDefault();

//       const targetId = this.getAttribute('href');
//       if (targetId.startsWith('#')) {
//         const targetElement = document.querySelector(targetId);
//         if (targetElement) {
//           const startPosition = window.pageYOffset;
//           const targetPosition = targetElement.getBoundingClientRect().top;
//           const offsetPosition = targetPosition + startPosition;

//           // 固定ヘッダーの高さをここで調整
//           const headerOffset = 110; // 例: ヘッダーが70pxの高さであれば、70とする
//           const finalPosition = offsetPosition - headerOffset;
//           smoothScrollTo(0, finalPosition, 1000);
//         }
//       }
//     });
//   });
// });

// function smoothScrollTo(endX, endY, duration) {
//   const startX = window.scrollX || window.pageXOffset;
//   const startY = window.scrollY || window.pageYOffset;
//   const distanceX = endX - startX;
//   const distanceY = endY - startY;
//   const startTime = new Date().getTime();

//   function easeInOutQuad(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   function animateScroll() {
//     const currentTime = new Date().getTime();
//     const time = Math.min(1, ((currentTime - startTime) / duration));
//     const easedT = easeInOutQuad(time, 0, 1, 1);

//     window.scrollTo(startX + (distanceX * easedT), startY + (distanceY * easedT));

//     if (time < 1) {
//       requestAnimationFrame(animateScroll);
//     }
//   }

//   animateScroll();
// }
// グローバルナビのアニメーション //////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   // header-nav-underlineの機能
//   const underline = document.querySelector('.header-nav .header-nav-underline');
//   const menuItems = document.querySelectorAll('.header-nav a');
//   let activeItem = null; // アクティブなアイテムを追跡するための変数

//   menuItems.forEach(item => {
//     item.addEventListener('mouseover', function() {
//       underline.style.width = this.getBoundingClientRect().width + 'px';
//       underline.style.left = this.getBoundingClientRect().left + 'px'; // scrollXは必要ない
//       underline.style.top = this.getBoundingClientRect().bottom - underline.clientHeight + 'px';
//       activeItem = this; // 現在アクティブなアイテムを記録
//     });

//     item.addEventListener('mouseout', function() {
//       underline.style.width = 0;
//       activeItem = null; // アイテムが非アクティブになったらリセット
//     });
//   });

//   // ウィンドウのリサイズイベントに対応
//   window.addEventListener('resize', function() {
//     if (activeItem) {
//       underline.style.width = activeItem.getBoundingClientRect().width + 'px';
//       underline.style.left = activeItem.getBoundingClientRect().left + 'px';
//       underline.style.top = activeItem.getBoundingClientRect().bottom - underline.clientHeight + 'px';
//     }
//   });

//   // header-toggleの機能
//   const toggle = document.querySelector('.header-toggle');
//   const nav = document.querySelector('.header-nav');

//   toggle.addEventListener('click', function() {
//     this.classList.toggle('active');
//     nav.classList.toggle('active');
//   });
// });
// アクティブリンクアニメーション//////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//   const navLinks = document.querySelectorAll('.tag-list-item a');
//   const sections = document.querySelectorAll('section');
//   const highlightBg = document.querySelector('.highlight-background');
//   const paddingHorizontal = 15; // 左右の余白
//   const paddingVertical = 8; // 上下の余白
//   let activeLink = null; // 現在アクティブなリンクを追跡

//   // ハイライト位置を更新する関数
//   function updateHighlightPosition() {
//     if (activeLink) {
//       highlightBg.style.display = "block"; // アクティブなリンクがある場合は表示
//       const linkRect = activeLink.getBoundingClientRect();
//       const containerRect = activeLink.closest('.tag-sub-container').getBoundingClientRect();

//       highlightBg.style.width = `${linkRect.width + paddingHorizontal * 2}px`;
//       highlightBg.style.height = `${linkRect.height + paddingVertical * 2}px`;
//       highlightBg.style.transform = `translate(${linkRect.left - containerRect.left - paddingHorizontal}px, ${linkRect.top - containerRect.top - paddingVertical}px)`;
//     } else {
//       highlightBg.style.display = "none"; // アクティブなリンクがない場合は非表示
//     }
//   }

//   const observer = new IntersectionObserver((entries, observer) => {
//       entries.forEach(entry => {
//           if (entry.isIntersecting) {
//               const id = entry.target.getAttribute('id');
//               activeLink = document.querySelector(`.tag-list-item a[href="#${id}"]`);

//               // 他のすべてのリンクから`active`クラスを削除
//               navLinks.forEach(link => {
//                   link.classList.remove('active');
//               });
              
//               // 対応するリンクに`active`クラスを追加
//               if (activeLink) {
//                   activeLink.classList.add('active');
//                   updateHighlightPosition();
//               }
//           }
//       });
//   }, { root: null, rootMargin: '0px', threshold: 0.5 });

//   sections.forEach(section => observer.observe(section));

//   // リサイズイベントリスナーを追加
//   window.addEventListener('resize', updateHighlightPosition);

//   // 初期ハイライト位置を更新（初期アクティブリンクがあるかチェック）
//   updateHighlightPosition();
// });
// media-containerアニメーション//////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//   const mediaContainers = document.querySelectorAll('.media-sub-container');

//   const updateStylesForContainer = (container) => {
//     const windowHeight = window.innerHeight;
//     const rect = container.getBoundingClientRect();
//     const elemTop = rect.top;
//     const elemBottom = rect.bottom;

//     if (window.matchMedia('(min-width: 768px)').matches) {
//       if (elemBottom > 0 && elemTop < windowHeight) {
//         const visibleHeight = Math.min(windowHeight, elemBottom) - Math.max(0, elemTop);
//         const percentageVisible = visibleHeight / windowHeight;
//         // 40%から100%への変化を計算
//         const widthPercentage = 40 + (60 * percentageVisible);
//         const borderRadius = 100 * (1 - percentageVisible); // 30pxから0pxへの変化
//         const height = 70 + (0 * percentageVisible); // 40vhから50vhへの変化

//         // widthの設定をパーセンテージから直接の値に変更
//         container.style.width = `calc(${widthPercentage}vw)`;
//         container.style.borderRadius = `${borderRadius}px`;
//         container.style.height = `${height}vh`;
//       } else {
//         // 要素がビューポート外に完全に出たら元のスタイルに戻す
//         container.style.width = '40vw'; // 初期値に40vwを設定
//         container.style.borderRadius = '30px'; // 初期値に30pxを設定
//         container.style.height = '70vh'; // 初期値に40vhを設定
//       }
//     } else {
//       // 768px未満では元のスタイルを適用
//       container.style.width = '90vw';
//       container.style.borderRadius = '30px';
//       container.style.height = '40vh';
//     }
//   };

//   const updateStyles = () => {
//     mediaContainers.forEach(updateStylesForContainer);
//   };

//   // スクロールイベントと初期スタイル設定用の関数を設定・実行
//   window.addEventListener('scroll', updateStyles);
//   updateStyles(); // 初期表示のためにも実行

//   // 画面のリサイズイベントに反応してスタイルを再適用
//   window.addEventListener('resize', updateStyles);
// });
// videoとpictureの切り替え//////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', function() {
//   const mediaContainers = document.querySelectorAll('.media-sub-container');

//   mediaContainers.forEach(container => {
//       const video = container.querySelector('video');
//       const picture = container.querySelector('picture');
//       const source = video.querySelector('source');

//       // srcが設定されているかチェック
//       if (source.src) {
//           // 動画の存在チェック
//           const videoExists = (url, callback) => {
//               const xhr = new XMLHttpRequest();
//               xhr.open('HEAD', url, true);
//               xhr.onload = () => {
//                   if (xhr.status >= 200 && xhr.status < 300) {
//                       callback(true);
//                   } else {
//                       callback(false);
//                   }
//               };
//               xhr.onerror = () => callback(false);
//               xhr.send();
//           };

//           videoExists(source.src, (exists) => {
//               if (!exists) {
//                   video.style.display = 'none';
//                   picture.style.display = 'block';
//               }
//           });
//       } else {
//           // srcが設定されていない場合はフォールバック画像を表示
//           video.style.display = 'none';
//           picture.style.display = 'block';
//       }
//   });
// });

// スライドアップアニメーション //////////////////////////////////////////////////////////////////
// document.addEventListener('DOMContentLoaded', () => {
//   const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//       // 要素がビューポートに完全に入るとき
//       if (entry.isIntersecting) {
//         entry.target.classList.add('slide-up-visible');
//         observer.unobserve(entry.target); // 一度表示されたら観測を停止
//       }
//     });
//   }, {
//     rootMargin: '0px',
//     threshold: 0.2
//   });

//   // スライドアップアニメーションを適用したい要素をすべて選択
//   const elements = document.querySelectorAll('.slide-up');
//   elements.forEach(el => {
//     observer.observe(el); // 各要素を観測対象に追加
//   });
// });
// お問い合わせフォーム //////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  const inquiryTypesContainer = document.querySelector('.inquiry-types');
  const detailContainer = document.querySelector('.detail-selection');

  // 問い合わせ種別のカードを動的に生成
  const inquiryTypes = [
      { type: 'product', text: '製品について' },
      { type: 'testing', text: '受託試験について' },
      { type: 'support', text: 'カスタマーサポートについて' }
  ];

  const detailOptions = {
      'product': ['環境試験器', '信頼性評価システム', '低GWP冷媒', 'リセール製品'],
      'testing': ['試験A', '試験B', '試験C'],
      'support': ['サポートA', 'サポートB', 'サポートC']
  };

  let selectedCard = null;

  inquiryTypes.forEach(inquiry => {
      const card = document.createElement('div');
      card.className = 'inquiry-type-card';
      card.textContent = inquiry.text;
      card.setAttribute('data-type', inquiry.type);
      inquiryTypesContainer.appendChild(card);

      card.addEventListener('click', function() {
          if (selectedCard === this) {
              resetCards();
              return;
          }

          selectedCard = this;
          const selectedType = this.getAttribute('data-type');
          updateDetailCards(detailOptions[selectedType]);

          // 非表示処理
          Array.from(inquiryTypesContainer.children).forEach(c => {
              if (c !== selectedCard) {
                  c.classList.add('hidden');
                  c.addEventListener('transitionend', function() {
                      this.style.display = 'none';
                  }, { once: true });
              }
          });
          // 選択されたカードの表示スタイルをリセット
          selectedCard.classList.remove('hidden');
          selectedCard.style.display = '';
      });
  });

  function updateDetailCards(options) {
      detailContainer.innerHTML = '';
      options.forEach(option => {
          const detailCard = document.createElement('div');
          detailCard.className = 'detail-card';
          detailCard.textContent = option;
          detailContainer.appendChild(detailCard);
      });
  }

  function resetCards() {
      Array.from(inquiryTypesContainer.children).forEach(c => {
          c.classList.remove('hidden');
          c.removeEventListener('transitionend', function() {
              this.style.display = '';
          });
          c.style.display = ''; // スタイルをリセットして全カードを表示
      });
      selectedCard = null;
      detailContainer.innerHTML = '';
  }
});










// フォーカス自動送り //////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
  // 全ての入力フィールドを取得
  const inputs = document.querySelectorAll('#contactForm input, #contactForm select, #contactForm textarea');

  // 各入力フィールドに対して処理を設定
  inputs.forEach((input, index) => {
      // Enterキーが押されたときのイベントリスナーを追加
      input.addEventListener('keydown', (e) => {
          // Enterキーが押されたかどうかを確認
          if (e.key === 'Enter') {
              e.preventDefault(); // フォームの送信を防ぐ

              // 現在のフィールドが最後でなければ、次のフィールドにフォーカスを移動
              if (index < inputs.length - 1) {
                  inputs[index + 1].focus();
              }
          }
      });
  });
});
// splide初期化 //////////////////////////////////////////////////////////////////
// const options = {
//   perMove: 1, 
//   type: 'loop',
//   focus:'center',
//   cover: true,
//   drag: true,
//   arrows: true,
//   autoplay: true,
//   pauseOnHover: true,
//   speed: 1000,
//   interval: 5000,
//   easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
//   gap: 8,
//   padding: 'calc(12vw - 24px)'
// }
// const splide = new Splide( '.splide',options );
// splide.mount();

