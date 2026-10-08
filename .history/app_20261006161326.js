import express from 'express';
import amostraRoutes from './routes/amostraRoutes.js';


const app = express();

app.use("/amostra", amostraRoutes);

app.listen(3001, ()=>{
    console.log("Srvidor rodadnadosadoasodsad 3001")
})
