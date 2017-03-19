/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SachinComponent } from './sachin.component';

describe('SachinComponent', () => {
  let component: SachinComponent;
  let fixture: ComponentFixture<SachinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SachinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SachinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
