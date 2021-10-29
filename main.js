var button = document.getElementById('hover');
var body = document.body;
const portfolio = document.getElementById('hoverdwa');
const fontsize = document.getElementById('fontsize')
var welcome = document.getElementById('welcome')



button.onmouseover = function() {
	body.className = 'hovered';
    portfolio.className = 'port2';
    fontsize.className = 'fontsizehover';
   welcome.style.color = 'white';
    

  
}

button.onmouseout = function() {
	body.className = '';
    if(welcome.style.color === 'white'  & body.className === '')  welcome.style.color = 'black';
}





