/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FormserviceComponent } from './formservice.component';

describe('FormserviceComponent', () => {
  let component: FormserviceComponent;
  let fixture: ComponentFixture<FormserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
