import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GranateComponent } from './granate.component';

describe('GranateComponent', () => {
  let component: GranateComponent;
  let fixture: ComponentFixture<GranateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GranateComponent]
    });
    fixture = TestBed.createComponent(GranateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
