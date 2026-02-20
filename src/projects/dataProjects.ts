import todolistFon from "../../src/assets/images/todolist.png";
import socialNetworkFon from "../../src/assets/images/socialnetworks.png";
import cardsFon from "../../src/assets/images/cardsFon.png";
import citriniumFon from "../../src/assets/images/citrinium.png";
import peatCalculator from "../../src/assets/images/peat-calculator.png"
import speedTime from "../../src/assets/images/speed-time.png"
import stxlotty from "../../src/assets/images/stx-lotty.png"
import agroCover from "../../src/assets/images/agroCover.png"
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
import agro1 from "../assets/images/projects/agro/agro1.png"
import agro2 from "../assets/images/projects/agro/agro2.png"
import agro3 from "../assets/images/projects/agro/agro3.png"
import agro4 from "../assets/images/projects/agro/agro4.png"
import agro5 from "../assets/images/projects/agro/agro5.png"
import agro6 from "../assets/images/projects/agro/agro6.png"
import boxesPeatCalculator from "../assets/images/projects/peat-calculator/boxes.png"

export type ProjectPlatform = "web" | "mobile";

export interface Project {
    id: string;
    title: string;
    platform: ProjectPlatform;
    img: string;
    siteLink?: string;
    githubLink?: string;
    sliderPhoto: string[];
    stack?: string[];
    highlights?: string[];
    isNda?: boolean;
}

export const projects: Project[] = [
    {
        id: "agro-mng-web",
        title: "Agro Management Platform",
        platform: "web",
        img: agroCover,
        sliderPhoto: [agro1, agro2, agro3, agro4, agro5, agro6],
        stack: [
			"Next.js",
			"React",
			"TypeScript",
			"Redux",
			"SCSS Modules",
			"MapLibre GL",
			"Recharts",
			"i18next",
			"Python",
			"FlaskAPI",
			"Airfrow",
			"Docker"
		],
        highlights: ["Field management", "Maps & layers", "Role-based access"],
        isNda: true,
    },
	{
		id: "peat-calculator",
        platform: "web",
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
		],
		stack: [
			"React",
			"TypeScript",
			"Redux Toolkit",
			"Formik",
			"Yup",
			"Material UI",
			"Sass",
			"Numeric.js",
			"Storybook",
			"Jest + Testing Library",
		]
	},
	{
		id: "stxlotty",
		title: "STXLOTTY",
		img: stxlotty,
		siteLink: 'https://stxlotty.top/',
		githubLink: '',
		sliderPhoto: [],
        platform: "web",
		stack: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Stacks wallet integration",
			"Stacks Transactions",
			"Stacks Network",
			"Stacks Blockchain API Client",
			"Axios",
			"React-toastify",
		]
	},
	{
		id: "education-cards",
		title: "Education cards",
		img: cardsFon,
		siteLink: '',
		githubLink: '',
		sliderPhoto: [signIn, signUp, profile, packs, cards, addCards],
        platform: "web",
		stack: [
			"React",
			"TypeScript",
			"Redux",
			"Redux Thunk",
			"React Router",
			"Material UI",
			"Styled-components",
			"Formik",
			"Axios",
		  ],
	},
	{
		id: "speed-time",
		title: "Speed-Time",
		img: speedTime,
		siteLink: 'https://www.speed-time.ru/',
		githubLink: '',
		sliderPhoto: [],
        platform: "web",
		stack:  [ 
			"Next.js",
			"TypeScript",
			"Supabase",
			"SCSS",
			"React-Bootstrap",
	]
	},
	{
		id: "citrinium",
		title: "Citrinium",
		img: citriniumFon,
		siteLink: 'https://citrinium.by/',
		githubLink: '',
		sliderPhoto: [],
        platform: "web",
		stack:  [ "HTML5", "CSS3", "JavaScript", "EmailJS" ]
	},
]