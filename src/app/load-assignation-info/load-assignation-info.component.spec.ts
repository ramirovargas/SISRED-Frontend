import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAssignationInfoComponent } from './load-assignation-info.component';

describe('LoadAssignationInfoComponent', () => {
  let component: LoadAssignationInfoComponent;
  let fixture: ComponentFixture<LoadAssignationInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadAssignationInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAssignationInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
