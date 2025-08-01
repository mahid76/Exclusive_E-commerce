import AboutDetails from "../components/AboutPage/AboutDetails";
import AboutOurStory from "../components/AboutPage/AboutOurStory";
import Container from "../components/Layout/Container";

const About = () => {
	return (
		<div className="py-[280px] relative">
			<Container>
				<div>
          <AboutOurStory />
          <AboutDetails />
        </div>
			</Container>
		</div>
	);
};

export default About;
