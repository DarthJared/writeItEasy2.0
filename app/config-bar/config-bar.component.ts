import {Component, OnChanges, Output, EventEmitter} from "angular2/core";
import {ConfigOptionService} from "./../services/config-options.service";
import {FontsService} from "./../services/fonts.service";

@Component({
   selector: 'config-bar',
   providers: [ConfigOptionService, FontsService],
   templateUrl: './app/config-bar/config-bar.component.html',
   styleUrls: ['./app/config-bar/config-bar.component.css']
})

export class ConfigBar implements OnChanges {
  @Output() configObj: EventEmitter<string> = new EventEmitter<string>();
  sections: any = [];
  subsections: any = [];
  apaMla: string= "APA";

  paperSettings: any = {};

  constructor(private configOptions: ConfigOptionService, private fontsService: FontsService) { 
    this.paperSettings = this.configOptions.paperSettings;
    // console.log("started");
  }  

  correctEnabled(toCheck) {
    let correct = true;
    for (let i = 0; i < toCheck.length; i++) {
      if (!this.paperSettings[toCheck[i]]) {
        correct = false;
      }
    }
    return correct;
  }

  sendConfigObj() {
    this.configObj.emit(this.paperSettings);
  }

  radioUpdated(fieldName:string, value: any) {
    this.paperSettings[fieldName] = value.srcElement.checked;
  }

  ngOnChanges() {
    console.log("here");
  }

  addSection(sectionName: string) {
    console.log("here2");
    this.sections += sectionName; 
  }

  sectionIncluded(sectionName: string) {
    return this.sections.indexOf(sectionName) != -1;
  }

  addSubsection(sectionName: string) {
    this.subsections += sectionName; 
  }

  subsectionIncluded(sectionName: string) {
    return this.subsections.indexOf(sectionName) != -1;
  }
}