const inputEmail = document.querySelector('#email')
const form = document.querySelector('.inputEmail')
const spanError = document.querySelector('.spanError')
const errorIcon = document.querySelector('.errorIcon')

form.onsubmit = (e) => {
    e.preventDefault()
    const re = /\S+@\S+\.\S+/
    if(re.test(inputEmail.value)) {
        form.submit()
    } else {
        inputEmail.classList.add('error')
        spanError.classList.add('active')
        errorIcon.classList.add('active')
    }
}