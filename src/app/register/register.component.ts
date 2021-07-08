import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  //  acctype="";
  //  acno ="";
  //  uname ="";
  //  pswd ="";
   registerForm=this.fb.group({
    acctype:['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    acno :['',[Validators.required,Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    uname :['',[Validators.required,Validators.pattern('[a-zA-z]*')]],
    pswd :['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
   })
  constructor(private router:Router,private ds:DataService,private fb:FormBuilder) { }

  ngOnInit(): void {
  }
  register(){
  var acno = this.registerForm.value.acno;
  var uname = this.registerForm.value.uname;
  var pwd = this.registerForm.value.pswd;
  var acctype=this.registerForm.value.acctype;
  if(this.registerForm.valid){
    var result = this.ds.register(acno,uname,pwd,acctype)
   if(result){
     alert("Registered successfully")
     this.router.navigateByUrl("")
   }
   else{
     alert("Account exist")
     this.router.navigateByUrl("")
   }
  }
  else{
    alert("invalid form")
  }
   
  }
}
