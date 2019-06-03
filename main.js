const backgroundList = [
'1.jpg',
 '2.jpg', 
 '3.jpg', 
 '4.jpg', 
 '5.jpg'];
const backgroundTextList = [
 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint minus, optio facilis.',
 'Lorem ipsum dolor sit amet, consectetur adipisicing.', 
 'Lorem ipsum dolor.', 
 'Lorem ipsum dolor sit amet.', 
 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, ducimus.'];
const backgroundImage = document.getElementById('image');
const backgroundText = document.getElementById('imageText')
const previousArrow = document.getElementById('previous');
const nextArrow = document.getElementById('next');
const swipe = document.getElementsByClassName('swipe')
let currentImageNumber = 0;
let imageTimer = setInterval(activateNextSlide, 6000);

// Set inital image and text

setBackgroundImage(currentImageNumber);
setBackgroundText(currentImageNumber);

// Functions

nextArrow.addEventListener('click', event => {
	activateNextSlide();
});

function nextSlide() {
	if (currentImageNumber === 0 || currentImageNumber < backgroundList.length - 1) {
		currentImageNumber++;
		setBackgroundImage(currentImageNumber);
		setBackgroundText(currentImageNumber);
	} else {
		currentImageNumber = 0;
		setBackgroundImage(currentImageNumber);
		setBackgroundText(currentImageNumber);
	}
};

function activateNextSlide() {
	activateSwipe();
	setTimeout(nextSlide, 400);
	setTimeout(toggleText, 400);
	setTimeout(deactivateSwipe, 1000);
	setTimeout(toggleText, 1200);
	resetImageTimer();
}

previousArrow.addEventListener('click', event => {
	activatePreviousSlide();
});

function previousSlide() {
	if (currentImageNumber === 0 || currentImageNumber > backgroundList.length) {
		currentImageNumber = backgroundList.length - 1;
		setBackgroundImage(currentImageNumber);
		setBackgroundText(currentImageNumber);
	} else {
		currentImageNumber--;
		setBackgroundImage(currentImageNumber);
		setBackgroundText(currentImageNumber);
	}
		console.log(currentImageNumber);
};

function activatePreviousSlide() {
	activateSwipe();
	setTimeout(previousSlide, 400);
	setTimeout(toggleText, 400);
	setTimeout(deactivateSwipe, 1000);
	setTimeout(toggleText, 1200);
	resetImageTimer();
}

// Utilites

function activateSwipe() {
	swipe[0].id = "swipeCover";
};

function deactivateSwipe() {
	swipe[0].id = "";
};

function toggleText() {
   var element = document.getElementById("imageText");
   element.classList.toggle("opacity");
};

function setBackgroundImage(currentImageNumber) {
	backgroundImage.style.backgroundImage = "url(images/" + backgroundList[currentImageNumber] + ")";
};

function setBackgroundText(currentImageNumber) {
	backgroundText.innerHTML = backgroundTextList[currentImageNumber];
}

function resetImageTimer() {
	clearInterval(imageTimer);
	imageTimer = setInterval(activateNextSlide, 6000);
}