import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  currentUser =""
  currentAcc=""
  users:any = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000,transaction:[] },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000,transaction:[] },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000,transaction:[] },
    1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000,transaction:[] }

}

  constructor() {
   this.getDetails();

   }
  saveDetails(){
    localStorage.setItem("users",JSON.stringify(this.users))
    if(this.currentAcc){
      localStorage.setItem("currentAcc",JSON.stringify(this.currentAcc))
    }
    if(this.currentUser){
      localStorage.setItem("currentUser",JSON.stringify(this.currentUser))
    }

    
  }
  getDetails(){
    if(localStorage.getItem("users")){
      this.users = JSON.parse(localStorage.getItem("users") || '')
    }
    if(localStorage.getItem("currentAcc")){
      this.currentAcc = JSON.parse(localStorage.getItem("currentAcc") || '')
    }
    if(localStorage.getItem("currentUser")){
      this.currentUser = JSON.parse(localStorage.getItem("currentUser") || '')
    }
  }
  getTransaction(){
    return this.users[this.currentAcc].transaction
  }

  register(acno:any,username:any,password:any,actype:any){
    let accDetails=this.users;
    if (acno in accDetails){
      return false;
    }
    else{
      accDetails[acno]={
        acno,
        username,
        password,
        actype,
        balance:0,
        transaction:[]
      

    }
    this.saveDetails();
    return true;

    }
  }
   login(acno:any,pwd:any){
     let accDetails = this.users;
     if (acno in accDetails){
       if (pwd==accDetails[acno]["password"]){
         this.currentUser=accDetails[acno]["username"]
         this.currentAcc=acno
         this.saveDetails();
         return true;
       }
       else{
         alert("incorrect password");
         return false;
       }

     }
     else {
       alert("invalid accnt number");
       return false;
     }
   }
deposit(acno:any,pswd:any,amt:any){
  var amount = parseInt(amt)
  let accDetails = this.users;
  if (acno in accDetails){
    

    if (pswd==accDetails[acno]["password"]){
      accDetails[acno]["balance"] += amount
      accDetails[acno].transaction.push({
        amount:amount,
        type:"Credit"})
      this.saveDetails();
     
      return  accDetails[acno]["balance"]


    }
    else{
      alert("incorrect password");
      return false;
    }

  }
  else {
    alert("invalid accnt number");
    return false;
  }
}

withdraw(acno:any,pswd:any,amt:any){
  var amount = parseInt(amt)
  let accDetails = this.users;
  if (acno in accDetails){
        if (accDetails[acno]["balance"]>amount){
               if (pswd==accDetails[acno]["password"]){
               accDetails[acno]["balance"] -= amount
               accDetails[acno].transaction.push({
                amount:amount,
                type:"Debit"})
               this.saveDetails();
               return  accDetails[acno]["balance"]
  
  
               }
               else{
              alert("incorrect password");
              return false;
              }
            }
        else {
                alert("Nosufficient balance")
              }
            }
 else {
    alert("invalid accnt number");
    return false;
  }
    
    
   

    

}
 


}
