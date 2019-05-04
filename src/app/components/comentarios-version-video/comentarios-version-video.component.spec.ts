import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariosVersionVideoComponent } from './comentarios-version-video.component';

describe('ComentariosVersionVideoComponent', () => {
  let component: ComentariosVersionVideoComponent;
  let fixture: ComponentFixture<ComentariosVersionVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComentariosVersionVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComentariosVersionVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
