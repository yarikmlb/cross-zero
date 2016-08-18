import { Component } from '@angular/core';
import {Cross} from './cross';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [Cross]
})
export class AppComponent {
  //title = 'app works! HELLO';
  name: string;
  public color:string;
  public circleColor:string;
  public triangleColor:string;
  public list: number[];

  constructor() {
    //this.name = 'World';
    //this.color = 'green';
    //this.circleColor = 'yellow';
    this.list = [1,2,3,4,5,6,7,8,9];
  }


}










