/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpmoduleComponent } from './httpmodule.component';

describe('HttpmoduleComponent', () => {
  let component: HttpmoduleComponent;
  let fixture: ComponentFixture<HttpmoduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpmoduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpmoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
