import React from "react";
import styles from "./Subscribe.module.css";
import {
	IconArrowNarrowRight,
	IconBrandFacebookFilled,
	IconBrandX,
	IconBrandInstagram,
	IconBrandLinkedin,
} from "@tabler/icons-react";
import SubscribeImg from "@/assets/images/subscribe-image.svg";
import HexagonSvg from "@/assets/images/Hexagon-3.svg";

const Subscribe = () => {
	return (
		<div className="w-full h-dvh relative flex flex-row justify-center items-start bg-(--bg-primary) p-9">
			<div className="absolute w-full z-0 h-full border-(--bg-svg)">
				<img src={HexagonSvg} alt="" />
			</div>
			<div className="w-2/6 h-full z-10  border-green-400 flex flex-col justify-center items-start gap-6">
				<p className="text-(--text-tertiary) text-sm font-light">
					・Newsletter
				</p>
				<p className="text-(--text-primary) text-7xl font-medium">
					Subscribe to our newsletter
				</p>
				<p className="text-(--text-tertiary) text-lg font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					quas.ipisicing elit. Explicabo, quas. quas.ipisicing elit. Explicabo,
					quas.ipisicing elit. Explicabo, quas.
				</p>
				<label
					htmlFor="email"
					className="bg-(--brand-color-secondary) flex flex-row justify-between items-center rounded-xl px-2 py-2 w-2/3 border border-transparent transition-all duration-300"
				>
					<input
						type="email"
						className="border-hidden placeholder:text-(--text-tertiary) p-2 text-(--text-primary) focus:outline-none "
						placeholder="Enter your email"
					/>
					<button className="bg-(--text-primary) text-lg text-(--bg-primary) font-bold px-6 py-3 gap-4 rounded-md flex flex-row justify-center items-center transition-all duration-300 cursor-pointer hover:bg-(--brand-color) hover:text-(--text-primary) hover:scale-95">
						Subscribe <IconArrowNarrowRight />
					</button>
				</label>
				<div className=" border-green-600 flex flex-row justify-center items-center gap-2 text-(--text-primary) py-3 *:hover:text-(--brand-color-small) *:hover:scale-150 *:cursor-pointer *:transition-all *:duration-300">
					<IconBrandFacebookFilled />
					<IconBrandX />
					<IconBrandInstagram />
					<IconBrandLinkedin />
				</div>
			</div>
			<div className="w-1/2 h-full  border-green-400 flex flex-col justify-center items-end">
				<img src={SubscribeImg} alt="" className="h-5/6 opacity-80" />
			</div>
		</div>
	);
};

export default Subscribe;
