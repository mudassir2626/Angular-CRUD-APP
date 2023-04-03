import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StdAddEditComponent } from './std-add-edit.component';

describe('StdAddEditComponent', () => {
  let component: StdAddEditComponent;
  let fixture: ComponentFixture<StdAddEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StdAddEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StdAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
