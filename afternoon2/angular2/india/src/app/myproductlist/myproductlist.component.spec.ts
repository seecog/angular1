/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MyproductlistComponent } from './myproductlist.component';

describe('MyproductlistComponent', () => {
  let component: MyproductlistComponent;
  let fixture: ComponentFixture<MyproductlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyproductlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
