import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespuestaContactoComponent } from './respuesta-contacto.component';

describe('RespuestaContactoComponent', () => {
  let component: RespuestaContactoComponent;
  let fixture: ComponentFixture<RespuestaContactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RespuestaContactoComponent]
    });
    fixture = TestBed.createComponent(RespuestaContactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
