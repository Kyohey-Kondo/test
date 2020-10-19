import Link from "next/link";
import BoxShadowCard from "../components/card/BoxShadowCard";
import CenteredButton from "../components/button/CenteredButton";
import { NextPage } from "next";

const Home: NextPage = () => (
  <>
    <section className="top-elements">
      <div className="top-elements__eyecatch">
        <BoxShadowCard clName="top-elements__sample-card">
          <div className="top-elements__question-text">
            <p>
              a &gt; 0 とする。
              <br />
              関数 y = x² - 4x + 5 (0 ≦ x ≦ a) について、次の問いに答えよ。
            </p>
            <p>
              （１）最大値を求めよ。
              <br />
              （２）最小値を求めよ。
            </p>
          </div>
          <img src="/samplegraph.svg" alt="" />
        </BoxShadowCard>
        <img className="top-elements__logotype" src="/logotype.svg" alt="" />
      </div>
      <Link href="landing">
        <a>
          <CenteredButton backColor="#0c3bb4" textColor="white" scale={1.3}>
            試してみる
          </CenteredButton>
        </a>
      </Link>
      <CenteredButton backColor="rgba(0, 0, 0, 0.15)" scale={1.3}>
        ログイン/登録
      </CenteredButton>
    </section>
    <style jsx>{`
      .top-elements {
        margin: 10vh 4% 0;

        &__eyecatch {
          display: flex;
          justify-content: space-between;
          margin-bottom: 50px;
        }

        &__logotype {
          width: 40%;
          margin: 0 2%;
        }
      }
    `}</style>
  </>
);

export default Home;
