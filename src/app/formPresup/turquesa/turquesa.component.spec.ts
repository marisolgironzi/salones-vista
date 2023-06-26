import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurquesaComponent } from './turquesa.component';

describe('TurquesaComponent', () => {
  let component: TurquesaComponent;
  let fixture: ComponentFixture<TurquesaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TurquesaComponent]
    });
    fixture = TestBed.createComponent(TurquesaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
