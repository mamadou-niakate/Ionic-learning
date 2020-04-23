import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { TaskService } from '../services/TaskService';
import { GroupComponent } from '../components/group/group';
import { SingleTaskPage } from '../pages/single-task/single-task';
import { PreferencesPage,  } from '../pages/settings/preferences/preferences';
import { NotificationsPage } from '../pages/settings/notifications/notifications';
import { AboutPage } from '../pages/settings/about/about';
import { ProfilPage } from '../pages/settings/profil/profil';
import { ThemeSwitcherService } from '../services/ThemeSwitcherService';

@NgModule({
  declarations: [
    MyApp,
    GroupComponent,
    SingleTaskPage,
    PreferencesPage,
    NotificationsPage,
    AboutPage,
    ProfilPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GroupComponent,
    SingleTaskPage,
    PreferencesPage,
    NotificationsPage,
    AboutPage,
    ProfilPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    TaskService,
    ThemeSwitcherService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
