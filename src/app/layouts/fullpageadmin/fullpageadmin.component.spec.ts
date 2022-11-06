import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullpageAdminComponent } from './fullpage-admin.component';

describe('FullpageAdminComponent', () => {
  let component: FullpageAdminComponent;
  let fixture: ComponentFixture<FullpageAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullpageAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullpageAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
