import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaPresupComponent } from './respuesta-presup.component';

describe('RespuestaPresupComponent', () => {
  let component: RespuestaPresupComponent;
  let fixture: ComponentFixture<RespuestaPresupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespuestaPresupComponent]
    });
    fixture = TestBed.createComponent(RespuestaPresupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
