import { headerElement, button } from './elements';
import '../css/main.scss';
// import '../assets/imgs/bg.jpeg';

headerElement.setAttribute('class', 'redColor');
var color = 'red';

button.addEventListener('click', changeColor);

function changeColor() {
    console.log('clicked');
    if(color === 'red') {
        color = 'green';
        headerElement.setAttribute('class', 'greenColor');
    } else {
        color = 'red';
        headerElement.setAttribute('class', 'redColor');
    }
}