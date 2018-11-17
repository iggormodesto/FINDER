import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// Se você quiser que seu aplicativo funcione off-line e carregue mais rápido, você pode alterar
// desregistrar () para registrar () abaixo. Note que isso vem com algumas armadilhas.
// Saiba mais sobre trabalhadores de serviços: http://bit.ly/CRA-PWA

var filter = document.getElementById('filter');
var list = document.getElementById('list');
var listItems = list.querySelectorAll('li');

//filter.focus();

filter.addEventListener('keyup', function(e) {
    var val = new RegExp(e.target.value, 'gi');
    for(var i=0; i<listItems.length; i++) {
        if( e.target.value.length > 0) {
            var text = listItems[i].innerHTML;
            
            if( !text.match(val)) {
                listItems[i].classList.add('is-hidden');
            } else {
                listItems[i].classList.remove('is-hidden');
            }
    } else {
        listItems[i].classList.remove('is-hidden');
    }
    
}
});

serviceWorker.unregister();