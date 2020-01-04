function distanceFromHqInBlocks(street) {
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(startStreet, endStreet) {
    return Math.abs(endStreet - startStreet) * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceTravelled = distanceTravelledInFeet(start, destination);
    let price;

    switch (true) {
        case distanceTravelled < 400:
            return price = 0
        case distanceTravelled > 400 && distanceTravelled < 2000:
            return price = (distanceTravelled - 400) * 0.02;
        case distanceTravelled > 2000 && distanceTravelled < 2500:
            return price = 25;
        default:
            return price = 'cannot travel that far';
    }
}
