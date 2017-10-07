//Login for Employee Details
document.getElementById('empregister').style.display = 'none';
function empLogin(){
	if(document.getElementById('empregister').style.display=='none'){
		document.getElementById('empregister').style.display='block';
	}
	else{
		document.getElementById('empregister').style.display = 'none';
	}
	document.getElementById('projectStatus').style.display='hide';
	document.getElementById('Attend').style.display='none';
	document.getElementById('dashboard').style.display='none';
}
// Dashboard for employee
document.getElementById('dashboard').style.display="none";
function dashboard(){
	document.getElementById('dashboard').style.display='block';
	document.getElementById('employee').style.display="none";
	document.getElementById('Attend').style.display='none';
	document.getElementById('projectStatus').style.display='none';
	document.getElementById('project_timesheet').style.display='none';
}
//Employee List
document.getElementById('employee').style.display="none";
function employeeList(){
	document.getElementById('employee').style.display="block";
	document.getElementById('dashboard').style.display='none';
	document.getElementById('Attend').style.display='none';
	document.getElementById('projectStatus').style.display='none';
	document.getElementById('project_timesheet').style.display='none';
}
//Task given to Employee
document.getElementById('project_timesheet').style.display='none';
function prjtTimeSheet(){
	document.getElementById('project_timesheet').style.display='block';
	document.getElementById('dashboard').style.display='none';
	document.getElementById('employee').style.display="none";
	document.getElementById('Attend').style.display='none';
	document.getElementById('projectStatus').style.display='none';
}
//Timesheet filling button for task given employee
document.getElementById('navTimesheetButton').style.display = 'none';
function enterTimesheetDetails(){
	if(document.getElementById('navTimesheetButton').style.display=='none'){
		document.getElementById('navTimesheetButton').style.display='block';
	}
	else{
		document.getElementById('navTimesheetButton').style.display = 'none';
	}
	document.getElementById('projectStatus').style.display='hide';
	document.getElementById('Attend').style.display='none';
	document.getElementById('dashboard').style.display='none';
	document.getElementById('employee').style.display="none";
}
// Attendance for Employee based on daily
document.getElementById('daily').style.display = 'none';
function timeSheet() {
	document.getElementById('daily').style.display='block';
	document.getElementById('Attend').style.display='block';
	document.getElementById('tabs-button').style.display="block";
	document.getElementById('monthly').style.display='none';
	document.getElementById('dashboard').style.display='none';
	document.getElementById('employee').style.display="none";
	document.getElementById('projectStatus').style.display='none';
	document.getElementById('nav-enterProjectDetails').style.display = 'none';
	document.getElementById('project_timesheet').style.display='none';
}
//Attendance tabs button
document.getElementById('tabs-button').style.display="none";
function showDaily(){
	document.getElementById('tabs-button').style.display="block";
	document.getElementById('daily').style.display='block';
	document.getElementById('Attend').style.display='block';
	document.getElementById('project_timesheet').style.display='none';
}
//Attendance for Employee based on monthly
document.getElementById('monthly').style.display='none'
function showMonthly(){
	document.getElementById('monthly').style.display='dlock';
	document.getElementById('Attend').style.display='block';
	document.getElementById('daily').style.display='none';
	document.getElementById('project_timesheet').style.display='none';
}
// Project Details for Employee
document.getElementById('projectStatus').style.display = 'none';
function project() {
   document.getElementById('projectStatus').style.display='block';
   document.getElementById('Attend').style.display='none';
   document.getElementById('dashboard').style.display='none';
   document.getElementById('employee').style.display="none";
   document.getElementById('project_timesheet').style.display='none';
}
//enter project details button hide and show
document.getElementById('nav-enterProjectDetails').style.display = 'none';
function enterProjectDetails(){
	if(document.getElementById('nav-enterProjectDetails').style.display=='none'){
		document.getElementById('nav-enterProjectDetails').style.display='block';
	}
	else{
		document.getElementById('nav-enterProjectDetails').style.display = 'none';
	}
	document.getElementById('projectStatus').style.display='hide';
	document.getElementById('Attend').style.display='none';
	document.getElementById('dashboard').style.display='none';
	document.getElementById('employee').style.display="none";
	document.getElementById('project_timesheet').style.display='none';
}