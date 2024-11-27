display = document.getElementById('display')
buttons = Array.from(document.getElementsByClassName('buttons'))

buttons.map(button => {
    button.addEventListener('click', (e) =>{
        switch (e.target.innerText) {
            case 'C':
                display.innerText = ''
                break;
            case '←':
                display.innerText = display.innerText.slice(0, -1)
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText)
                } catch (error) {
                    display.innerText = 'Error'
                }
                break;
            default: display.innerText = display.innerText + e.target.innerText
                break;
        }
    })
})