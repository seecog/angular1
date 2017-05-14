/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TemplateValidation21stAprilComponent } from './template-validation-21st-april.component';

describe('TemplateValidation21stAprilComponent', () => {
  let component: TemplateValidation21stAprilComponent;
  let fixture: ComponentFixture<TemplateValidation21stAprilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateValidation21stAprilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateValidation21stAprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
