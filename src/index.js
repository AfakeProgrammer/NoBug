import _ from 'lodash';
import './style.css';
import Icon from './404.png';
import printMe from './print.js';

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    btn.innerHTML = 'Click Me';
    btn.onclick = printMe;
    element.classList.add('hello');
    var myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);
    element.appendChild(btn);
    return element;
}

document.body.appendChild(component());