import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { AgregarRecursoComponent } from './agregar-recurso.component';
import { AgregarRecursoClientService } from '../services/agregar-recurso-client.service';


describe('AgregarRecursoComponent', () => {
  let component: AgregarRecursoComponent;
  let fixture: ComponentFixture<AgregarRecursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule, FormsModule],
      providers: [AgregarRecursoClientService],
      declarations: [ AgregarRecursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarRecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
