import React from "react";
import { HomepageHero } from "../components/Hero";
import aiki from "../images/aiki.png";
import success from "../images/success.png";
// import { InstructorCards } from "../components/Card";

const Homepage = () => {
  return (
    <div>
      <HomepageHero />
      <Homepagemain />
      <Testimonial />
    </div>
  );
};

let Homepagemain = () => {
  return (
    <div>
      <div className="text-center mt-5">
        <div className="card-body">
          <h5 className="card-title">Welcome to our Inn</h5>
          <p className="card-text">
            We are that digital inn where you get equipped and positioned to
            become financially independent. Innkeeper.work is an upskilling
            platform that allows for collaborative learning, leveraging
            self-paced and instructor-led approaches.
          </p>
          <a href="#" className="btn btn-primary">
            Learn More
          </a>
        </div>
      </div>
      <div className="text-center mt-5 bgSoft">
        <div className="card-body herotextWhite">
          <h6 className="card-title mt-5">
            Join our community to get certified for that professional role you
            desire.
          </h6>
          <p className="card-text">Take our free soft skill courses today!</p>
          <a href="#" className="btn btn-primary mb-5">
            Begin Courses
          </a>
        </div>
      </div>
      <div className="text-center mt-5 bgSoft">
        <div className="card-body herotextWhite">
          <h6 className="card-title mt-5">
            "My entire team was good to go at the end of the training! The soft
            skills available on innkeeper platform was used to train my team.
            This was needful because my teamrelates with people often. I
            witnessed some part of the role plays and it was impactful. Thanks
            to innkeeper.work”
          </h6>

          <img src={aiki} class="img-fluid rounded-start mt-4" alt="..." />

          <h6 className="card-title mt-3">Hafsatu Shinkafi</h6>
          <p className="card-text">CEO, AIKI Services</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

let Testimonial = () => {
  return (
    <div className="px-4 py-5 text-center testBg">
      <img
        className="d-block mx-auto mb-4"
        src="/docs/5.1/assets/brand/bootstrap-logo.svg"
        alt=""
      />
      <div className="h-50 w-50 mx-5" style={{ backgroundColor: "#ffffff" }}>
        {" "}
        <h1 className="display-5 fw-bold">Centered hero</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Quickly design and customize responsive mobile-first sites with
            Bootstrap, the world’s most popular front-end open source toolkit,
            featuring Sass variables and mixins, responsive grid system,
            extensive prebuilt components, and powerful JavaScript plugins.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
