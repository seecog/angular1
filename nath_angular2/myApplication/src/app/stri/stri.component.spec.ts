/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { StriComponent } from './stri.component';

describe('StriComponent', () => {
  let component: StriComponent;
  let fixture: ComponentFixture<StriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
