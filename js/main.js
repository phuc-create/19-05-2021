const cursor = document.querySelector(".cursor");
const lineAbout = document.getElementById("_m-line");
const txtH = document.querySelectorAll(".cursor-hover-large");
const txtP = document.querySelectorAll(".cursor-hover-small");
const overlayMain = document.querySelector(".main__overlay");
window.addEventListener("mousemove", (e) => {
    cursor.style.top = e.pageY + "px";
    cursor.style.left = e.pageX + "px";
});
txtH.forEach(txtSingleH => {
    txtSingleH.addEventListener("mouseover", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(14)";
        txtSingleH.style.zIndex = 10;
        overlayMain.classList.add("is-active");
    })
    txtSingleH.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0)";
        txtSingleH.style.zIndex = "unset";
        overlayMain.classList.remove("is-active");
    });
});

txtP.forEach(txtSingleP => {
    txtSingleP.addEventListener("mouseover", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(7)";
        txtSingleP.style.zIndex = 10;
        overlayMain.classList.add("is-active");
    });
    txtSingleP.addEventListener("mouseleave", () => {
        cursor.style.transform = "translate(-50%, -50%) scale(0)";
        txtSingleP.style.zIndex = "unset";
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