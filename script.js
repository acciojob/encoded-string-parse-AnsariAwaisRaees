const parseCode = (str) => {
	// your code here
	const reg = /^(.*?)000(.*?)(.*?)000(\d+)$/;
	const match = str.match(reg);

	if (match) {
		const [, firstName, lastName, id] = match;
		return {firstName, lastName, id};
	}else{
		return null;
	}
};

// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
