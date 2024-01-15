// service_6a027bh
// template_aw5y8k5
// awDmsVavwq5FzarfI

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX / 20;
    const y = event.clienty / 20;
    


for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const booInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px)`
}
}

function toggleContrast {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
    document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('modal__overlay--success')
    loading.classList += " modal__overlay--visible";

    emailjs
        .sendForm(
            'service_6a027bh',
            'template_aw5y8k5',
            event.target,
            'awDmsVavwq5FzarfI'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at (email here)"
            );
        }
}


function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " Modal--open";

}
