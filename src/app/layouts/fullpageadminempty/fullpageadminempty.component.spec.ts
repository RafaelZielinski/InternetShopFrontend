import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FullpageAdminEmptyComponent } from './fullpageadminempty.component';



describe('FullpageAdminEmptyComponent', () => {
  let component: FullpageAdminEmptyComponent;
  let fixture: ComponentFixture<FullpageAdminEmptyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullpageAdminEmptyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullpageAdminEmptyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
