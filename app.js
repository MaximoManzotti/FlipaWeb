let titleTexts = document.querySelector("#textsContainerAboutWork");
let titleTextsPorfolio = document.querySelector("#textsContainerPorfolio");
let titleTextsMain = document.querySelector("#textsContainerMainTexts");


window.addEventListener("load", function() {
    new Glider(document.querySelector(".glider"), {
        slidesToShow: 3,
        draggable: true,
        dots: "#dots",
        arrows: {
            prev: ".glider-prev",
            next: ".glider-next",
        },
    });
});


function Cards(paragraph, description) {
    switch (paragraph) {
        case 1:
            titleTextsMain.innerHTML = `<p>${description}</p>`;
            break;
        case 2:
            titleTextsPorfolio.innerHTML = `<p>${description}</p>`;
            break;
        case 3:
            titleTexts.innerHTML = `<p>${description}</p>`;
            break;
        default:
            titleTexts.innerHTML = `<p>No cargo correctamente el texto</p>`;
            break;
    }
}