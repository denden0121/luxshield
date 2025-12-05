import React from "react";

const Footer = () => {
	return (
		<div className="w-full h-dvh bg-(--bg-primary) flex flex-col justify-end items-end ">
			<div className="w-full h-1/2 bg-(--bg-dark)  border-green-600 flex flex-row p-9 justify-between items-center">
				<div className="h-4/5  border-green-600 w-1/4 flex flex-col justify-start items-start gap-3.5 [&_p]:text-(--text-tertiary) [&_p]:hover:text-(--brand-color) [&_p]:cursor-pointer *:duration-300 ">
					<h4 className="text-(--text-primary) text-lg font-medium">
						Comapany
					</h4>
					<p>About us</p>
					<p>Why Choose use</p>
					<p>Pricing</p>
					<p>Testimonial</p>
				</div>
				<div className="h-4/5  border-green-600 w-1/4 flex flex-col justify-start items-start gap-3.5 [&_p]:text-(--text-tertiary) [&_p]:hover:text-(--brand-color) [&_p]:cursor-pointer *:duration-300 ">
					<h4 className="text-(--text-primary) text-lg font-medium">
						Resources
					</h4>
					<p>Privacy Policy</p>
					<p>Terms and Condition</p>
					<p>Blog</p>
					<p>Contact Us</p>
				</div>
				<div className="h-4/5  border-green-600 w-1/4 flex flex-col justify-start items-start gap-3.5 [&_p]:text-(--text-tertiary) [&_p]:hover:text-(--brand-color) [&_p]:cursor-pointer *:duration-300 ">
					<h4 className="text-(--text-primary) text-lg font-medium">Product</h4>
					<p>Project management</p>
					<p>Time tracker</p>
					<p>Time schedule</p>
					<p>Lead generate</p>
					<p>Remote Collaboration</p>
				</div>
				<div className="h-4/5  border-green-600 w-1/4 flex flex-col justify-start items-start gap-8">
					<h2 className="text-(--text-primary) text-5xl font-medium">
						LuxShield
					</h2>
					<p className="text-(--text-secondary) text-xl font-extralight">
						Subscribe to our Newsletter
					</p>

					<label
						htmlFor="email"
						className="bg-(--bg-primary) flex flex-row justify-between items-center rounded-xl px-2 py-2 w-max border border-transparent transition-all duration-300"
					>
						<input
							type="email"
							className="border-hidden placeholder:text-(--text-tertiary) p-2 text-(--text-primary) focus:outline-none "
							placeholder="Enter your email"
						/>
						<button className="bg-(--text-primary) text-lg text-(--bg-primary) font-bold px-6 py-3 gap-4 rounded-md flex flex-row justify-center items-center transition-all duration-300 cursor-pointer hover:bg-(--brand-color) hover:text-(--text-primary) hover:scale-95">
							Subscribe
						</button>
					</label>
				</div>
			</div>
			<div className="w-full h-1/12  bg-(--bg-dark) p-9 flex flex-col justify-center items-center">
				<p className="text-(--text-tertiary) text-md font-extralight">
					Copyright © LuxShield │ Designed & Coded by Denfer Jericho Abad
				</p>
			</div>
		</div>
	);
};

export default Footer;
