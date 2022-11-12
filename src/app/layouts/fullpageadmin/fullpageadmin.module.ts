import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageAdminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminproductComponent } from 'src/app/modules/admin/adminproduct/adminproduct.component';



@NgModule({
  declarations: [
    FullpageAdminComponent,
    AdminComponent,
    AdminproductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class FullpageAdminModule { }
