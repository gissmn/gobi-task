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

import ImageComp from "./components/ImageComp";
import ProductItem from "./components/ProductItem";

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
              <ImageComp name="side1" />
            </div>
            <div>
              <ImageComp name="side2" />
              <ImageComp name="side3" />
            </div>
          </div>
          <div className="section_right_text">
            Infusion of summer pieces and cashmere silk blends.
          </div>
        </div>
      </section>
      <div className="category">
        <div className="catItem">
          <ImageComp name="cardigans" />
          <div className="arrow">
            CARDIGANS
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="catName">
          <h2>WOMEN</h2>
          <div className="catItem">
            <ImageComp name="dress" />
            <div className="arrow">
              DRESS
              <VscArrowRight style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <div className="catItem">
          <ImageComp name="cardigans" />
          <div className="arrow">
            CARDIGANS
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div className="category">
        <div className="catItem">
          <ImageComp name="turtleneck" />
          <div className="arrow">
            TURTLENECK
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
        <div className="catName">
          <h2>MEN</h2>
          <div className="catItem">
            <ImageComp name="polo" />
            <div className="arrow">
              POLO
              <VscArrowRight style={{ cursor: "pointer" }} />
            </div>
          </div>
        </div>
        <div className="catItem">
          <ImageComp name="turtleneck" />
          <div className="arrow">
            TURTLENECK
            <VscArrowRight style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      <div className="products">
        <h2>TO GET AND TO GIFT</h2>
        <div className="productItems">
          <ProductItem name="product-1" />
          <ProductItem name="product-2" />
          <ProductItem name="product-3" />
          <ProductItem name="product-4" />
          <ProductItem name="product-5" />
          <ProductItem name="product-6" />
          <ProductItem name="product-7" />
          <ProductItem name="product-8" />
        </div>
      </div>
      <div className="aboutUs">
        <div className="about_left">
          <ImageComp name="about-us-store" />
          {/* <div className="abts">
            <ImageComp name="about-us" />
            <ImageComp name="about-us" />
          </div> */}
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
