import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirREDComponent } from './subir-red.component';

describe('SubirREDComponent', () => {
  let component: SubirREDComponent;
  let fixture: ComponentFixture<SubirREDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirREDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirREDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
