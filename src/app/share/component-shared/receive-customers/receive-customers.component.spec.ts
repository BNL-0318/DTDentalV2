import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCustomersComponent } from './receive-customers.component';

describe('ReceiveCustomersComponent', () => {
  let component: ReceiveCustomersComponent;
  let fixture: ComponentFixture<ReceiveCustomersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceiveCustomersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiveCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
