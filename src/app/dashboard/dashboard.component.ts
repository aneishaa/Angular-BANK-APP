import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // cname =""
  // accno =""
  // amt=""
  // pswd =""
  acno=""

  DepositForm=this.fb.group({
   
    accno :['',[Validators.required,Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    amt :['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd :['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
   })

   WithdrawForm=this.fb.group({
   
    accno1 :['',[Validators.required,Validators.required,Validators.minLength(4),Validators.pattern('[0-9]*')]],
    amt1 :['',[Validators.required,Validators.pattern('[0-9]*')]],
    pswd1 :['',[Validators.required,Validators.pattern('[a-zA-z0-9]*')]]
   })



  // cname1=""
  // accno1 =""
  // amt1 = ""
  // pswd1 =""
   lData:Date = new Date()
  constructor(private ds:DataService,private fb:FormBuilder,private router:Router) { }
  ngOnInit(): void {
  }

  user = this.ds.currentUser
  deposit(){
    var acno = this.DepositForm.value.accno
    var amt = this.DepositForm.value.amt
    var pwd = this.DepositForm.value.pswd
    if(this.DepositForm.valid){

    var result =this.ds.deposit(acno,pwd,amt)
    if(result){
      alert(amt+"Deposited succesfully and new balance is "+result)
    }
    } // if valid
    else {
      alert("invalid Form")
    }

  } // deposi t end

  
  withdraw(){
    var acno = this.WithdrawForm.value.accno1
    var amt = this.WithdrawForm.value.amt1
    var pwd = this.WithdrawForm.value.pswd1
    var result =this.ds.withdraw(acno,pwd,amt)
    if(this.WithdrawForm.valid){
       if(result){
          alert(amt+"Withdrawn  succesfully and new balance is "+result)
       } // end if result
    } // if valid form
    else{
      alert("invalid Form")
    } // end else if result
  }
  deleteAcc(){
    this.acno =this.ds.currentAcc
  }
onDelete(event:any){
  alert("From Parent" +event)
  this.router.navigateByUrl("")
}
onCancel(){
  this.acno=''
}

}
