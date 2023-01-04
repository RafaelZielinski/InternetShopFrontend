import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { FullpageModule } from './layouts/fullpage/fullpage.module';
import { FullpageAdminModule } from './layouts/fullpageadmin/fullpageadmin.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FullpageAdminEmptyModule } from './layouts/fullpageadminempty/fullpageadminempty.module';
import { JwtInterceptor } from './modules/admin/common/interceptor/jwt.interceptor';
import { AdminAuthorizedGuard } from './modules/common/guard/adminAuthorizeGuard';




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
    FullpageAdminEmptyModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService,
  {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
  AdminAuthorizedGuard
],
  bootstrap: [AppComponent]
})
export class AppModule { }
