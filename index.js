function distanceFromHqInBlocks(value){
    if(value > 42){
        return value - 42;
    }else{
        return 42 - value;
    }

}

function distanceFromHqInFeet(value){
    return distanceFromHqInBlocks(value) * 264;

}

function distanceTravelledInFeet(val1, val2){
    if(val1 > val2){
        return ((val1 - val2) * 264);
    }else{
        return ((val2 - val1) * 264);
    }
}

function calculatesFarePrice(val1, val2){
    let distFeet = distanceTravelledInFeet(val1, val2);

    switch(true){
        case distFeet < 400:
            return 0;
            break;
        case distFeet > 400 && distFeet < 2000:
            return (distFeet - 400) * 0.02;
            break;
        case distFeet > 2000 && distFeet < 2500:
            return 25;
            break;
        case distFeet > 2500:
            return 'cannot travel that far'
            break;
    }
}
