import './App.scss';
import {Conditions} from "./conditions/Conditions";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from "./contactForm/ContactForm";
import {Footer} from "./footer/Footer";
import {Header} from './header/Header';
import {ScrollToTop} from "./common/components/scrollToTopButton/ScrollToTopButton";



function App() {
	return (
		<div className="App">
			<Header/>
			<Main/>
			<Skills/>
			<Projects/>
			<Conditions/>
			<ContactForm/>
			<Footer/>
			<ScrollToTop/>
		</div>
	);
}

export default App;
