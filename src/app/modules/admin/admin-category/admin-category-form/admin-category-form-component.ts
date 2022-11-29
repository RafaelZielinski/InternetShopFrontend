import { Component, Input, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";


@Component({
    selector: 'app-admin-category-form',
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
        <textarea matInput rows="10" placeholder="Podaj opis produktu" formControlName="description"></textarea>
        <div *ngIf="description?.invalid && (description?.dirty || description?.touched)" class="errorMessages">
            <div *ngIf="description?.errors?.['required']">
                Opis jest wymagany
            </div>
            <div *ngIf="description?.errors?.['minlength']">
                Minimalna długość to 4 znaki
            </div>
        </div>
    </mat-form-field>

    <div fxLayoutAlign="end">
        <button [disabled]="!parentForm.valid"mat-flat-button color="primary" type="submit"  >Zapisz</button>
    </div>
    </div>`
})
export class AdminCategoryFormComponent implements OnInit {

    @Input() parentForm!: FormGroup;

    constructor() { }

    ngOnInit(): void {
       
    }

    get name() {
        return this.parentForm.get("name");
    }

    get description() {
        return this.parentForm.get("description");
    }

    get slug() {
        return this.parentForm.get("slug");
    }
}