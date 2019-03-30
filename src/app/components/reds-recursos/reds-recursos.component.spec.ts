import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedsRecursosComponent } from './reds-recursos.component';

describe('RedsRecursosComponent', () => {
  let component: RedsRecursosComponent;
  let fixture: ComponentFixture<RedsRecursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedsRecursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedsRecursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
