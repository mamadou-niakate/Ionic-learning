import { Component } from '@angular/core';
import { NavController, NavParams,MenuController, ModalController,ViewController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private menuCtrl: MenuController,
              private viewCtrl: ViewController) {
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }
}
