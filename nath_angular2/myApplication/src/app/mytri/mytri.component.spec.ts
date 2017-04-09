/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MytriComponent } from './mytri.component';

describe('MytriComponent', () => {
  let component: MytriComponent;
  let fixture: ComponentFixture<MytriComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MytriComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MytriComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
