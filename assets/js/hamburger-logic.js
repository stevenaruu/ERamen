let hamburgerButton = document.getElementById('hamburger');
let hamburgerList = document.getElementsByClassName("hamburgerList")[0];
toggle = true

hamburgerButton.addEventListener("click", () => {
    toggle = !toggle
    if (toggle) {
        hamburgerButton.style.transform = "rotate(90deg)";
        hamburgerList.style.transform = "translateY(0%)";
        let prevNext = document.getElementsByClassName("prevNext")[0];
        if (prevNext) {
            prevNext.style.display = "none";
        }
    } else {
        hamburgerButton.style.transform = "rotate(0deg)";
        hamburgerList.style.transform = "translateY(-100%)";
        let prevNext = document.getElementsByClassName("prevNext")[0];
        if (prevNext) {
            prevNext.style.display = "flex";
        }
    }
})

document.addEventListener("click", (e) => {
    if (!hamburgerButton.contains(e.target) && !hamburgerList.contains(e.target)) {
        hamburgerList.style.transform = "translateY(-100%)";
    }
})

function goToMenu() {
    window.location.href = "../pages/products.html";
}