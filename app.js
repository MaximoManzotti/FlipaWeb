let TitleTexts = document.querySelector("#textsContainerAboutWork");
let TitleTextsPorfolio = document.querySelector("#textsContainerPorfolio");
let TitleTextsMain = document.querySelector("#textsContainerMainTexts");
let Name = document.querySelector('#nameForm')
let Team = document.querySelector('#teamForm')
let Mail = document.querySelector('#mailTo')
let ButtonForm = document.getElementById('submit');
let CheckboxForm = document.getElementById('cbox')

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
            TitleTextsMain.innerHTML = `<p>${description}</p>`;
            break;
        case 2:
            TitleTextsPorfolio.innerHTML = `<p>${description}</p>`;
            break;
        case 3:
            TitleTexts.innerHTML = `<p>${description}</p>`;
            break;
        default:
            TitleTexts.innerHTML = `<p>No cargo correctamente el texto</p>`;
            break;
    }
}

ButtonForm.addEventListener('click', function(event) {
    event.preventDefault();
    this.innerHTML = "Button clicked!";
});

function sendMail(params) {
    if (CheckboxForm.checked) {
        console.log(Mail.value)
        let tempParms = {
            from_name: Name.value,
            to_name: Team.value,
            mail: Mail.value,

        }
        emailjs.send('gmail', 'template_flipa', tempParms)
            .then(function(res) {
                console.log('success', res.status)
            })
    } else {
        console.log('tenes que aceptar los terminos y condiciones')

    }

}