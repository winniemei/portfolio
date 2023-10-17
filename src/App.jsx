import { useState } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<div id="app-container">
				<h1>Winnie's Portfolio Site</h1>
			</div>
		</>
	);
}

export default App;
