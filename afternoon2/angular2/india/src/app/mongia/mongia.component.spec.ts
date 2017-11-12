/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MongiaComponent } from './mongia.component';

describe('MongiaComponent', () => {
  let component: MongiaComponent;
  let fixture: ComponentFixture<MongiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
