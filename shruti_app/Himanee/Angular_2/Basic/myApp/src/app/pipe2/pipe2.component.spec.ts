/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pipe2Component } from './pipe2.component';

describe('Pipe2Component', () => {
  let component: Pipe2Component;
  let fixture: ComponentFixture<Pipe2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pipe2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pipe2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
