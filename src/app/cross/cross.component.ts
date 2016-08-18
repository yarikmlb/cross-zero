import { Component, OnInit } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cross',
  templateUrl: 'cross.component.html',
  styleUrls: ['cross.component.css']
})
export class Cross implements OnInit {
  @Input()
  public color:string;
  public sign: string;



  constructor() {

  // this.color = 'black';
  this.sign = '';
   }

  ngOnInit() {
  }

  changeSign(){
    //var signs = ['X', '0'];
    //this.sign = signs[Math.floor(Math.random() * signs.length)];
    if (this.sign === ''){
      this.sign = 'X';
    }else if(this.sign === 'X'){
      this.sign = 'Y';
    }else  if (this.sign ==='Y'){
      this.sign = '';
    }
  }

}








