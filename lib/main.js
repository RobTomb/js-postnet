
const BARCODE = ['||:::' , ':::||' , 
				 '::|:|' , '::||:' , ':|::|' ,
				 ':|:|:' , ':||::' , '|:::|' ,
				 '|::|:' , '|:|::'];

function formatZip(zipcode) {
	zipcode = zipcode.split('-');

	if(zipcode.length === 2)
		return zipcode[0] + zipcode[1];
	else
		return zipcode[0];
}

function encoding(zipcode) {
	
	let result = '|';
	zipcode = formatZip(zipcode);
	let sum = 0;

	for (let i = 0 ; i < zipcode.length; i++) {
		result += BARCODE[parseInt(zipcode[i])];
		sum += parseInt(zipcode[i]);
	}
	
	result += BARCODE[parseInt(10 - sum % 10)] + '|';
	return result;
}

function formatBarcode(str) {
	if(str.length > 8)
		return str.substr(0,5) + '-' + str.substr(5,str.length - 5);
	else
		return str;

}

function decoding(barcode) {
	let result = '';
	let count = ( barcode.length - 7 ) / 5;
	let i = 0;
	while( i !== count ){
		result += BARCODE.indexOf(barcode.substr( (i * 5 + 1) , 5));
		i += 1;			
	}
	return formatBarcode(result);
}

function main(str){
	let result;
	if( str.match(/[0-9]/) === null )
		result = decoding(str);
	else
		result = encoding(str);
	return result;
}

module.exports = main;
