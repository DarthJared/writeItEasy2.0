import {Component, View} from "angular2/core";
import {PaperBack} from "../paper-back/paper-back.component";

@Component({
   selector: 'content-enter',
   templateUrl: './app/content-enter/content-enter.component.html',
   styleUrls: ['./app/content-enter/content-enter.component.css'],
   directives: [PaperBack]
})

export class ContentEnter {
  constructor() { }  

}