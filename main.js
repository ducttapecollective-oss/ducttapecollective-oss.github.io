let intervalId;
let isMoving = false;

function switchImages() {
  const carriage1 = document.getElementById("carriage1");
  const carriage2 = document.getElementById("carriage2");
  const carriage3 = document.getElementById("carriage3");

  let img1, img2, img3;

  if (carriage1.children.length > 0) {
    img1 = carriage1.removeChild(carriage1.lastElementChild);
    carriage2.insertBefore(img1, carriage2.firstElementChild);
  }

  if (carriage2.children.length > 0) {
    img2 = carriage2.removeChild(carriage2.lastElementChild);
    carriage3.insertBefore(img2, carriage3.firstElementChild);
  }

  if (carriage3.children.length > 0) {
    img3 = carriage3.removeChild(carriage3.lastElementChild);
    carriage4.insertBefore(img3, carriage4.firstElementChild);
  }
  if (carriage4.children.length > 0) {
    img4 = carriage4.removeChild(carriage4.lastElementChild);
    carriage1.insertBefore(img4, carriage1.firstElementChild);
  }
}

function startMoving() {
  if (!isMoving) {
    isMoving = true;
    intervalId = setInterval(switchImages, 200);
  }
}

function stopMoving() {
  if (isMoving) {
    isMoving = false;
    clearInterval(intervalId);
  }
}

document.querySelector(".train").addEventListener("mouseover", startMoving);
document.querySelector(".train").addEventListener("mouseout", stopMoving);

function replaceContent() {
  var box = document.getElementById("nav");
  var content = document.getElementById("description");
  var verline = document.getElementById("divideline");
  var about = document.getElementsByClassName("about");
  var currentContent = content.innerHTML;
  var newContent = 'DuctTape collective is a research duo formed by <a href="https://www.naisyuanye.com/">Nai-Syuan Ye</a> and <a href="https://polinaslavova.com/index.html">Polina Slavova</a> based in Arnhem, the Netherlands. The duo collaboration explores methods for generating machines, focusing on character building towards stimulation of people’s emotion. We believe that technology should be easily accessible to a larger public, which we intend through the use of humor, storytelling and interactivity. The name DuctTape refers to the simplistic method of using tape to fix issues in the physical space, expressing the vernacular character of our working methods and the light-hearted approach to the topic of human-machine relationship. By designing physical scenarios, tools, interactive experiences, and multimedia installations, we aim to create awareness on the nuances of technology and its effects on our daily lives.<br><br><br><br><br><br>Email: ducttapecollective@gmail.com<br>Instagram: <a target="_blank" href="https://www.instagram.com/ducttapecollective/">@ducttapecollective</a>';

  // Get the rotateImg element
  var rotateImg = document.getElementById("rotateImg");

  if (currentContent === newContent) {
    content.innerHTML = 'DuctTape collective is a research duo formed by <a href="https://www.naisyuanye.com/">Nai-Syuan Ye</a> and <a href="https://polinaslavova.com/index.html">Polina Slavova</a> based in Arnhem, the Netherlands. The duo collaboration explores methods for generating machines, focusing on character building towards stimulation of people’s emotion.';
    verline.style.height='78px';
    box.style.height='auto';
    about[0].style.display='none';

    // Rotate the image back to its original position
    rotateImg.style.transform = "rotate(0deg)";
  } else {
    content.innerHTML = newContent;
    box.style.height='98vh';
    verline.style.height='90%';
    about[0].style.display='block';

    // Rotate the image by 180 degrees
    rotateImg.style.transform = "rotate(180deg)";
  }

}

function replaceContentM() {
  var boxM = document.getElementById("navM");
  var contentM = document.getElementById("descriptionM");
  var currentContentM = contentM.innerHTML;
  var newContentM = 'DuctTape collective is a research duo formed by <a href="https://www.naisyuanye.com/">Nai-Syuan Ye</a> and <a href="https://polinaslavova.com/index.html">Polina Slavova</a> based in Arnhem, the Netherlands. The duo collaboration explores methods for generating machines, focusing on character building towards stimulation of people’s emotion. We believe that technology should be easily accessible to a larger public, which we intend through the use of humor, storytelling and interactivity. The name DuctTape refers to the simplistic method of using tape to fix issues in the physical space, expressing the vernacular character of our working methods and the light-hearted approach to the topic of human-machine relationship. By designing physical scenarios, tools, interactive experiences, and multimedia installations, we aim to create awareness on the nuances of technology and its effects on our daily lives.<br><br><br><br>Email: ducttapecollective@gmail.com<br>Instagram: <a target="_blank" href="https://www.instagram.com/ducttapecollective/">@ducttapecollective</a>';

  // Get the rotateImg element
  var rotateImgM = document.getElementById("rotateImgM");

  if (currentContentM === newContentM) {
    contentM.innerHTML = 'Email: ducttapecollective@gmail.com<br>Instagram: <a target="_blank" href="https://www.instagram.com/ducttapecollective/">@ducttapecollective</a>';
    boxM.style.height='100px';

    // Rotate the image back to its original position
    rotateImgM.style.transform = "rotate(0deg)";
  } else {
    contentM.innerHTML = newContentM;
    boxM.style.height='98%';

    // Rotate the image by 180 degrees
    rotateImgM.style.transform = "rotate(180deg)";
  }
}
//image slider here
const sliderWrapper = document.querySelector(".slider-wrapper");
const sliderPrev = document.querySelector(".slider-prev");
const sliderNext = document.querySelector(".slider-next");
const quote = document.querySelectorAll(".slider-wrapper h3");

let currentIndex = 0;

sliderPrev.addEventListener("click", () => {
  currentIndex = (currentIndex === 0) ? quote.length - 1 : currentIndex - 1;
  updateSlider();
});

sliderNext.addEventListener("click", () => {
  currentIndex = (currentIndex === quote.length - 1) ? 0 : currentIndex + 1;
  updateSlider();
});

function updateSlider() {
  sliderWrapper.style.transform = `translateX(-${currentIndex * (100 / quote.length)}%)`;
}

//zoom
function zoom(id){
   var projectcontent = document.getElementById(id);
   if(projectcontent.style.display == 'none'){
		 projectcontent.style.display = 'block';
		 projectcontent.style.zIndex = '20000';
	 }
	 else{
		 	projectcontent.style.display = 'none';
	 }
}
