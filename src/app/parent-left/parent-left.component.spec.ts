import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentLeftComponent } from './parent-left.component';

describe('ParentLeftComponent', () => {
  let component: ParentLeftComponent;
  let fixture: ComponentFixture<ParentLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
