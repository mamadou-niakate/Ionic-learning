import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { GroupComponent } from '../components/group/group';
import { PreferencesPage,  } from '../pages/settings/preferences/preferences';
import { NotificationsPage } from '../pages/settings/notifications/notifications';
import { AboutPage } from '../pages/settings/about/about';
import { ProfilPage } from '../pages/settings/profil/profil';
import { ThemeSwitcherService } from '../services/ThemeSwitcherService';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  rootPage: any = GroupComponent;
  preferencesPage: any = PreferencesPage;
  notificationsPage: any = NotificationsPage;
  aboutPage: any = AboutPage;
  profilPage: any = ProfilPage;

  selectedTheme: String;
  constructor(platform: Platform, statusBar: StatusBar,splashScreen: SplashScreen,
              private menuCtrl: MenuController, private modelCtrl: ModalController,
              public themeSwitcher: ThemeSwitcherService) {
    
    this.themeSwitcher.getActiveTheme().subscribe(val => this.selectedTheme = val);
    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onNavigate(page: any){
    const modal = this.modelCtrl.create(page);
    modal.present();
    this.menuCtrl.close();
  }

}

