/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HttpexComponent } from './httpex.component';

describe('HttpexComponent', () => {
  let component: HttpexComponent;
  let fixture: ComponentFixture<HttpexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
