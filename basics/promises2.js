let empty_tank= function(){
    return new Promise(function(resolve,reJect){
        resolve("the car doesnt have enough fuel.")
    })
}
let engine= function(msg){
    return new Promise(function(resolve,reJect){
        resolve(msg+ "the engine is overheating.")
    })
}
let travel= function(msg){
    return new promise(function(resolve,reJect){
        resolve(msg+ "the car is not safe for travelling")
    })
}
empty_tank().then(function(){
    return engine()
}).then(function(result){
    return travel(result)
}).then(function(result){
    console.log("Done!")
})