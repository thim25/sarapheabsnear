const btnAgree = document.querySelector(".btnPrimary");

const btnDisagree = document.querySelector(".btnSecondary");

const text = document.querySelector(".text");



btnAgree.addEventListener("click", () => {

text.innerText = "តោះ!!​ រៀបការស្អែក😍";

});

btnDisagree.addEventListener("mouseover", () => {

    if (btnDisagree.classList.contains("moving")) {

        btnDisagree.classList.remove("moving");

    } else {

        btnDisagree.classList.add("moving");

    }

});