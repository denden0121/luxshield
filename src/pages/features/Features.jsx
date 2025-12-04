import React from "react";
import styles from "./Features.module.css";
import FirstSection from "@/components/features/FirstSection";
import SecondSection from "@/components/features/SecondSection";
import ThirdSection from "@/components/features/ThirdSection";
import FourthSection from "@/components/features/FourthSection";

const Features = () => {
	return (
		<div
			className={`min-h-dvh w-full  bg-(--bg-primary)  border-white relative flex flex-col justify-start items-center  ${styles.featuresContainer}`}
		>
			<FirstSection />
			<SecondSection />
			<ThirdSection />
			<FourthSection />
		</div>
	);
};

export default Features;
