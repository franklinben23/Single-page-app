import './style.css';
import img from './assets/logo.png';
import renderCards from './modules/renderContent.js';
import {postComment, getComments} from './modules/commentsAPI.js';

const image = document.querySelector('.logo');
image.innerHTML = `<img class="img-logo" src="${img}" alt="my logo">`;

renderCards();
getComments(900);