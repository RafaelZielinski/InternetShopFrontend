import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTable } from '@angular/material/table';
import { map, startWith, switchMap } from 'rxjs';
import { AdminConfirmDialogService } from '../admin-confirm-dialog/admin-confirm-dialog.service';
import { AdminProductService } from './admin-product.service';
import { AdminProduct } from './adminProduct';

@Component({
  selector: 'app-adminproduct',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./adminproduct.component.scss']
})
export class AdminproductComponent implements AfterViewInit {

  //dataSource: AdminProduct[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ["image", "id", "name", "price", "actions"];
  totalElements: number = 0;
  dataSource: AdminProduct[] = [];
  



  constructor(private adminProductService: AdminProductService,
    private dialogService: AdminConfirmDialogService) { }

  ngAfterViewInit(): void {
    this.paginator.page.pipe(
      startWith({}),
      switchMap(() => {
        return this.adminProductService.getProducts(this.paginator.pageIndex, this.paginator.pageSize);
      })
    ).subscribe(data => {
      this.totalElements = data.totalElements;
      this.dataSource = data.content;
    });
  }

  confirmDelete(element: AdminProduct) {
    this.dialogService.openConfirmDialog("Czy napewno chcesz usunąć")
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.adminProductService.delete(element.id)
            .subscribe(() => {
              this.dataSource.forEach((value, index) => {
                if (element == value) {
                  this.dataSource.splice(index, 1);
                  this.table.renderRows();
                }
              })
            });
        }
      });
  }
}




