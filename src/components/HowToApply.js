import React from "react";
import { Link } from "react-router-dom";

let HowToApply = () => {
	return (
		<div className="card-body">
			<h3 className="card-title">How to Apply</h3>
			<ul className="list-content">
				<li className="list-item pb-2">
					Read about the course and indicate interest.
				</li>
				<li className="list-item pb-2">
					Select a payment/enrolment method to begin class.
				</li>
				{/* <li className="list-item pb-2">
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
        </li> */}
			</ul>
		</div>
	);
};

export default HowToApply;
