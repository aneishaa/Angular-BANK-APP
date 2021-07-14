import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  transaction:any;
  constructor(private ds:DataService,private router:Router) { 
    this.transaction = this.ds.getTransaction();
    console.log(this.transaction)
  }

  ngOnInit(): void {
  }
 dashboard(){
   this.router.navigateByUrl("dashboard")

 }
}
