import React from "react";
import Product from "../product/Product";
import "./Home.css";
import Slider from "../carousel/Slider";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__containerSlider">
          <Slider />
        </div>
        {/* <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Apr-hero/Apay/Deals-3000._CB623368300_.jpg"
          alt=""
        /> */}
        <div className="home__row">
          <Product
            id="9"
            title='AORUS FV43U 43" 144Hz 2160p HBR3, NVIDIA G-SYNC Compatible, 3840x2160 Display, 1ms Response Time, HDR, 1x DisplayPort 1.4, 2X HDMI 2.1, 2X USB 3.0, 1x USB C, Black'
            price={4456}
            rating={4}
            image="https://m.media-amazon.com/images/I/81lxZt1vGvL._SX679_.jpg"
            key={Math.random()}
          />
        </div>
        <div className="home__row">
          <Product
            id="1"
            title="Samsung Galaxy S20 FE 5G (Cloud Navy, 8GB RAM, 128GB Storage)  "
            price={22}
            rating={5}
            image="https://m.media-amazon.com/images/I/81vDZyJQ-4L._SY741_.jpg"
            alt="product"
            key={Math.random()}
          />
          <Product
            id="2"
            title="Samsung Galaxy S21 FE 5G (Graphite, 8GB, 128GB Storage)"
            price={455}
            rating={4}
            image="https://m.media-amazon.com/images/I/81cHpJNr07L._SX679_.jpg"
            key={Math.random()}
          />
          <Product
            id="3"
            title="Oneplus Bullets Z2 Bluetooth Wireless in Ear Earphones with Mic, Bombastic Bass "
            price={34}
            rating={5}
            image="https://m.media-amazon.com/images/I/51UhwaQXCpL._SX522_.jpg"
            key={Math.random()}
          />
        </div>
        <div className="home__row">
          <Product
            id="4"
            title="boAt Xtend Smartwatch with Alexa Built-in, 1.69” HD Display, Multiple Watch Faces"
            price={123}
            rating={4}
            image="https://m.media-amazon.com/images/I/61IMRs+o0iL._SX522_.jpg"
            key={Math.random()}
          />
          <Product
            id="5"
            title="Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!"
            price={222}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/51u8ZRDCVoL._SX330_BO1,204,203,200_.jpg"
            key={Math.random()}
          />
        </div>
        <div className="home__row home__rowSingle">
          <Product
            id="7"
            title="pTron Bassbuds Duo New Bluetooth 5.1 Wireless Headphones, 32Hrs Total Playtime, Stereo Audio, Touch Control TWS, Dual HD Mic, Type-C Fast Charging, IPX4 Water-Resistant & Voice Assistance (Black)"
            price={23}
            rating={4}
            image="https://m.media-amazon.com/images/I/519uMzMXJVL._SX522_.jpg"
            key={Math.random()}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
