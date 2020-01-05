// Code your solution in this file

function distanceFromHqInBlocks(number1, number2 = 42){
    return Math.abs(number2 - number1) 

}

function distanceFromHqInFeet(number1, number2 = 42){
    return distanceFromHqInBlocks(number1, number2) * 264

}

function distanceTravelledInFeet(number1, number2){
    return distanceFromHqInFeet(number1, number2)

}
function calculatesFarePrice(number1, number2){
    let distance = distanceTravelledInFeet(number1, number2)
    if (distance < 400){
        return 0
    }
    else if (distance > 400 && distance < 2000){
        return (distance - 400)* 0.02
    }
    else if (distance < 2500){
        return 25
    }
    else{
        return 'cannot travel that far'
    }
}