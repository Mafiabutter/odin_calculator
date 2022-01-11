const textField = document.getElementById('text-field')
const buttons = document.querySelectorAll('.calculator-button')
var toClear = false
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (toClear) {
            textField.value = ''
            toClear = false
        }
        textField.value = textField.value + button.innerText
    })
})
const evalButton = document.getElementById('evaluate-button')
evalButton.addEventListener('click', () => {
    if (toClear) {
        textField.value = ''
        toClear = false
    }
    evaluate(textField.value)
})
const clearButton = document.getElementById('clear-button')
clearButton.addEventListener('click', () => {
    textField.value = ''
})
const deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', () => {
    if (textField.value.length > 0) textField.value = textField.value.slice(0, -1)
})

function evaluate (expression) {
    expression = expression.toString()
    operatorSequence = getOperators(expression)
    numberSequence = getNumbers(expression)
    console.log('Operators:  ' + operatorSequence)
    console.log('Numbers:  ' + numberSequence)
    var result = parseFloat(numberSequence[0])
    for (let a = 1; a < numberSequence.length; a++) {
        let operator = operatorSequence[a - 1]
        if (operator == '+') {
            result += parseFloat(numberSequence[a])
            result = fix(result)
        } else if (operator == '-') {
            result -= parseFloat(numberSequence[a])
            result = fix(result)
        } else if (operator == '*') {
            result *= parseFloat(numberSequence[a])
            result = fix(result)
        } else if (operator == '/') {
            result /= parseFloat(numberSequence[a])
            result = fix(result)
        }
    }
    textField.value = result
}

function getOperators (expression) {
    var operatorList = new Array ()
    for (let a = 1; a < expression.length; a++) {
        if (['+', '-', '*', '/'].includes(expression[a])) {
            if (expression[a] == '-') {
                if (['+', '-', '*', '/'].includes(expression[a - 1])) {
                    continue
                } else {
                    operatorList.push(expression[a])
                }
            } else {
                operatorList.push(expression[a])
            }
        }
    }
    return operatorList
}

function getNumbers (expression) {
    var numberList = new Array ()
    var number = ''
    for (let a = 0; a < expression.length; a++) {
        if (!['+', '*', '/'].includes(expression[a])) {
            if (expression[a] == '-') {
                if ((a == 0) || (['+', '-', '*', '/'].includes(expression[a - 1]))) {
                    number += expression[a]
                } else {
                    numberList.push(number)
                    console.log(number)
                    number = ''
                    continue
                }
            } else {
                number += expression[a]
            }
        } else {
            numberList.push(number)
            console.log(number)
            number = ''
        }
    }
    if (number[number.length - 1] == '.') number += '0'
    console.log(number)
    numberList.push(number)
    return numberList
}

function fix (number) {
    number = parseFloat(number)
    number = number.toFixed(7)
    var result = number.toString()
    if (result.includes('.')) {
        for (let a = (result.length - 1); a >= 0; a--) {
            if (result[a] == '0') {
                result = result.slice(0, -1)
            } else {
                break
            }
        }
        if (result[result.length - 1] == '.') result = result.slice(0, -1)
    }
    return result
}