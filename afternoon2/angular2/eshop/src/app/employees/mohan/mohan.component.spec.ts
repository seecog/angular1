/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MohanComponent } from './mohan.component';

describe('MohanComponent', () => {
  let component: MohanComponent;
  let fixture: ComponentFixture<MohanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MohanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MohanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
