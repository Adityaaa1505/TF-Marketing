import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Appraoch from './Components/Appraoch';
import MeetTeam from './Components/MeetTeam';
import SecretIngredient from './Components/SecretIngredient';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';
import Reach from './Components/Reach';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden border-2">
      <Navbar />
      <Hero />
      <AboutUs id="aboutus" /> {/* Section-2 */}
      <Reach id="reach"/> {/* Section-3  */}
      {/* <Services />  */}
      {/* <Appraoch /> */}
      {/* <MeetTeam /> */}
      {/* <SecretIngredient /> */}
      <Reviews id="testimonials" /> {/* Section-4 */}
      <Footer /> 
    </div>
  );
};

export default App;
