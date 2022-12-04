import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { AdminConfirmDialogService } from '../common/service/admin-confirm-dialog.service';
import { AdminReviewService } from './admin-review.service';
import { AdminReview } from './model/AdminReview';

@Component({
  selector: 'app-admin-review',
  templateUrl: './admin-review.component.html',
  styleUrls: ['./admin-review.component.scss']
})
export class AdminReviewComponent implements OnInit {

  @ViewChild(MatTable) table!: MatTable<any>;
  displayedColumns: string[] = ["authorName", "content", "moderated",
    "actions"];
  data: AdminReview[] = [];

  constructor(private adminReviewService: AdminReviewService,
    private dialogService: AdminConfirmDialogService
  ) { }

  ngOnInit(): void {
    this.getReview();
  }
  getReview() {
    this.adminReviewService.getReviews()
      .subscribe(reviews => this.data = reviews);
  }

  confirmDelete(element: AdminReview) {
    this.dialogService.openConfirmDialog('Czy chcesz usunąć tę opinię ? ')
        .afterClosed()
        .subscribe(result => {
          if (result) {
            this.adminReviewService.delete(element.id).subscribe(() => {
              this.data.forEach((value, index) => {
                if (element === value) {
                  this.data.splice(index, 1);
                  this.table.renderRows();
                }
              });
            });
          }
        });

  }

  confirmModerate(element: AdminReview) {

    this.dialogService.openConfirmDialog('Czy chcesz zatwierdzić opinię?')
      .afterClosed()
      .subscribe(result => {
        if (result) {
          this.adminReviewService.moderate(element.id).subscribe(() => {
            this.data.forEach((value, index) => {
              if (element === value) {
                element.moderated = true;
              }
            });
          });
        }
      });
  }
}
