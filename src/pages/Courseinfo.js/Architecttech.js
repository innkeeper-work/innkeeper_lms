// External import
import React from "react";

// Components
import { CourseinfoHero } from "../../components/Hero";
// import { Link } from "react-router-dom";
// import adamu from "../../images/adamu.png";
import { ApplyNowButton } from "../../components/Buttons";
import { CourseCards } from "../../components/AllCards/InnkeeperPhaseOneCards";
import techacademy from "../../data/tech_academy_details/techacademy.json";
import { BookIcon } from "../../components/Icons";
import { AlarmIcon } from "../../components/Icons";
import { CreditCardIcon } from "../../components/Icons";
import CourseEnroll from "../../components/CourseEnroll";

// Images
import infobg from "../../assets/images/hero/infobg.png";

let ArchitecttechInfo = () => {
  return (
    <div>
      <CourseinfoHero coursename="Microsoft Azure Architect Technology" />
      <div className="row justify-content-center g-0">
        <div className="col-lg-7 col-md-6 col-sm-10">
          <AboutArchitecttech />
          <ArchitecttechApplyHere />
        </div>
        <div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
          <ArchitecttechReq />
          <CourseEnroll />
          {/* <ArchitecttechInstructor /> */}
        </div>
      </div>
      <ArchitecttechRelated />
    </div>
  );
};

let AboutArchitecttech = () => {
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
                  <p>300,000.00</p>
                </div>
              </div>
            </li>
            <li className="px-3">
              <ApplyNowButton />
            </li>
          </ul>
        </div>
      </div>
      <img src={infobg} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3 className="card-title">About Course</h3>
        <p className="card-text">
          This course teaches Solutions Architects how to translate business
          requirements into secure, scalable, and reliable solutions. Lessons
          include virtualization, automation, networking, storage, identity,
          security, data platform, and application infrastructure. This course
          outlines how decisions in each theses area affects an overall
          solution.
        </p>
      </div>
    </div>
  );
};

let ArchitecttechApplyHere = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">How to Apply</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Read about the course content and indicate interest.
        </li>
        <li className="list-item pb-2">Select a payment/enrolment method.</li>
        <li className="list-item pb-2">
          Except you pay the stipulated amount, every other course enrolment
          method will require the admin to permit you to class.
        </li>

        <li className="list-item pb-2">
          Go to your e-mail and complete registration via the link that will be
          sent to you.
        </li>
        <li className="list-item pb-2">
          Then from your dashboard, click all courses to display the list of
          courses available according to academy, then request for your desired
          course.
        </li>
      </ul>
    </div>
  );
};

let ArchitecttechReq = () => {
  return (
    <div className="card-body">
      <h3 className="card-title">Requirements</h3>
      <ul className="list-content">
        <li className="list-item pb-2">
          Understanding of on-premises virtualization technologies, including
          VMs and virtual networking.
        </li>
        <li className="list-item pb-2">
          Understanding of network configuration, including TCP/IP, Domain Name
          System (DNS), virtual private networks (VPNs), firewalls, and
          encryption technologies.
        </li>
        <li className="list-item pb-2">
          Understanding of Active Directory concepts, including domains,
          forests, and domain controllers.
        </li>
      </ul>
    </div>
  );
};

// let CourseEnroll = () => {
// 	return (
// 		<div className="card-body">
// 			<h3 className="card-title">Available Enrolment Options</h3>
// 			<ul className="list-content">
// 				<li className="list-item pb-2">
// 					Click to{" "}
// 					<a
// 						className="text-decoration-none"
// 						href="https://soft.innkeeper.work/enrol/index.php?id=3"
// 						target="_blank"
// 						rel="noreferrer">
// 						<b>Pay Now</b>
// 					</a>
// 				</li>
// 				<li className="list-item pb-2">
// 					Click to{" "}
// 					<Link to="" className="text-decoration-none">
// 						<b>Installmental Payment</b>
// 					</Link>
// 				</li>
// 				<p className="">NB: Payment in instalment is accepted (T and C Apply)</p>
// 				<li className="list-item pb-2">
// 					Apply for Student loan{" "}
// 					<Link to="" className="text-decoration-none">
// 						<b>HERE</b>
// 					</Link>
// 				</li>
// 				<li className="list-item pb-2">
// 					Apply via our training bond{" "}
// 					<Link to="" className="text-decoration-none">
// 						<b>HERE</b>
// 					</Link>
// 				</li>
// 				<li className="list-item pb-2">Apply for scholarship.</li>
// 				<p className="">
// 					(See available ones{" "}
// 					<Link to="" className="text-decoration-none">
// 						<b>HERE</b>
// 					</Link>
// 					)
// 				</p>
// 			</ul>
// 		</div>
// 	);
// };

// let ArchitecttechInstructor = () => {
//   return (
//     <div className="mb-3">
//       <div className="instructor_card d-flex align-items-md-center">
//         <div>
//           <img
//             src={adamu}
//             alt=""
//             width="100px"
//             height="100px"
//             className="rounded-circle"
//           />
//         </div>

//         <div className="ms-3">
//           <h5>About Instructor</h5>
//           <p>AbdulRahman Adamu</p>
//           <p>Frontend Developer</p>
//         </div>

//       </div>
//     </div>
//   );
// };

let ArchitecttechRelated = () => {
  return (
    <div className="webDev mx-5 px-5 my-5 pb-5">
      <h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
      <div className="row">
        {techacademy.cloudcomputing3.map((singlebig) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12" key={singlebig.id}>
              <CourseCards {...singlebig}></CourseCards>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArchitecttechInfo;
