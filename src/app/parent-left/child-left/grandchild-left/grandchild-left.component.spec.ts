import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandchildLeftComponent } from './grandchild-left.component';

describe('GrandchildLeftComponent', () => {
  let component: GrandchildLeftComponent;
  let fixture: ComponentFixture<GrandchildLeftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandchildLeftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandchildLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
