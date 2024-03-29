import React from "react";
import infoimage from "../../../../assets/images/techacademy/dataanalysis/dataanalysis.png";
import techacademy from "../../../../data/tech_academy_details/techacademy.json";
import { PaymentOptions } from "../../../../components/CourseEnroll";
import HowToApply from "../../../../components/HowToApply";
import {
  BookIcon,
  AlarmIcon,
  CreditCardIcon,
} from "../../../../components/Icons";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../../../components/Hero";
import { ApplyNowButton } from "../../../../components/Buttons/InnkeeperPhaseOneButtons";
import { CourseCards } from "../../../../components/AllCards/InnkeeperPhaseOneCards";

let IotInfo = () => {
  return (
    <div>
      <CourseinfoHero coursename="IoT Fundamentals" />
      <div className="row justify-content-center g-0">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <AboutIot />
          <HowToApply />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
          <IotReq />
          <CourseEnroll />
          {/* <IotInstructor /> */}
        </div>
      </div>
      <IotRelated />
    </div>
  );
};

let AboutIot = () => {
  return (
    <div className="">
      <div className="navbar-expand-lg">
        <div className="mt-5">
          <ul className="navbar-nav ">
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <BookIcon />
                </div>

                <div>
                  <h3>COURSES</h3>
                  <p>04 Weeks</p>
                </div>
              </div>
            </li>
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <AlarmIcon />
                </div>

                <div>
                  <h3>DURATION</h3>
                  <p>50 Hours</p>
                </div>
              </div>
            </li>
            <li className="">
              <div className="d-flex px-3">
                <div className="px-2">
                  <CreditCardIcon />
                </div>
                <div>
                  <h3>FEE</h3>
                  <p>150,000.00</p>
                </div>
              </div>
            </li>
            <li className="px-3">
              <ApplyNowButton />
            </li>
          </ul>
        </div>
      </div>
      <img src={infoimage} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">About Course</h3>
        <p className="card-text">
          Innkeeper.work in partnership with Cisco Networking Academy's IoT
          Fundamentals curriculum provides students with a comprehensive
          understanding of the Internet of Things (IoT). It develops
          foundational skills using hands-on lab activities that stimulate the
          students in applying creative problem-solving and rapid prototyping in
          the interdisciplinary domain of electronics, networking, security,
          data analytics, and business. The student- centric approach translates
          into the student being able to ideate, design, prototype and present
          an IoT solution for an identified business or society need.
        </p>
      </div>
    </div>
  );
};

let IotReq = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Requirement</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Basic TCP/IP networking including cabling, and connecting and
          configuring devices in a LAN and to the Internet.
        </li>
        <li className="list-item pb-2">
          Familiarity with Cisco Packet Tracer.
        </li>
        <li className="list-item pb-2">
          Experience using any programming language to solve basic algorithmic
          problems.
        </li>
        <li className="list-item pb-2">
          Foundational knowledge of physics including current, voltage,
          resistance, and power.
        </li>
      </ul>
    </div>
  );
};

let CourseEnroll = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Available Enrolment Options</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Click to{" "}
          <a
            className="text-decoration-none"
            href="https://paystack.com/pay/innkeeper-data-fundamentals"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Pay Now</b>
          </a>
        </li>
        <li className="list-item pb-2">
          Click to{" "}
          <a
            href="https://paystack.com/pay/innkeeper-data-science-part-payment"
            className="text-decoration-none"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Pay Installmentally</b>
          </a>
        </li>
      </ul>
      <PaymentOptions />
    </div>
  );
};

let IotRelated = () => {
  return (
    <div className="webDev mx-5 px-5 my-5 pb-5">
      <h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
      <div className="row">
        {techacademy.bigdata.map((singlecloud) => {
          if (singlecloud.id !== 3) {
            return (
              <div
                className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch"
                key={singlecloud.id}
              >
                <CourseCards {...singlecloud}></CourseCards>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};
export default IotInfo;
