 class Persona{
    constructor(Nombre_Persona, Codigo_Persona){
       this.Nombre_Persona=Nombre_Persona;
       this.Codigo_Persona=Codigo_Persona; 
    }

    getNombre(){
        return (this.Nombre_Persona);

    }

    setNombre(nombre){
        this.Nombre_Persona=nombre;

    }

    getCodigo(){
        return (this.Nombre_Persona);

    }

    setCodigo(codigo){
        this.Nombre_Codigo=codigo;
    }

}

const personaDataBase= new Persona("Stiven Rojas",80865137);
const con =require("../database")
const mysql = require ("mysql");

let insertPersonDB=(nombrePersona, codigoPersona)=>{
   return new Promise ((resolve,reject)=>{
       var sql = "INSERT INTO Personas (Nombre_Persona, Codigo_Persona) VALUES ('" + nombrePersona + "', '" +  codigoPersona + "')";
       con.query(sql, (err)=> {
           if (err){reject(`you was a problem **Nombre:${nombrePersona}- Codigo:${codigoPersona}**`);}
           
           resolve(`****you was a problem **Nombre:${nombrePersona}- Codigo:${codigoPersona}****`);
       
     });
     
    })

}


let deletePersonDB=(codigoPersona)=>{

}

let consultPersonDB=()=>{

}



module.exports={
    insertPersonDB,
    deletePersonDB,
    consultPersonDB
}




