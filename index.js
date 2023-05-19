window.addEventListener("load", () => from.focus());
function convert() {
	let fromValue = document.getElementById("from").value;
	let fromUnit = document.getElementById("fromUnit").value;
	let toUnit = document.getElementById("toUnit").value;
	let toValue;

	switch(fromUnit) {
		case "meters":
			switch(toUnit) {
				case "meters":
					toValue = fromValue * 1;
					break;
				case "centimeters":
					toValue = fromValue * 100;
					break;
				case "inches":
					toValue = fromValue * 39.3701;
					break;
				case "feet":
					toValue = fromValue * 3.28084;
					break;
			}
			break;
		case "centimeters":
			switch(toUnit) {
				case "meters":
					toValue = fromValue / 100;
					break;
				case "centimeters":
					toValue = fromValue * 1;
					break;
				case "inches":
					toValue = fromValue / 2.54;
					break;
				case "feet":
					toValue = fromValue / 30.48;
					break;
			}
			break;
		case "inches":
			switch(toUnit) {
				case "meters":
					toValue = fromValue * 0.0254;
					break;
				case "centimeters":
					toValue = fromValue * 2.54;
					break;
				case "inches":
					toValue = fromValue * 1;
					break;
				case "feet":
					toValue = fromValue / 12;
					break;
			}
			break;
		case "feet":
			switch(toUnit) {
				case "meters":
					toValue = fromValue * 0.3048;
					break;
				case "centimeters":
					toValue = fromValue * 30.48;
					break;
				case "inches":
					toValue = fromValue * 12;
					break;
				case "feet":
					toValue = fromValue * 1;
					break;
			}
			break;
			
		case "celsius":
			switch(toUnit) {
				case "celsius":
					toValue = fromValue * 1;
					break;
				case "fahrenheit":
					toValue = (fromValue * 1.8) + 32;
					break;
			}
			break;
		case "fahrenheit":
			switch(toUnit) {
				case "celsius":
					toValue = (fromValue - 32) * 0.5556;
					break;
				case "fahrenheit":
					toValue = fromValue * 1;
					break;
			}
			break;
	}

	document.getElementById("to").value = toValue.toFixed(2);
}
