import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import Appraoch from './Components/Appraoch';
import MeetTeam from './Components/MeetTeam';
import SecretIngredient from './Components/SecretIngredient';
import Reviews from './Components/Reviews';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden border-2">
      <Navbar />
      <Hero />
      <AboutUs id="aboutus" /> {/* Section-2 */}
      <Services /> {/* Section-3 */}
      <Appraoch /> {/* Section-4 */}
      <MeetTeam id="reach"/> {/* Section-5 */}
      <SecretIngredient /> {/* Section-6 */}
      <Reviews /> {/* Section-7 */}
      <Footer /> 
    </div>
  );
};

export default App;
