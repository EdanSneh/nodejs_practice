//default behavior is to share module with everyone
//so there is one static module

//module
// module.exports={
// 	faveMovie: ""
// }

//object facotry
module.exports= function(){
	return{	
		faveMovie: ""
	}
}

