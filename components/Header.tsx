import Link from "next/link";

const Header: React.FC = () => (
  <>
    <header className="header">
      <Link href="/">
        <a>
          <img className="header__logo" src="/logo_shadow.svg" alt="" />
        </a>
      </Link>
      <div className="menu">
        <span className="header__menu__item">ログイン/登録</span>
        <span className="header__menu__item">初めての方へ</span>
      </div>
    </header>
    <style jsx>{`
      .header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 60px;
        padding: 0 2%;
      }

      .header__logo {
        width: 50px;
        height: auto;
        cursor: pointer;
      }

      .header__menu__item {
        margin-left: 0.8em;
      }
    `}</style>
  </>
);

export default Header;
