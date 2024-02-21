import todolistFon from "../../src/assets/images/todolist.png";
import socialNetworkFon from "../../src/assets/images/socialnetworks.png";
import cardsFon from "../../src/assets/images/cardsFon.png";
import citriniumFon from "../../src/assets/images/citrinium.png";
import peatCalculator from "../../src/assets/images/peat-calculator.png"
import signIn from "../../src/assets/images/projects/cards/SignIn.png"
import signUp from "../../src/assets/images/projects/cards/SignUp.png"
import profile from "../../src/assets/images/projects/cards/Profile.png"
import packs from "../assets/images/projects/cards/Packs.png"
import cards from "../assets/images/projects/cards/Cards.png"
import addCards from "../../src/assets/images/projects/cards/AddCard.png"


export const projects = [
	{
		title: "Peat calculator",
		description: "Web application for calculating the proportions of peat in production and accounting for peat stored in warehouses.",
		img: peatCalculator,
		siteLink: 'https://pavelvoitov.github.io/peat-calculator/',
		githubLink: 'https://github.com/PavelVoitov/peat-calculator.git',
		sliderPhoto: []
	},
	{
		title: "Task recorder",
		description: "Web-application for every day on a week",
		img: todolistFon,
		siteLink: 'https://pavelvoitov.github.io/task-recorder/',
		githubLink: 'https://github.com/PavelVoitov/task-recorder.git',
		sliderPhoto: []
	},
	{
		title: "Social network",
		description: "Social network in 8-bit style",
		img: socialNetworkFon,
		siteLink: 'https://pavelvoitov.github.io/8-bit/',
		githubLink: 'https://github.com/PavelVoitov/8-bit.git',
		sliderPhoto: []
	},
	{
		title: "Education cards",
		description: "SPA for fast and effective learning",
		img: cardsFon,
		siteLink: '',
		githubLink: '',
		sliderPhoto: [signIn, signUp, profile, packs, cards, addCards]
	},
	{
		title: "Citrinium",
		description: "Website for a dental clinic with a contact form and responsive design",
		img: citriniumFon,
		siteLink: 'https://citrinium.by/',
		githubLink: '',
		sliderPhoto: [],
	},
]