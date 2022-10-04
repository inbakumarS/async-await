//Promise

 console.log("person1: shows ticket")
 console.log("person2: shows ticket")

let wifeBringTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
     }, 2000)
 })

 let getpop = wifeBringTickets.then((value) => {

     console.log("Husband: we should go in");
     console.log("wife: no i am hungry ");
     console.log("Husband: I got some popcorn")
     return new Promise((resolve, reject) => resolve(`${value} popcorn`))
 })

 let butter = getpop.then((value) => {
     console.log("Husband: we should go in")
     console.log("wife: i want butter on it")
    return new Promise((resolve, reject) => resolve(`${value} butter`))


 })

 butter.then((value) => {
    console.log(value);
 })

 console.log("person4: shows ticket")
 console.log("person5: shows ticket")


//Async Await

console.log("person1: shows ticket")
console.log("person2: shows ticket")

let premovie = async () => {

    let wifeBringTickets = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 2000)
    })

    let getpop = new Promise((resolve, reject) => resolve("Popcorn"));
    let addbutter = new Promise((resolve, reject) => resolve("Butter"));
    let getcooldrink = new Promise((resolve, reject) => resolve("Cool Drink"))

    let ticket = await wifeBringTickets;

    console.log(`Wife: I have ${ticket}`);
    console.log("Husband: we should go in");
    console.log("wife: no im hungry");

    let pop = await getpop;

    console.log(`Husband: I got some ${pop}`);
    console.log("Husband: we should go in");
    console.log("wife: i need butter on it");

    let butter = await addbutter;

    console.log(`husaband: I got some ${butter} on popcorn`);
    console.log("wife: lets go it's already late");
    console.log("Husband: just a minute I will get some Drink")

    let Cooldrink = await getcooldrink;

    console.log(`wife: did you get a ${Cooldrink}`)
    console.log("Yeah lets go")

    return ticket
}

premovie().then((value) => {
    console.log(`person3: show ${value}`);
})


console.log("person4: shows ticket")
console.log("person5: shows ticket")