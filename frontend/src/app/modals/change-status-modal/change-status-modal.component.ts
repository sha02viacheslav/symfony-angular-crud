import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-status-modal',
  templateUrl: './change-status-modal.component.html',
  styleUrls: ['./change-status-modal.component.css']
})
export class ChangeStatusModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() changeData;
  @Output() changeStatusConfirmed=new EventEmitter();

  changeConfirm(){  
    this.changeStatusConfirmed.emit(this.changeData);
  }

}
