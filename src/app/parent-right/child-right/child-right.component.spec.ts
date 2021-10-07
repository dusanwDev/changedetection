import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRightComponent } from './child-right.component';

describe('ChildRightComponent', () => {
  let component: ChildRightComponent;
  let fixture: ComponentFixture<ChildRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
