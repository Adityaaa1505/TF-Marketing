import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TeamSection from './Components/TeamSection';
import Services from './Components/Services';
import Appraoch from './Components/Appraoch';
import MeetTeam from './Components/MeetTeam';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden border-2">
      <Navbar />
      <Hero />
      <TeamSection /> {/* Section-2 */}
      <Services /> {/* Section-3 */}
      <Appraoch /> {/* Section-4 */}
      <MeetTeam /> {/* Section-5 */}
    </div>
  );
};

export default App;
