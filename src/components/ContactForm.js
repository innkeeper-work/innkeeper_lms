// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// function ContactForm() {
// 	const [state, handleSubmit] = useForm("myyodwgk");
// 	if (state.succeeded) {
// 		return <p>Thanks for contacting us</p>;
// 	}
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			{/* <label htmlFor="fullname">Fullname</label>
// 			<input id="fullname" type="text" name="fullname" /> */}
// 			<label htmlFor="email">Email Address</label>
// 			<input id="email" type="email" name="email" />
// 			<ValidationError prefix="Email" field="email" errors={state.errors} />
// 			<textarea id="message" name="message" />
// 			<ValidationError prefix="Message" field="message" errors={state.errors} />
// 			<button type="submit" disabled={state.submitting}>
// 				Submit
// 			</button>
// 		</form>
// 	);
// }
// export default ContactForm;

import React from "react";
function ContactForm() {
	// const [state, handleSubmit] = useForm("myyodwgk");
	// if (state.succeeded) {
	// 	return <p>Thanks for contacting us</p>;
	// }
	return (
		<form action="https://formspree.io/f/myyodwgk" method="POST">
			<label>
				Your email:
				<input type="email" name="email" />
			</label>
			<label>
				Your message:
				<textarea name="message"></textarea>
			</label>

			<button type="submit">Send</button>
		</form>
	);
}
export default ContactForm;
