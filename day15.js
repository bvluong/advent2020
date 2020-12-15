const findSolution = () => {
    let mapOfNum = {};
    let count = input.length + 1;
    input.forEach((num,idx) => {
            mapOfNum[num] = idx + 1
    })
    let nextNum = 0;
    while (count < 30000000) {
        if (mapOfNum[nextNum]) {
            let prevCount = mapOfNum[nextNum]
            mapOfNum[nextNum] = count;
            nextNum = count - prevCount

        } else {
            mapOfNum[nextNum] = count
            nextNum = 0;
        }
        count++
    }
    console.log(nextNum);
}

const input = [7,14,0,17,11,1,2]

findSolution()