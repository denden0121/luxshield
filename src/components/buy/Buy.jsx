import React from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import HelmetFirstImg from "@/assets/images/first-helmet.svg";
import HelmetSecondImg from "@/assets/images/second-helmet.svg";
import HelmetThirdImg from "@/assets/images/third-helmet.svg";
import HexagonSvg from "@/assets/images/Hexagon.svg";

const Buy = () => {
	return (
		<div className="w-full h-dvh relative border-green-600 bg-(--bg-primary) flex flex-col justify-between items-start p-9">
			<div className="absolute w-full z-0 h-full border-(--bg-svg)">
				<img src={HexagonSvg} alt="" />
			</div>
			<div className="w-full h-full z-10  border-green-600 flex flex-row justify-between items-center">
				<div className="w-1/2 h-full border-green-600 flex flex-col justify-between items-start pr-9">
					<div className="w-full h-2/3 bg-(--brand-color-secondary) flex flex-col justify-center items-center">
						<img src={HelmetFirstImg} alt="" className="h-4/5" />
					</div>
					<div className="w-full h-3/12 flex flex-row justify-between items-center">
						<div className="w-2/6  border-green-600 flex justify-center items-center">
							<img src={HelmetFirstImg} alt="" className="w-1/2" />
						</div>
						<div className="w-2/6  border-green-600 flex justify-center items-center">
							<img src={HelmetSecondImg} alt="" className="w-1/2" />
						</div>
						<div className="w-2/6  border-green-600 flex justify-center items-center">
							<img src={HelmetThirdImg} alt="" className="w-1/2" />
						</div>
					</div>
				</div>
				<div className="w-1/2 h-full flex flex-col justify-between items-start pl-6 border-green-600">
					<div className="flex flex-col justify-start items-start border-green-600">
						<div className="w-3/4 h-max  border-green-600 flex flex-col justify-start items-start gap-6">
							<p className="text-(--text-tertiary) text-sm font-light">
								・Purchase
							</p>
							<h3 className="text-(--text-primary) text-5xl font-medium">
								Take your time
							</h3>
							<p className="text-(--text-tertiary) text-lg font-extralight">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Explicabo, quas.ipisicing elit. Explicabo, quas. quas.ipisicing
								elit.
							</p>
						</div>
						<div className="w-3/4 h-max  border-green-600 flex flex-col justify-start items-start gap-6 py-6">
							<span className="flex flex-row justify-start items-end gap-3">
								<p className="text-4xl text-(--text-primary) font-medium">
									$199.99 USD
								</p>
								<p className="text-lg text-(--text-tertiary) font-normal">
									$259.99 USD
								</p>
							</span>
							<form
								action="#"
								className="w-3/4 h-max flex flex-col justify-start items-start gap-8 py-6  border-green-600"
							>
								<div className="w-1/2 h-max  border-green-600 flex flex-row justify-between items-center gap-3 ">
									<label
										htmlFor="quantity"
										className=" border-green-600 rounded-full"
									>
										<input
											type="number"
											id="quantity"
											name="quantity"
											placeholder="Quantity"
											className="bg-(--brand-color-secondary) w-28 border-green-600 placeholder:text-(--text-tertiary) px-3.5 py-3.5 rounded-full text-center"
										/>
									</label>
									<label htmlFor="size" className="rounded-full">
										<select
											name="size"
											id="size"
											defaultValue=""
											className="w-28  bg-(--brand-color-secondary) text-(--text-tertiary) text-sm text-start px-3.5 py-3.5 pr-8 rounded-full"
										>
											<option value="" disabled hidden>
												Size
											</option>
											<option value="XL">XL</option>
											<option value="L">L</option>
											<option value="M">M</option>
											<option value="S">S</option>
											<option value="SM">SM</option>
										</select>
									</label>
								</div>

								<div className="w-max h-max  border-green-600 flex flex-row justify-start items-center gap-3">
									<button className="w-full bg-(--text-primary) text-lg text-(--bg-primary) font-bold px-6 py-3 gap-4 rounded-md flex flex-row justify-center items-center transition-all duration-300 cursor-pointer hover:bg-(--brand-color) hover:text-(--text-primary) hover:scale-95">
										Add to cart <IconArrowNarrowRight />
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className=" border-green-600 w-2/3 overflow-auto scroll-auto h-max flex flex-col justify-start items-start gap-6 [&_h4]:text-(--text-primary) [&_h4]:font-normal [&_h4]:text-2xl [&_p]:text-(--text-tertiary) [&_p]:text-md [&_p]:font-extralight">
						<h4>About the product</h4>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo
							veritatis eum labore iure culpa, asperiores cumque odio suscipit.
							Unde laudantium eligendi quasi aperiam voluptatum qui amet animi
							similique, sed iste non, expedita corporitia.
						</p>
						<h4>Product materials</h4>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicingluptatum qui
							amet animi similique, sed iste non, expedita corporis saepe.
							Deleniti aspernatur alias doloremque doloribus mollitia.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Buy;
