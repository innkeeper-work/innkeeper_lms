// External import
import React from "react";
import { Link } from "react-router-dom";

export const SignInButton = () => {
  return (
    <a href="https://soft.innkeeper.work/login/index.php" rel="noreferrer">
      <button type="button" className="btn signinbtnapply">
        Sign In
      </button>
    </a>
  );
};
export const SignUpButton = () => {
  return (
    <a href="https://soft.innkeeper.work/login/index.php" rel="noreferrer">
      <button type="button" className="btn signupbtnapply">
        Sign Up
      </button>
    </a>
  );
};

export const GetStartedButton = () => {
  return (
    <a href="#categories">
      <button type="button" className="btn callToAction">
        Get Started
      </button>
    </a>
  );
};
export const GetStartedLoan = () => {
  return (
    <a href="https://edubanc.ng/" target="_blank" rel="noopener noreferrer">
      <button type="button" className="btn callToAction">
        Get Started
      </button>
    </a>
  );
};
export const GetStartedBond = () => {
  return (
    <a href="#loanform">
      <button type="button" className="btn callToAction">
        Request for bond
      </button>
    </a>
  );
};
export const LearnMoreButton = () => {
  return (
    <button type="button" className="btn callToAction">
      Learn More
    </button>
  );
};
export const BeginCoursesButton = () => {
  return (
    <button type="button" className="btn callToAction">
      Begin Courses
    </button>
  );
};
export const ForwardButton = () => {
  return (
    <button type="button" className="btn callToAction">
      Forward
    </button>
  );
};
export const ApplyNowButton = () => {
  return (
    <button type="button" className="btn signinbtnapply">
      Apply Now
    </button>
  );
};
// export const ApplyButton = () => {
// 	return (
// 		<a href="http://" target="_blank" rel="noreferrer">
// 			<button type="button" className="btn signinbtnapply">
// 				Apply Now
// 			</button>
// 		</a>
// 	);
// };
export const SubscribeButton = () => {
  return (
    <button type="button" className="btn callToAction mt-3">
      Subscribe
    </button>
  );
};
export const SendButton = () => {
  return (
    <button type="submit" className="btn signinbtnapply px-5">
      Send
    </button>
  );
};
export const Home = () => {
  return (
    <Link to="/">
      <button type="button" className="btn callToAction px-4 me-2">
        <strong>Home</strong>
      </button>
    </Link>
  );
};

export const ContactUs = () => {
  return (
    <Link to="contact">
      <button type="button" className="btn callToAction px-2 ms-2">
        <strong>Contact&nbsp;Us</strong>
      </button>
    </Link>
  );
};
export const Submit = () => {
  return (
    <Link to="">
      <button type="button" className="btn callToAction px-2 ms-2">
        <strong>Submit</strong>
      </button>
    </Link>
  );
};
export const ApplyforjobButton = () => {
  return (
    <Link to="">
      <button type="button" className="btn callToAction px-2 ">
        Apply for job
      </button>
    </Link>
  );
};

export const UpskillButton = () => {
  return (
    <a href="/#categories">
      <button type="button" className="btn callToAction">
        Upskill
      </button>
    </a>
  );
};
export const HireTalentButton = () => {
  return (
    <a href="#">
      <button type="button" className="btn callToAction2">
        Hire a Talent
      </button>
    </a>
  );
};
export const RateCVButton = () => {
  return (
    <a href="#categories">
      <button type="button" className="btn callToAction">
        Rate CV
      </button>
    </a>
  );
};
export const ReviewCVButton = () => {
  return (
    <a href="#">
      <button type="button" className="btn callToAction2">
        Review CV
      </button>
    </a>
  );
};
export const ViewOpeningsButton = () => {
  return (
    <a href="/vacancy">
      <button type="button" className="btn callToAction">
        View Openings
      </button>
    </a>
  );
};
export const VacancyApplyButton = () => {
  return (
    <a href="#">
      <button type="button" className="btn callToAction">
        Apply Now
      </button>
    </a>
  );
};
