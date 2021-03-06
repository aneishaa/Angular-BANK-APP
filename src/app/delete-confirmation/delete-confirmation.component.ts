import { Component, Input, OnInit,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  @Input() item!:string |null;
  @Output() onDelete = new EventEmitter
  @Output() onCancel = new EventEmitter
  constructor() { }

  ngOnInit(): void {
  }
  delete(){
    this.onDelete.emit(this.item)
  }
  cancel(){
    this.onCancel.emit()

  }

}
