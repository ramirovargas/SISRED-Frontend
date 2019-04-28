import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarRecursoComponent } from './buscar-recurso.component';

describe('BuscarRecursoComponent', () => {
  let component: BuscarRecursoComponent;
  let fixture: ComponentFixture<BuscarRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
