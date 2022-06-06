// Externam import
import React from "react";

// Images
import netacad from "../assets/images/partnerLogos/netacad.png";
import vmware from "../assets/images/partnerLogos/vmware.png";
import eightgear from "../assets/images/partnerLogos/eightgear.png";
import microsoft from "../assets/images/partnerLogos/microsoft.png";

export let OurPartners = () => {
  return (
    <div className="container partnersBg">
      <div className="row my-3 d-flex justify-content-around align-items-center">
        {/* <div className="col-4">
          <h1>Our Partners</h1>
        </div> */}

        {/* <div className="col-8"> */}
        <img
          src={netacad}
          alt="netacad logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={vmware}
          alt="vmware logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={eightgear}
          alt="8thGear logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
        {/* <div> */}
        <img
          src={microsoft}
          alt="microsoft logo"
          className="partners"
          // style={{ width: "25%", height: "30%" }}
        />
        {/* </div> */}
      </div>
    </div>
  );
};
