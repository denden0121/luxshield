import React from "react";
import styles from "./OurTeam.module.css";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import TeamCard from "../team_card/TeamCard";
import HexagonSvg from "@/assets/images/Hexagon-2.svg";

const OurTeam = () => {
	return (
		<div className="min-h-dvh w-full relative border-green-600 bg-(--bg-primary) flex flex-col justify-center items-center gap-8">
			<div className="absolute w-full z-0 h-full border-(--bg-svg)">
				<img src={HexagonSvg} alt="" />
			</div>
			<div className=" border-green-600 z-10 w-2/5 flex flex-col justify-start items-center gap-6 text-center">
				<p className="text-(--text-tertiary) text-md font-light">・Our Team</p>
				<p className="text-(--text-primary) text-6xl font-medium">
					Meet the leadership team behind Motorflow
				</p>
				<p className="text-(--text-tertiary) text-lg font-extralight">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
					quas.ipisicing elit. Explicabo, quas. quas.ipisicing elit. Explicabo,
					quas.ipisicing elit. Explicabo, quas.
				</p>
			</div>
			<div className="w-3/5 min-h-2/6 z-10 border-green-600 flex flex-wrap justify-center items-center gap-3">
				<TeamCard />
				<TeamCard />
				<TeamCard />
				<TeamCard />
			</div>

			<button className="bg-(--text-primary) text-lg z-10 font-bold px-6 py-3 gap-4 rounded-md flex flex-row justify-center items-center transition-all duration-300 cursor-pointer hover:bg-(--brand-color) hover:text-(--text-primary) hover:scale-95">
				Join us <IconArrowNarrowRight />
			</button>
		</div>
	);
};

export default OurTeam;
