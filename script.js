function solve(arr) {
    let newArr = [];
    for(let i = arr.length; i > 0; i--) {
        if(!newArr.includes(arr[i - 1]))
            newArr.push(arr[i - 1]);
    }


    return newArr.reverse();
}

solve([3,4,4,3,6,3])