import {Component, Input} from "angular2/core";

@Component({
   selector: 'paper-back',
   templateUrl: './app/paper-back/paper-back.component.html',
   styleUrls: ['./app/paper-back/paper-back.component.css']
})

export class PaperBack {
  constructor() { }  
  @Input() content;
}