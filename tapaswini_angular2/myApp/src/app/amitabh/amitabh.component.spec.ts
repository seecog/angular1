/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AmitabhComponent } from './amitabh.component';

describe('AmitabhComponent', () => {
  let component: AmitabhComponent;
  let fixture: ComponentFixture<AmitabhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmitabhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmitabhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
