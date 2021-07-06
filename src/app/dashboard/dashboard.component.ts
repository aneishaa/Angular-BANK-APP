import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  cname =""
  accno =""
  amt=""
  cname1=""
  accno1 =""
  amt1 = ""
  constructor() { }

  ngOnInit(): void {
  }
  deposit(){
    alert("deposit")
  }
  withdraw(){
    alert("withdraw")
  }
}
