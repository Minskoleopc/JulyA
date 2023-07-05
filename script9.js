// program 1
let city = "pune"
switch(city){
    case "pune":
        console.log("MH")
    case "jaipur":
        console.log("RJ")
    case "varanasi":
        console.log("UP")
    default:
        console.log('incorrect city name')
}

// program 2

let city2 = "vdddd"
switch(city2){
    case "pune":
        console.log("MH")
        break
    case "jaipur":
        console.log("RJ")
        break
    case "varanasi":
        console.log("UP")
        break
    default:
        console.log('incorrect city name')
}

// program 3

let city3 = "jaipur"
switch(city3){
    case "pune":
    case "nagpur":
        console.log("MH")
        break
    
    case "indore":
    case "bhopal":
        console.log("MP")
        break
    case "jaipur":
    case "udaipur":
        console.log("RJ")
        break
    default:
        console.log("Incorrect city name")
    
}



















