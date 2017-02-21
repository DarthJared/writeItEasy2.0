import {Component} from "angular2/core";
import {FontsService} from "./../services/fonts.service";

@Component({
   selector: 'format-bar',
   providers: [FontsService],
   templateUrl: './app/format-bar/format-bar.component.html',
   styleUrls: ['./app/format-bar/format-bar.component.css']
})

export class FormatBar {
  constructor(private fontsService: FontsService) { }  
  bold: boolean = false;
  italic: boolean = false;
  underline: boolean = false;

  setBold() {
    this.bold = !this.bold;
  }

  setItalic() {
    this.italic = !this.italic;
  }

  setUnderline() {
    this.underline = !this.underline;
  }

  isBold() {

  }

  isItalic() {

  }

  isUnderlined() {

  }
}