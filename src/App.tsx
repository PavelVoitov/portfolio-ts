import './App.scss';
import {Conditions} from "./conditions/Conditions";
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from "./contactForm/ContactForm";
import {Footer} from "./footer/Footer";




function App() {
  return (
      <div className="App">
        <Header />
        <Main />
        <Skills />
        <Projects />
        <Conditions />
        <ContactForm />
        <Footer />
      </div>
  );
}

export default App;
