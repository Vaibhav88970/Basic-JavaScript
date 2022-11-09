let result =function(score){
    return new Promise(function(resolve,reJect){
        console.log("calcutaing results")
        if(score>50)
          resolve("congratulations! You have passed")
        else
          reJect("You have failed")
    })
}
let grade =function(response){
    return new Promise(function(resolve,reJect){
        console.log("calculating your grade")
        resolve("Your grade is A."+ response)
    })
}
result(80).then(response =>{
    console.log("Results received")
    return grade(response)
}).then(finalgrade=>{
      console.log(finalgrade)
}).catch(err =>{
    console.log(err)
})
async function CaluculateResults(){
    try{
        const response= await result(80)
        console.log("Results received")
        const finalgrade= await grade(response)
        console.log(finalgrade)
    }
    catch(err){
        console.log(err)
    }
}
CaluculateResults()
