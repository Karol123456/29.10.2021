var button = document.getElementById('hover');
var body = document.body;
const portfolio = document.getElementById('hoverdwa');
const fontsize = document.getElementById('fontsize')

button.onmouseover = function() {
	body.className = 'hovered';
    portfolio.className = 'port2';
    fontsize.className = 'fontsizehover'
   
    
}

button.onmouseout = function() {
	body.className = '';
}





