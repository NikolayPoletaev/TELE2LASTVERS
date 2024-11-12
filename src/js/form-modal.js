import { formFeedbackFunc } from './form-feedback-func.js'

const formDialog = document.querySelector(".form-modal");
const formButtonOpen = document.querySelector(".promo__block-action .btn");
const formButtonSubmit = document.querySelector(".form-modal .instructions__form-action .btn");
const formTelInput = document.querySelector(".form-modal input[type='tel']")
const formFeedback = document.querySelector(".form-modal .instructions__form-feedback");
const formCheckbox = formDialog.querySelector(".instructions__form-checkbox");

formButtonOpen.addEventListener("click", () => {
    formDialog.showModal();
    document.body.classList.add("scroll-lock");
});

formButtonSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (formTelInput.value.length < 18) {
        formFeedbackFunc(formDialog, "Неправильно введён номер", false);
    } else if (!formCheckbox.checked) {
        formFeedbackFunc(formDialog, "Необходимо принять условия соглашения", false);
    } else {
        formFeedbackFunc(formDialog, "Промокод выслан на ваш номер", true);
        setTimeout(() => {
            formDialog.querySelector("form").reset();
            formDialog.close();
            document.body.classList.remove("scroll-lock");
            formFeedback.classList.add("instructions__form-feedback_hidden");
        }, 1000);
    }

});