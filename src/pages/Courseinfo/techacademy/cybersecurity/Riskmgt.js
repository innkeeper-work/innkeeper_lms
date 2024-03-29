import React from "react";
import infoimage from "../../../../assets/images/techacademy/cybersecurity/cybersecurityhero.png";
import techacademy from "../../../../data/tech_academy_details/techacademy.json";
import HowToApply from "../../../../components/HowToApply";
import { PaymentOptions } from "../../../../components/CourseEnroll";
import {
  BookIcon,
  AlarmIcon,
  CreditCardIcon,
} from "../../../../components/Icons";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../../../components/Hero";
import { ApplyNowButton } from "../../../../components/Buttons/InnkeeperPhaseOneButtons";
import { CourseCards } from "../../../../components/AllCards/InnkeeperPhaseOneCards";

let RiskmgtInfo = () => {
  return (
    <div>
      <CourseinfoHero coursename="Risk Management" />
      <div className="row justify-content-center g-0">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <AboutRiskmgt />
          <HowToApply />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
          <RiskmgtReq />
          <CourseEnroll />
          {/* <RiskmgtInstructor /> */}
        </div>
      </div>
      <RiskmgtRelated />
    </div>
  );
};

let AboutRiskmgt = () => {
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
          This course will introduce you into the cybersecurity and Information
          technology/security world of managing risks of projects and tasks to
          be executed. Terms used by executives in discussing and applying risk
          management. The concept will be applied to networks, systems and
          projects. The mindset used by executives and managers in risk
          management will be adopted as well as mastering the concept to be
          applied in real world scenarios. Identifying, accessing and
          articulating risks will be covered during the course as well as
          techniques to aid in successfully implementing a risk management
          framework within an organization.
        </p>
      </div>
    </div>
  );
};

let RiskmgtReq = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Requirements</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Working with, maintaining, and developing with SQL Server.
        </li>
        <li className="list-item pb-2">
          Experience with Azure, such as deploying and managing resources.
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
            href="https://paystack.com/pay/innkeeper-cybersecurity-risk-management"
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>Pay Now</b>
          </a>
        </li>
        <li className="list-item pb-2">
          Click to{" "}
          <a
            href="https://paystack.com/pay/innkeeper-cybersecurity-part-payment"
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

let RiskmgtRelated = () => {
  return (
    <div className="webDev mx-5 px-5 my-5 pb-5">
      <h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
      <div className="row">
        {techacademy.cybersecurity.map((singlecloud) => {
          if (singlecloud.id !== 1) {
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
export default RiskmgtInfo;
