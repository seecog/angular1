/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CheckserviceComponent } from './checkservice.component';

describe('CheckserviceComponent', () => {
  let component: CheckserviceComponent;
  let fixture: ComponentFixture<CheckserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
