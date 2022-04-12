
const fs=require("fs");
const colors=require("colors")



const crearArchivo=async(base=5,listar,limite)=>{

   

            try {
               
                let salida=""
                let hasta=limite
                let consola=""

                if(hasta){
                    for(let i=1;i<=hasta;i++){
                        salida+=`${base} X ${i} = ${base*i}\n`
                        consola+=`${base} ${"X".red} ${i} ${"=".red} ${base*i}\n`

                    }
                }

                

                
                if(listar){
                    console.log("===========================".green)
                    console.log(`    TABLA DEL ${base}`.blue)
                    console.log("===========================".green)
                
                    console.log(consola)

                }

            
                //codigo para crear un archivo de texto para imprimir nuestra tabla,utilizamos el metodo writeFile de Node.js
            
                fs.writeFileSync(`./salida/tabla-${base}`,salida)
                return `archivo tabla-${base}.txt  creado con exito`
                
                
            } catch (error) {
                throw error
            }

            
        


}

   
module.exports={
    crearArchivo
}