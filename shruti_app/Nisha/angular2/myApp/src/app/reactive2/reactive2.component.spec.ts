/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Reactive2Component } from './reactive2.component';

describe('Reactive2Component', () => {
  let component: Reactive2Component;
  let fixture: ComponentFixture<Reactive2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reactive2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reactive2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
