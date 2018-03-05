import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });   
    this.pages = [
      { title: 'Camera page', component: TabsControllerPage,index:0 },
      { title: 'Cloud page', component: TabsControllerPage,index:1 },
      { title: 'Cart page', component: TabsControllerPage,index:2 }
    ];
  }

   openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
     let params = {};
     if (page.index) {
      params = { tabIndex: page.index };
    }
    this.navCtrl.setRoot(page.component,params);
  }
}
