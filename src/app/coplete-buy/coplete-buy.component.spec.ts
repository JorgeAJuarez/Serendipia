import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopleteBuyComponent } from './coplete-buy.component';

describe('CopleteBuyComponent', () => {
  let component: CopleteBuyComponent;
  let fixture: ComponentFixture<CopleteBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CopleteBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopleteBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
