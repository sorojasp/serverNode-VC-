//Este es el archivo principal de las rutas.  

const express = require("express");
const router = express.Router();
const controllers=require("../controllers/index")
const mysql = require ("mysql");
//const path = require('path');



router.get ('/login',controllers.dataPet);

router.get('/pruebaJsonUE',controllers.sirveJson);

router.get('/', controllers.getData);

router.get('/consultarDB', (req,res,next)=>{
    controllers.consultaData().then(result=>{
      res.send(result)
      console.log("**The consult was successful**")
    }).catch(err=>{
        console.log(err)
    })

})


router.post('/tryPost',(req,res,next)=>{
    controllers.contrInsertDataPer(req.body.Nombre_Persona, req.body.Codigo_Persona).then(result=>{
        console.log(result)
    }).catch(err=>{
        console.log(err)
    })
})
    
 

router.get('/tryEjs', (req,res)=>{
    res.render('firstEjs')
    })

    
    






module.exports=router; 