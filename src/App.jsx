import { NavBar } from './components';
import { About, Footer, Home, Skills, Testimonials, Works } from './sections';

import './App.scss';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Home />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
