import React from "react";
import styles from "./SecondSection.module.css";
import LineImg from "@/assets/images/line.svg";

const SecondSection = () => {
	return (
		<div className="w-full  border-green-900 h-dvh relative flex flex-row-reverse justify-start items-center">
			<div className="w-1/2 h-full flex flex-col p-9 justify-between items-end  border-red-600">
				<div className={`flex flex-col gap-4  w-2/6`}>
					<p className="text-lg text-(--text-secondary) font-light">2 - 3</p>
					<p className="text-4xl text-(--text-primary) font-extrabold">
						VISOR & OPTICS SYSTEM
					</p>
					<p className="text-sm text-(--text-secondary) font-extralight">
						A concept visor system integrating advanced display technology with
						optical clarity.
					</p>
				</div>
				{/* svg */}
				<div>
					<svg
						width="55"
						height="132"
						viewBox="0 0 55 132"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M27.6123 92.7148V93.2148C27.6123 96.681 27.5053 99.936 27.291 102.979C27.0759 106.032 26.6452 108.897 25.998 111.572C25.3471 114.263 24.3482 116.762 23 119.067L22.999 119.066C21.6895 121.336 19.9274 123.466 17.7188 125.458L17.7148 125.462C15.4995 127.417 12.7517 129.21 9.47949 130.846L9.19141 130.99L8.94141 130.787L4.20508 126.947L3.49707 126.373L4.3623 126.085C5.23824 125.793 6.18091 125.415 7.19141 124.952C8.18722 124.453 9.11978 123.893 9.98926 123.272L10.0068 123.26L10.0244 123.249C12.5006 121.78 14.4561 120.132 15.9043 118.312C17.3629 116.478 18.4434 114.503 19.1494 112.385L19.1514 112.379C19.9063 110.198 20.4109 107.91 20.6631 105.515V105.507H20.6641C20.9602 103.053 21.1084 100.513 21.1084 97.8867C21.1084 97.0848 21.0869 96.3268 21.0449 95.6123L21.0439 95.5977V95.583C21.0439 94.8866 20.9824 94.1223 20.8574 93.2891L20.7715 92.7148H27.6123ZM1.07617 81.0732C2.17051 81.2416 3.35048 81.3888 4.61621 81.5156H4.61719C5.88688 81.6003 7.11314 81.6426 8.2959 81.6426H46.4932C47.069 81.6008 47.6235 81.539 48.1562 81.457C48.7114 81.3716 49.1401 81.3067 49.4414 81.2637L49.6826 81.2295L49.8584 81.3984L52.9941 84.4062L53.335 84.7334L53.0273 85.0928C52.7779 85.3838 52.4845 85.7383 52.1484 86.1582C51.8584 86.5728 51.5895 86.9669 51.3408 87.3398C50.5143 88.8144 49.288 90.6179 47.6699 92.7471L47.6709 92.748C46.0797 94.8553 44.233 97.0241 42.1318 99.2539L42.1289 99.2578C40.0163 101.457 37.7303 103.419 35.2715 105.145L34.9639 105.36L34.6709 105.125L30.4473 101.732L29.874 101.273L30.5117 100.909C31.9764 100.072 33.4019 99.0658 34.7881 97.8896C36.2249 96.6641 37.5557 95.3979 38.7793 94.0898V94.0889C40.0479 92.7357 41.1435 91.4282 42.0684 90.167L42.0703 90.165C42.8024 89.1783 43.4106 88.2924 43.8975 87.5068H8.2959C7.11332 87.5068 5.93071 87.5493 4.74805 87.6338L4.73828 87.6348H4.72949C3.54637 87.677 2.31985 87.7617 1.0498 87.8887L0.5 87.9434V80.9844L1.07617 81.0732ZM4.13184 0.630859C5.18463 0.757189 6.34462 0.86354 7.6123 0.948242C8.88652 0.990685 10.0316 1.01074 11.0479 1.01074H45.0264C45.9126 0.968459 46.6712 0.925894 47.3027 0.883789L47.8682 0.84668L47.835 1.41211C47.7925 2.13462 47.7496 2.96443 47.707 3.90137V3.90234C47.6647 4.7917 47.6436 5.61611 47.6436 6.375V39.3994C47.6436 40.5397 47.665 41.7226 47.707 42.9482L47.8184 44.5303C47.8503 44.9664 47.8773 45.3114 47.8984 45.5654L47.9434 46.1074H41.0967L41.1416 45.5654C41.1825 45.0749 41.2041 44.3236 41.2041 43.3027V43.2832C41.2141 43.0324 41.2228 42.779 41.2305 42.5234H10.4717C9.19732 42.5234 7.87989 42.5434 6.51953 42.5859L6.52051 42.5869C5.20391 42.6294 4.12788 42.6926 3.29004 42.7764L2.74023 42.8311V35.8994L3.29199 35.958C4.09377 36.0424 5.13243 36.1268 6.40918 36.2119H6.4082C7.72009 36.2966 9.03193 36.3389 10.3438 36.3389H41.2676V7.13086H11.1123C9.92362 7.13086 8.62726 7.15181 7.22363 7.19434C5.85977 7.23696 4.81994 7.28001 4.10156 7.32227L3.57227 7.35352V0.563477L4.13184 0.630859Z"
							stroke="url(#paint0_linear_142_47)"
						/>
						<defs>
							<linearGradient
								id="paint0_linear_142_47"
								x1="87.6293"
								y1="58.9159"
								x2="-36.614"
								y2="46.358"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#9A6A44" />
								<stop offset="0.28" stop-color="#FFF4BC" />
								<stop offset="0.53" stop-color="#AB6516" />
								<stop offset="0.76" stop-color="#9C3E09" />
								<stop offset="1" stop-color="#E7D4A6" />
							</linearGradient>
						</defs>
					</svg>
				</div>
			</div>

			<div className="w-1/2 h-full flex flex-col justify-center items-start p-9  border-red-600">
				<div className="w-2/6 h-max relative flex flex-col justify-between items-start gap-4  border-white ">
					<p className="text-lg text-(--text-secondary) font-extralight">
						Material: Durable Polycarbonate Laminate.
					</p>
					<p className="text-lg text-(--text-secondary) font-extralight">
						Optics: Integrated display system capable of projecting key
						information within the rider's view.
					</p>

					<p className="text-lg text-(--text-secondary) font-extralight">
						Clarity: Designed for high optical clarity with UV protection.
					</p>
					<p className="text-lg text-(--text-secondary) font-extralight">
						Adaptive Tint: Concept photochromic technology for automatic tint
						adjustment based on light conditions.
					</p>
					<p className="text-lg text-(--text-secondary) font-extralight">
						Field of View: Engineered to provide a wide field of vision.
					</p>
					<span className={styles.lineImg}>
						<img src={LineImg} alt="" />
					</span>
				</div>
			</div>
		</div>
	);
};

export default SecondSection;
