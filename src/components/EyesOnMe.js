// Code EyesOnMe Component Here
function btn() {
	return (
		<>
			<button
				onFocus={() => console.log("Good!")}
				onBlur={() => console.log("Hey! Eyes on me!")}
			>
				"Eyes on me!"
			</button>
		</>
	);
}
export default btn;
