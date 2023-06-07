let fullName = document.getElementById("name");
let email = document.getElementById("email");
let phoneNumber = document.getElementById("number");
let preferences = document.getElementById("preferences");
let receive = document.getElementById("receive");
let error = document.getElementsByClassName("error");

fullName.addEventListener("click", () => {
    fullName.style.outline = "#eb7535 1px solid";
})

email.addEventListener("click", () => {
    email.style.outline = "#eb7535 1px solid";
})

phoneNumber.addEventListener("click", () => {
    phoneNumber.style.outline = "#eb7535 1px solid";
})

fullName.addEventListener("mouseleave", () => {
    fullName.style.outline = "none";
})

email.addEventListener("mouseleave", () => {
    email.style.outline = "none";
})

phoneNumber.addEventListener("mouseleave", () => {
    phoneNumber.style.outline = "none";
})

function validate() {
    let fullNameValue = fullName.value.trim();
    let emailValue = email.value.trim();
    let phoneNumberValue = phoneNumber.value;
    let preference = "";

    if (fullNameValue === "") {
        error[0].innerHTML = "Name must be filled";
        error[0].style.marginBottom = "5px";
        error[0].style.marginTop = "3px";
        fullName.style.marginBottom = "0px";
        fullName.style.outline = "#ff2424 1px solid";
        return false;
    } else if (fullNameValue.length < 5) {
        error[0].innerHTML = "Name must be filled at least 5 letters";
        error[0].style.marginBottom = "5px";
        fullName.style.marginBottom = "0px";
        fullName.style.outline = "#ff2424 1px solid";
        return false;
    } else if (isNaN(!fullNameValue)) {
        error[0].innerHTML = "Name must be a alphabetical letters";
        error[0].style.marginBottom = "5px";
        fullName.style.marginBottom = "0px";
        fullName.style.outline = "#ff2424 1px solid";
        return false;
    } else {
        error[0].innerHTML = "";
        error[0].style.margin = "0px";
        fullName.style.marginBottom = "10px";
        fullName.style.outline = "none";
    }

    if (emailValue === "") {
        error[1].innerHTML = "Email must be filled";
        error[1].style.marginBottom = "5px";
        error[1].style.marginTop = "3px";
        email.style.marginBottom = "0px";
        email.style.outline = "#ff2424 1px solid";
        return false;
    } else if (emailValue.split("@").length !== 2) {
        error[1].innerHTML = "Email must contain one @ symbol";
        error[1].style.marginBottom = "5px";
        error[1].style.marginTop = "3px";
        email.style.marginBottom = "0px";
        email.style.outline = "#ff2424 1px solid";
        return false;
    } else if (emailValue.split("@")[0].length === 0) {
        error[1].innerHTML = "In front of @ must have a letter";
        error[1].style.marginBottom = "5px";
        error[1].style.marginTop = "3px";
        email.style.marginBottom = "0px";
        email.style.outline = "#ff2424 1px solid";
        return false;
    } else if (emailValue.split("@")[1].length === 0) {
        error[1].innerHTML = "In behind of @ must have a letter";
        error[1].style.marginBottom = "5px";
        error[1].style.marginTop = "3px";
        email.style.marginBottom = "0px";
        email.style.outline = "#ff2424 1px solid";
        return false;
    } else if (!emailValue.split("@")[1].includes(".")) {
        error[1].innerHTML = "In behind of @ must have a .";
        error[1].style.marginBottom = "5px";
        error[1].style.marginTop = "3px";
        email.style.marginBottom = "0px";
        email.style.outline = "#ff2424 1px solid";
        return false;
    } else if (emailValue.split(".")[1].length === 0) {
        error[1].innerHTML = "After . must have a character";
        error[1].style.marginBottom = "5px";
        error[1].style.marginTop = "3px";
        email.style.marginBottom = "0px";
        email.style.outline = "#ff2424 1px solid";
        return false;
    } else if (emailValue.split("@")[1][0] === ".") {
        error[1].innerHTML = ". cannot be placed before or after @";
        error[1].style.marginBottom = "5px";
        error[1].style.marginTop = "3px";
        email.style.marginBottom = "0px";
        email.style.outline = "#ff2424 1px solid";
        return false;
    } else {
        error[1].innerHTML = "";
        error[1].style.margin = "0px";
        email.style.marginBottom = "10px";
        email.style.outline = "none";
    }

    if (phoneNumberValue === "") {
        error[2].innerHTML = "Phone number must be filled";
        error[2].style.marginBottom = "5px";
        error[2].style.marginTop = "3px";
        phoneNumber.style.marginBottom = "0px";
        phoneNumber.style.outline = "#ff2424 1px solid";
        return false;
    } else if (isNaN(phoneNumberValue)) {
        error[2].innerHTML = "Phone number must be a number";
        error[2].style.marginBottom = "5px";
        error[2].style.marginTop = "3px";
        phoneNumber.style.marginBottom = "0px";
        phoneNumber.style.outline = "#ff2424 1px solid";
        return false;
    }else{
        error[2].innerHTML = "";
        error[2].style.margin = "0px";
        phoneNumber.style.marginBottom = "10px";
        phoneNumber.style.outline = "none";
    }

    if(document.getElementById("select").selected){
        error[3].innerHTML = "Preferences must be filled";
        error[3].style.marginBottom = "5px";
        error[3].style.marginTop = "3px";
        preferences.style.marginBottom = "0px";
        preferences.style.outline = "#ff2424 1px solid";
        return false;
    }else if(document.getElementById("ramen").selected){
        preference = document.getElementById("ramen").value;
        error[3].innerHTML = "";
        error[3].style.margin = "0px";
        preferences.style.marginBottom = "10px";
        preferences.style.outline = "none";
    }else if(document.getElementById("dry-ramen").selected){
        preference = document.getElementById("dry-ramen").value;
        error[3].innerHTML = "";
        error[3].style.margin = "0px";
        preferences.style.marginBottom = "10px";
        preferences.style.outline = "none";
    }

    if(!receive.checked){
        error[4].innerHTML = "Checkbox must be checked to receive our newsletter";
        error[4].style.marginBottom = "5px";
        error[4].style.marginTop = "3px";
        receive.style.marginBottom = "0px";
        receive.style.outline = "#ff2424 1px solid";
        return false;
    }else{
        error[4].innerHTML = "";
        error[4].style.margin = "0px";
        receive.style.marginBottom = "10px";
        receive.style.outline = "none";
    }

    alert("Thank you " + fullNameValue + " for submitting the form! We have received your information.");
    return true;
}