var button = document.getElementById('text-center');
var body = document.body;
const portfolio = document.getElementById('welcome');
var fontsize = document.getElementById('fontsize')
var fontsize2 = document.getElementById('fontsize2')
var fontsize3 = document.getElementById('fontsize3')
var fontsize4 = document.getElementById('fontsize4')
var welcome = document.getElementById('welcome')



body.onmouseover = function() {
	body.className = 'hovered';
    portfolio.className = 'port2';
   welcome.style.color = 'white';
   welcome.style.fontSize = '20px';
   fontsize.style.color = 'white';
   fontsize2.style.color = 'white';
   fontsize3.style.color = 'white';
   fontsize4.style.color = 'white';
}

body.onmouseout = function(body) {
	body.className = 'hovered';
   
}





