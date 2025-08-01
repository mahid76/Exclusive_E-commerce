import AboutDetails from "../components/AboutPage/AboutDetails";
import AboutOurStory from "../components/AboutPage/AboutOurStory";
import Services from '../components/Services/Services'
import Container from "../components/Layout/Container";

const About = () => {
	return (
		<div className="pt-[280px] relative">
			<Container>
				<div>
          <AboutOurStory />
          <AboutDetails />
          <div className="py-[140px]">
            <Services />
          </div>
        </div>
			</Container>
		</div>
	);
};

export default About;
