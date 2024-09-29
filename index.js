const express = require('express');
const db = require('./configDB/db')
const PORT = 3000;
const Models = require('./modelsHealthcare/index')
const app = express();
const routes = require('./routes/index')
const bodyParser = require('body-parser');
const cors = require('cors')

db.authenticate().then(()=>console.log('Database connected')).catch(err=>console.log('Error ' + err))

app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))


app.use('/',routes.hospitalRoutes)
app.use('/',routes.doctorRoutes)
app.use('/',routes.illnessRoutes)
app.use('/',routes.patientRoutes)
app.use('/',routes.vaccinationRoutes)
app.use('/',routes.internationalCodesRoutes)

// app.get('/',async(req,res) =>{
    
//     //await Models.Hospital.create({name:"Hospital Sviatoshyn",quantityEmployees:"20",address:"Akademika Vernadskogo 5"})
//      //await Models.Doctor.create({name:"Doctor Olena",tel:'1234567',post:'doctor',HospitalFK:1})
//      //await Models.Patient.create({name:"patient igor", tel:"1212124",email:"1212124@gmail.com",DoctorFK:1})
//      //await Models.Illness.create({name:"illness corona",beginDate:"2021-01-17",endDate:"2022-02-19",PatientFK:1})
//     //  await Models.Vaccination.create({name:"vispa",vaccinationDate:"2022-01-17",VaccinationEndDate:"2022-02-20",PatientFK:1})
     
//     Models.Hospital.findAll()
//     .then(hospitals=>{
//         console.log(`\n\n\n\nall hospitals>>\n\n\n`+JSON.stringify(hospitals,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Doctor.findAll()
//     .then(doctors=>{
//         console.log(`\n\n\n\nall doctors>>\n\n\n`+JSON.stringify(doctors,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Patient.findAll()
//     .then(patients=>{
//         console.log(`\n\n\n\nall patients>>\n\n\n`+JSON.stringify(patients,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Illness.findAll()
//     .then(illness=>{
//         console.log(`\n\n\n\nall illness>>\n\n\n`+JSON.stringify(illness,null));
        
//     })
//     .catch(err=>console.log(err))

//     Models.Vaccination.findAll()
//     .then(vaccinations=>{
//         console.log(`\n\n\n\nall vaccinations>>\n\n\n`+JSON.stringify(vaccinations,null));
        
//     })
//     .catch(err=>console.log(err))

//     res.sendStatus(200);
// })

app.listen(PORT,()=>{console.log(`server started on port ${PORT}`)})