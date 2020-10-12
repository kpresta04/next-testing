import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
	const [colorState, setcolorState] = React.useState("red");
	const [buttonClicked, setButtonClicked] = React.useState(false);

	return (
		<div>
			<h1 className={colorState}>Class Dynamically Changes</h1>
			<h1 className={buttonClicked ? "green" : "orange"}>
				{buttonClicked ? "Button has been clicked" : "Button not clicked"}
			</h1>
			<button
				onClick={() => {
					setcolorState("red");
					setButtonClicked(true);
				}}
			>
				Red
			</button>
			<button
				onClick={() => {
					setcolorState("blue");
					setButtonClicked(true);
				}}
			>
				Blue
			</button>
		</div>
	);
}
