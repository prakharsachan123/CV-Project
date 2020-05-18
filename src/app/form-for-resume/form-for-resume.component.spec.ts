import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormForResumeComponent } from './form-for-resume.component';

describe('FormForResumeComponent', () => {
  let component: FormForResumeComponent;
  let fixture: ComponentFixture<FormForResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormForResumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormForResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
