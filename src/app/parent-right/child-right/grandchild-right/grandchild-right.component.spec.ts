import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildRightComponent } from './grandchild-right.component';

describe('GrandchildRightComponent', () => {
  let component: GrandchildRightComponent;
  let fixture: ComponentFixture<GrandchildRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandchildRightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandchildRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
