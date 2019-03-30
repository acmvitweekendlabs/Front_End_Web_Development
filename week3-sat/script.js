// "use strict";
// var asd=10;
// var as = /^[1-9][0-9]{9}$/

// function asdPromise() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('Hello')
//             resolve(4)
//         }, 500)
//     })
// }
// (async () => {
//     try {
//         a = await asdPromise()
//         console.log(a)
//         console.log('World')
//     }
//     catch(e){
//         console.log('Eror')
//     }
// })()

// console.log('Hellllloooooo')
// asdPromise().then(()=>{
//     console.log('World')
// }).catch(()=>{
//     console.log('Error')
// })



// function asd(cb){
//     setTimeout(()=>{
//         console.log('Hello')
//         cb(2)
//     },1000)
// }

// asd((num)=>{
//     console.log('World')
//     console.log(num+2)
// })
// console.log(as.test('0123456789'))

// console.log(details[0].lastName)
// setTimeout(()=>{},10000)

// function SpecificError () {}
// SpecificError.prototype = new Error()

// try{
//     throw new Error('Messagee')
// }
// catch(e){
//     if (e instanceof SpecificError) {
//         console.log('known error')
//     }
//     else throw e
// }

for(let i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}