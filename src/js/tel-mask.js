document.addEventListener("DOMContentLoaded", () => {
    const telInputs = document.querySelectorAll('input[type="tel"]');
    const eventCalllback = function (e) {
        let clearVal = 'false',
        matrix = "+7 (___) ___-__-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (clearVal !== 'false' && e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    for (let input of telInputs) {
        for (let ev of ['input', 'blur', 'focus']) {
            input.addEventListener(ev, eventCalllback);
        }
    }
})
