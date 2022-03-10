const renderImage = (src, cont) => {
  const picCont = document.createElement("div");
  picCont.classList.add("img-cont");

  const img = document.createElement("img");
  img.srcset = src;

  picCont.append(img);
  cont.append(picCont);
};

export default renderImage