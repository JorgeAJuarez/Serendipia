import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BigCalltoActionComponent } from './big-callto-action.component';

describe('BigCalltoActionComponent', () => {
  let component: BigCalltoActionComponent;
  let fixture: ComponentFixture<BigCalltoActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BigCalltoActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BigCalltoActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
