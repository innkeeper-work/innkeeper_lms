import React from "react";
import infoimage from "../../images/infoimage.png";
import { BookIcon, AlarmIcon, CreditCardIcon } from "../../components/Icons";
import { Link } from "react-router-dom";
import { CourseinfoHero } from "../../components/Hero";
import adamu from "../../images/adamu.png";
import { ApplyNowButton } from "../../components/Buttons";
import { CourseCards } from "../../components/Card";
import techacademy from "../../data/tech_academy_details/techacademy.json";

let FullstackInfo = () => {
	return (
		<div>
			<CourseinfoHero coursename="Fullstack Development" />
			<div className="row justify-content-center">
				<div className="col-lg-7 col-md-6 col-sm-10">
					<AboutFullstack />
					<FullstackApplyHere />
				</div>
				<div className="col-lg-4 col-md-5 col-sm-10 sectiontwoBg mt-5 h-100">
					<FullstackReq />
					<FullstackEnrol />
					<FullstackInstructor />
				</div>
			</div>
			<FullstackRelated />
		</div>
	);
};

let AboutFullstack = () => {
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
									<p>08 Weeks</p>
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
									<p>70 Hours</p>
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
			<img src={infoimage} className="card-img-top" alt="..." />
			<div className="card-body">
				<h3 className="card-title">About Course</h3>
				<p className="card-text">
					This is a hybrid learning that blends self-paced and instructor-led
					learning for 8 weeks. The training takes place for a period of 6 weeks
					and a 2 weeks practical with live projects. Areas to be covered
					include both frontend and backend. Applicants are encouraged to pay in
					instalments if full payment cannot be made. Instructors are seasoned
					industry-based and can be reached for post-class activities.
				</p>
			</div>
		</div>
	);
};

let FullstackApplyHere = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">How to Apply</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Read about the course content and indicate interest.
				</li>
				<li className="list-item pb-2">
					Select a payment/enrolment method HERE.
				</li>
				<li className="list-item pb-2">
					Except you pay the stipulated amount, every other course enrolment
					method will require the admin to permit you to class.
				</li>
				<li className="list-item pb-2">
					Alternatively, you can sign up to begin class HERE.
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

let FullstackReq = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">Requirements</h3>
			<ul className="list-content">
				<li className="list-item pb-2">Good and functioning Laptop.</li>
				<li className="list-item pb-2">Reliable Internet connection.</li>
				<li className="list-item pb-2">Ability to operate a computer.</li>
				<li className="list-item pb-2">Google/Yahoo account.</li>
				<li className="list-item pb-2">Domain name and hosting server</li>
				<li className="list-item pb-2">
					Code editor software (e.g. notepad++, visual studio code, sublime text
					etc)
				</li>
				<li className="list-item pb-2">Flash drive or external hard drive.</li>
				<li className="list-item pb-2">
					Basic knowledge of computer's software applications is useful.
				</li>
			</ul>
		</div>
	);
};

let FullstackEnrol = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">Available Enrolment Options</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Click to{" "}
					<Link to="" className="text-decoration-none">
						<b>Pay Now</b>
					</Link>
				</li>
				<p className="">NB: Instalmental payment is accepted (T and C Apply)</p>
				<li className="list-item pb-2">
					Apply for Student loan{" "}
					<Link to="" className="text-decoration-none">
						<b>HERE</b>
					</Link>
				</li>
				<li className="list-item pb-2">
					Apply via our training bond{" "}
					<Link to="" className="text-decoration-none">
						<b>HERE</b>
					</Link>
				</li>
				<li className="list-item pb-2">Apply for scholarship.</li>
				<p className="">
					(See available ones{" "}
					<Link to="" className="text-decoration-none">
						<b>HERE</b>
					</Link>
					)
				</p>
			</ul>
		</div>
	);
};

let FullstackInstructor = () => {
	return (
		<div className="mb-3">
			<div className="instructor_card d-flex align-items-md-center">
				<div>
					<img
						src={adamu}
						alt=""
						width="100px"
						height="100px"
						className="rounded-circle"
					/>
				</div>

				<div className="ms-3">
					<h5>About Instructor</h5>
					<p>AbdulRahman Adamu</p>
					<p>Frontend Developer</p>
				</div>
				{/* <Link to=""></Link> */}
			</div>
		</div>
	);
};

let FullstackRelated = () => {
	return (
		<div className="webDev mx-5 px-5 my-5 pb-5">
			<h3 className="techHead px-5 my-5 pt-5">Related Courses</h3>
			<div className="row">
				{techacademy.bigdata.map((singlebig) => {
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
export default FullstackInfo;
