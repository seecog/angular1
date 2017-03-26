/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OutsideeraComponent } from './outsideera.component';

describe('OutsideeraComponent', () => {
  let component: OutsideeraComponent;
  let fixture: ComponentFixture<OutsideeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutsideeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutsideeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
