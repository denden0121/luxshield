import { useState } from "react";
import "./App.css";
import Navigation from "@/components/navigation/Navigation";
import Hero from "@/pages/hero/Hero";
import Features from "@/pages/features/Features";

function App() {
	return (
		<>
			<Navigation />
			<Hero />
			<Features />
			<div className="h-dvh bg-(--bg-primary)"></div>
		</>
	);
}

export default App;
