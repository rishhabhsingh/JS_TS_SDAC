const arr = [1, 2, 3, 4, 5]

const map = arr.map( (arr)=> {
    return arr * 2
} );
console.log(map)


const filter = arr.filter( (arr) => {
    return arr % 2 == 0
} );
console.log(filter)

const reduce = arr.reduce( (arr, total) => {
    return arr + total
});
console.log(reduce)