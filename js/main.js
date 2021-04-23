const cursor = document.querySelector(".cursor");
const lineAbout = document.getElementById("_m-line");
const lineAbout2 = document.querySelector("._m-line._m-line2");
const txtH = document.querySelectorAll(".cursor-hover-large");
const txtP = document.querySelectorAll(".cursor-hover-small");
const overlayMain = document.querySelector(".main__overlay");
window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});
txtH.forEach(txtSingleH => {
    txtSingleH.addEventListener("mouseover", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(12)";
        txtSingleH.style.zIndex = 10;
        document.body.style.cursor = "none";
        overlayMain.classList.add("is-active");
    })
    txtSingleH.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0)";
        txtSingleH.style.zIndex = "unset";
        document.body.style.cursor = "unset";
        overlayMain.classList.remove("is-active");
    });
});

txtP.forEach(txtSingleP => {
    txtSingleP.addEventListener("mouseover", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(7)";
        txtSingleP.style.zIndex = 10;
        document.body.style.cursor = "none";
        overlayMain.classList.add("is-active");
    });
    txtSingleP.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0)";
        txtSingleP.style.zIndex = "unset";

        document.body.style.cursor = "unset";
        overlayMain.classList.remove("is-active");
    });
});

document.addEventListener("scroll", (e) => {
    let windowScroll = window.scrollY;
    if (windowScroll > 181) {
        lineAbout.classList.add("setFull");
    } else {
        lineAbout.classList.remove("setFull");
    };
});

const nextPage = document.getElementById("main__btn-abs");
const setSlide = document.querySelector(".main__slider");

let firstSlide = 0
nextPage.addEventListener("click", () => {
    firstSlide -= 50;
    console.log(firstSlide);
    setSlide.style.transform = `translateX(${firstSlide}%)`;
    setTimeout(() => {
        if (!lineAbout2.classList.contains("fullline")) {
            lineAbout2.classList.add("fullline")
        } else {
            lineAbout2.classList.remove("fullline")
        }
    }, 1000);
})

const mainBtnPrev = document.getElementById("m__prev");
const mainBtnNext = document.getElementById("m__next");
const imgSlider = document.getElementById("transformImgs");
const topicSlider = document.getElementById("transformTopic");
const contentSilder = document.getElementById("transformContent");

let indexImg = 0;
let indexTopic = 0;
mainBtnNext.addEventListener("click", () => {
    indexImg += 100;
    imgSlider.style.transform = `translateY(-${indexImg}%)`;
    indexTopic += 1;
    topicSlider.style.transform = `translateY(-${indexTopic * 25}%)`;
    contentSilder.style.transform = `translateY(-${indexTopic * 25}%)`;

})