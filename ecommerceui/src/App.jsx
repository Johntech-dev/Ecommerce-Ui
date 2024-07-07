import './App.css';
import HeroSection from './components/HeroSection';
import Middle from './components/Middle';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
       <Navbar />
       <HeroSection />
       <Middle />
    </div>
  );
}

export default App;
