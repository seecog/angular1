/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CalctestComponent } from './calctest.component';

describe('CalctestComponent', () => {
  let component: CalctestComponent;
  let fixture: ComponentFixture<CalctestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalctestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalctestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
