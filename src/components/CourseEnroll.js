import React from "react";
import { Link } from "react-router-dom";

// let CourseEnroll = () => {
// 	return (
// 		<div className="card-body">
// 			<h3 className="card-title">Available Enrolment Options</h3>
// 			<ul className="list-content">
// 				<li className="list-item pb-2">
// 					Click to{" "}
// 					<a href="" className="text-decoration-none">
// 						<b>Pay Now</b>
// 					</a>
// 				</li>
// 				<li className="list-item pb-2">
// 					Click to{" "}
// 					<Link to="" className="text-decoration-none">
// 						<b>Make Part Payment</b>
// 					</Link>
// 				</li>
// 				<p className="">
// 					NB: Payment in instalment is accepted (T and C Apply)
// 				</p>
// 				<li className="list-item pb-2">
// 					Apply for Student loan{" "}
// 					<Link to="/studentloan" className="text-decoration-none">
// 						<b>HERE</b>
// 					</Link>
// 				</li>
// 				<li className="list-item pb-2">
// 					Apply via our training bond{" "}
// 					<Link to="/trainingbond" className="text-decoration-none">
// 						<b>HERE</b>
// 					</Link>
// 				</li>
// 				<li className="list-item pb-2">Apply for scholarship.</li>
// 				<p className="">
// 					(See available ones{" "}
// 					<Link to="/scholarships" className="text-decoration-none">
// 						<b>HERE</b>
// 					</Link>
// 					)
// 				</p>
// 			</ul>
// 		</div>
// 	);
export const PaymentOptions = () => {
	return (
		<ul className="list-content">
			<p className="">NB: Payment in instalment is accepted (T and C Apply)</p>
			<li className="list-item pb-2">
				Apply for Student loan{" "}
				<Link to="/studentloan" className="text-decoration-none">
					<b>HERE</b>
				</Link>
			</li>
			<li className="list-item pb-2">
				Apply via our training bond{" "}
				<Link to="/trainingbond" className="text-decoration-none">
					<b>HERE</b>
				</Link>
			</li>
			<li className="list-item pb-2">Apply for scholarship.</li>
			<p className="">
				(See available ones{" "}
				<Link to="/scholarships" className="text-decoration-none">
					<b>HERE</b>
				</Link>
				)
			</p>
		</ul>
	);
};

// export default CourseEnroll;
// export default {PaymentOptions};
