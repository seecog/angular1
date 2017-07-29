/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SohanComponent } from './sohan.component';

describe('SohanComponent', () => {
  let component: SohanComponent;
  let fixture: ComponentFixture<SohanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SohanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
