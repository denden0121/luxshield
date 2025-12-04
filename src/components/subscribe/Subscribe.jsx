import React from "react";
import styles from "./Subscribe.module.css";

const Subscribe = () => {
	return (
		<div className="w-full h-dvh flex flex-row justify-between items-start bg-(--bg-primary)">
			<div
				className={`w-1/2 h-full border border-green-400 ${styles.newsLetterFormContainer}`}
			>
				<p className="text-(--text-primary) text-xl">Newsletter</p>
				<p className="text-()">Subscribe to our newsletter</p>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					quas.
				</p>
				<label htmlFor="email">
					<input type="email" />
					<button>Subscribe</button>
				</label>
			</div>
			<div className="w-1/2 h-full border border-green-400"></div>
		</div>
	);
};

export default Subscribe;
