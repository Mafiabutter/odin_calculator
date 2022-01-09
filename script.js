const buttons = document.querySelectorAll('.calculator-button')
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        textField.innerText = document.getElementById('text-field') + button.innerText
    })
})
const evalButton = document.getElementById('evaluate-button')
evalButton.addEventListener('click', () => {
    evaluate(document.getElementById('text-field'))
})
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    document.getElementById('text-field') = ''
})

function evaluate (expression) {
    expression = expression.toString()
    var tokenArray = expression.split('+')
    var result = 0
    if (tokenArray.length > 1) {
        result = parseInt(tokenArray[0]) + parseInt(tokenArray[1])
    }
    tokenArray = expression.split('*')
    if (tokenArray.length > 1) {
        result = parseInt(tokenArray[0]) * parseInt(tokenArray[1])
    }
    tokenArray = expression.split('/')
    if (tokenArray.length > 1) {
        result = parseInt(tokenArray[0]) / parseInt(tokenArray[1])
    }
    tokenArray = expression.split('-')
    if (tokenArray.length > 1) {
        result = parseInt(tokenArray[0]) - parseInt(tokenArray[1])
    }
    document.getElementById('text-field') = ('= ' + result)
}