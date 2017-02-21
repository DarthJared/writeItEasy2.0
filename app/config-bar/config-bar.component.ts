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

  constructor(private configOptions: ConfigOptionService) { 
    // console.log("started");
  }  

  ngOnChanges() {

  }

  addSection(sectionName: string) {
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