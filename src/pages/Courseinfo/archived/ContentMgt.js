// import React from "react";
// import infoimage from "../../../images/infoimage.png";
// import techacademy from "../../../data/tech_academy_details/techacademy.json";
// import CourseEnroll from "../../../components/CourseEnroll";
// import HowToApply from "../../../components/HowToApply";
// import { Link } from "react-router-dom";
// import { BookIcon, AlarmIcon, CreditCardIcon } from "../../../components/Icons";
// import { CourseinfoHero } from "../../../components/Hero";
// import { ApplyNowButton } from "../../../components/Buttons";
// import { CourseCards } from "../../../components/AllCards/InnkeeperPhaseOneCards";

// let ContentMgt = () => {
// 	return (
// 		<div>
// 			<CourseinfoHero coursename="Content Management" />
// 			<div className="row justify-content-center g-0">
// 				<div className="col-lg-7 col-md-6 col-sm-10">
// 					<AboutContentMgt />
// 					<HowToApply />
// 				</div>
// 				<div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
// 					{/* <ContentMgtReq /> */}
// 					<CourseEnroll />
// 					{/* <ContentMgtInstructor /> */}
// 				</div>
// 			</div>
// 			<ContentMgtRelated />
// 		</div>
// 	);
// };

// let AboutContentMgt = () => {
// 	return (
// 		<div className="">
// 			<div className="navbar-expand-lg">
// 				<div className="mt-5">
// 					<ul className="navbar-nav ">
// 						<li className="">
// 							<div className="d-flex px-3">
// 								<div className="px-2">
// 									<BookIcon />
// 								</div>

// 								<div>
// 									<h3>COURSES</h3>
// 									<p>04 Weeks</p>
// 								</div>
// 							</div>
// 						</li>
// 						<li className="">
// 							<div className="d-flex px-3">
// 								<div className="px-2">
// 									<AlarmIcon />
// 								</div>

// 								<div>
// 									<h3>DURATION</h3>
// 									<p>80 Hours</p>
// 								</div>
// 							</div>
// 						</li>
// 						<li className="">
// 							<div className="d-flex px-3">
// 								<div className="px-2">
// 									<CreditCardIcon />
// 								</div>
// 								<div>
// 									<h3>FEE</h3>
// 									<p>100,000.00</p>
// 								</div>
// 							</div>
// 						</li>
// 						<li className="px-3">
// 							<ApplyNowButton />
// 						</li>
// 					</ul>
// 				</div>
// 			</div>
// 			<img src={infoimage} className="card-img-top" alt="..." />
// 			<div className="card-body">
// 				<h3 className="card-title">About Course</h3>
// 				<p className="card-text">
// 					This is a 4-week hybrid course that combines self-paced and
// 					instructor-led learning. Video editing, copywriting, still and motion
// 					graphics are some of the topics to be covered. Applicants are
// 					encouraged to pay in installments if full payment cannot be made.
// 					Instructors are seasoned industry-based and can be reached for
// 					post-class activities.
// 				</p>
// 			</div>
// 		</div>
// 	);
// };

// // let CourseEnroll = () => {
// // 	return (
// // 		<div className="card-body">
// // 			<h3 className="card-title">Available Enrolment Options</h3>
// // 			<ul className="list-content">
// // 				<li className="list-item pb-2">
// // 					Click to{" "}
// // 					<a
// // 						className="text-decoration-none"
// // 						href="https://soft.innkeeper.work/enrol/index.php?id=3"
// // 						target="_blank"
// // 						rel="noreferrer">
// // 						<b>Pay Now</b>
// // 					</a>
// // 				</li>
// // 				<li className="list-item pb-2">
// // 					Click to{" "}
// // 					<Link to="" className="text-decoration-none">
// // 						<b>Installmental Payment</b>
// // 					</Link>
// // 				</li>
// // 				<p className="">NB: Payment in instalment is accepted (T and C Apply)</p>
// // 				<li className="list-item pb-2">
// // 					Apply for Student loan{" "}
// // 					<Link to="" className="text-decoration-none">
// // 						<b>HERE</b>
// // 					</Link>
// // 				</li>
// // 				<li className="list-item pb-2">
// // 					Apply via our training bond{" "}
// // 					<Link to="" className="text-decoration-none">
// // 						<b>HERE</b>
// // 					</Link>
// // 				</li>
// // 				<li className="list-item pb-2">Apply for scholarship.</li>
// // 				<p className="">
// // 					(See available ones{" "}
// // 					<Link to="" className="text-decoration-none">
// // 						<b>HERE</b>
// // 					</Link>
// // 					)
// // 				</p>
// // 			</ul>
// // 		</div>
// // 	);
// // };

// // let ContentMgtReq = () => {
// //   return (
// //     <div className="card-body">
// //       <h3 className="card-title">Requirement</h3>
// //       <ul className="list-content">
// //         <li className="list-item pb-2">
// //           Basic TCP/IP networking including cabling, and connecting and
// //           configuring devices in a LAN and to the Internet.
// //         </li>
// //         <li className="list-item pb-2">
// //           Familiarity with Cisco Packet Tracer.
// //         </li>
// //         <li className="list-item pb-2">
// //           Experience using any programming language to solve basic algorithmic
// //           problems.
// //         </li>
// //         <li className="list-item pb-2">
// //           Foundational knowledge of physics including current, voltage,
// //           resistance, and power.
// //         </li>
// //       </ul>
// //     </div>
// //   );
// // };

// // let ContentMgtInstructor = () => {
// //   return (
// //     <div className="mb-3">
// //       <div className="instructor_card d-flex align-items-md-center">
// //         <div>
// //           <img
// //             src={adamu}
// //             alt=""
// //             width="100px"
// //             height="100px"
// //             className="rounded-circle"
// //           />
// //         </div>

// //         <div className="ms-3">
// //           <h5>About Instructor</h5>
// //           <p>AbdulRahman Adamu</p>
// //           <p>Frontend Developer</p>
// //         </div>
// //         {/* <Link to=""></Link> */}
// //       </div>
// //     </div>
// //   );
// // };

// let ContentMgtRelated = () => {
// 	return (
// 		<div className="webDev mx-5 px-5 my-5 pb-5">
// 			<h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
// 			<div className="row">
// 				{techacademy.bigdata.map((singlebig) => {
// 					return (
// 						<div className="col-lg-4 col-md-6 col-sm-12" key={singlebig.id}>
// 							<CourseCards {...singlebig}></CourseCards>
// 						</div>
// 					);
// 				})}
// 			</div>
// 		</div>
// 	);
// };
// export default ContentMgt;
