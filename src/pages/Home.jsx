import Layout from "@/components/Layout";
import Slide from "@/components/Slide";
import TopNote from "@/components/TopNote";
import { WP_API_BASE_URL } from "@/settings/wordPress";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Home = () => {
  const { data } = useQuery({
    queryKey: ["home"],
    queryFn: async () => {
      const response = await axios.get(
        `${WP_API_BASE_URL}/wp-json/wp/v2/pages/2`
      );
      return response.data;
    },
  });

  return (
    <Layout>
      <Slide />
      {/* <section className="top-introduction">
        <div className="top-introduction-container">
          <div className="top-introduction-flex-item1">
            <h2>信頼性試験を支える</h2>
            <h2>エタックの環境試験技術</h2>
          </div>
          <div className="top-introduction-flex-item2">
            <p className="no-wrap">
              エタックは、
              <br />
              半世紀にわたって、
              <br />
              環境試験と信頼性評価に向き合ってきました。
              <br />
              創造的で革新的なメーカーとして、
              <br />
              常に最前線に立ち、
              <br />
              皆様に寄り添った製品、
              <br />
              サービスを、提供します。
              <br />
            </p>
          </div>
        </div>
      </section> */}
      <section
        className="top-introduction"
        dangerouslySetInnerHTML={{ __html: data?.content?.rendered }}
      />
      <TopNote />
    </Layout>
  );
};

export default Home;
