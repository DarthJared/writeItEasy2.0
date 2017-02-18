import {Component} from "angular2/core";
import {ConfigOptionService} from "./../services/config-options.service";

@Component({
   selector: 'config-bar',
   providers: [ConfigOptionService],
   templateUrl: './app/config-bar/config-bar.component.html',
   styleUrls: ['./app/config-bar/config-bar.component.css']
})

export class ConfigBar {
  constructor(private configOptions: ConfigOptionService) { 
    console.log("started");
  }  

}