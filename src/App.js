import './App.css';
import Header from './componant/Header';
import About from './componant/About';
import Services from './componant/Services';
import ContactForm from './componant/ContactForm';
import Footer from './componant/Footer';
import MainSlider from './componant/MainSlider';

function App() {
  return (
    <div className="App">
      <Header />
      <div id="main-slider">
        <MainSlider />
      </div>
      <div id="about-section">
        <About />
      </div>
      <div id="services-section">
        <Services />
      </div>
      <div id="contact-section">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
