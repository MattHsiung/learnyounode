var res = 0;
var arr = process.argv.slice(2);

for (var i = 0; i<arr.length;i++){
	res += Number(arr[i])
};   

console.log(res);  
