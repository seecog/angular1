/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AcComponent } from './ac.component';

describe('AcComponent', () => {
  let component: AcComponent;
  let fixture: ComponentFixture<AcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
