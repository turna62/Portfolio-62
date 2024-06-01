import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import JobListings from '../components/JobListings';
import ContactSection from '../components/ContactSection';
import Skills from '../components/Skills';

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <Skills />
      <JobListings isHome={true} />
      <ContactSection />
    </>
  );
};
export default HomePage;
