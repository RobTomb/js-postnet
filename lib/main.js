
const BARCODE = ['||:::' , ':::||' , '::|:|' , 
				 '::||:' , ':|::|' ,
				 ':|:|:' , ':||::' , '|:::|' ,
				 '|::|:' , '|:|::'];

function str2arrZip(zipcodeStr) {
	return zipcodeStr.split('').map( i => parseInt(i) );
}

function num2bar(zipcodeArr) {
	return zipcodeArr.map( i => BARCODE[i] );
}

function caculate(zipcodeArr) {
	let sum = zipcodeArr.reduce( (sum , i)=> {
		return sum += i;
	} , 0);

	return (10 - sum % 10) % 10;
}

function formatBarcode(barcodeArr) {
	let prime = '|';
	return [...prime , ...barcodeArr , ...prime].join('');
}

function replace(zipcodeStr) {
	return zipcodeStr.replace('-' , '');
}

function encoding(zipcodeStr) {
	zipcodeStr = replace(zipcodeStr);
	let zipcodeArr = str2arrZip(zipcodeStr);
	let barcodeArr = num2bar(zipcodeArr);
	let mod = caculate(zipcodeArr);
	barcodeArr.push(BARCODE[mod]);  
	return formatBarcode(barcodeArr);
}

function str2arrBar(barcodeStr) {
	let count = ( barcodeStr.length - 2 ) / 5 - 1;
	let barcodeArr = [];
	let i = 0;
	while( count !== i ){
		barcodeArr.push(barcodeStr.substr( i * 5 + 1 , 5));
		i++;
	}
	return barcodeArr;
}

function bar2num(barcodeArr) {
	return barcodeArr.map( i => BARCODE.indexOf(i)).join('');
}

function formatZipcode(zipcodeStr) {
	return zipcodeStr.length === 9 ? zipcodeStr.substr(0,5) + '-' + zipcodeStr.substr(5 , 4) : zipcodeStr;
}

function decoding(barcodeStr) {
	let barcodeArr = str2arrBar(barcodeStr);
	let zipcodeStr = bar2num(barcodeArr);
	return formatZipcode(zipcodeStr);
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
