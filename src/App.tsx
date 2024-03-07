import './App.scss';
import {Conditions} from "./conditions/Conditions";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {ContactForm} from "./contactForm/ContactForm";
import {Footer} from "./footer/Footer";
import {Header} from './header/Header';
import {ScrollToTop} from "./common/components/scrollToTopButton/ScrollToTopButton";
import {useTranslation} from "react-i18next";


const lngs = {
	en: {nativeName: 'English'},
	ru: {nativeName: 'Russian'}
}

function App() {
	const {t, i18n} = useTranslation()
	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng)
	}

	return (
		<div className="App">
			<Header changeLanguage={changeLanguage}/>
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
