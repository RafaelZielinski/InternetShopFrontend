import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { AdminCategoryNameDto } from "../common/dto/adminCategoryNameDto";
import { FormCategoryService } from "./form-category.service";

@Component({
    selector: 'app-admin-product-form',
    template: `
    <div fxLayout="column" [formGroup]="parentForm">
      <mat-form-field appearance="fill">
        <mat-label>Nazwa</mat-label>
        <input matInput placeholder="Podaj nazwę produktu" formControlName="name">
        <div *ngIf="name?.invalid && (name?.dirty || name?.touched)">
            <div *ngIf="name?.errors?.['required']">
                Nazwa jest wymagana
            </div>
            <div *ngIf="name?.errors?.['minlength']">
                Minimalna długość to 4 znaki
            </div>
        </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>przyjazny url</mat-label>
        <input matInput placeholder="Podaj url" formControlName="slug">
        <div *ngIf="slug?.invalid && (slug?.dirty || slug?.touched)">
            <div *ngIf="slug?.errors?.['required']">
                Nazwa jest wymagana
            </div>
            <div *ngIf="slug?.errors?.['minlength']">
                Minimalna długość to 4 znaki
            </div>
        </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>Opis</mat-label>
        <textarea matInput rows="20" placeholder="Podaj opis produktu" formControlName="description"></textarea>
        <div *ngIf="description?.invalid && (description?.dirty || description?.touched)">
            <div *ngIf="description?.errors?.['required']">
                Opis jest wymagany
            </div>
            <div *ngIf="description?.errors?.['minlength']">
                Minimalna długość to 4 znaki
            </div>
        </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>Pełny opis</mat-label>
        <textarea matInput rows="40" placeholder="Podaj pełny
        opis produktu" formControlName="fullDescription"></textarea>
    </mat-form-field>


    <mat-form-field appearance="fill">
         <mat-label>Kategoria</mat-label>
         <mat-select formControlName="categoryId">
         <mat-option *ngFor="let el of categories" [value]="el.id">
            {{el.name}}
         </mat-option>
         </mat-select>
         <div *ngIf="categoryId?.invalid && (categoryId?.dirty || categoryId?.touched)" class="erroMessages">
            <div *ngIf="categoryId?.errors?.['required']">
                Kategoria jest wymagana
            </div>
        </div>
</mat-form-field>
   

    <mat-form-field appearance="fill">
        <mat-label>Cena</mat-label>
        <input matInput placeholder="Podaj cenę produktu" formControlName="price">
        <div *ngIf="price?.invalid && (price?.dirty || price?.touched)">
            <div *ngIf="price?.errors?.['required']">
                Cena jest wymagana
            </div>
            <div *ngIf="price?.errors?.['min']">
                Cena musi być powyżej 0
            </div>
        </div>
    </mat-form-field>

    <mat-form-field appearance="fill">
        <mat-label>Waluta</mat-label>
        <input matInput placeholder="Podaj walutę" formControlName="currency">
    </mat-form-field>

    <div fxLayoutAlign="end">
        <button [disabled]="!parentForm.valid"mat-flat-button color="primary" type="submit"  >Zapisz</button>
    </div>
    </div>`
})
export class AdminProductFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    constructor(private formCategoryService: FormCategoryService) { }

    categories: Array<AdminCategoryNameDto> = [];
    ngOnInit(): void {
        this.getCategories();
    }

    getCategories() {
        this.formCategoryService.getCategories()
            .subscribe(categories => this.categories = categories);
    }

    get name() {
        return this.parentForm.get("name");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get categoryId() {
        return this.parentForm.get("categoryId");
    }

    get price() {
        return this.parentForm.get("price");
    }

    get slug() {
        return this.parentForm.get("slug");
    }

    get fullDescription() {
        return this.parentForm.get("fullDescription");
    }


}