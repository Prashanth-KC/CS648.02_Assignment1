const NAME = "Prashanth Kattela Chandrashekar";

const element = React.createElement(
	"div",
	{ className: "container border" },
	React.createElement(
		"h1",
		{ className: "border" },
		NAME
	),
	React.createElement("img", { className: "border", src: "https://media-exp1.licdn.com/dms/image/D4D35AQHP59y8O4ITiw/profile-framedphoto-shrink_800_800/0/1633322008318?e=1643698800&v=beta&t=raVbD3csBqCIoEOWUfL6hHIhELlR_e9mBlZTYBxCdC0", width: "300px" }),
	React.createElement(
		"p",
		null,
		"A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internships in Software Development for Summer 2022."
	),
	React.createElement(
		"a",
		{ href: "https://github.com/Prashanth-KC?tab=repositories", target: "_blank" },
		React.createElement(
			"button",
			{ className: "border" },
			React.createElement(
				"h3",
				null,
				"VIEW MY GITHUB REPO"
			)
		)
	)
);

ReactDOM.render(element, document.getElementById('root'));