var imgs = document.getElementsByClassName("project-link");
var imgIndex = Math.floor(Math.random() * imgs.length);
var timeout = setTimeout(nextImg(), 4000);

function hideImgs() {
  for(var i = 0; i < imgs.length; i++){
    $(imgs[i]).fadeOut(1);
  }
}

function showImg() {
  if (imgIndex < 0) imgIndex = imgs.length-1;
  if (imgIndex > imgs.length-1) imgIndex = 0;
  img = imgs[imgIndex];
  $(img).fadeIn(1);
}

function lastImg() {
  hideImgs();
  imgIndex -= 1;
  showImg(imgIndex);
  clearTimeout(timeout);
  timeout = setTimeout(nextImg, 4000);
}

function nextImg() {
  hideImgs();
  imgIndex += 1;
  showImg(imgIndex);
  clearTimeout(timeout);
  timeout = setTimeout(nextImg, 4000);
}
