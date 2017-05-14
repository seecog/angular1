/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormValidation1Component } from './form-validation-1.component';

describe('FormValidation1Component', () => {
  let component: FormValidation1Component;
  let fixture: ComponentFixture<FormValidation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
