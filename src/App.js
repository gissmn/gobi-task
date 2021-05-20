import "./App.css";
import {
  VscGlobe,
  VscHeart,
  VscChromeClose,
  VscArrowRight,
  VscMenu,
} from "react-icons/vsc";
import { BsBagFill, BsSearch } from "react-icons/bs";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo from "./gobi.svg";
import pic from "./assets/img/side1.png";
import pic1 from "./assets/img/side2.png";
import pic2 from "./assets/img/side3.png";
import card from "./assets/img/cardigans.png";
import dress from "./assets/img/dress.png";
import polo from "./assets/img/polo.png";
import turtleneck from "./assets/img/turtleneck.png";
import store from "./assets/img/about-us-store.png";
import aboutUS from "./assets/img/about-us.png";

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
            <div className="burger_menu">
              <VscMenu style={{ marginRight: "2rem" }} />
              <BsSearch />
            </div>
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
              <input className="input " placeholder="Search" />
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
      <section className="section">
        <div className="section_left">
          <h1>WINTER SPICE 2020</h1>
          <p>Infusion of summer pieces and cashmere silk blends.</p>
          <button className="btn">SHOP NOW</button>
        </div>
        <div className="section_right">
          <div className="section_right_pic">
            <div>
              <img
                className="img"
                alt="1"
                src={pic}
                style={{ marginRight: "5px" }}
              />
            </div>
            <div>
              <img
                className="img"
                alt="2"
                src={pic1}
                style={{ marginBottom: "5px" }}
              />
              <img className="img" alt="3" src={pic2} />
            </div>
          </div>
          <div className="section_right_text">
            Infusion of summer pieces and cashmere silk blends.
          </div>
        </div>
      </section>
      <div className="category">
        <div className="catItem">
          <img className="img" alt="1" src={card} />
          <div className="arrow">
            CARDIGANS
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="catName">
          <h2>WOMEN</h2>
          <div className="catItem">
            <img className="img" alt="2" src={dress} />
            <div className="arrow">
              DRESS
              <VscArrowRight style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <div className="catItem">
          <img className="img" alt="3" src={card} />
          <div className="arrow">
            CARDIGANS
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="catItem">
          <img className="img" alt="1" src={turtleneck} />
          <div className="arrow">
            TURTLENECK
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="catName">
          <h2>MEN</h2>
          <div className="catItem">
            <img className="img" alt="2" src={polo} />
            <div className="arrow">
              POLO
              <VscArrowRight style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <div className="catItem">
          <img className="img" alt="3" src={turtleneck} />
          <div className="arrow">
            TURTLENECK
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div className="products">
        <h2>TO GET AND TO GIFT</h2>
        <div className="productItems">
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
          <div className="productItem">
            <img className="img" src={polo} alt="polo" />
            <p>Zweiseitger Wendemantel Mit Schmetterlingsxzds</p>
            <p>+6 colors</p>
            <p>
              <span className="price">$ 299.00</span>
              <span className="discount">$ 79.00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div className="about_left">
          <img className="img" src={store} alt="store" />
          <div className="abts">
            <img src={aboutUS} className="img abt" alt="abt" />
            <img src={aboutUS} className="img abt" alt="abt" />
          </div>
        </div>
        <div className="about_right">
          <h2>ABOUT US</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint,
            temporibus minima maxime maiores hic excepturi dolores officia.
            Autem, facere quia quis aut aliquid illo adipisci sint qui. Dolorem,
            beatae repudiandae!
          </p>
          <button className="btn dark">READ MORE</button>
        </div>
      </div>
      <div className="subscribe">
        <h2>Subscribe</h2>
        <p>
          Sign up for emails and receive early access to new arrivals, sales,
          events + more.
        </p>
        <div className="email">
          <input className="input" placeholder="Enter your email address" />
          <button className="btn dark">SUBMIT</button>
        </div>
        <p>
          By signing up, you will receive Gobi Cashmere offers, promotions and
          other commercial messages. You are also agreeing to Gobi Cashmere's{" "}
          <a href="/">Privacy Policy</a>. You may unsubscribe at any time.
        </p>
      </div>
      <div className="footer">
        <div className="footer_menu">
          <div className="footer_left">
            <div className="footer_item">
              <h3>ABOUT US</h3>
              <a className="link" href="/">
                Our History
              </a>
              <a className="link" href="/">
                Product Care
              </a>
              <a className="link" href="/">
                Store Location
              </a>
              <a className="link" href="/">
                Sustainability
              </a>
            </div>
            <div className="footer_item">
              <h3>POLICY</h3>
              <a className="link" href="/">
                Shipping & Return Policy
              </a>
              <a className="link" href="/">
                Privacy Policy
              </a>
              <a className="link" href="/">
                Impressum
              </a>
              <a className="link" href="/">
                Return Portal
              </a>
            </div>
            <div className="footer_item">
              <h3>CUSTOMER SERVICE</h3>
              <a className="link" href="/">
                General Terms and Conditions
              </a>
              <a className="link" href="/">
                Contact Us
              </a>
              <a className="link" href="/">
                News
              </a>
              <a className="link" href="/">
                FAQ
              </a>
            </div>
            <div className="footer_item">
              <h3>CUSTOMER SERVICE</h3>
              <a className="link" href="/">
                General Terms and Conditions
              </a>
              <a className="link" href="/">
                Contact Us
              </a>
              <a className="link" href="/">
                News
              </a>
              <a className="link" href="/">
                FAQ
              </a>
            </div>
          </div>
          <div className="social_menu">
            <div className="footer_item">
              <h3>FOLLOW US</h3>
              <a className="link" href="/">
                <FaFacebookF />
              </a>
              <a className="link" href="/">
                <FaInstagram />
              </a>
              <a className="link" href="/">
                <FaTwitter />
              </a>
              <a className="link" href="/">
                <FaYoutube />
              </a>
              <div className="language">
                <span>Global - English</span>
                <VscGlobe size="1.5rem" />
              </div>
            </div>
          </div>
        </div>
        <p className="copyright">All content Copyright © 2020 GOBI Cashmere</p>
      </div>
    </div>
  );
}

export default App;
