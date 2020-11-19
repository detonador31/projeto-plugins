import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { Camera } from '@ionic-native/Camera/ngx';
import { File } from '@ionic-native/File/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { IonicStorageModule } from '@ionic/storage';

// Dependências para o SQlite
import { SQLite } from '@ionic-native/sqlite/ngx';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';

// Tudo isso pra usar valor monetário em reais!
import { BrMaskerModule } from 'br-mask';
import { DatePipe, CurrencyPipe, PercentPipe  } from '@angular/common';

import { LOCALE_ID } from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';
registerLocaleData(localePt, 'pt');

// Chats package
import 'chartjs-plugin-zoom';
import { HideHeaderDirective } from './directives/hide-header.directive';
import { FadeHeaderDirective } from './directives/fade-header.directive';
import { Geolocation } from '@ionic-native/geolocation/ngx';

// ngx-mask

@NgModule({
  declarations: [AppComponent, HideHeaderDirective, FadeHeaderDirective],
  entryComponents: [],
  imports: [BrowserModule,
            IonicModule.forRoot(),
            IonicStorageModule.forRoot(),
            AppRoutingModule,
            HttpClientModule,
           ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: LOCALE_ID, useValue: 'pt'},
    Camera,
    File,
    WebView,
    FilePath,
    SQLite,
    SQLitePorter,

    DatePipe,
    CurrencyPipe,
    PercentPipe,
    BrMaskerModule,
    Geolocation
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
