import main from './contentAPI.js';
import { renderImage } from './createImg.js';
import popModal from './popModal.js';

const grid = document.querySelector('.grid-container');
const displayModal = document.querySelector('.modal-content');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const renderCards = async () => {
  grid.innerHTML = '';
  const dataList = await main();
  dataList.forEach((el) => {
    const card = document.createElement('div');
    card.classList.add('grid-item');

    renderImage(el.image.medium, card);

    const nameLike = document.createElement('div');

    const showName = document.createElement('h3');
    showName.classList.add('showname');
    showName.innerHTML = el.name;

    const likeIcon = document.createElement('i');
    likeIcon.classList.add('fas');
    likeIcon.classList.add('fa-heart');

    nameLike.append(showName, likeIcon);

    const commentBtn = document.createElement('button');
    commentBtn.classList.add('comment-btn');
    commentBtn.innerHTML = 'comment';
    commentBtn.addEventListener('click', (e) => {
      e.preventDefault();
      popModal(el);
      displayModal.style.display = 'block';
      grid.style.display = 'none';
      header.style.display = 'none';
      footer.style.display = 'none';
    });
    card.append(nameLike, commentBtn);
    grid.append(card);
  });
};

export default renderCards;