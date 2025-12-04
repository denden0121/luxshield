import { useEffect } from "react";
import "./App.css";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/pages/hero/Hero";
import Features from "@/pages/features/Features";
import Lenis from "@studio-freight/lenis";

function App() {
	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.3,
			easing: (t) => t,
			smoothWheel: true,
			smoothTouch: true,
		});

		const raf = (time) => {
			lenis.raf(time);
			requestAnimationFrame(raf);
		};

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<div className="snap-y snap-mandatory snap-always h-dvh ">
			<Navigation />
			<Hero />
			<Features />
			<div className="h-dvh bg-(--bg-primary)"></div>
		</div>
	);
}

export default App;
