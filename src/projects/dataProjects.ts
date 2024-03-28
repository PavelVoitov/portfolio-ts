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
import loginPeatCalculator from "../assets/images/projects/peat-calculator/login-form.png"
import outPeatCalculator from "../assets/images/projects/peat-calculator/out.png"
import selectPeat from "../assets/images/projects/peat-calculator/select-peat.png"
import workSchemePeatCalculator from "../assets/images/projects/peat-calculator/work-scheme.png"
import hoppersPeatCalculator from "../assets/images/projects/peat-calculator/hoppers.png"
import boxesPeatCalculator from "../assets/images/projects/peat-calculator/boxes.png"

export const projects = [
	{
		id: "peat-calculator",
		title: "Peat calculator",
		img: peatCalculator,
		siteLink: '',
		githubLink: '',
		sliderPhoto: [
			loginPeatCalculator,
			outPeatCalculator,
			selectPeat,
			workSchemePeatCalculator,
			hoppersPeatCalculator,
			boxesPeatCalculator
		]
	},
	{
		id: "task-recorder",
		title: "Task recorder",
		img: todolistFon,
		siteLink: 'https://pavelvoitov.github.io/task-recorder/',
		githubLink: 'https://github.com/PavelVoitov/task-recorder.git',
		sliderPhoto: []
	},
	{
		id: "social-network",
		title: "Social network",
		img: socialNetworkFon,
		siteLink: 'https://pavelvoitov.github.io/8-bit/',
		githubLink: 'https://github.com/PavelVoitov/8-bit.git',
		sliderPhoto: []
	},
	{
		id: "education-cards",
		title: "Education cards",
		img: cardsFon,
		siteLink: '',
		githubLink: '',
		sliderPhoto: [signIn, signUp, profile, packs, cards, addCards]
	},
	{
		id: "citrinium",
		title: "Citrinium",
		img: citriniumFon,
		siteLink: 'https://citrinium.by/',
		githubLink: '',
		sliderPhoto: [],
	},
]