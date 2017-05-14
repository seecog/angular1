/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutinputComponent } from './outinput.component';

describe('OutinputComponent', () => {
  let component: OutinputComponent;
  let fixture: ComponentFixture<OutinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
