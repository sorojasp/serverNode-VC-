const mysql = require ("mysql");
const express = require("express");
const appServer=express();

const con =require("../models/database")
const modelPerson =require("../models/persona/persona_model")
const path = require("path");
const static =require ("static");


const sendFiles=require("../main") 

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


    const consultaData = async()=>{
       let resultConsultPerson=await modelPerson.consultPersonDB();
       return resultConsultPerson;

    }

const contrInsertDataPer = async(Nombre_Persona,Codigo_Persona)=>{
     let resultInsertPerson=await modelPerson.insertPersonDB(Nombre_Persona,Codigo_Persona);
     return resultInsertPerson;

}






   


module.exports={
    getData,
    dataPet,
    consultaData,
    sirveJson,
    contrInsertDataPer
}