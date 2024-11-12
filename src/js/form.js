import { formFeedbackFunc } from './form-feedback-func.js'
const formInstructions = document.querySelector(".instructions__form");
    const formInstructionsTel = formInstructions.querySelector("input[type='tel']");
    const formInstructionsCheckbox = formInstructions.querySelector("input[type='checkbox']");
    const formInstructionsSubmit = formInstructions.querySelector(".instructions__form-action .btn");

    formInstructionsSubmit.addEventListener("click", (e) => {
        e.preventDefault();
        if (formInstructionsTel.value.length < 18) {
            formFeedbackFunc(formInstructions, "Неправильно введён номер", false);
        } else if (!formInstructionsCheckbox.checked) {
            formFeedbackFunc(formInstructions, "Необходимо принять условия соглашения", false);
        } else {
            formFeedbackFunc(formInstructions, "Промокод выслан на ваш номер", true);
            formInstructions.reset();
        }
    });