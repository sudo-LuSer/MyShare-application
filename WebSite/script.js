UserName=prompt("Enter your name please :");

document.getElementById('Name').innerHTML="Welcome "+UserName;

document.getElementById('username').innerHTML=UserName;

document.getElementById('QRCODE').style.background='url(Images/QRONE.png)';

setInterval(function(){

	document.getElementById('QRCODE').style.background='url(Images/QRONE.png)';

	setTimeout(function(){

		document.getElementById('QRCODE').style.background='url(Images/QRTWO.png)';

	},1500);

},1000);