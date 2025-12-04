import React from "react";
import styles from "./Navigation.module.css";
import LogoSvg from "@/assets/images/logo.svg";

const Navigation = () => {
	return (
		<div className="w-full h-[10dvh] z-50 absolute  border-zinc-800 flex flex-row justify-between items-center px-9">
			{/* logo */}
			<div className={styles.logo}>
				<img src={LogoSvg} alt="LuxShield" />
				LuxShield
			</div>
			<div className="text-(--text-primary) text-[16px]  border-red-600 flex flex-row justify-center items-center gap-12">
				<p>HOME</p>
				<p>FEATURES</p>
				<p>MISSION</p>
				<p>TEAM </p>
			</div>
			<div></div>
		</div>
	);
};

export default Navigation;
