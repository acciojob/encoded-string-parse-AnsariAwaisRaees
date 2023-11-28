const parseCode = (str) => {
	// your code here
	const regex = /^(.*?)000(.*?)000(\d+)$/;
  
	const match = input.match(regex);

	if (match) {
		const [, firstName, lastName, id] = match;
	    return { firstName, lastName, id };
	} else {
	    return null;
	}
};

// Do not change the code below
// const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
