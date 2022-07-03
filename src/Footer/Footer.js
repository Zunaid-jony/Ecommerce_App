import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-a" mb-1 style={{ marginBottom:'1%'}}>
      <div
        className="bg-dark text-white pt-5 pb-4  "
        style={{ backgroundColor: "rgb(29, 27, 24)" }}
      >
        <div
          className="container text-center text-md-left"
          style={{ textAlign: "left" }}
        >
          <div className="row text-center text-md-left">
            <div className="col-md-3 clo-lg-3 col-xl-3 mx-auto  mt-3 align-itmes-left texts">
              <h5 className="text-uppercase mb-4 font-weight-bold text-light ">
                {" "}
                Company name
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry{" "}
              </p>
              <p>
                Lorem Ipsum is simply dummy Lorem Ipsum has been the industry{" "}
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 texts">
              <h5 className="text-uppercase mb-4 font-weight-bold text-light">
                {" "}
                CONTACT US
              </h5>
              <p> 1244, Parkstreet Avenue, NewYork </p>
              <p> +123 34343433, +454545 455 </p>
              <p> info@feri.com, e-feri@gmail.com</p>
              <p> info.e-feri.com.www.infoferi.com </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 texts ">
              <h5 className="text-uppercase mb-4 font-weight-bold text-light ">
                MY ACCOUNT
              </h5>
              <p>MY Account</p>
              <p> Wishist</p>
              <p> Shopping Cart</p>
              <p> Copare</p>
            </div>

            <div className="col-md-2 col-lg-3 col-xl-3 mx-auto mt-3 texts">
              <h5 className="text-uppercase mb-4 font-weight-bold text-light">
                {" "}
                SIGN UP FOR NEWSLETTER
              </h5>
              <p> standard </p>
              <h6> FOLLOW US ON</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
