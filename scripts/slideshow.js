var images = document.getElementsByClassName("project-link");
var imageIndex = Math.floor(Math.random() * images.length);
var timeout = setTimeout(nextImage(), 4000);

function hideImages() {
  for(var i = 0; i < images.length; i++){
    $(images[i]).fadeOut(1);
  }
}

function showImage() {
  if (imageIndex < 0) imageIndex = images.length-1;
  if (imageIndex > images.length-1) imageIndex = 0;
  image = images[imageIndex];
  $(image).fadeIn(1);
}

function lastImage() {
  hideImages();
  imageIndex -= 1;
  showImage(imageIndex);
  clearTimeout(timeout);
  timeout = setTimeout(nextImage, 4000);
}

function nextImage() {
  hideImages();
  imageIndex += 1;
  showImage(imageIndex);
  clearTimeout(timeout);
  timeout = setTimeout(nextImage, 4000);
}
