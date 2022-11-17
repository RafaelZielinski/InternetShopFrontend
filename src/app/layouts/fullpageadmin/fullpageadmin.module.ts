import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullpageAdminComponent } from './fullpageadmin.component';
import { AdminComponent } from 'src/app/modules/admin/admin.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/shared/material.module';
import { AdminproductComponent } from 'src/app/modules/admin/adminproduct/adminproduct.component';
import { AdminProductUpdateComponent } from 'src/app/modules/admin/admin-product-update/admin-product-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminProductAddComponent } from 'src/app/modules/admin/admin-product-add/admin-product-add.component';
import { AdminProductFormComponent } from 'src/app/modules/admin/admin-product-form/admin-product-form.component';
import { AdminConfirmDialogComponent } from 'src/app/modules/admin/admin-confirm-dialog/admin-confirm-dialog.component';
import { AdminMessageComponent } from 'src/app/modules/admin/admin-message/admin-message.component';



@NgModule({
  declarations: [
    FullpageAdminComponent,
    AdminComponent,
    AdminproductComponent,
    AdminProductUpdateComponent,
    AdminProductAddComponent,
    AdminProductFormComponent,
    AdminConfirmDialogComponent,
    AdminMessageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class FullpageAdminModule { }
