import "./App.css";
import { VscGlobe, VscHeart, VscChromeClose } from "react-icons/vsc";
import { BsBagFill } from "react-icons/bs";
import Logo from "./gobi.svg";

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="userNav">
          <div className="language">
            <VscGlobe size="1.5rem" />
            <span>Global - English</span>
          </div>
          <div className="return">
            RETURNING AN ORDER? <a href="/">Click for more info</a>
          </div>
          <div className="signNav">
            <button>SIGN IN</button>
            <button>SIGN UP</button>
          </div>
        </div>
        <div className="navMenu">
          <div className="Menu">
            <ul>
              <li>
                <a href="/">WOMEN</a>
              </li>
              <li>
                <a href="/">MEN</a>
              </li>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">ACCESSORIES</a>
              </li>
              <li>
                <a href="/">ORGANIC</a>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={Logo} alt="Logo" />
            <span>CASHMERE FOR ALL</span>
          </div>
          <div className="userPanel">
            <div className="search">
              <input placeholder="Search" />
              <VscChromeClose className="searchBtn" />
            </div>
            <div className="userBtn">
              <button>
                <VscHeart />
              </button>
              <button>
                <BsBagFill />
                <div className="dot"></div>
              </button>
            </div>
          </div>
        </div>
        <div className="cover">
          <div className="cover_left"></div>
          <div className="cover_right">
            <h1>SUMMER</h1>
            <i className="saleTxt">Sale</i>
            <div className="percentage">
              <div>UPTO</div>
              <div>
                <span className="percentNmb">60</span>
                <span className="percent">%</span>FF
              </div>
            </div>
            <button className="btn">SHOP NOW</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
