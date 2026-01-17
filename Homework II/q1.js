// Destructuring Array
const products = ['LG', 'Samsung', 'Apple', 'Nokia', 'Sony']
const [a,b,c,d,e] = products  

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(e)  

// Destructuring Object
const products1 = [
    {
    name: 'LG',
    type: 'Phone'
    },
    {
    name: 'Samsung',
    type: 'Phone'
    },
    {
    name: 'Apple',
    type: 'Phone'
    },
    {
    name: 'Nokia',
    type: 'Phone'
    },
    {
    name: 'Sony',
    type: 'Phone'
    }
]

const {type} = products1[0,1,2,3,4]
console.log(type)