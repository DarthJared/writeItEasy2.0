import {Component, OnChanges} from "angular2/core";
import {ConfigOptionService} from "./../services/config-options.service";

@Component({
   selector: 'config-bar',
   providers: [ConfigOptionService],
   templateUrl: './app/config-bar/config-bar.component.html',
   styleUrls: ['./app/config-bar/config-bar.component.css']
})

export class ConfigBar implements OnChanges {
  sections: any = [];
  subsections: any = [];
  apaMla: string= "APA";

  paperSettings: any = {};

  constructor(private configOptions: ConfigOptionService) { 
    this.paperSettings = this.configOptions.paperSettings;
    // console.log("started");
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