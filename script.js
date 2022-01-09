const textField = document.getElementById('text-field')
const buttons = document.querySelectorAll('.calculator-button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        textField.value = textField.value + button.innerText
    })
})
const evalButton = document.getElementById('evaluate-button')
evalButton.addEventListener('click', () => {
    evaluate(textField.value)
})
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    textField.value = ''
})

function evaluate (expression) {
    expression = expression.toString()
    //
    textField.value = result
}