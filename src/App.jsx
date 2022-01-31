const NAME = "Prashanth Kattela Chandrashekar";

const element = (
	<div className="container border">
		<h1 className="border">{NAME}</h1>
		<img className="border" src="https://media-exp1.licdn.com/dms/image/D4D35AQHP59y8O4ITiw/profile-framedphoto-shrink_800_800/0/1633322008318?e=1643698800&v=beta&t=raVbD3csBqCIoEOWUfL6hHIhELlR_e9mBlZTYBxCdC0" width="300px" />
		<p>A Fullstack Web Developer from San Diego. International Graduate Student at San Diego State University pursuing Masters in Computer Science with an expected graduation date of May 2023. Actively seeking internships in Software Development for Summer 2022.</p>
		<a href="https://github.com/Prashanth-KC?tab=repositories" target="_blank">
			<button className="border"><h3>VIEW MY GITHUB REPO</h3></button>
		</a>
	</div>
);

ReactDOM.render(element, document.getElementById('root'));