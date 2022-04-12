const { number, options } = require("yargs");
const {crearArchivo}=require("./helpers/multiplicar")
const colors=require("colors")
const argv= require("./yargs/yargs.js")


console.clear()

//ver argumentos que vienen desde la consola
// console.log(process.argv)
// console.log(argv)

//si ejecuto con yargs solamente pongo esto
console.log("base:yargs",argv.base)

//asi capturo el elemento que yo pase por consola
// const [, , arg3="base=9"]=process.argv;
// const [ , base="base=9"]=arg3.split("=")
// console.log(base)


// const base=4

crearArchivo(argv.b,argv.l,argv.hasta)
    .then(msg=>console.log(msg.rainbow))
    .catch(err=>console.log(err))

