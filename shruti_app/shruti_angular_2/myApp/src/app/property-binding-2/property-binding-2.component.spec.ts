/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PropertyBinding2Component } from './property-binding-2.component';

describe('PropertyBinding2Component', () => {
  let component: PropertyBinding2Component;
  let fixture: ComponentFixture<PropertyBinding2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyBinding2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyBinding2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
