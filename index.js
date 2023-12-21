/*
function superbowlWin(array) {
    for (let season in array) {
        if (season.result === "W") {
            return season.year;
        }
    }
}
*/

function superbowlWin(array) {
    const season = array.find((element) => element.result === "W");
    return season ? season.year : undefined;
}
