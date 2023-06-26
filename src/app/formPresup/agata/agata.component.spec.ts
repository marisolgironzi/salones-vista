import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgataComponent } from './agata.component';

describe('AgataComponent', () => {
  let component: AgataComponent;
  let fixture: ComponentFixture<AgataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgataComponent]
    });
    fixture = TestBed.createComponent(AgataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
