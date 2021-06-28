const buttons = document.querySelectorAll('button');
//select buttons and stores in an array
const result = document.querySelector(".result");
//select the place to show the result of the operation

buttons.forEach(button => {
    button.addEventListener("click", operate);
});
//add event listener to each button

function operate(event) {
    //calculator function
    const clickedButtonValue = event.target.value;
    //store in the variable the current clicked button´s value

    if (clickedButtonValue === '=') {
        //
        if (result.value !== '') {

            result.value = eval(result.value);
        }

    } else if (clickedButtonValue === 'C') {
        result.value = '';
    } else {
        result.value += clickedButtonValue;
    }
}