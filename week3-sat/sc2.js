// main=(cb)=>{
// setTimeout(()=>{
//     console.log('asd')
//     cb("helo")
// },2000)
// }

main = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hello')
            reject(4)
        }, 500)
    })
}



// main().then(() => {
//     console.log('World')
// }).catch(()=>{
//     console.log('error')
// })

async function add() {
    try {
        a = await main();
        console.log(a)
    }
    catch(e){
        console.log(e)
    }
    
}
add()

// console.log('as')
// main((a) => {
//     console.log(a)
// })
//  setTimeout(()=>{},10000)
// try{
//     console.log(knjn)
// } catch(e){
//     console.log(e)
// }