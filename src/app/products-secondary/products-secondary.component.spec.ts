import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsSecondaryComponent } from './products-secondary.component';

describe('ProductsSecondaryComponent', () => {
  let component: ProductsSecondaryComponent;
  let fixture: ComponentFixture<ProductsSecondaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsSecondaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
