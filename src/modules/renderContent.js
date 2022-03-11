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

    // spanClose.addEventListener('click', (e) => {
    //   e.preventDefault();
    //   displayModal.style.display = 'none';
    //   gridContainer.style.display = 'grid';
    //   header.style.display = 'flex';
    //   footer.style.display = 'block';
    // });

    // const detailsList = document.createElement("ul");
    // detailsList.classList.add("details-list");

    // const showLang = document.createElement("li");
    // showLang.classList.add("list-item");
    // showLang.innerHTML = `main Language: ${el.language}`;

    // const showTime = document.createElement("li");
    // showTime.classList.add("list-item");
    // showTime.innerHTML = `runtime: ${el.runtime}`;

    // const showPremiere = document.createElement("li");
    // showPremiere.classList.add("list-item");
    // showPremiere.innerHTML = `premiered on: ${el.premiered}`;

    // const showGenre = document.createElement("li");
    // showGenre.classList.add("list-item");
    // showGenre.innerHTML = `Genre: ${el.genres[0]}`;

    // const showDesc = document.createElement("p")
    // showDesc.classList.add("show-description");
    // const string = el.summary.slice(0, 200);
    // showDesc.innerHTML = `${string}...`;

    // detailsList.append(showLang, showPremiere, showGenre, showTime);
    // card.append(showName, detailsList, showDesc);

    card.append(nameLike, commentBtn);
    grid.append(card);
  });
};
/* Get the id, url, image: testSample.image.medium, name, language, runtime,premiered on:,  genre: testSample.genres[0], and summary  */
export default renderCards;