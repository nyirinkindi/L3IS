let value = document.getElementById('value');

let button = Array.from(document.getElementsByClassName('button'));

button.map( button => {
	button.addEventListener('click', (e) => {
	switch(e.target.innerText){

		case 'CLEAR':
		value.innerText = '';
		break;

		case '←':
		if (value.innerText) {
			value.innerText = value.innerText.slice(0, -1);
		} 
		
		break;

		case '=':

		try{
			value.innerText =eval(value.innerText);
		} 
		catch{
			value.innerText = 'Error!';
		}
		break;

		default:
		value.innerText += e.target.innerText;
	}
	});
});