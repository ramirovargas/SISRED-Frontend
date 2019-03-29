import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvanceProyectoConectateComponent } from './avance-proyecto-conectate.component';

describe('AvanceProyectoConectateComponent', () => {
  let component: AvanceProyectoConectateComponent;
  let fixture: ComponentFixture<AvanceProyectoConectateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvanceProyectoConectateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvanceProyectoConectateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
