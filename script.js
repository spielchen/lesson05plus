var numbers = ["3343", "43434", "2646", "1231", "675354", "4777", "7777", "3333"];

for (i=0; i<numbers.length; i++){
	var firstNum = numbers[i].charAt(0);
	if( firstNum=="2"){
	console.log(numbers[i]);
	}
		if( firstNum=="4"){
	console.log(numbers[i]);
	}
}



function simple(num){
var flag = false;

	for ( var x = 1; x < num; x++){	
		for ( var j = 2; j < x; j++){
			if ( x % j == 0) {
				flag = true;
			} 
		}
		if (!flag) console.log(x + ' Делитель этого числа: 1 ' + x);
		flag = false;
	} 
}

simple(100);