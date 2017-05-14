/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MicrovanComponent } from './microvan.component';

describe('MicrovanComponent', () => {
  let component: MicrovanComponent;
  let fixture: ComponentFixture<MicrovanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MicrovanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrovanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
