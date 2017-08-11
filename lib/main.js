
function formatLyrics(num) {
	if( num === 2 )
		return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottle of beer on the wall.`;
	else if( num === 1 )
		return `${num} bottle of beer on the wall, ${num} bottle of beer.
Take one down and pass it around, no more bottles of beer on the wall.
No more bottles of beer on the wall, no more bottles of beer.
Go to the store and buy some more, 99 bottles of beer on the wall.`
	else
		return `${num} bottles of beer on the wall, ${num} bottles of beer.
Take one down and pass it around, ${num - 1} bottles of beer on the wall.`;
}

function main(num){
	let result = '';
	if( num === 2 )
		result += formatLyrics(num);
	if( num === 1 )
		result += formatLyrics(num);
	if( num === 99 ){
		
		while( num !== 0 ){
			result += formatLyrics(num) + '\n';
			num -= 1;
		}
	}
	return result;
}

module.exports = main;
