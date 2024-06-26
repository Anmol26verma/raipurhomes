import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaPhone, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const footer = () => {
  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col className="col1">
              <div>
                <img
                  src={require("../images/logo.png")}
                  alt="Raipur Homes"
                  style={{ width: "150px" }}
                />
              </div>
              <p className="des">
                We're not just in the business of buying and selling properties.
                We're in the business of making dreams come true. We believe
                that a home is not just a place it's an emotion, a sanctuary,
                and the foundation of countless memories waiting to be created.
              </p>
              <p>
                <FaPhone /> +91 9844444497
              </p>
              <p>
                <FaPhone /> +91 9099999943
              </p>
              <p>
                <FaPhone /> +91 9099999934
              </p>
            </Col>
            <Col className="quicklink">
              <div>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div>
                <h5>Quick Links</h5>
                <ul className="list-unstyled">
                  <li>
                    <a href="#">Property Dealing</a>
                  </li>
                  <li>
                    <a href="#">Property Valuation</a>
                  </li>
                  <li>
                    <a href="#">Legal Documents Process</a>
                  </li>
                  <li>
                    <a href="#">Doorstep Verification</a>
                  </li>
                  <li>
                    <a href="#">Consultation Services</a>
                  </li>
                  <li>
                    <a href="#">Finance Support</a>
                  </li>
                </ul>
              </div>
            </Col>
            <Col className="col2">
              <h5>Contact Us</h5>
              <p>Unit No. 4052, 4th Floor, Currency Tower, Raipur C.G.</p>
              <div className="social-icons">
                <a href="#" >
                  <FaInstagram />
                </a>
                <a href="#" >
                  <FaFacebook />
                </a>
                <a href="#">
                  <FaYoutube />
                </a>
              </div>
              <div className="playstore">
                <img
                  src={require("../images/playstore.png")}
                  alt="Google Play"
                />
              </div>
              <div>
              <p className="des-2">
                Usage of Raipurhomes.com to upload content showing area in
                non-standard units or which enables targeting by
                religion/community/caste/race is prohibited. Please report
                inappropriate content by writing to us at report abuse.
              </p>
              <p className="des-3">
                All trademarks are the property of their respective owners. All
                rights reserved
              </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default footer;
