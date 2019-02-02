//Este es el archivo principal de las rutas.  

const express = require("express");
const router = express.Router();
const controllers=require("../controllers/index")
//const path = require('path');



router.get ('/login',controllers.dataPet);

router.get('/pruebaJsonUE',controllers.sirveJson);

router.get('/', controllers.getData)

router.get('/consultarDB', controllers.consultaData)


router.post('/tryPost', (req,res)=>{
    
    console.log(req.body)
    res.send(req.body)
    
    })
    
 

router.get('/tryEjs', (req,res)=>{
    res.render('firstEjs')
    })

    
    






module.exports=router; 