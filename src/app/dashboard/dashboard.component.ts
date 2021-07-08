import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  // cname =""
  accno =""
  amt=""
  pswd =""
  // cname1=""
  accno1 =""
  amt1 = ""
  pswd1 =""
  constructor(private ds:DataService) { }
  ngOnInit(): void {
  }
  deposit(){
    var acno = this.accno
    var amt = this.amt
    var pwd = this.pswd
    var result =this.ds.deposit(acno,pwd,amt)
    if(result){
      alert(amt+"Deposited succesfully and new balance is "+result)
    }
  }

  
  withdraw(){
    var acno = this.accno1
    var amt = this.amt1
    var pwd = this.pswd1
    var result =this.ds.withdraw(acno,pwd,amt)
    if(result){
      alert(amt+"Withdrawn  succesfully and new balance is "+result)
    }
  }
}
