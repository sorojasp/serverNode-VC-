
const mysql = require ("mysql");
const express = require("express");
const appServer=express();

const con =require("../models/database")
const modelPerson =require("../models/persona/persona_model")
const path = require("path");
const static =require ("static");
const  handleDates   = require("../funcionalidades/manejoFechas/manejoFechas");
let handleDatesX = handleDates.HandleDate;





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

const manejaDatosConflictoLaboral = (DataContratoLaboral) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoLaboral!=undefined){
            //console.log(DataContratoLaboral.fechaInicioContrato)
             
            
            let handleDates1 = new handleDatesX(DataContratoLaboral.fechaInicioContrato);
            handleDates1.ToChangeFormatDate();
            resolve(handleDates1.ToChangeFormatDate());

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoDSJC= (DataContratoDSJC) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoDSJC!=undefined){
            
            resolve(DataContratoDSJC)

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoPagoSalario= (DataContratoPagoSalario) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoSalario!=undefined){
            
            resolve(DataContratoPagoSalario)

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoPagoVacaciones= (DataContratoPagoVacaciones) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoVacaciones!=undefined){
            
            resolve(DataContratoPagoVacaciones)

        }else{
            reject("**problem**")
        }
    })
}




const manejaDatosConflictoPagoCesantias= (DataContratoPagoCesantias) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoCesantias!=undefined){
            
            resolve(DataContratoPagoCesantias)

        }else{
            reject("**problem**")
        }
    })
}

const manejaDatosConflictoPagoPrimas= (DataContratoPagoPrimas) =>{
    return new Promise((resolve,reject)=>{
        if(DataContratoPagoPrimas!=undefined){
            
            resolve(DataContratoPagoPrimas)

        }else{
            reject("**problem**")
        }
    })
}








   


module.exports={
    getData,
    dataPet,
    consultaData,
    sirveJson,
    contrInsertDataPer,
    manejaDatosConflictoLaboral,
    manejaDatosConflictoDSJC,
    manejaDatosConflictoPagoSalario,
    manejaDatosConflictoPagoVacaciones,
    manejaDatosConflictoPagoCesantias,
    manejaDatosConflictoPagoPrimas
}