import './style.css';
import img from './assets/logo.png';
import renderCards from './modules/renderContent.js'

const image = document.querySelector('.logo');
image.innerHTML = `<img class="img-logo" src="${img}" alt="my logo">`;

const displayModal = document.querySelector('.modal-content');
const gridContainer = document.querySelector('.grid-container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');


renderCards();