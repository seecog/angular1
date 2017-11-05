/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { User2Component } from './user2.component';

describe('User2Component', () => {
  let component: User2Component;
  let fixture: ComponentFixture<User2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ User2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(User2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
