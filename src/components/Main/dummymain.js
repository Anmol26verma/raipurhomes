import React from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaMicrophone,
  FaPhone,
  FaSearch,
  FaSearchLocation,
  FaSlidersH,
  FaWhatsapp,
  FaRegCompass,
} from "react-icons/fa";

import "./main.css";

const main = () => {
  return (
    <div className="main">


      {/* ------------------- Search area--------------------- */}
      <div>
        <div className="background-image">
          <img src={require("../images/bg1.png")} alt="" />
          <img src={require("../images/bg1.png")} alt="" />
        </div>
        <div className="search">
          <div className="search-options">
            <button className="search-option active">Buy</button>
            <button className="search-option">Rent</button>
            <button className="search-option">Sell</button>
          </div>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Enter an address, city, neighborhood, or ZIP code."
              className="search-input"
            />
            <div className="buttons">
              <button className="button">
                <FaSearch />
              </button>
              <button className="button">
                <FaSearchLocation />
              </button>
              <button className="button">
                <FaMicrophone />
              </button>
            </div>
          </div>
        </div>
      </div>

      


      {/* ------------------- Tranding area--------------------- */}
      <div className="trending">
        <div className="text">
          <h1>Tranding Area in Raipur</h1>
          <p>
            <span className="icon">
              <FaArrowLeft />
            </span>
            <span className="icon">
              <FaArrowRight />
            </span>
          </p>
        </div>
        <div className="areas">
          <div className="area">
            <img src={require("../images/raipur.png")} alt="image1" />
            <p>TELIBANDHA</p>
          </div>
          <div className="area">
            <img src={require("../images/raipur.png")} alt="image1" />
            <p>MOWA SADDHU </p>
          </div>
          <div className="area">
            <img src={require("../images/raipur.png")} alt="image1" />
            <p>NAYA RAIPUR</p>
          </div>
          <div className="area">
            <img src={require("../images/raipur.png")} alt="image1" />
            <p>BHATAGOAN</p>
          </div>
          <div className="area">
            <img src={require("../images/raipur.png")} alt="image1" />
            <p>AMLIDIH</p>
          </div>
          <div className="area">
            <img src={require("../images/raipur.png")} alt="image1" />
            <p>SANTOSHI NAGAR</p>
          </div>
          <div className="area">
            <img src={require("../images/raipur.png")} alt="image1" />
            <p>DDU NAGAR</p>
          </div>
        </div>
      </div>



      {/* ----------------------------Property---------------------------- */}
      <div className="property">
        <h1>Featured Property For Sale</h1>

        <div className="filters">
          <button className="filter active">All</button>
          <button className="filter">Residential</button>
          <button className="filter">Comercial</button>
          <button className="filter">Agricultural</button>
          <button className="filter">Industrial</button>
          <button className="filter">Semi-Commercial</button>
          <button className="filter">Residential</button>
          <button className="filter">
            <FaSlidersH className="icon" />
            Filter
          </button>
          <button className="filter">
            <FaChevronDown className="icon" /> Sort By
          </button>
        </div>
        <div className="cards">
          <div className="container text-center">
            <div className="row row-cols-3">
              <div className="col">
                <div className="cards">
                  <div className="card-container">
                    <div className="image">
                      <img
                        src={require("../images/property.png")}
                        alt="image1"
                      />
                      {/* <span>For Sale </span>
                      <span>
                        <FaHeart />
                      </span> */}
                    </div>
                    <div className="details">
                      <div>
                        <div className="title">
                          <p>2BHK RESIDENTIAL FLAT AVAILABLE</p>
                          <span>768</span>
                        </div>
                        <div className="locations">
                          <i className="bi-geo-alt-fill"> Devpuri</i>
                          <i>
                            <FaRegCompass /> West{" "}
                          </i>
                        </div>
                        <span id="residential">Residential</span>
                      </div>
                    </div>
                    <hr />
                    <div className="price">
                      <p>&#8377; 20,00,000</p>
                      <i id="phone">
                        <FaPhone />
                      </i>
                      <i id="whatsapp">
                        <FaWhatsapp />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cards">
                  <div className="card-container">
                    <div className="image">
                      <img
                        src={require("../images/property.png")}
                        alt="image1"
                      />
                      {/* <span>For Sale </span>
                      <span>
                        <FaHeart />
                      </span> */}
                    </div>
                    <div className="details">
                      <div>
                        <div className="title">
                          <p>2BHK RESIDENTIAL FLAT AVAILABLE</p>
                          <span>768</span>
                        </div>
                        <div className="locations">
                          <i class="bi-geo-alt-fill"> Devpuri</i>
                          <i>
                            <FaRegCompass /> West{" "}
                          </i>
                        </div>
                        <span id="residential">Residential</span>
                      </div>
                    </div>
                    <hr />
                    <div className="price">
                      <p>&#8377; 20,00,000</p>
                      <i id="phone">
                        <FaPhone />
                      </i>
                      <i id="whatsapp">
                        <FaWhatsapp />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cards">
                  <div className="card-container">
                    <div className="image">
                      <img
                        src={require("../images/property.png")}
                        alt="image1"
                      />
                      {/* <span>For Sale </span>
                      <span>
                        <FaHeart />
                      </span> */}
                    </div>
                    <div className="details">
                      <div>
                        <div className="title">
                          <p>2BHK RESIDENTIAL FLAT AVAILABLE</p>
                          <span>768</span>
                        </div>
                        <div className="locations">
                          <i class="bi-geo-alt-fill"> Devpuri</i>
                          <i>
                            <FaRegCompass /> West{" "}
                          </i>
                        </div>
                        <span id="residential">Residential</span>
                      </div>
                    </div>
                    <hr />
                    <div className="price">
                      <p>&#8377; 20,00,000</p>
                      <i id="phone">
                        <FaPhone />
                      </i>
                      <i id="whatsapp">
                        <FaWhatsapp />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cards">
                  <div className="card-container">
                    <div className="image">
                      <img
                        src={require("../images/property.png")}
                        alt="image1"
                      />
                      {/* <span>For Sale </span>
                      <span>
                        <FaHeart />
                      </span> */}
                    </div>
                    <div className="details">
                      <div>
                        <div className="title">
                          <p>2BHK RESIDENTIAL FLAT AVAILABLE</p>
                          <span>768</span>
                        </div>
                        <div className="locations">
                          <i class="bi-geo-alt-fill"> Devpuri</i>
                          <i>
                            <FaRegCompass /> West{" "}
                          </i>
                        </div>
                        <span id="residential">Residential</span>
                      </div>
                    </div>
                    <hr />
                    <div className="price">
                      <p>&#8377; 20,00,000</p>
                      <i id="phone">
                        <FaPhone />
                      </i>
                      <i id="whatsapp">
                        <FaWhatsapp />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cards">
                  <div className="card-container">
                    <div className="image">
                      <img
                        src={require("../images/property.png")}
                        alt="image1"
                      />
                      {/* <span>For Sale </span>
                      <span>
                        <FaHeart />
                      </span> */}
                    </div>
                    <div className="details">
                      <div>
                        <div className="title">
                          <p>2BHK RESIDENTIAL FLAT AVAILABLE</p>
                          <span>768</span>
                        </div>
                        <div className="locations">
                          <i class="bi-geo-alt-fill"> Devpuri</i>
                          <i>
                            <FaRegCompass /> West{" "}
                          </i>
                        </div>
                        <span id="residential">Residential</span>
                      </div>
                    </div>
                    <hr />
                    <div className="price">
                      <p>&#8377; 20,00,000</p>
                      <i id="phone">
                        <FaPhone />
                      </i>
                      <i id="whatsapp">
                        <FaWhatsapp />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="cards">
                  <div className="card-container">
                    <div className="image">
                      <img
                        src={require("../images/property.png")}
                        alt="image1"
                      />
                      {/* <span>For Sale </span>
                      <span>
                        <FaHeart />
                      </span> */}
                    </div>
                    <div className="details">
                      <div>
                        <div className="title">
                          <p>2BHK RESIDENTIAL FLAT AVAILABLE</p>
                          <span>768</span>
                        </div>
                        <div className="locations">
                          <i class="bi-geo-alt-fill"> Devpuri</i>
                          <i>
                            <FaRegCompass /> West{" "}
                          </i>
                        </div>
                        <span id="residential">Residential</span>
                      </div>
                    </div>
                    <hr />
                    <div className="price">
                      <p>&#8377; 20,00,000</p>
                      <i id="phone">
                        <FaPhone />
                      </i>
                      <i id="whatsapp">
                        <FaWhatsapp />
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------------Youtube Video---------------------------- */}
      <div></div>

      {/* ----------------------------Category---------------------------- */}
      <div className="category">
        <h1 id="head">Explore Category</h1>
        <div className="categories">
          <div className="category1" id="category1">
            <img src={require("../images/category/1.png")} alt="" />
            <h1>Residential</h1>
            <p>117 Properties</p>
          </div>
          <div className="category1" id="category2">
            <img src={require("../images/category/2.png")} alt="" />
            <h1>Comercial</h1>
            <p>11 Properties</p>
          </div>
          <div className="category1" id="category3">
            <img src={require("../images/category/3.png")} alt="" />
            <h1>Agricultural</h1>
            <p>01 Properties</p>
          </div>
          <div className="category1" id="category4">
            <img src={require("../images/category/4.png")} alt="" />
            <h1>Industrial</h1>
            <p>0 Properties</p>
          </div>
          <div className="category1" id="category5">
            <img src={require("../images/category/5.png")} alt="" />
            <h1>Semi-Commercial</h1>
            <p>0 Properties</p>
          </div>
          <div className="category1" id="category6">
            <h1>More Properties </h1>
            <p>Adding Soon </p>
          </div>
        </div>
      </div>
      {/* ---------------------------Contact us ----------------------- */}
      <div className="contactus">
        <img src={require("../images/contactus.png")} alt="" />
        <h1>Still Confuse To Find Properties ?</h1>
        <p>We'll help you to Find Best In Town.</p>
        <button id="button">Contact Us</button>
      </div>

      {/* ---------------------------Why Raipur Homes----------------------- */}
      <div className="whyhomes">
        <h1>Why Choose Raipur Homes ? </h1>
        <p id="para">Ek Prayas to Fullfill Your Dreams </p>
        <div className="boxes">
          <div className="box">
            <div className="desbox">
              <i className="bi-building"></i>
              <h2>Avoid Broker</h2>
              <p>
                No broker involvement by any kind of agent with us we will
                provide every possible lisiting with best deal.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="desbox">
              <i className="bi bi-bookmark-star"></i>
              <h2>Select Your Favourite</h2>
              <p>
                Shortlist your Favourite property we will give best deal on that
                property.
              </p>
            </div>
          </div>
          <div className="box">
            <div className="desbox">
              <i className="bi bi-file-earmark-text"></i>
              <h2>Free Documentation Process</h2>
              <p>
                No need to travel for processing documents and finalise your
                property because “Hum Hai Na !”
              </p>
            </div>
          </div>
          <div className="box">
            <div className="desbox">
              <i className="bi bi-person-plus"></i>
              <h2>Supprt Registry Process </h2>
              <p>
                We are supporting our clients booking process to registry
                process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default main;
