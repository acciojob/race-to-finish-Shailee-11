window.promises = [];
var a =document.getElementsById("output");


function createPromise(){
	return new promise((resolve, reject) => {
		const random=getTime(1000,5000);
		setTimeOut(()=>{
			resolve(`${random}`);
		},random)
		
	})
}
 const promises = Arrray.from({length:5}, createPromise);
Promise.any(promises)
.then((res)=>{
	document.getElementsById("output").textContent=res;
})
.catch((error)=>{
	console.log(error);
})


function getTime(a,b){
	return Math.floor(Math.random()b-a+1)+a;
}

