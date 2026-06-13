let lightbox = document.querySelector(".lightbox");

lightbox.addEventListener("click", () => {

    lightbox.classList.add("closing");

    setTimeout(() => {
        lightbox.style.display = "none";
        lightbox.classList.remove("closing");
    }, 400);

});

