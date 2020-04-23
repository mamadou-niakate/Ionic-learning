import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { ThemeSwitcherService } from '../../../services/ThemeSwitcherService';

@Component({
  selector: 'page-preferences',
  templateUrl: 'preferences.html',
})
export class PreferencesPage {
  selectedTheme: String;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private viewCtrl: ViewController,
              private themeSwitcherService: ThemeSwitcherService) {
    this.themeSwitcherService.getActiveTheme().subscribe(val => this.selectedTheme = val);

  }

 
  toDarkTheme() {
    this.themeSwitcherService.setActiveTheme('dark-theme');
  }

  toLightTheme(){
    this.themeSwitcherService.setActiveTheme('light-theme');
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

}
