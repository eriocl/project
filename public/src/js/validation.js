const $phone = document.querySelector("input[name=client_phone]")
const $email = document.querySelector("input[name=client_email]")
const $name = document.querySelector("input[name=client_name]")

function isValidPhone(str) {
    const regEx = /^(\+{0,})(\d{0,})([(]{1}\d{1,3}[)]{0,}){0,}(\s?\d+|\+\d{2,3}\s{1}\d+|\d+){1}[\s|-]?\d+([\s|-]?\d+){1,2}(\s){0,}$/gm

    return regEx.test(str)
} 

function isValidEmail(str) {
    const regEx = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/gm

    return regEx.test(str)
}

function isValidName(str) {
    const regEx = /^([А-ЯA-Z]|[А-ЯA-Z][\x27а-яa-z]{1,}|[А-ЯA-Z][\x27а-яa-z]{1,}\-([А-ЯA-Z][\x27а-яa-z]{1,}|(оглы)|(кызы)))\040[А-ЯA-Z][\x27а-яa-z]{1,}(\040[А-ЯA-Z][\x27а-яa-z]{1,})?$/gm
    return regEx.test(str)
}

$phone.addEventListener('blur', ()=>{
    if(!isValidPhone($phone.value)) {
        $phone.classList.add('is-invalid')
        $phone.focus()
    } else {
        $phone.classList.remove('is-invalid')
        $phone.classList.add('is-valid')
    }
})

$email.addEventListener('blur', ()=>{
    if(!isValidEmail($email.value)) {
        $email.classList.add('is-invalid')
        $email.focus()
    } else {
        $email.classList.remove('is-invalid')
        $email.classList.add('is-valid')
    }
})

$name.addEventListener('blur', ()=>{
    if(!isValidName($name.value)) {
        $name.classList.add('is-invalid')
        $name.focus()
    } else {
        $name.classList.remove('is-invalid')
        $name.classList.add('is-valid')
    }
})

