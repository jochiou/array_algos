// question 1
var arr = [6,3,5,1,2,4];
// var arr = [10,9,8,7,6,5,4,3,2,1];
var sum = 0;
for(var index = 0; index < arr.length; index++){
	sum+= arr[index];
	console.log("Num: " + arr[index] + " Sum: " + sum);
}


// question 2
arr = [10,3,6,9,4,13]
//
for(var index = 0; index < arr.length; index++){
	var num = arr[index];
	if(num >= 10){
		arr[index] = "Big";
	}else if(num <= 5){
		arr[index] = "Small";
	}
}
console.log(arr);


// question 3
arr = [8,6,7,5,3,0,9];
//var arr = [1,2,3,4,5,6,7,8];
//var arr = [1];
//var arr = [];
var arrLastIndex = arr.length -1;
for(var index = 0; index < arr.length/2; index++){
	var temp = arr[index]; // saving the value of current index
	arr[index] = arr[arrLastIndex - index];
	arr[arrLastIndex - index] = temp;
}
console.log(arr);

// question 4
arr [8,6,7,5,3,0,9];

var newArr = [];
for(var index = arr.length -1; index >= 0; index --){
	newArr.push(arr[index]);
}
console.log(newArr);

