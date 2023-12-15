function randNum() {
    return Math.floor(Math.random() * 2)
}

function getRolls(n) {
    return Array.from({ length: n }, () => randNum())
}

function sum(nums) {
    // if (nums.every(e => e === 0)) {
    //     return 5
    // } else {
    return nums.reduce((accumulator, currValue) => accumulator + currValue, 0)
    // }
}

function reroll(nums) {
    if ((nums.every(e => e === 0)) || (nums.every(e => e === 1))) {
        return true
    }
}


export { randNum, getRolls, sum, reroll }