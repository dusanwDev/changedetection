import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentRightComponent } from './parent-right.component';

describe('ParentRightComponent', () => {
  let component: ParentRightComponent;
  let fixture: ComponentFixture<ParentRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
