import todolist from "../../src/assets/images/todolist.png";
import socialNetwork from "../../src/assets/images/socialnetworks.png";
import cards from "../../src/assets/images/cardsFon.png";
import citrinium from "../../src/assets/images/citrinium.png";
import peatCalculator from "../../src/assets/images/peat-calculator.png"
import signIn from "../../src/assets/images/projects/cards/SignIn.png"
import signUp from "../../src/assets/images/projects/cards/SignUp.png"


export const projects = [
	{
		title: "Peat calculator",
		description: "Web application for calculating the proportions of peat in production and accounting for peat stored in warehouses.",
		img: peatCalculator,
		siteLink: 'https://pavelvoitov.github.io/peat-calculator/',
		codeLink: 'https://github.com/PavelVoitov/peat-calculator.git',
		sliderPhoto: []
	},
	{
		title: "Task recorder",
		description: "Web-application for every day on a week",
		img: todolist,
		siteLink: 'https://pavelvoitov.github.io/todolist-ts-01/',
		codeLink: 'https://github.com/PavelVoitov/todolist-ts-01.git',
		sliderPhoto: []
	},
	{
		title: "Social network",
		description: "Social network in 8-bit style",
		img: socialNetwork,
		siteLink: 'https://pavelvoitov.github.io/8-bit/',
		codeLink: 'https://github.com/PavelVoitov/8-bit.git',
		sliderPhoto: []
	},
	{
		title: "Education cards",
		description: "SPA for fast and effective learning",
		img: cards,
		siteLink: '',
		codeLink: '',
		sliderPhoto: [signIn, signUp]
	},
	{
		title: "Citrinium",
		description: "Web-site for dental clinic",
		img: citrinium,
		siteLink: 'https://citrinium.by/',
		codeLink: '',
		sliderPhoto: [],
	},
]