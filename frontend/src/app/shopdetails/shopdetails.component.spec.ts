import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopdetailsComponent } from './shopdetails.component';

describe('ShopdetailsComponent', () => {
  let component: ShopdetailsComponent;
  let fixture: ComponentFixture<ShopdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
