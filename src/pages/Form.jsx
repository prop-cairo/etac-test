import { useState, useEffect } from "react";
import Layout from "@/components/Layout";

import "@/form.css";
import { useLocation } from "react-router";

const Form = () => {
  const search = useLocation().search;
  const [activeSection, setActiveSection] = useState("");
  const [category, setCategory] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productSelection, setProductSelection] = useState("");
  const [lotNumber, setLotNumber] = useState("");
  const [inquiryContent, setInquiryContent] = useState("");
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [phone, setPhone] = useState("");
  const [responseMethod, setResponseMethod] = useState("");

  // 第一階層
  const topSections = {
    label: "お問い合わせの種別を選択してください。",
    id: "category-inquiry",
    options: [
      {
        id: "product-inquiry",
        label: "製品に関するもの",
        next: "productCategory",
      },
      {
        id: "testing-inquiry",
        label: "受託試験に関するもの",
        next: "testingCategory",
      },
      {
        id: "maintenance-inquiry",
        label: "点検・修理・校正に関するもの",
        next: "maintenanceCategory",
      },
      {
        id: "company-inquiry",
        label: "会社・事業部に関するもの",
        next: "inquiryTextarea",
      },
      { id: "other-inquiry", label: "その他", next: "inquiryTextarea" },
    ],
  };
  // 第二階層
  const secondSections = {
    productCategory: {
      label: "製品カテゴリ",
      id: "product-category",
      options: [
        {
          id: "environmental-testing-machine",
          label: "環境試験機",
          next: "productSelection1",
        },
        {
          id: "european-standard-compliant-device",
          label: "欧州規格対応装置",
          next: "productSelection2",
        },
        {
          id: "reliability-evaluation-system",
          label: "信頼性評価システム",
          next: "productSelection3",
        },
        {
          id: "low-gwp-refrigerant",
          label: "低GWP冷媒",
          next: "productSelection4",
        },
        {
          id: "resale-product",
          label: "リセール製品",
          next: "productLotNum",
        },
      ],
      before: "",
    },
    testingCategory: {
      label: "受託試験に関するお問い合わせ",
      id: "testing-category",
      options: [
        {
          id: "testing-inquiry-category1",
          label: "受託試験について詳しく知りたい",
          next: "productSelection1",
        },
        {
          id: "testing-inquiry-category2",
          label: "受託試験を依頼したい",
          next: "productSelection2",
        },
      ],
      before: "",
    },
    maintenanceCategory: {
      label: "点検・修理・校正に関するお問い合わせ",
      id: "maintenance-category",
      options: [
        {
          id: "maintenance-inquiry-category1",
          label: "点検校正",
          next: "productCategory",
        },
        {
          id: "maintenance-inquiry-category2",
          label: "装置の移設",
          next: "productCategory",
        },
        {
          id: "maintenance-inquiry-category3",
          label: "不具合",
          next: "productCategory",
        },
        {
          id: "maintenance-inquiry-category4",
          label: "その他",
          next: "productCategory",
        },
      ],
      before: "",
    },
  };

  const thirdSections = {
    productSelection: {
      label: "お問い合わせの製品を選択してください。",
      id: "product-selection",
      options: [
        {
          id: "hiflex-neo-e",
          label: "HIFLEX NEO-E",
          next: "inquiryTextarea",
        },
        {
          id: "hiflex-neo-es",
          label: "HIFLEX NEO-ES",
          next: "inquiryTextarea",
        },
        {
          id: "hiflex-sc-simplicore",
          label: "HIFLEX SC SIMPLICORE",
          next: "inquiryTextarea",
        },
        {
          id: "wintech-neo",
          label: "WINTECH NEO",
          next: "inquiryTextarea",
        },
        { id: "hispec", label: "HISPEC", next: "inquiryTextarea" },
      ],
      before: "testingCategory",
    },
    productSelection1: {
      label: "お問い合わせの製品を選択してください。",
      id: "product-selection1",
      options: [
        { id: "hiflex-neo-e", label: "HIFLEX NEO-E", next: "inquiryTextarea" },
        {
          id: "hiflex-neo-es",
          label: "HIFLEX NEO-ES",
          next: "inquiryTextarea",
        },
        {
          id: "hiflex-sc-simplicore",
          label: "HIFLEX SC SIMPLICORE",
          next: "inquiryTextarea",
        },
        { id: "wintech-neo", label: "WINTECH NEO", next: "inquiryTextarea" },
        { id: "hispec", label: "HISPEC", next: "inquiryTextarea" },
        { id: "colonia-e", label: "COLONIA E", next: "inquiryTextarea" },
        { id: "dew-cycle", label: "DEW CYCLE", next: "inquiryTextarea" },
        { id: "labonic", label: "LABONIC", next: "inquiryTextarea" },
        {
          id: "custom-machine",
          label: "用途別専用機",
          next: "inquiryTextarea",
        },
      ],
      before: "productCategory",
    },
    productSelection2: {
      label: "お問い合わせの製品を選択してください。",
      id: "product-selection2",
      options: [
        { id: "shock-event", label: "ShockEvent", next: "inquiryTextarea" },
        { id: "clime-event", label: "ClimeEvent", next: "inquiryTextarea" },
        { id: "ess-j", label: "ESS-J", next: "inquiryTextarea" },
      ],
      before: "productCategory",
    },
    productSelection3: {
      label: "お問い合わせの製品を選択してください。",
      id: "product-selection3",
      options: [
        { id: "sir13", label: "SIR13", next: "inquiryTextarea" },
        { id: "mlr23", label: "MLR23", next: "inquiryTextarea" },
        { id: "ed71", label: "ED71", next: "inquiryTextarea" },
        { id: "tle-mcl", label: "TLE/MCL", next: "inquiryTextarea" },
      ],
      before: "productCategory",
    },
    productSelection4: {
      label: "お問い合わせの製品を選択してください。",
      id: "product-selection4",
      options: [{ id: "r-469a", label: "R-469A", next: "inquiryTextarea" }],
      before: "productCategory",
    },
  };

  useEffect(() => {
    const query = new URLSearchParams(search);
    // 初期化
    setActiveSection(query.get("section") || "");
    setCategory(
      topSections.options.find((o) => o.label === query.get("category"))
        ?.label || ""
    );
    setProductCategory(query.get("productCategory") || "");
    setProductSelection(query.get("productSelection") || "");
    setLotNumber(query.get("lotNumber") || "");
    setInquiryContent(query.get("inquiryContent") || "");
    setName("");
    setOrganization("");
    setEmail("");
    setEmailConf("");
    setPhone("");
    setResponseMethod("");
  }, []);


  const handleCategoryChange = (section) => {
    setActiveSection(section);
  };

  const goBack = () => {
    setActiveSection(""); // セクションをクリアして戻る
  };

  return (
    <Layout>
      <div className="container">
        <div className="form-container">
          <div className="form-sub-container">
            {/* Level 1: Inquiry Categories */}
            {!activeSection && (
              <div className="form-block" id={topSections.id}>
                <h2 className="section-title">{topSections.label}</h2>
                <div className="cards-container">
                  {topSections.options.map((item) => (
                    <div
                      className="card"
                      key={item.id}
                      onClick={() => {
                        handleCategoryChange(item.next);
                        setCategory(item.label);
                      }}
                    >
                      <input
                        type="radio"
                        name={topSections.id}
                        id={item.id}
                        value={item.id}
                      />
                      <label htmlFor={item.id}>{item.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Level 2 */}
            {secondSections[activeSection] && (
              <div className="form-block" id={secondSections[activeSection].id}>
                <h2 className="section-title">
                  {secondSections[activeSection].label}
                </h2>
                <div className="cards-container">
                  {secondSections[activeSection].options.map((item) => (
                    <div
                      className="card"
                      key={item.id}
                      onClick={() => {
                        handleCategoryChange(item.next);
                        setProductCategory(item.label);
                      }}
                    >
                      <input
                        type="radio"
                        name={secondSections[activeSection].id}
                        id={item.id}
                        value={item.id}
                      />
                      <label htmlFor={item.id}>{item.label}</label>
                    </div>
                  ))}
                </div>
                <button className="back-button" onClick={goBack}>
                  戻る
                </button>
              </div>
            )}

            {/* Level 3: Product Selection */}
            {thirdSections[activeSection] && (
              <div className="form-block" id={thirdSections[activeSection].id}>
                <h2 className="section-title">
                  {thirdSections[activeSection].label}
                </h2>
                <div className="cards-container">
                  {thirdSections[activeSection].options.map((product) => (
                    <div
                      className="card"
                      key={product.id}
                      onClick={() => {
                        handleCategoryChange(product.next);
                        setProductSelection(product.label);
                      }}
                    >
                      <input
                        type="radio"
                        name={thirdSections[activeSection].id}
                        id={product.id}
                        value={product.id}
                      />
                      <label htmlFor={product.id}>{product.label}</label>
                    </div>
                  ))}
                </div>
                <button className="back-button" onClick={goBack}>
                  戻る
                </button>
              </div>
            )}

            {/* Level 4: Inquiry Textarea */}
            {activeSection === "inquiryTextarea" && (
              <div className="form-block" id="inquiry-textarea">
                <h2 className="section-title">お問い合わせ・ご相談内容</h2>
                <div className="input-group">
                  <textarea
                    id="inquiry-content"
                    name="inquiry-content"
                    value={inquiryContent}
                    rows="5"
                    placeholder="お問い合わせ・ご相談内容をご記入ください。"
                    onChange={(e) => setInquiryContent(e.target.value)}
                  ></textarea>
                </div>
                <button
                  id="next-textarea-button"
                  type="button"
                  onClick={() => handleCategoryChange("customerInfo")}
                >
                  次へ
                </button>
                <button
                  id="clear-textarea-button"
                  type="button"
                  onClick={() => setActiveSection("")}
                >
                  クリア
                </button>
              </div>
            )}

            {/* Level 5: Customer Info */}
            {activeSection === "customerInfo" && (
              <div className="form-block" id="customer-info">
                <h2 className="section-title">お客様情報の入力</h2>
                <form id="customer-info-form">
                  <div className="input-group">
                    <label htmlFor="name">お名前</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="organization">会社・団体・所属等</label>
                    <input
                      type="text"
                      id="organization"
                      name="organization"
                      required
                      onChange={(e) => setOrganization(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="email">メールアドレス</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="confirm-email">メールアドレスの確認</label>
                    <input
                      type="email"
                      id="confirm-email"
                      name="confirm-email"
                      required
                      onChange={(e) => setEmailConf(e.target.value)}
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="phone">電話番号</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="\d{10,11}"
                      required
                      title="電話番号は10桁または11桁の数字で入力してください"
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                  <div className="form-group-container">
                    <label>ご回答の方法</label>
                    <div className="form-group-sub-container">
                      <div
                        className="card"
                        // onClick={toggleDisplay('email-response')}
                      >
                        <input
                          type="radio"
                          name="response-method"
                          id="email-response"
                          value="email"
                          hidden
                        />
                        <label htmlFor="email-response">メール</label>
                      </div>
                      <div
                        className="card"
                        // onClick={toggleDisplay('phone-response')}
                      >
                        <input
                          type="radio"
                          name="response-method"
                          id="phone-response"
                          value="phone"
                          hidden
                        />
                        <label htmlFor="phone-response">電話</label>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            )}

          </div>
          <div id="preview-area" className="form-sub-container">
            <h2>プレビュー</h2>
            {category && (
              <p id="preview-category">お問い合わせの種別：{category}</p>
            )}
            {productCategory && (
              <p id="preview-product-category">
                製品カテゴリ：{productCategory}
              </p>
            )}
            {inquiryContent && (
              <p id="preview-inquiry-content">{inquiryContent}</p>
            )}
            {productSelection && (
              <p id="preview-product-selection">製品：{productSelection}</p>
            )}
            <p id="preview-lot-number"></p>
            {name ||
            organization ||
            email ||
            emailConf ||
            phone ||
            responseMethod ? (
              <>
                <p id="preview-customer-info">お客様情報</p>
                {
                  <>
                    <p>お名前：{name || ""}</p>
                    <p>会社・団体・所属等：{organization || ""}</p>
                    <p>メールアドレス：{email || ""}</p>
                    <p>電話番号：{phone || ""}</p>
                    <p>ご回答の方法：{responseMethod || ""}</p>
                  </>
                }
              </>
            ) : null}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Form;
