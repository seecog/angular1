/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormValidation2Component } from './form-validation-2.component';

describe('FormValidation2Component', () => {
  let component: FormValidation2Component;
  let fixture: ComponentFixture<FormValidation2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormValidation2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormValidation2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
