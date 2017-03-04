import {Component} from "angular2/core";
import {PaperBack} from "../paper-back/paper-back.component";
import {WriteButton} from "../write-button/write-button.component";

@Component({
   selector: 'content-enter',
   templateUrl: './app/content-enter/content-enter.component.html',
   styleUrls: ['./app/content-enter/content-enter.component.css'],
   directives: [PaperBack, WriteButton]
})

export class ContentEnter {
  constructor() { }  

}