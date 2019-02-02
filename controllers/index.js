const mysql = require ("mysql");
const express = require("express");
const con =require("../models/database")
const modelPerson =require("../models/persona/persona_model")

const  getData=(req,res,next)=>{
    res.send("HolaDesdeControlador")    
}

const sirveJson=(req,res,next)=>{
    res.json([{
        "Nombre_Persona":"Stiven Rojas",
        "Codigo_Persona":123456
    },{
        "Nombre_Persona":"Emily Ratakwosky",
        "Codigo_Persona":567

    }])
}



const dataPet=(req,res,next)=>{
         
  
    }


    const consultaData =(req,res)=>{
        
            con.query("SELECT * FROM Personas ",  (err, result, fields)=> {
              if (err) throw err;
              console.log(result);
              res.send(result)
            
              
            });
}

const contrInsertDataPer = async(Nombre_Persona,Codigo_Persona)=>{
     await modelPerson.insertPersonDB(Nombre_Persona,Codigo_Persona)

}
   


module.exports={
    getData,
    dataPet,
    consultaData,
    sirveJson,
    contrInsertDataPer 
}