/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FruitshopComponent } from './fruitshop.component';

describe('FruitshopComponent', () => {
  let component: FruitshopComponent;
  let fixture: ComponentFixture<FruitshopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitshopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
