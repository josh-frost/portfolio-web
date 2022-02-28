import { NavBar } from './components';
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonials,
  Works,
} from './containers';

import './App.scss';

function App() {
  return (
    <div className="app">
      <NavBar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
