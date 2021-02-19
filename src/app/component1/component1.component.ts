import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  sub : boolean =true;
   company ={
     name:"",
     address:"",
     phoneNo:"",
     alternateNo:"",
  }
  // name:any;
  // address:any;
  // phoneNo:any;
  // alternateNo:any;

  constructor() { }

  ngOnInit(): void {
  }

  show:boolean=true;
  hide:boolean=false
  dataBind(){
    console.log(this.company)
    this.show=false
    this.sub=false;
  }
}
