import React from 'react';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
import innkeeperlogo from '../images/innkeeperlogo.png';
import {
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
  LinkedInIcon,
} from '../components/Icons';

const Footer = () => {
  return (
    <>
      <footer className=" bgSoft ">
        <div className="container-fluid  justify-content-evenly p-4">
          <div className="row herotextWhite d-flex justify-content-evenly mt-5">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto">
              <img src={innkeeperlogo} alt="Innkeeper.work" />

              <p>
                The 8thGear Hub, 11b Colin Onabule Crescent, Diamond Estate Off
                CMD Road (beside Secretariat/Magodo gate) Lagos Nigeria. +234
                (0) 809-846-8885 info@innkeeper.work
              </p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block ms-3 ps-5 gs-5">
              <h5 className="text-uppercase fw-bold mb-4">Menu</h5>
              <p>Home</p>
              <p>About Us</p>
              <p>Events</p>
              <p>Contact</p>
              <p>FAQ</p>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4 d-none d-md-block ms-5 gs-5">
              <h5 className="text-uppercase fw-bold mb-4">Courses</h5>
              <p>Business Support Academy</p>
              <p>Tech Academy</p>
              <p>Employability / Soft&nbsp;Skills</p>
              <p>Entrepreneurship</p>
            </div>

<<<<<<< Updated upstream
            <div className=" col-md-2 col-lg-2 col-xl-2 mx-auto gs-5 mx-auto mb-md-0 mb-4 sm-3">
              <div className="btnText d-flex justify-content-evenly d-md-block">
=======
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto gs-5 mx-auto mb-md-0 mb-4 sm-3">
              <div className="d-flex justify-content-evenly d-md-block">
>>>>>>> Stashed changes
                <div className="btnText d-flex justify-content-end px-4 pb-3">
                  <FacebookIcon />
                  <p className="d-none d-md-block ms-3">Facebook</p>
                </div>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
                <div className="btnText d-flex justify-content-end px-4 pb-3">
                  <WhatsAppIcon />
                  <p className="d-none d-md-block ms-3">WhatsApp</p>
                </div>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
                <div className="btnText d-flex justify-content-end px-4 pb-3">
                  <InstagramIcon />
                  <p className="d-none d-md-block ms-3">Instagram</p>
                </div>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
                <div className="btnText d-flex justify-content-end px-4 pb-3">
                  <LinkedInIcon />
                  <p className="d-none d-md-block ms-3 me-3">Linkedin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

<<<<<<< Updated upstream
export default Footer;
=======
export default Footer;
>>>>>>> Stashed changes
