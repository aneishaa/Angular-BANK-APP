import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  users:any = {
    1000: { acno: 1000, username: "userone", password: "userone", actype: "savings", balance: 5000 },
    1001: { acno: 1001, username: "usertwo", password: "usertwo", actype: "savings", balance: 6000 },
    1002: { acno: 1002, username: "userthree", password: "userthree", actype: "savings", balance: 7000 },
    1003: { acno: 1003, username: "userfour", password: "userfour", actype: "savings", balance: 8000 }

}

  constructor() { }
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
        balance:0
      

    }
    return true;

    }
  }
   login(acno:any,pwd:any){
     let accDetails = this.users;
     if (acno in accDetails){
       if (pwd==accDetails[acno]["password"]){
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
