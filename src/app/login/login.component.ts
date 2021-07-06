import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
@Component({ 
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Aim ="Welcome to Luminar Bank"
  account = "Account Number Please"
  accno = ""
  pwd = ""
//   users:any = {
//     1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
//     1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
//     1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
//     1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

// }

  constructor(private router:Router,private ds:DataService) { }

  ngOnInit(): void {
  }

  // accChange(event:any){
  //   this.accno =event.target.value
  // //  alert(this.accno)
  // }
  // passwdChange(event:any){
  //   this.pwd =event.target.value
  // //  alert(this.pwd)
  // }

  login(){
    // var acno = a.value
    // var pwd = p.value

    var acno = this.accno;
    var pwd = this.pwd;
  // alert("login successful")

  let accDetails = this.ds.users;
   var result = this.ds.login(acno,pwd)

   if(result){
     alert("login successful");
     this.router.navigateByUrl("dashboard")
   }
  }
// *****************************************************************************************
  //   if (acno in accDetails){
  //     if (pwd == accDetails[acno]["password"]){
  //      alert("Login Successful")
  //      this.router.navigateByUrl("dashboard")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }

  //   }
  //   else {
  //     alert("Invalid Account details")
  //   }
  // }
  // login (){
   
  //   var acno = this.accno;
  //   var pwd = this.pwd;
  //   let accDetails = this.users;
  //   if (acno in accDetails){
  //     if (pwd == accDetails[acno]["password"]){
  //      alert("Login Successful")
  //     }
  //     else{
  //       alert("Incorrect Password")
  //     }

  //   }
  //   else {
  //     alert("Invalid Account details")
  //   }




  // }
  // accChange(event:any){
  //   this.accno =event.target.value
  // //  alert(this.accno)
  // }
  // passwdChange(event:any){
  //   this.pwd =event.target.value
  // //  alert(this.pwd)
  // }
}
