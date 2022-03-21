
import React from 'react';
import img404 from '../images/404.png';
import { FacebookIcon } from '../components/Icons';
import { WhatsAppIcon } from '../components/Icons';
import { InstagramIcon } from '../components/Icons';
import { LinkedInIcon } from '../components/Icons';
import { Home } from '../components/Buttons';
import { ContactUs } from '../components/Buttons';

const Error404 = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-lg-6 col-sm-6 col-xs-12 g-4">
        <div className="card-body  col-md-6 col-lg-6 col-sm-6 col-xs-12 g-4 m-auto d-flex justify-content-center d-sm-none">
          <h5 className="herotextColored">
            <strong>UH OH! Page Not Found</strong>
          </h5>
        </div>
        <img className="card-img-top" src={img404} alt="error_page" />
      </div>

      <div className="card-body  container col-md-6 col-lg-6 col-sm-6 col-xs-12 g-2 m-auto p-4">
        <h5 className="herotextColored d-none d-sm-block">
          <strong>UH OH! Page Not Found</strong>
        </h5>
        <p className="pb-4 g-4 d-flex justify-content-center">
          The page you are looking for does not exist. Please click on the
          buttons below to either go back to the homepage or contact us
        </p>

        <div className="row d-flex justify-content-center g-4">
          <div className="btn d-flex justify-content-evenly g-4 p-auto">
            <Home />
            <ContactUs />
          </div>

          <div className="d-flex justify-content-evenly g-5 p-auto herotextColored m-4">
            <FacebookIcon />
            <InstagramIcon />
            <WhatsAppIcon />
            <LinkedInIcon />
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );

};

export default Error404;
