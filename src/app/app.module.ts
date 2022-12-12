import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullpageModule } from './layouts/fullpage/fullpage.module';
import { FullpageAdminModule } from './layouts/fullpageadmin/fullpageadmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent
    
          ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DefaultModule,
    FullpageModule,
    FullpageAdminModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
