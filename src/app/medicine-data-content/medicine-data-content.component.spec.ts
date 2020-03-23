import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineDataContentComponent } from './medicine-data-content.component';

describe('MedicineDataContentComponent', () => {
  let component: MedicineDataContentComponent;
  let fixture: ComponentFixture<MedicineDataContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineDataContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineDataContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
