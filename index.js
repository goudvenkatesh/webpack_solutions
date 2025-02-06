let textEl = document.getElementById('text');
let readMoreBtnEl = document.getElementById('readButton');
let previousBtnEl = document.getElementById('previousBtn');
let nextBtnEl = document.getElementById('nextBtn');
let sliderTextEl = document.getElementById('sliderText');


let fullText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting in-dustry"
let shortText = fullText.slice(0, 30) + "...";

let isCollapse = true;

function onToggleText() {
    if (isCollapse) {
        textEl.textContent = fullText;
        readMoreBtnEl.textContent = 'ReadLess';
    } else {
        textEl.textContent = shortText;
        readMoreBtnEl.textContent = 'ReadMore..';
    }
    isCollapse = !isCollapse;
}

let slidersText = ["Dr.Reddy's", "HETERO", "BHARAT", "BIOCON"]
let currentIndex = 0;

function updateSlider() {
    sliderTextEl.textContent = slidersText[currentIndex]
}

previousBtnEl.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slidersText.length) % slidersText.length;
    updateSlider()
})

nextBtnEl.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slidersText.length;
    updateSlider()
})