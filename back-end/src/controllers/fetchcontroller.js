const axios=require('axios')


function user (req,res){
//let result=[]
let count=0;

  const  fetch= ()=>{
   axios.get('https://randomuser.me/api/',{ 
       headers: { "Accept-Encoding": "gzip,deflate,compress" } 
   })
   .then((response) => {
       // result.push(response.data)
    //console.log(response.data['results'])  // able to fetch desired output in console
     res.send(response.data["results"]) //only one user is sent in reponse//
        
   })
   .catch((error) => {
       
       console.log(error)
   })
}

while(count<1){  // runs while loop until full users are fetched 
    fetch()
   count++
}

//console.log(result)
}



module.exports={user}