const leftContent = document.querySelector(".LeftContent");

leftContent.addEventListener("mouseover", function () {
    leftContent.classList.add("zoomOUT");
});

leftContent.addEventListener("mouseout", function () {
    leftContent.classList.remove("zoomOUT");
});