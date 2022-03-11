import { getComments } from './commentsAPI.js';
import { updateLikes } from './likesAPI.js';

const renderComments = async (id, modalCont) => {
  const comments = await getComments(id);
  modalCont.innerHTML = '';
  if (Array.isArray(comments)) {
    comments.forEach((el) => {
      const commentCont = document.createElement('p');
      commentCont.innerHTML = `${el.creation_date} ${el.username}: ${el.comment}`;
      modalCont.append(commentCont);
    });
  }
};

const commentsCount = async (id, cont) => {
  const comments = await getComments(id);
  if (Array.isArray(comments)) {
    const commentCount = comments.length;
    cont.innerHTML = `Comments: ${commentCount}`;
  } else {
    cont.innerHTML = 'Comments: 0';
  }
};

const likeCount = async (Id, cont) => {
  const count = await updateLikes(Id);
  cont.innerHTML = `${count} likes`;
};

export { renderComments, likeCount, commentsCount };