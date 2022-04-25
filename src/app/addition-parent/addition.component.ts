import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {


  firstnum!: string;
  secondnum!: string;
  result!: number;

  constructor() { }

  ngOnInit(): void {
  }
  addNum() {
    this.result = parseInt(this.firstnum)+parseInt(this.secondnum);
  
  }
}
