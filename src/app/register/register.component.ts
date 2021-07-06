import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
   acctype="";
   acno ="";
   uname ="";
   pswd ="";

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  register(){
  var acno = this.acno;
  var uname = this.uname;
  var pwd = this.pswd;
  var acctype=this.acctype;
   var result = this.ds.register(acno,uname,pwd,acctype)
   if(result){
     alert("Registered")
     this.router.navigateByUrl("")
   }
   else{
     alert("Account exist")
     this.router.navigateByUrl("")
   }
  }
}
