import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { CategoryService } from './category.service';

import { Subscription } from 'rxjs';  
import { filter, map } from 'rxjs/operators';
import { CategoryProducts } from './model/categoryProducts';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  categoryProducts!: CategoryProducts;
  private sub!: Subscription;

  constructor(private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
  
    this.sub = this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => this.getCategoryWithProducts(0, 10));

    this.getCategoryWithProducts(0, 10);
  }

  
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  getCategoryWithProducts(page: number, size: number) {
    let slug = this.route.snapshot.params['slug'];
    this.categoryService.getCategoryWithProducts(slug, page, size)
      .subscribe(categoryProducts => this.categoryProducts = categoryProducts);
  }
  
  

  onPageEvent(event: PageEvent) {
    this.getCategoryWithProducts(event.pageIndex, event.pageSize);
  }
}
