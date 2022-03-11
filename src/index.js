import './style.css';
import img from './assets/logo.png';
import renderCards from './modules/renderContent.js';
import { postComment, getComments } from './modules/commentsAPI.js';
import { updateLikes } from './modules/likesAPI.js';

const image = document.querySelector('.logo');
image.innerHTML = `<img class="img-logo" src="${img}" alt="my logo">`;

renderCards();
const test = async () => {
  const comments = await getComments(900);
  const comment1 = comments[0];
  console.log(comments)
}

test();