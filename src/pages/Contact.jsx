import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import "@/styles/Contact.scss";
import useSlideUp from "@/hooks/useSlideup";

const Contact = () => {
  const slideUpRef = useSlideUp();
  return (
    <Layout>
      <div className="container">
        <div className="title-container">
          <h1 className="etac-h1">お問い合わせ</h1>
        </div>

        <div className="contact-container">
          <div className="contact-sub-container">
            <h2 className="contact-h2">
              <span className="reveal-text">製品・サービス</span>のご案内から、
              <span className="reveal-text">受託試験</span>のご依頼、
              <span className="reveal-text">カスタマーサポート</span>など
              様々なお問い合わせを受け付けています。
            </h2>
            <div className="contact-list-container">
              <ul>
                <li>製品・サービスのご案内</li>
                <li>製品のご購入・お見積もり</li>
                <li>後継機のご案内</li>
                <li>リセール製品のご購入</li>
                <li>受託試験のご依頼・ご相談</li>
                <li>製品の修理について</li>
                <li>点検・校正サービスについて</li>
                <li>ダウンロードサービスについて</li>
                <li>会社・事業部について</li>
                <li>その他各種問い合わせ</li>
              </ul>
            </div>
          </div>

          <div className="contact-sub-container-2">
            <h3 className="contact-h3">お問い合わせはこちら</h3>
            <p className="contact-phone-number">03-3295-8681</p>
            <div className="contact-button slide-up" ref={slideUpRef}>
              <Link to="/form" className="button">
                お問い合わせフォーム
              </Link>
            </div>
            <p className="contact-meta-text">
              修理・点検・校正やリセール製品に関するお問い合わせは、事前に9桁のロットNo.をお控えいただくとスムーズにご案内できます。
            </p>
            <p className="contact-meta-text">
              ロットNo.は装置側面か背面にある名盤シール、もしくは装置正面下部に貼ってあるシールでご確認ください。
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
