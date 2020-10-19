import HeadTitle from "~/components/head/HeadTitle";
import BoxShadowCard from "~/components/card/BoxShadowCard";
import { NextPage } from "next";

interface PackageType {
  name: string;
  id: number;
  disabled?: boolean;
}

const popularPackages: PackageType[] = [
  {
    name: "foo",
    id: 1,
  },
  {
    name: "bar",
    id: 1,
  },
  {
    name: "baz",
    id: 1,
  },
  {
    name: "hoge",
    id: 1,
  },
  {
    name: "fuga",
    id: 1,
  },
];

const packageSubjects: PackageType[] = [
  {
    name: "高校数学",
    id: 1,
    disabled: false,
  },
  {
    name: "中学数学",
    id: 1,
    disabled: true,
  },
  {
    name: "英語",
    id: 1,
    disabled: true,
  },
  {
    name: "中学社会",
    id: 1,
    disabled: true,
  },
];

const LandingPackageCard = (data: PackageType) => (
  <BoxShadowCard clName="landing-package-card" disabled={data.disabled}>
    {data.name}
  </BoxShadowCard>
);

const Landing: NextPage = () => (
  <>
    <HeadTitle>はじめる</HeadTitle>
    <section
      style={{
        margin: "0 4% 0",
      }}
    >
      <h2>人気のパッケージ</h2>
      <div>{popularPackages.map((data) => LandingPackageCard(data))}</div>
      <h2>教科別パッケージ</h2>
      <div>{packageSubjects.map((data) => LandingPackageCard(data))}</div>
      <h2>問題集を作る</h2>
      <div>{packageSubjects.map((data) => LandingPackageCard(data))}</div>
    </section>
  </>
);

export default Landing;
