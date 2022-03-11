import { renderImage2 } from './createImg.js'
let displayModal = document.querySelector('.modal-content');
const grid = document.querySelector('.grid-container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const popModal = (element) => {
  displayModal.innerHTML = '';
  const ItemsCont = document.createElement("div");
  ItemsCont.classList.add("modal-items");

  const closeSpan = document.createElement("span");
  closeSpan.classList.add("span-close");
  closeSpan.innerHTML = "&times;";
  closeSpan.addEventListener('click', (e) => {
    e.preventDefault();
    displayModal.style.display = 'none';
    grid.style.display = 'grid';
    header.style.display = 'flex';
    footer.style.display = 'block';
  });

  const ShowTitle = document.createElement("h3");
  ShowTitle.innerHTML = element.name;

  const elementItems = document.createElement("div");
  elementItems.classList.add("modal-description");

    const showLang = document.createElement("div");
    showLang.classList.add("list-item");
    showLang.innerHTML = `main Language: ${element.language}`;

    const showTime = document.createElement("div");
    showTime.classList.add("list-item");
    showTime.innerHTML = `runtime: ${element.runtime}`;

    const showPremiere = document.createElement("div");
    showPremiere.classList.add("list-item");
    showPremiere.innerHTML = `premiered on: ${element.premiered}`;

    const showGenre = document.createElement("div");
    showGenre.classList.add("list-item");
    showGenre.innerHTML = `Genre: ${element.genres[0]}`;

    const showDesc = document.createElement("p")
    showDesc.classList.add("show-description");
    const string = element.summary.slice(0, 200);
    showDesc.innerHTML = `${string}...`;

    elementItems.append(showLang, showPremiere, showGenre, showTime);

    ItemsCont.append(closeSpan);
    renderImage2(element.image.medium, ItemsCont);
    ItemsCont.append(elementItems);
    displayModal.append(ItemsCont);


};/* Get the id, url, image: testSample.image.medium, name, language, runtime,premiered on:,  genre: testSample.genres[0], and summary  */

export default popModal

// displayModal =    ` 
// <div class="modal-items" >
//   <span class="span-close">&times;</span>
//   <div class="modal-image" >${renderImage2(element.image.medium)}</div>
//   <h3>Movie 1</h3>
//   <div class="modal-description" >
//     <div>modal-description 1</div>
//     <div>modal-description 2</div>
//   </div>
//   <h3 class="modal-header2" >Comments(2)</h3>
//   <div class="modal-comments" >
//     <p>Coment 1</p>
//     <p>Coment 2</p>
//     <p>Coment 3</p>
//     <p>Coment 4</p>
//     <p>Coment 5</p>
//     <p>Coment 4</p>
//     <p>Coment 4</p>
//   </div>
//   <h3>Add a comment</h3>
//   <div>
//     <form action="#" class="comment-form">
//       <input type="text" placeholder="Your Name" ><br><br>
//       <textarea rows="8" cols="40" placeholder="Your Insight">            
//       </textarea><br><br>
//       <input type="button" value="Comment">
//     </form>
//   </div>
// </div>
// `;