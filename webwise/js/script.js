let textSize = 100;

const increaseText = document.getElementById("increaseText");
const normalText = document.getElementById("normalText");
const contrastButton = document.getElementById("contrastButton");

increaseText.addEventListener("click", function () {
    if (textSize < 140) {
        textSize += 10;
        document.body.style.fontSize = textSize + "%";
    }
});

normalText.addEventListener("click", function () {
    textSize = 100;
    document.body.style.fontSize = "100%";
});

contrastButton.addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
});