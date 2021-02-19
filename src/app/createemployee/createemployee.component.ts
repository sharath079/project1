import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { NotificationService } from '../notification.service';

export interface EmployeeDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: any;

  gender: any;
  maritialStatus: any;
  relation: any;

  marriageDate: any;
  emailAddress: string;
  phoneNumber: any;

  emergencyContactName: string;
  emergencyContactNumber: any;
 

  joiningDate: any;
  department: any;
  designation: any;
  admin:any;
  user:any;
  name: any;
}
interface designation {
  value: string;
  viewValue: string;
}
interface department {
  value: string;
  viewValue: string;
}

const ELEMENT_DATA: EmployeeDetails[] = [
  {
    firstName: '', lastName: '', dateOfBirth: '',
    gender: '', maritialStatus: '', relation: '',
    marriageDate: '', emailAddress: '', phoneNumber: '',
    emergencyContactName: '', emergencyContactNumber: '',
    joiningDate: '', department: '', designation: '',
    name: '',admin:'',user:''
  }
];

// const ELEMENT_DATA: EmployeeDetails[] = [
//   {name: 'Manoj', emailAddress: 'manoj@gmail.com', phoneNumber:97012354421,designation:'Tester'},
//   {name: 'Surya', emailAddress: 'surya@gmail.com', phoneNumber:97012354421,designation:'Tester'},
//   {name: 'Sharath', emailAddress: 'sharath@gmail.com', phoneNumber:97012354421,designation:'Developer'},
//   {name: 'Mukesh', emailAddress: 'mukesh@gmail.com', phoneNumber:97012354421,designation:'Developer'},
// ];

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  
  [x: string]: any;
  selected = 'developer';
  selectedDept = 'hr';

  checked = false;
  indeterminate = false;
  dataSource:any =[];

  hideAddEmployee: boolean = false;
  hideTable: boolean = true;
  
  updateButton:boolean=false;
  saveButton:boolean=true;
  hideAddEmployee=true;
  hideTable=false;

  action: any;
  dialog: any;
  dialogRef: any;
  displayedColumns: string[] = ['name', 'emailAddress', 'phoneNumber', 'designation','action'];
  //dataSource = new MatTableDataSource(ELEMENT_DATA);
  email = new FormControl('', [Validators.required, Validators.email]);

  level: designation[] = [
    { value: 'Database Admin', viewValue: 'Database Admin' },
    { value: 'Software Developer', viewValue: 'Software Developer' },
    { value: 'Tester', viewValue: 'Tester' }
  ];
  branch: department[] = [
    { value: 'HR', viewValue: 'HR' },
    { value: 'Admin', viewValue: 'Admin' },
    { value: 'Developement ', viewValue: 'Developement' }
  ];
  
  constructor(private notifyService : NotificationService) { 

  }

  ngOnInit(): void {
    ELEMENT_DATA.shift();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }


  addEmployee() {
    this.hideAddEmployee = false;
    this.hideTable = true;

  }
  createEmployee() {
    this.hideTable = false;
    this.hideAddEmployee = true;
    this.saveButton=true;
    this.updateButton=false;  
  }
  pushToEmployeeDetails() {
    var firstName = this.firstName;
    var lastName = this.lastName;
    var phoneNumber = this.phoneNumber;
    var designation = this.designation;
    var dateOfBirth = this.dateOfBirth;
    var gender = this.gender;
    var maritialStatus = this.maritialStatus;
    var relation = this.relation;
    var marriageDate = this.marriageDate;
    var emailAddress = this.emailAddress;
    var emergencyContactName = this.emergencyContactName;
    var emergencyContactNumber = this.emergencyContactNumber;
    var joiningDate = this.joiningDate;
    var department = this.department;
    var admin = this.admin;
    var user=this.user;
    var name = this.firstName + ' ' + this.lastName;
    
    if( firstName=="" ){
      this.notifyService.showInfo("please enter first name");
      return;
    }
    if( lastName=="" ){
      this.notifyService.showInfo("please enter last name");
      return;
    }
    if( dateOfBirth=="" ){
      this.notifyService.showInfo("please select Date Of Birth");
      return;
    }
    if( gender=="" ){
      this.notifyService.showInfo("please select Gender");
      return;
    }
    if( maritialStatus=="" ){
      this.notifyService.showInfo("please select your Maritial Status");
      return;
    }
    if( relation=="" ){
      this.notifyService.showInfo("Select a Relation");
      return;
    }
    if( marriageDate=="" ){
      this.notifyService.showInfo("please enter Marriage Date");
      return;
    }
    if( emailAddress=="" ){
      this.notifyService.showInfo("please enter Email Address");
      return;
    }
    if( phoneNumber=="" ){
      this.notifyService.showInfo("please enter Phone Number");
      return;
    }
    if( emergencyContactName=="" ){
      this.notifyService.showInfo("please enter  Emergency Contact Name");
      return;
    }
    if( emergencyContactNumber=="" ){
      this.notifyService.showInfo("please enter Emergency Contact Number");
      return;
    }
    if( joiningDate=="" ){
      this.notifyService.showInfo("please select Joining Date");
      return;
    }
    if( department=="" ){
      this.notifyService.showInfo("please select your department");
      return;
    }
    if( designation=="" ){
      this.notifyService.showInfo("select your Designation");
      return;
    }
    if( admin=="" ){
      this.notifyService.showInfo("if you are admin select admin checkbox");
      return;
    }
    if( user=="" ){
      this.notifyService.showInfo("if you are user select user checkbox");
      return;
    }
    else{
      this.notifyService.showSuccess("Form is successfully submitted");
    }
    ELEMENT_DATA.push({
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      designation: designation,
      dateOfBirth: dateOfBirth,
      gender: gender,
      maritialStatus: maritialStatus,
      relation: relation,
      marriageDate: marriageDate,
      emailAddress: emailAddress,
      emergencyContactName: emergencyContactName,
      emergencyContactNumber: emergencyContactNumber,
      joiningDate: joiningDate,
      department: department,
      name: name,
      admin:admin,
      user:user,
    });

    
    // To display Array elements in Table
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    console.log(ELEMENT_DATA);
    this.hideTable = true;
    this.hideAddEmployee = false;
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  index;
  edit(item, i) {
    this.index = i
    // console.log(i);
    this.firstName=item.firstName
    this.lastName=item.lastName
    this.dateOfBirth=item.dateOfBirth
    this.gender=item.gender
    this.maritialStatus=item.maritialStatus
    this.relation=item.relation
    this.marraigeDate=item.marraigeDate
    this.emailAddress=item.emailAddress
    this.phoneNumber=item.phoneNumber
    this.emergencyContactName=item.emergencyContactName
    this.emergencyContactNumber=item.emergencyContactNumber
    this.joiningDate=item.joiningDate
    this.department=item.department
    this.designation=item.designation
    this.admin=item.admin
    this.user=item.user

    console.log("Item :: "+item);
    var index=ELEMENT_DATA.indexOf(item);
    console.log("Index :: "+index);
  
    //this.update(index);
    this.hideTable = false;
    this.hideAddEmployee = true;
    this.updateButton=true;
    this.saveButton=false;
    const dialogRef = this.dialog.open({
    width: '250px',
    });
  }

  temparr:any = []
  update(index: any)
  {
     this.temparr = {
       firstName:this.firstName,
       lastName: this.lastName,
       name: this.firstName+" "+this.lastName,
       dateOfBirth: this.dateOfBirth,
       gender: this.gender,
       maritialStatus: this.maritialStatus,
       relation: this.relation,
       marraigeDate: this.marriageDate,
       emailAddress:this.emailAddress,
       phoneNumber: this.phoneNumber,
       emergencyContactName: this.emergencyContactName,
       joiningDate: this.joiningDate,
       department:this.department,
       designation: this.designation,
       user: this.user,
       admin: this.admin
     }

    
    //ELEMENT_DATA.fill(index);
    //console.log("After Updating :: "+ELEMENT_DATA);
    this.hideTable=true;
    this.hideAddEmployee=false;
    // const Array =[{
    // name:this.firstName,
    // }] 
    //this.dataSource = new MatTableDataSource(Array);
    this.dataSource.filteredData[this.index] = this.temparr 

  }
  
  deleteArray: any = []
  delete(i: any) {
    this.dataSource.filteredData.splice(i, 1);
    this.deleteArray = this.dataSource.filteredData;
    this.dataSource = new MatTableDataSource(this.deleteArray);
    this.firstName = '',
    this.joiningDate = '';
    this.lastName = '';
    this.marriageDate = '';
    this.emailAddress = '';
    this.phoneNumber = '';
    this.department = '';
    this.designation = '';
    this.emergencyContactName = '';
    this.emergencyContactNumber = '';
    this.gender = '';
    this.martialStatus = '';
    this.relation = '';

  }
}

