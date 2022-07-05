const txt = document.querySelectorAll(".split-txt");

for (var i = 0; txt[i]; i++) {
    txt[i].innerHTML = txt[i].textContent.replace(/\S/g, "<span class='splited'>$&</span>");
}