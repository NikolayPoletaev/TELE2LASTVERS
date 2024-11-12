export function formFeedbackFunc(form, text, ok) {
    const formFeedback = form.querySelector(".instructions__form-feedback");
    const images = formFeedback.querySelectorAll("img");
    if (!ok) {
        images[1].classList.remove("hidden");
        images[0].classList.add("hidden");
    } else {
        images[0].classList.remove("hidden");
        images[1].classList.add("hidden");
    }
    
    const formFeedbackText = formFeedback.querySelector("div");
    formFeedbackText.textContent = text;
    formFeedback.classList.remove("instructions__form-feedback_hidden");
}