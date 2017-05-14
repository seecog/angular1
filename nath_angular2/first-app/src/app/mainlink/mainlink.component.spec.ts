/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MainlinkComponent } from './mainlink.component';

describe('MainlinkComponent', () => {
  let component: MainlinkComponent;
  let fixture: ComponentFixture<MainlinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainlinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
