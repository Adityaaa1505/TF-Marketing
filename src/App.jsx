import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import TeamSection from './Components/TeamSection';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-hidden border-2">
      <Navbar />
      <Hero />
      <TeamSection />
    </div>
  );
};

export default App;
