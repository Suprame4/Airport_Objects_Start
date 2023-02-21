class Bag {
    // Include constructor Method with the following property: 
        // 1. Weight
            //1a. Should handle an exception in case user adds no weight and throw an error.
    constructor(weight){ 
 

        /*try{
            //exception
            if(!weight) throw new Error("bag needs weight")
        }
        catch(Error){
            
            return Error
        }*/
        if(!weight){
            //throw an error if no weight is provided 
            throw new Error("bag needs weight")
        }

        this.weight = weight
    }


        }

//Export the module
module.exports = Bag