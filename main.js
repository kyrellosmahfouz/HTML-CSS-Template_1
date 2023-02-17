icon = document.querySelector(".icon")
span_2 = document.getElementById("iconspan2")
list = document.querySelector(".list")
scttp = document.querySelector(".scttp")

function cl() {
    icon.onclick = function () {
        span_2.style.width = "100%";
        list.style.display = "block"
        icon.onclick = function () {
            span_2.style.width = "60%";
            list.style.display = "none"
            cl()
        }
    }
}

window.onscroll = function () {
    if (this.scrollY >= 700) {
        scttp.classList.add("show")
    } else {
        scttp.classList.remove("show")
    }
}

scttp.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

cl()