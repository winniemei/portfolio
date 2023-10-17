import { useState } from "react";
import "./App.css";
import MainSection from "./MainSection";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div id="app-container">
				<MainSection />
			</div>
		</>
	);
}

export default App;
