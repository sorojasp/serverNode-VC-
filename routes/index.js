//Este es el archivo principal de las rutas.  

const express = require("express");
const router = express.Router();
const controllers=require("../controllers/index")
//const path = require('path');



router.get ('/login',controllers.dataPet);

router.get('/pruebaJsonUE',controllers.sirveJson);

router.get('/', controllers.getData)

router.get('/consultarDB', controllers.consultaData)


router.post('/tryPost',(req,res)=>{
    controllers.contrInsertDataPer(req.body.Nombre_Persona, req.body.Codigo_Persona).then(result=>{
        console.log(`the data= name: ${req.body.Nombre_Persona}, code:${req.body.Codigo_Persona} was inserted`)
    }).catch(err=>{
        console.log(err)
    })
})
    
 

router.get('/tryEjs', (req,res)=>{
    res.render('firstEjs')
    })

    
    






module.exports=router; 