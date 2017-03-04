import {Component} from "angular2/core";

@Component({
   selector: 'write-button',
   templateUrl: './app/write-button/write-button.component.html',
   styleUrls: ['./app/write-button/write-button.component.css']
})

export class WriteButton {
  constructor() { }  
  optionsOpen = false;
  
  showOptions() {
    this.optionsOpen = !this.optionsOpen;
  }

  hideOptions() {
    this.optionsOpen = false;
  }

  addSection() {
    this.optionsOpen = false;
  }

  addSubsection() {
    this.optionsOpen = false;
  }

  addSubsubsection() {
    this.optionsOpen = false;
  }

  writeIt() {
    this.optionsOpen = false;
  }

}