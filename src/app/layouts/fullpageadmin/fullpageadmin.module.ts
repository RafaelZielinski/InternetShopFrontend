import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageAdminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    FullpageAdminComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class FullpageAdminModule { }
