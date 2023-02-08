const fs = require("fs-extra");
const date_helper = require('./date_helper.js');
const patientsData = "patients.json";


function AllPatients() {
	let data = "";
	let patients = [];

	try {
		data = fs.readFileSync(patientsData, "utf8");
	} catch(error) {
		console.error(error);	
	}

	try {
		patients = JSON.parse(data);
	} catch(error) {
		console.error(error);
		fs.writeFileSync(patientsData, '[]');
		patients = [];
	}

	return patients;
}


module.exports.main = function(req, res) {
	let patients = AllPatients();
	console.log(patients);
	res.render("Main_page.hbs", 
	{
		tableVisible: patients.length > 0,
		patients: patients
	});
}


module.exports.new = function(req, res) {
	let patient = {
		id:"",
   		pet_type:"", 
   	 	name:"",
    	doctor_name:"",
    	diagnosis:"",
    	notes: "",
    	date:""
	};

	res.render("new_patient.hbs", 
	{
		patient: patient
	});
}