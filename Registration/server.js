const express = require("express");
const port = "4.224.186.213";

const Registration = express();

Registration.use(express.json());

const studentRoutes = require("./routes/candidateRoutes");

Registration.use("/candidates", candidateRoutes);

Registration.listen(port,() =>{
    console.log("Server Started")
});