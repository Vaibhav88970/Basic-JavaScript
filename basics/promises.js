let car= new promise(function(resolve, reJect){
    fuel_fulltank = true
      if(fuel_fulltank)
        resolve()
else
       reJect()
});
car.then(function(){
    document.write("the fuel tank is full. Happy Driving!!")
}).catch(function(){
    document.write("the fuel tank is not empty")
})
