const RED=Symbol("red");
const ORANGE=Symbol("orange");
const YELLOW=Symbol("yellow");
const BLUE=Symbol("blue");
const CAT=Symbol("blue");

function getcolor(color){
    switch(color){
        case RED:
            return "danger";
        case ORANGE:
            return "getready";
        case YELLOW:
            return "bright";
        case BLUE:
            return "sky";
        case CAT:
            return "animal";
        default:
            console.log("don't know");
            return "unknown";
    }
}

console.log(getcolor(RED)); 
console.log(getcolor(BLUE))
console.log(getcolor(CAT));