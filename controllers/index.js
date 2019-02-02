const mysql = require ("mysql");
const con =require("../database")

const  getData=(req,res,next)=>{
    res.send("HolaDesdeControlador")    
}

const sirveJson=(req,res,next)=>{
    res.json([{
        "Nombre_Persona":"works",
        "Codigo_Persona":345678
    },{
        "Nombre_Persona":"hola",
        "Codigo_Persona":567

    }])
}



const dataPet=(req,res,next)=>{
         
       var sql = "INSERT INTO Personas (Nombre_Persona, Codigo_Persona) VALUES ('Oby Wan', 2345678)";
        
       
       con.query(sql, (err, result)=> {
          if (err) throw ("error en la inserción de datos a la base de datos")
          console.log("1 record inserted");
          res.send("los datos fueron insertados en la base de datos")
        });
        
    }


    const consultaData =(req,res)=>{
        
            con.query("SELECT * FROM Personas ",  (err, result, fields)=> {
              if (err) throw err;
              console.log(result);
              res.send(result)
            
              
            });
         


    }


module.exports={
    getData,
    dataPet,
    consultaData,
    sirveJson
}