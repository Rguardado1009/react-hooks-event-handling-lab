// Code Keypad Component Here

function Keypad() {
	function change(e) {
		console.log(`${e.target.name}: ${e.target.value}`);
	}
	return (
		<>
			<input type="password" name="Entering Password..." onChange={change} />
		</>
	);
}

export default Keypad;
