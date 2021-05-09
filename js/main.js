const cursor = document.querySelector(".cursor");
const lineAbout = document.getElementById("_m-line");
const lineAbout2 = document.querySelector("._m-line._m-line2");
const lineAbout3 = document.querySelector("._m-line._m-line3");
const txtH = document.querySelectorAll(".cursor-hover-large");
const txtP = document.querySelectorAll(".cursor-hover-small");
const overlayMain = document.querySelector(".main__overlay");
window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});
//set zoom for h1
txtH.forEach((txtSingleH) => {
    txtSingleH.addEventListener("mouseover", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(12)";
        txtSingleH.style.zIndex = 10;
        document.body.style.cursor = "none";
        overlayMain.classList.add("is-active");
    });
    txtSingleH.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0)";
        txtSingleH.style.zIndex = "1";
        document.body.style.cursor = "unset";
        overlayMain.classList.remove("is-active");
    });
});
//set zoom for p
txtP.forEach((txtSingleP) => {
    txtSingleP.addEventListener("mouseover", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(7)";
        txtSingleP.style.zIndex = 10;
        document.body.style.cursor = "none";
        overlayMain.classList.add("is-active");
    });
    txtSingleP.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0)";
        txtSingleP.style.zIndex = "1";

        document.body.style.cursor = "unset";
        overlayMain.classList.remove("is-active");
    });
});
//set scroll for wwindow
document.addEventListener("scroll", (e) => {
    let windowScroll = window.scrollY;
    if (windowScroll > 181) {
        lineAbout.classList.add("setFull");
    } else {
        lineAbout.classList.remove("setFull");
    }
});
//btn control in page 2
const nextPage = document.getElementById("main__btn-abs");
const setSlide = document.querySelector(".main__slider");

nextPage.addEventListener("click", () => {
    let actived = document.querySelector(".main-bar-single.active");
    let firstSlide = 0;
    firstSlide -= 25;
    console.log(firstSlide);
    setSlide.style.transform = `translateX(${firstSlide}%)`;
    const setBarspec = document.getElementById("special-bar");
    actived.classList.remove("active");
    lineBarSingle.forEach((line) => {
        line.style.background = "#000";
    });
    if (!setBarspec.classList.contains("active")) {
        setBarspec.classList.add("active");
    }
    if ((firstSlide = -25)) {
        setTimeout(() => {
            lineAbout2.classList.add("fullline");
        }, 1000);
    } else {
        setTimeout(() => {
            lineAbout2.classList.remove("fullline");
        }, 1000);
    }
});

//all property when click control btns
const mainBtnPrev = document.getElementById("m__prev");
const mainBtnNext = document.getElementById("m__next");
const imgSlider = document.getElementById("transformImgs");
const topicSlider = document.getElementById("transformTopic");
const contentSilder = document.getElementById("transformContent");

let indexImg = 0;
let indexTopic = 0;
mainBtnNext.addEventListener("click", () => {
    indexImg += 100;
    indexTopic += 1;
    if (indexImg > 300) {
        indexImg = 0;
        indexTopic = 0;
    }
    imgSlider.style.transform = `translateY(-${indexImg}%)`;

    topicSlider.style.transform = `translateY(-${indexTopic * 25}%)`;
    contentSilder.style.transform = `translateX(-${indexTopic * 25}%)`;
});
mainBtnPrev.addEventListener("click", () => {
    indexImg -= 100;
    indexTopic -= 1;
    if (indexImg < 0) {
        indexImg = 300;
        indexTopic = 3;
    }
    imgSlider.style.transform = `translateY(-${indexImg}%)`;
    topicSlider.style.transform = `translateY(-${indexTopic * 25}%)`;
    contentSilder.style.transform = `translateX(-${indexTopic * 25}%)`;
});
//all page of main controled here !
const mainBarSingle = document.querySelectorAll(".main-bar-single");
const lineBarSingle = document.querySelectorAll(".-bar-single");

mainBarSingle.forEach((BarSingle, i) => {
    i = i * 25;
    BarSingle.addEventListener("click", () => {
        let actived = document.querySelector(".main-bar-single.active");

        actived.classList.remove("active");
        setSlide.style.transform = `translateX(-${i}%)`;
        if (!BarSingle.classList.contains("active")) {
            BarSingle.classList.add("active");
        }
        lineBarSingle.forEach((line) => {
            if (i == 25) {
                setLine(line);
                setTimeout(() => {
                    if (!lineAbout2.classList.contains("fullline")) {
                        lineAbout2.classList.add("fullline");
                    }
                }, 1000);
            } else {
                line.style.background = "#fff";
                lineAbout2.classList.remove("fullline");
            }

            if (i == 50) {
                setTimeout(() => {
                    if (!lineAbout3.classList.contains("fullline")) {
                        lineAbout3.classList.add("fullline");
                    }
                }, 1000);
            } else {
                lineAbout3.classList.remove("fullline");
            }
        });
    });
});

function setLine(lineOfMain) {
    lineOfMain.style.background = "#000";
}

const tll = document.querySelector(".t__l-l");
const tlr = document.querySelector(".t__l-r");
tlr.addEventListener("click", () => {
    tll.classList.toggle("active");
    tlr.classList.toggle("active");
});