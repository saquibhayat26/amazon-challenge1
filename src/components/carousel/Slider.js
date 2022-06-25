import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Slider.css";

function Slider() {
  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={4000}
      >
        <div className="home__imageSlider">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/Apr-hero/Apay/Deals-3000._CB623368300_.jpg"
            alt=""
          />
        </div>
        <div className="home__imageSlider">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Monsoon/1500x600_unrec._CB636471735_.jpg"
            alt=""
          />
        </div>
        <div className="home__imageSlider">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/U599/miniart/PC/1._CB636244774_.jpg"
            alt=""
          />
        </div>
        <div className="home__imageSlider">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2file/Alllanguages/3000x1200_Hero-Tall_NP._CB635770012_.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}

export default Slider;
