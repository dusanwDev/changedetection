import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildLeftComponent } from './child-left.component';

describe('ChildLeftComponent', () => {
  let component: ChildLeftComponent;
  let fixture: ComponentFixture<ChildLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
