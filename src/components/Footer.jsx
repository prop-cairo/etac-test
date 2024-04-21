const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-sub-container">
          <div className="footer-logo">
            <img className="footer-logo-etac" src="/images/logo.svg" alt="" />
          </div>
          <div className="footer-list-container">
            <ul className="footer-list">
              <li className="footer-list-title">サイトマップ</li>
              <li>
                <a href="product"></a>製品
              </li>
              <li>
                <a href="jyutaku">受託試験</a>
              </li>
              <li>
                <a href="csc">サポート</a>
              </li>
              <li>
                <a href="contact">お問い合わせ</a>
              </li>
              <li>
                <a href="contact">事業部概要</a>
              </li>
              <li>
                <a href="privacy">個人情報保護方針</a>
              </li>
              <li>
                <a href="privacy">情報セキュリティ方針</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-title">製品</li>
              <li>
                <a href="">環境試験期・装置</a>
              </li>
              <li>
                <a href="">信頼性評価システム</a>
              </li>
              <li>
                <a href="">欧州規格対応装置</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-title">受託試験</li>
              <li>
                <a href="">受託試験・信頼性クリニック</a>
              </li>
              <li>
                <a href="">試験メニュー</a>
              </li>
              <li>
                <a href="">試験場</a>
              </li>
              <li>
                <a href="">受託試験設備一覧</a>
              </li>
              <li>
                <a href="">業界別試験規格</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-title">サポート</li>
              <li>点検・校正サービス</li>
              <li>資料ダウンロード</li>
            </ul>
          </div>
        </div>

        <div className="footer-sub-container">
          <div className="footer-logo">
            <img
              className="footer-logo-kusumoto"
              src="/images/Kusumotologo.svg"
              alt="楠本化成株式会社"
            />
          </div>

          <div className="footer-list-container">
            <ul className="footer-list">
              <li className="footer-list-title">会社・事業部</li>
              <li>
                <a href="https://www.kusumoto.co.jp/company/outline/">
                  会社概要
                </a>
              </li>
              <li>
                <a href="https://www.kusumoto.co.jp/company/division/chemical/">
                  化成品事業部
                </a>
              </li>
              <li>
                <a href="https://www.kusumoto.co.jp/company/division/international/">
                  国際事業部
                </a>
              </li>
              <li>
                <a href="https://www.kusumoto.co.jp/company/division/additives/">
                  添加剤事業部
                </a>
              </li>
              <li>
                <a href="/">エタック事業部</a>
              </li>
            </ul>
            <ul className="footer-list">
              <li className="footer-list-title">商品情報</li>
              <li>
                <a href="https://www.kusumoto.co.jp/product/coating-sol/">
                  コーティング機能材料（非水系）
                </a>
              </li>
              <li>
                <a href="https://www.kusumoto.co.jp/product/coating-wt/">
                  コーティング機能材料（水系）
                </a>
              </li>
              <li>
                <a href="https://www.kusumoto.co.jp/product/electronics/">
                  電子機能材料
                </a>
              </li>
              <li>
                <a href="https://www.kusumoto.co.jp/product/lube-rubber/">
                  潤滑剤・ゴム機能材料
                </a>
              </li>
              <li>
                <a href="https://www.kusumoto.co.jp/product/raw-materials/">
                  産業用原材料・梱包資材
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright-container">
        <small>© 2024 Kusumoto Chemicals.</small>
      </div>
    </footer>
  );
};

export default Footer;
