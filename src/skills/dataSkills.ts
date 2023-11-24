import js from "../../src/assets/images/JS.png";
import ts from "../../src/assets/images/typescript.png";
import react from "../../src/assets/images/react_logo.png";
import html from "../../src/assets/images/html.png";
import css from "../../src/assets/images/css.png";
import git from "../../src/assets/images/Git.png";
import materialUi from "../../src/assets/images/material-ui.png";
import redux from "../../src/assets/images/redux.png";
import postman from "../../src/assets/images/postman.png";

export const skills = [
	{
		title: 'JAVASCRIPT',
		description: 'Data types. Cycles, conditions, work with objects. Functions. Prototypes and inheritance. Working with objects. Array methods.',
		img: js
	},
	{
		title: 'TYPESCRIPT',
		description: 'Knowledge of data structures and algorithms and how they are used. Typing a React app. Interfaces. Types. Generics.',
		img: ts
	},
	{
		title: 'REACT',
		description: 'Use of class/functional components. Knowledge of hooks, HOC, life methods and component life cycle. Benefits of working with React. Redux connection, Material Ui, etc.',
		img: react
	},
	{
		title: 'HTML',
		description: 'Creation of the structure of the html pages. Working with text, images, links. Using semantic tags. Сross-browser adaptive layout.',
		img: html
	},
	{
		title: 'CSS/SASS',
		description: 'Using SCSS and SASS modules to style web pages. Understanding the basics, principles and rules of work. Flex and Grid technologies.',
		img: css
	},
	{
		title: 'GIT',
		description: 'Working with online project hosting service. Joint development of SPA applications. Working with branches, merge, deploy.',
		img: git
	},
	{
		title: 'MATERIAL UI',
		description: 'Utilizing Material-UI library for building responsive and visually appealing user interfaces.',
		img: materialUi
	},
	{
		title: 'REDUX/REDUX TOOLKIT',
		description: 'Implementing Redux for state management in applications. Understanding actions, reducers, thunks to manage application state effectively.',
		img: redux
	},
	{
		title: 'POSTMAN',
		description: 'Using Postman to develop and test APIs. API design, testing and documentation. Working with various API protocols and additional features.',
		img: postman
	}
]