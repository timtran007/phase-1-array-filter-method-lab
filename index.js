function findMatching(array, string){
    let matchedDrivers = array.filter(function(drivers){
        return drivers.toLowerCase() === string.toLowerCase()
    })
    return matchedDrivers
}

function fuzzyMatch(array, string){
    let matchedDrivers = array.filter(function(driver){
        if(driver.slice(0,1)  === string.slice(0,1)){
            return driver
        }
    })
    return matchedDrivers
}

function matchName(array, string){
    let matched = array.filter(function(drivers){
        if(drivers.name === string){
            return drivers
        }
    })
    return matched
}