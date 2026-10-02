//your JS code here. If required.
function getArr() {
	return new Promise((resolve , reject)=>{
		setTimeout(()=>{
			resolve([1,2,3,4])
		},3000)
	})
}

getArr().then((arr)=>{
	let evenNumber  = arr.filter((item)=>{
		if(item % 2 === 0){
			return item;
		}
	})
	return new Promise((resolve , reject)=>{
		setTimeout(()=>{
			output.textContent = evenNumber
			resolve(evenNumber)
		},1000)
	})
}).then((evenNumber)=>{
	let multyplyed = evenNumber.map((item)=>{
		return item*2;
	})

	return new Promise((resolve , reject)=>{
		setTimeout(()=>{
			output.textContent = multyplyed;
			resolve(multyplyed);
		},2000)
	})
})