import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudDeviceComponent } from './crud-device.component';

describe('CrudDeviceComponent', () => {
  let component: CrudDeviceComponent;
  let fixture: ComponentFixture<CrudDeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudDeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudDeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
