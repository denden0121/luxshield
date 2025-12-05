import React from "react";
import ProfileImg from "@/assets/images/profile/james-washington.svg";
import {
	IconBrandFacebookFilled,
	IconBrandX,
	IconBrandInstagram,
	IconBrandLinkedin,
} from "@tabler/icons-react";

const TeamCard = () => {
	return (
		<div className="w-60 h-max relative rounded-xl border-green-600 bg-(--brand-color-secondary) shadow-(--bg-primary) flex flex-col justify-center items-center gap-6 text-center py-8 hover:scale-96 transition-all duration-150 ease-linear">
			<img className="rounded-full w-2/6 shadow-lg" src={ProfileImg} alt="" />
			<span>
				<p className="text-(--text-secondary) text-lg font-light">
					James Washington
				</p>
				<p className="text-(--text-tertiary) text-sm font-extralight">
					CEO & Founder
				</p>
			</span>

			<div className=" border-green-600 flex flex-row justify-center items-center gap-2 text-(--text-primary) py-3 *:hover:text-(--brand-color-small) *:cursor-pointer transition-all duration-300 *:hover:scale-105 *:duration-300">
				<IconBrandFacebookFilled />
				<IconBrandX />
				<IconBrandInstagram />
				<IconBrandLinkedin />
			</div>
		</div>
	);
};

export default TeamCard;
