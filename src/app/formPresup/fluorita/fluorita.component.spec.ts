import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluoritaComponent } from './fluorita.component';

describe('FluoritaComponent', () => {
  let component: FluoritaComponent;
  let fixture: ComponentFixture<FluoritaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FluoritaComponent]
    });
    fixture = TestBed.createComponent(FluoritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
